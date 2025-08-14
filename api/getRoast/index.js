const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const { selectedTeams, avgRating, selectedItems } = req.body;

    // Log the incoming data to see what we're receiving
    context.log('Received selectedTeams:', selectedTeams);
    context.log('Received avgRating:', avgRating);
    context.log('Received selectedItems:', selectedItems);

    const teamNames = selectedTeams || [];
    const teamSet = new Set(teamNames);

    // Log the generated teamSet
    context.log('Generated teamSet:', teamSet);

    let roast = "";
    let isSpecialCase = false;

    // Helper to check for Louisville in any college category
    function hasLouisvilleCollege(items) {
        return items.some(sel =>
            ((sel.item === "Louisville (CBK)" && sel.category === "CBK") ||
             (sel.item === "Louisville (CFB)" && sel.category === "CFB") ||
             (sel.item === "Louisville (CBB)" && sel.category === "CBB"))
        );
    }

    // Special case logic
    let specialTeamsJosh = ["Oklahoma City Thunder", "Pittsburgh Steelers", "FC Cincinnati", "Manchester City"];
    let isJosh = specialTeamsJosh.every(team => selectedTeams.includes(team)) && hasLouisvilleCollege(selectedItems) && selectedTeams.length === 5;

    let specialTeamsNick = ["Pittsburgh Steelers", "Chicago Cubs", "Chicago Blackhawks", "Indiana Pacers", "Arsenal"];
    let isNick = specialTeamsNick.every(team => selectedTeams.includes(team)) && hasLouisvilleCollege(selectedItems) && selectedTeams.length === 6;

    let specialTeamsDalton = ["Los Angeles Chargers", "Chicago Bulls", "Cincinnati Reds", "Everton"];
    let isDalton = specialTeamsDalton.every(team => selectedTeams.includes(team)) && hasLouisvilleCollege(selectedItems) && selectedTeams.length === 5;

    let specialTeamsBraden = ["Cincinnati Bengals", "Cincinnati Reds", "FC Cincinnati"];
    let isBraden = specialTeamsBraden.every(team => selectedTeams.includes(team)) && hasLouisvilleCollege(selectedItems) && selectedTeams.length === 4;

    let isJakeKehoe = selectedItems.length === 1 && selectedItems[0].item === "Louisville (CFB)" && selectedItems[0].category === "CFB";

    let systemPrompt = "";
    if (isJosh) {
        context.log("Josh's special case triggered.");
        isSpecialCase = true;
        systemPrompt += `If the selected teams are Oklahoma City Thunder, Pittsburgh Steelers, FC Cincinnati, and Manchester City, insult Josh Johnson directly in the roast. Make it personal, clever, and brutal.\n`;
    }
    if (isNick) {
        context.log("Nick's special case triggered.");
        isSpecialCase = true;
        systemPrompt += `If the selected teams are Pittsburgh Steelers, Chicago Cubs, Chicago Blackhawks, Indiana Pacers, and Arsenal, address Nick Leming by name and roast him directly. Make the roast unmistakably personal, clever, and brutal—focus on Nick Leming, not just the teams.\n`;
    }
    if (isDalton) {
        context.log("Dalton's special case triggered.");
        isSpecialCase = true;
        systemPrompt += `If the selected teams are Los Angeles Chargers, Chicago Bulls, Cincinnati Reds, Everton, and Louisville (in any college category), address Dalton Pirtle by name and roast him directly. Make the roast unmistakably personal, clever, and brutal—focus on Dalton Pirtle, not just the teams.\n`;
    }
    if (isBraden) {
        context.log("Braden's special case triggered.");
        isSpecialCase = true;
        systemPrompt += `If the selected teams are Cincinnati Bengals, Cincinnati Reds, FC Cincinnati, and Louisville (in any college category), address Braden Mulcahy by name and roast him directly. Make the roast unmistakably personal, clever, and brutal—focus on Braden Mulcahy, not just the teams.\n`;
    }
    if (isJakeKehoe) {
        context.log("Jake's special case triggered.");
        isSpecialCase = true;
        systemPrompt += `If the only team selected is Louisville in college football (CFB), address Jake Kehoe by name and roast him directly. Make the roast unmistakably personal, clever, and brutal—focus on Jake Kehoe, not just the team.\n`;
    }

    systemPrompt += `You are the voice of a “Sports Misery Indicator.”\nPersona: razor-witted sports historian with a grudge, equal parts sports-bar sarcasm and dramatic sportswriter flair.\nStyle: short, punchy, quotable. 1–2 sentences max.\nAllowed: mild profanity and sharp snark; no slurs or hate speech.\nMake it personal:\n- Reference infamous championship losses, long droughts, playoff chokes, or humiliating moments specific to the teams.\n- Twist the knife, but keep it clever—never just list stats without punch.\n- Always react to the misery score (1=ecstatic, 100=utter despair).\nNever invent fictional championships; rely on known or plausible sports history.\nReturn only the roast—no explanations or setup.\n\nTone guide:\n- 1–15: smug optimism, gentle ribbing, hinting at past pain but focusing on the rare bright spots.\n- 16–40: dry sarcasm, slip in a sly reminder of a collapse.\n- 41–65: confident roast, highlight at least one big postseason failure.\n- 66–85: bleak humor; call back to gut-punch games or lost championships.\n- 86–100: full gallows humor; hammer their longest droughts and most cursed moments.\n\nRules:\n- 1–2 sentences, 20–45 words.\n- Always name at least one team.\n- If PROFANITY_LEVEL ≥ 2, you may use one spicy word for emphasis (no slurs).\n- If multiple teams, connect their miseries (e.g., “combined decades without…”).\n- Make history sound personal, like you’re talking to a lifelong fan nursing old wounds.\n- Do NOT explicitly start with 'Oh, [team] fans' or similar; make the roast fluid and natural.`;
    
    const userPrompt = `Misery Score: ${avgRating}. Teams: ${selectedTeams.join(", ")}.`;

    const body = {
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ],
        max_tokens: 100
    };

    if (isSpecialCase) {
        context.res = {
            headers: { 'Content-Type': 'application/json' },
            body: { roast }
        };
        return;
    }

    // If not a special case, proceed with OpenAI call
    context.log("No special case triggered, proceeding with OpenAI call.");
    const openAIKey = process.env.OPENAI_API_KEY;
    if (!openAIKey) {
        context.log.error("OpenAI API key is not set.");
        context.res = {
            status: 500,
            body: "OpenAI API key is not set."
        };
        return;
    }

    try {
        const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${openAIKey}`
            },
            body: JSON.stringify(body)
        });

        if (!openAIResponse.ok) {
            const errorBody = await openAIResponse.text();
            context.log.error("OpenAI API error:", openAIResponse.status, errorBody);
            context.res = {
                status: 500,
                body: "Error from OpenAI API."
            };
            return;
        }

        const openAIData = await openAIResponse.json();
        context.log("Received response from OpenAI.");
        roast = openAIData.choices[0].message.content;

    } catch (error) {
        context.log.error("Error calling OpenAI:", error);
        context.res = {
            status: 500,
            body: "Failed to get response from OpenAI."
        };
        return;
    }

    context.res = {
        headers: { 'Content-Type': 'application/json' },
        body: { roast }
    };
};
