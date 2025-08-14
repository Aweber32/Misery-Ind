// NBA team ratings based on last 10 years' success (1 = best, 100 = worst)
const nbaRatings = {
    "Atlanta Hawks": 60, // Playoff regular, no deep runs
    "Boston Celtics": 12, // Finals appearances, strong regular seasons
    "Brooklyn Nets": 55, // Playoff appearances, no Finals
    "Charlotte Hornets": 95, // No playoff success
    "Chicago Bulls": 70, // Few playoff appearances, no deep runs
    "Cleveland Cavaliers": 25, // LeBron era Finals, then rebuild
    "Dallas Mavericks": 38, // Playoff regular, one deep run
    "Denver Nuggets": 15, // Recent Finals win, strong regular seasons
    "Detroit Pistons": 100, // No playoff success, frequent bottom
    "Golden State Warriors": 8, // Multiple championships
    "Houston Rockets": 80, // Playoff appearances, no deep runs, recent rebuild
    "Indiana Pacers": 65, // Playoff appearances, no deep runs
    "Los Angeles Clippers": 40, // Playoff regular, no Finals
    "Los Angeles Lakers": 18, // Championship, playoff appearances
    "Memphis Grizzlies": 35, // Playoff regular, one deep run
    "Miami Heat": 20, // Finals appearances, playoff regular
    "Milwaukee Bucks": 14, // Championship, playoff regular
    "Minnesota Timberwolves": 75, // Few playoff appearances
    "New Orleans Pelicans": 68, // Few playoff appearances
    "New York Knicks": 50, // Playoff appearances, no deep runs
    "Oklahoma City Thunder": 45, // Playoff regular, rebuild years
    "Orlando Magic": 90, // Few playoff appearances
    "Philadelphia 76ers": 28, // Playoff regular, no Finals
    "Phoenix Suns": 30, // Finals appearance, playoff regular
    "Portland Trail Blazers": 58, // Playoff regular, no deep runs
    "Sacramento Kings": 52, // Recent playoff return, long drought
    "San Antonio Spurs": 85, // End of dynasty, recent rebuild
    "Toronto Raptors": 22, // Championship, playoff regular
    "Utah Jazz": 42, // Playoff regular, no deep runs
    "Washington Wizards": 98 // No playoff success
};

// NHL team ratings based on last 10 years' success (1 = best, 100 = worst)
const nhlRatings = {
    "Anaheim Ducks": 80, // Playoff appearances, recent rebuild
    "Arizona Coyotes": 100, // No playoff success
    "Boston Bruins": 10, // Finals appearances, strong regular seasons
    "Buffalo Sabres": 98, // No playoff success
    "Calgary Flames": 55, // Playoff appearances, no deep runs
    "Carolina Hurricanes": 18, // Deep playoff runs
    "Chicago Blackhawks": 22, // Championships, recent rebuild
    "Colorado Avalanche": 12, // Championship, playoff regular
    "Columbus Blue Jackets": 85, // Few playoff appearances
    "Dallas Stars": 28, // Finals appearance, playoff regular
    "Detroit Red Wings": 90, // End of dynasty, recent rebuild
    "Edmonton Oilers": 20, // Deep playoff runs
    "Florida Panthers": 15, // Finals appearances, playoff regular
    "Los Angeles Kings": 25, // Championships, playoff regular
    "Minnesota Wild": 50, // Playoff regular, no deep runs
    "Montreal Canadiens": 70, // Finals appearance, recent struggles
    "Nashville Predators": 38, // Finals appearance, playoff regular
    "New Jersey Devils": 60, // Playoff appearances, recent rebuild
    "New York Islanders": 45, // Playoff regular, deep run
    "New York Rangers": 30, // Finals appearance, playoff regular
    "Ottawa Senators": 88, // Few playoff appearances
    "Philadelphia Flyers": 75, // Few playoff appearances
    "Pittsburgh Penguins": 14, // Championships, playoff regular
    "San Jose Sharks": 78, // Playoff regular, recent rebuild
    "Seattle Kraken": 65, // New team, playoff appearance
    "St. Louis Blues": 16, // Championship, playoff regular
    "Tampa Bay Lightning": 8, // Multiple championships
    "Toronto Maple Leafs": 32, // Playoff regular, no deep runs
    "Vancouver Canucks": 68, // Few playoff appearances
    "Vegas Golden Knights": 5, // Finals appearances, championship
    "Washington Capitals": 24, // Championship, playoff regular
    "Winnipeg Jets": 48 // Playoff regular, no deep runs
};

// MLB team ratings based on last 10 years' success (1 = best, 100 = worst)
const mlbRatings = {
    "Arizona Diamondbacks": 50, // Playoff appearance, no deep runs
    "Atlanta Braves": 12, // Championship, playoff regular
    "Baltimore Orioles": 60, // Recent playoff return, long drought
    "Boston Red Sox": 18, // Championship, playoff regular
    "Chicago White Sox": 80, // Few playoff appearances
    "Chicago Cubs": 22, // Championship, playoff regular
    "Cincinnati Reds": 75, // Few playoff appearances
    "Cleveland Guardians": 28, // World Series appearance, playoff regular
    "Colorado Rockies": 95, // No playoff success
    "Detroit Tigers": 90, // No playoff success
    "Houston Astros": 8, // Multiple championships
    "Kansas City Royals": 20, // Championship, playoff regular
    "Los Angeles Angels": 85, // No playoff success
    "Los Angeles Dodgers": 10, // Championship, playoff regular
    "Miami Marlins": 70, // Few playoff appearances
    "Milwaukee Brewers": 38, // Playoff regular
    "Minnesota Twins": 45, // Playoff regular, no deep runs
    "New York Yankees": 16, // Playoff regular, no championship
    "New York Mets": 40, // World Series appearance, playoff regular
    "Oakland Athletics": 98, // No playoff success
    "Philadelphia Phillies": 25, // World Series appearance, playoff regular
    "Pittsburgh Pirates": 88, // Few playoff appearances
    "San Diego Padres": 35, // Playoff regular, no deep runs
    "San Francisco Giants": 14, // Championship, playoff regular
    "Seattle Mariners": 65, // Few playoff appearances
    "St. Louis Cardinals": 28, // Playoff regular, no championship
    "Tampa Bay Rays": 18, // World Series appearance, playoff regular
    "Texas Rangers": 15, // Championship, playoff regular
    "Toronto Blue Jays": 32, // Playoff regular, no deep runs
    "Washington Nationals": 20 // Championship, playoff regular
};

// College team ratings based on last 10 years' success (1 = best, 100 = worst)
const collegeRatings = {
    // SEC
    "Alabama (CBK)": 18, "Alabama (CFB)": 2, "Alabama (CBB)": 22,
    "Arkansas (CBK)": 30, "Arkansas (CFB)": 40, "Arkansas (CBB)": 35,
    "Auburn (CBK)": 25, "Auburn (CFB)": 12, "Auburn (CBB)": 28,
    "Florida (CBK)": 38, "Florida (CFB)": 22, "Florida (CBB)": 32,
    "Georgia (CBK)": 60, "Georgia (CFB)": 8, "Georgia (CBB)": 65,
    "Kentucky (CBK)": 10, "Kentucky (CFB)": 32, "Kentucky (CBB)": 12,
    "LSU (CBK)": 22, "LSU (CFB)": 18, "LSU (CBB)": 28,
    "Mississippi State (CBK)": 45, "Mississippi State (CFB)": 38, "Mississippi State (CBB)": 50,
    "Missouri (CBK)": 55, "Missouri (CFB)": 48, "Missouri (CBB)": 60,
    "Ole Miss (CBK)": 65, "Ole Miss (CFB)": 35, "Ole Miss (CBB)": 70,
    "South Carolina (CBK)": 80, "South Carolina (CFB)": 60, "South Carolina (CBB)": 85,
    "Tennessee (CBK)": 15, "Tennessee (CFB)": 18, "Tennessee (CBB)": 20,
    "Texas A&M (CBK)": 32, "Texas A&M (CFB)": 28, "Texas A&M (CBB)": 38,
    "Vanderbilt (CBK)": 90, "Vanderbilt (CFB)": 80, "Vanderbilt (CBB)": 95,
    // Big Ten
    "Illinois (CBK)": 22, "Illinois (CFB)": 55, "Illinois (CBB)": 28,
    "Indiana (CBK)": 18, "Indiana (CFB)": 65, "Indiana (CBB)": 25,
    "Iowa (CBK)": 28, "Iowa (CFB)": 32, "Iowa (CBB)": 30,
    "Maryland (CBK)": 30, "Maryland (CFB)": 45, "Maryland (CBB)": 35,
    "Michigan (CBK)": 12, "Michigan (CFB)": 10, "Michigan (CBB)": 15,
    "Michigan State (CBK)": 8, "Michigan State (CFB)": 22, "Michigan State (CBB)": 10,
    "Minnesota (CBK)": 65, "Minnesota (CFB)": 55, "Minnesota (CBB)": 70,
    "Nebraska (CBK)": 80, "Nebraska (CFB)": 75, "Nebraska (CBB)": 85,
    "Northwestern (CBK)": 70, "Northwestern (CFB)": 60, "Northwestern (CBB)": 75,
    "Ohio State (CBK)": 16, "Ohio State (CFB)": 6, "Ohio State (CBB)": 18,
    "Penn State (CBK)": 50, "Penn State (CFB)": 20, "Penn State (CBB)": 55,
    "Purdue (CBK)": 14, "Purdue (CFB)": 38, "Purdue (CBB)": 12,
    "Rutgers (CBK)": 60, "Rutgers (CFB)": 85, "Rutgers (CBB)": 65,
    "Wisconsin (CBK)": 20, "Wisconsin (CFB)": 18, "Wisconsin (CBB)": 22,
    // ACC
    "Boston College (CBK)": 85, "Boston College (CFB)": 80, "Boston College (CBB)": 90,
    "Clemson (CBK)": 35, "Clemson (CFB)": 4, "Clemson (CBB)": 40,
    "Duke (CBK)": 6, "Duke (CFB)": 60, "Duke (CBB)": 8,
    "Florida State (CBK)": 25, "Florida State (CFB)": 22, "Florida State (CBB)": 28,
    "Georgia Tech (CBK)": 75, "Georgia Tech (CFB)": 55, "Georgia Tech (CBB)": 80,
    "Louisville (CBK)": 20, "Louisville (CFB)": 32, "Louisville (CBB)": 25,
    "Miami (CBK)": 22, "Miami (CFB)": 28, "Miami (CBB)": 30,
    "NC State (CBK)": 32, "NC State (CFB)": 38, "NC State (CBB)": 35,
    "North Carolina (CBK)": 9, "North Carolina (CFB)": 30, "North Carolina (CBB)": 12,
    "Notre Dame (CBK)": 18, "Notre Dame (CFB)": 14, "Notre Dame (CBB)": 20,
    "Pittsburgh (CBK)": 38, "Pittsburgh (CFB)": 45, "Pittsburgh (CBB)": 40,
    "Syracuse (CBK)": 25, "Syracuse (CFB)": 50, "Syracuse (CBB)": 28,
    "Virginia (CBK)": 10, "Virginia (CFB)": 18, "Virginia (CBB)": 14,
    "Virginia Tech (CBK)": 40, "Virginia Tech (CFB)": 35, "Virginia Tech (CBB)": 45,
    "Wake Forest (CBK)": 55, "Wake Forest (CFB)": 32, "Wake Forest (CBB)": 60,
    // Big 12
    "Baylor (CBK)": 8, "Baylor (CFB)": 18, "Baylor (CBB)": 10,
    "BYU (CBK)": 55, "BYU (CFB)": 40, "BYU (CBB)": 60,
    "Cincinnati (CBK)": 30, "Cincinnati (CFB)": 22, "Cincinnati (CBB)": 35,
    "Houston (CBK)": 12, "Houston (CFB)": 28, "Houston (CBB)": 15,
    "Iowa State (CBK)": 28, "Iowa State (CFB)": 32, "Iowa State (CBB)": 30,
    "Kansas (CBK)": 4, "Kansas (CFB)": 80, "Kansas (CBB)": 6,
    "Kansas State (CBK)": 22, "Kansas State (CFB)": 38, "Kansas State (CBB)": 25,
    "Oklahoma (CBK)": 18, "Oklahoma (CFB)": 10, "Oklahoma (CBB)": 20,
    "Oklahoma State (CBK)": 32, "Oklahoma State (CFB)": 28, "Oklahoma State (CBB)": 35,
    "TCU (CBK)": 35, "TCU (CFB)": 22, "TCU (CBB)": 40,
    "Texas (CBK)": 12, "Texas (CFB)": 14, "Texas (CBB)": 16,
    "Texas Tech (CBK)": 20, "Texas Tech (CFB)": 32, "Texas Tech (CBB)": 22,
    "UCF (CBK)": 60, "UCF (CFB)": 25, "UCF (CBB)": 65,
    "West Virginia (CBK)": 50, "West Virginia (CFB)": 38, "West Virginia (CBB)": 55
};

// MLS team ratings based on last 10 years' success (1 = best, 100 = worst)
const mlsRatings = {
    "Atlanta United FC": 18, // MLS Cup win, playoff regular
    "Austin FC": 65, // New team, limited playoff success
    "CF Montréal": 40, // Playoff appearances
    "Charlotte FC": 80, // New team, no playoff success
    "Chicago Fire FC": 95, // No playoff success
    "FC Cincinnati": 60, // Recent playoff success, poor early years
    "Colorado Rapids": 75, // Few playoff appearances
    "Columbus Crew": 12, // MLS Cup win, playoff regular
    "D.C. United": 85, // No playoff success
    "FC Dallas": 38, // Playoff regular
    "Houston Dynamo FC": 55, // Playoff appearances
    "Inter Miami CF": 70, // New team, limited playoff success
    "LA Galaxy": 22, // MLS Cup win, playoff regular
    "Los Angeles FC": 10, // MLS Cup win, playoff regular
    "Minnesota United FC": 45, // Playoff appearances
    "Nashville SC": 35, // Playoff regular
    "New England Revolution": 30, // Playoff regular
    "New York City FC": 16, // MLS Cup win, playoff regular
    "New York Red Bulls": 28, // Playoff regular
    "Orlando City SC": 50, // Playoff appearances
    "Philadelphia Union": 14, // MLS Cup appearance, playoff regular
    "Portland Timbers": 20, // MLS Cup win, playoff regular
    "Real Salt Lake": 48, // Playoff regular
    "San Jose Earthquakes": 90, // No playoff success
    "Seattle Sounders FC": 8, // Multiple MLS Cup wins
    "Sporting Kansas City": 25, // MLS Cup win, playoff regular
    "St. Louis City SC": 60, // New team, playoff appearance
    "Toronto FC": 32, // MLS Cup win, playoff regular
    "Vancouver Whitecaps FC": 68 // Few playoff appearances
};

// EPL team ratings based on last 10 years' success (1 = best, 100 = worst)
const eplRatings = {
    "Arsenal": 18, // Top 4 regular, no title
    "Aston Villa": 40, // Mid-table, recent improvement
    "Bournemouth": 65, // Relegation, mid-table
    "Brentford": 55, // New to EPL, mid-table
    "Brighton & Hove Albion": 38, // Mid-table, recent improvement
    "Burnley": 80, // Relegation, mid-table
    "Chelsea": 12, // Title, top 4 regular
    "Crystal Palace": 50, // Mid-table
    "Everton": 70, // Relegation battles
    "Fulham": 60, // Relegation, mid-table
    "Liverpool": 8, // Title, top 4 regular
    "Luton Town": 100, // Recent promotion
    "Manchester City": 2, // Multiple titles
    "Manchester United": 16, // Top 4 regular, no title
    "Newcastle United": 28, // Mid-table, recent improvement
    "Nottingham Forest": 85, // Relegation, recent promotion
    "Sheffield United": 95, // Relegation, recent promotion
    "Tottenham Hotspur": 22, // Top 4 regular
    "West Ham United": 32, // Mid-table, European run
    "Wolverhampton Wanderers": 45 // Mid-table
};

// La Liga team ratings based on last 10 years' success (1 = best, 100 = worst)
const llRatings = {
    "Alavés": 80, // Relegation battles
    "Almería": 95, // Relegation, recent promotion
    "Athletic Bilbao": 38, // Mid-table
    "Atlético Madrid": 8, // Title, top 4 regular
    "Barcelona": 4, // Multiple titles
    "Cádiz": 70, // Relegation battles
    "Celta Vigo": 55, // Mid-table
    "Getafe": 60, // Mid-table
    "Girona": 45, // Mid-table, recent improvement
    "Granada": 90, // Relegation, recent promotion
    "Las Palmas": 75, // Relegation, recent promotion
    "Mallorca": 65, // Mid-table
    "Osasuna": 50, // Mid-table
    "Rayo Vallecano": 58, // Mid-table
    "Real Betis": 28, // Top 6 regular
    "Real Madrid": 2, // Multiple titles
    "Real Sociedad": 22, // Top 6 regular
    "Sevilla": 18, // Top 6 regular, European success
    "Valencia": 32, // Mid-table
    "Villarreal": 25 // Top 6 regular, European success
};

// Serie A team ratings based on last 10 years' success (1 = best, 100 = worst)
const saRatings = {
    "Atalanta": 22, // Top 6 regular
    "Bologna": 45, // Mid-table
    "Cagliari": 80, // Relegation battles
    "Empoli": 70, // Relegation battles
    "Fiorentina": 32, // Top 6 regular
    "Genoa": 65, // Relegation, recent promotion
    "Inter Milan": 8, // Title, top 4 regular
    "Juventus": 4, // Multiple titles
    "Lazio": 18, // Top 4 regular
    "Lecce": 75, // Relegation battles
    "AC Milan": 10, // Title, top 4 regular
    "Monza": 55, // Mid-table, recent promotion
    "Napoli": 6, // Title, top 4 regular
    "Roma": 14, // Top 6 regular
    "Salernitana": 95, // Relegation battles
    "Sassuolo": 60, // Mid-table
    "Torino": 38, // Mid-table
    "Udinese": 50, // Mid-table
    "Hellas Verona": 68, // Relegation battles
    "Frosinone": 90 // Relegation, recent promotion
};

// Bundesliga team ratings based on last 10 years' success (1 = best, 100 = worst)
const baRatings = {
    "Augsburg": 60, // Mid-table
    "Bayer Leverkusen": 10, // Top 4 regular
    "Bayern Munich": 2, // Multiple titles
    "Bochum": 80, // Relegation battles
    "Borussia Dortmund": 8, // Title, top 4 regular
    "Borussia Mönchengladbach": 32, // Top 6 regular
    "Eintracht Frankfurt": 22, // Top 6 regular, European success
    "FC Heidenheim": 90, // Recent promotion
    "RB Leipzig": 12, // Top 4 regular
    "SC Freiburg": 18, // Top 6 regular
    "Stuttgart": 28, // Mid-table
    "Union Berlin": 25, // Top 6 regular
    "Werder Bremen": 50, // Mid-table
    "Wolfsburg": 38, // Top 6 regular
    "1. FC Köln": 55, // Mid-table
    "Mainz 05": 45, // Mid-table
    "Darmstadt 98": 95, // Relegation, recent promotion
    "Hoffenheim": 40 // Mid-table
};

// Ligue 1 team ratings based on last 10 years' success (1 = best, 100 = worst)
const l1Ratings = {
    "Clermont Foot": 80, // Relegation battles
    "Le Havre": 70, // Relegation, recent promotion
    "Lens": 22, // Top 6 regular
    "Lille": 10, // Title, top 4 regular
    "Lorient": 65, // Relegation battles
    "Lyon": 18, // Top 4 regular
    "Marseille": 14, // Top 4 regular
    "Metz": 90, // Relegation, recent promotion
    "Monaco": 8, // Title, top 4 regular
    "Montpellier": 45, // Mid-table
    "Nantes": 55, // Mid-table
    "Nice": 32, // Top 6 regular
    "Paris Saint-Germain": 2, // Multiple titles
    "Reims": 38, // Mid-table
    "Rennes": 25, // Top 6 regular
    "Strasbourg": 60, // Mid-table
    "Toulouse": 50, // Mid-table
    "Brest": 35 // Mid-table
};

// F1 driver ratings based on last 10 years' success (1 = best, 100 = worst)
const f1Ratings = {
    "Max Verstappen": 2, // Multiple championships
    "Sergio Perez": 18, // Wins, podiums
    "Lewis Hamilton": 4, // Multiple championships
    "George Russell": 22, // Podiums, wins
    "Charles Leclerc": 12, // Wins, podiums
    "Carlos Sainz": 16, // Wins, podiums
    "Lando Norris": 14, // Podiums
    "Oscar Piastri": 28, // Podiums, new driver
    "Fernando Alonso": 10, // Podiums, wins
    "Lance Stroll": 45, // Podiums
    "Esteban Ocon": 32, // Podiums, win
    "Pierre Gasly": 35, // Podiums, win
    "Yuki Tsunoda": 50, // Points finishes
    "Daniel Ricciardo": 20, // Wins, podiums
    "Valtteri Bottas": 15, // Wins, podiums
    "Zhou Guanyu": 55, // Points finishes
    "Kevin Magnussen": 60, // Points finishes
    "Nico Hulkenberg": 58, // Points finishes
    "Alex Albon": 48, // Points finishes
    "Logan Sargeant": 100 // Rookie, few points
};

// Nascar driver ratings based on last 10 years' success (1 = best, 100 = worst)
const nascarRatings = {
    "Chase Elliott": 8, // Championship, wins
    "Kyle Larson": 4, // Championship, wins
    "Joey Logano": 10, // Championship, wins
    "Denny Hamlin": 12, // Wins, playoff regular
    "Kevin Harvick": 6, // Championship, wins
    "Kyle Busch": 2, // Multiple championships
    "Martin Truex Jr.": 14, // Championship, wins
    "Ryan Blaney": 18, // Wins, playoff regular
    "Alex Bowman": 28, // Wins, playoff regular
    "William Byron": 22 // Wins, playoff regular
};

// PGA golfer ratings based on last 10 years' success (1 = best, 100 = worst)
const pgaRatings = {
    "Scottie Scheffler": 2, // Major wins, top ranking
    "Rory McIlroy": 6, // Major wins, top ranking
    "Jon Rahm": 8, // Major win, top ranking
    "Patrick Cantlay": 18, // Wins, top ranking
    "Xander Schauffele": 12, // Wins, top ranking
    "Viktor Hovland": 14, // Wins, top ranking
    "Collin Morikawa": 10, // Major wins
    "Matt Fitzpatrick": 22, // Major win
    "Jordan Spieth": 4, // Major wins
    "Tommy Fleetwood": 28 // Wins, top ranking
};

// LIV golfer ratings based on last 10 years' success (1 = best, 100 = worst)
const livRatings = {
    "Cameron Smith": 8, // Major win
    "Dustin Johnson": 4, // Major wins
    "Brooks Koepka": 2, // Multiple major wins
    "Bryson DeChambeau": 10, // Major win
    "Patrick Reed": 12, // Major win
    "Paul Casey": 18, // Wins
    "Talor Gooch": 22, // Wins
    "Matthew Wolff": 28, // Wins
    "Carlos Ortiz": 35, // Wins
    "Ian Poulter": 40 // Wins
};

// UFC fighter ratings based on last 10 years' success (1 = best, 100 = worst)
const ufcRatings = {
    "Jon Jones": 2, // Multiple championships
    "Israel Adesanya": 4, // Multiple championships
    "Alexander Volkanovski": 6, // Multiple championships
    "Islam Makhachev": 8, // Championship
    "Leon Edwards": 10, // Championship
    "Sean O'Malley": 12, // Championship
    "Dustin Poirier": 14, // Championship
    "Charles Oliveira": 16, // Championship
    "Justin Gaethje": 18, // Championship
    "Curtis Blaydes": 22 // Top contender
};

// NFL team ratings based on last 10 years' success (1-100)
const nflRatings = {
    "New England Patriots": 20,
    "Kansas City Chiefs": 10,
    "Seattle Seahawks": 30,
    "San Francisco 49ers": 35,
    "Denver Broncos": 40,
    "Baltimore Ravens": 32,
    "Green Bay Packers": 34,
    "Philadelphia Eagles": 28,
    "Pittsburgh Steelers": 38,
    "Los Angeles Rams": 42,
    "Dallas Cowboys": 45,
    "Minnesota Vikings": 50,
    "Buffalo Bills": 41,
    "Atlanta Falcons": 55,
    "Carolina Panthers": 60,
    "Indianapolis Colts": 58,
    "Arizona Cardinals": 75,
    "Houston Texans": 80,
    "Tennessee Titans": 52,
    "Cincinnati Bengals": 48,
    "Chicago Bears": 70,
    "New Orleans Saints": 44,
    "Las Vegas Raiders": 78,
    "Jacksonville Jaguars": 85,
    "New York Giants": 65,
    "Cleveland Browns": 90,
    "Miami Dolphins": 54,
    "Detroit Lions": 88,
    "Los Angeles Chargers": 56,
    "Washington Commanders": 92,
    "Tampa Bay Buccaneers": 62,
    "New York Jets": 100
};

// Example data for each category (replace with full lists as needed)
const categoryData = {
    NFL: [
        "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Commanders"
    ],
    NBA: [
        "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
    ],
    NHL: [
        "Anaheim Ducks", "Arizona Coyotes", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers", "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersey Devils", "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "Seattle Kraken", "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnipeg Jets"
    ],
    MLB: [
        "Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago White Sox", "Chicago Cubs", "Cincinnati Reds", "Cleveland Guardians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Yankees", "New York Mets", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"
    ],
    CBK: [
        // SEC
        "Alabama (CBK)", "Arkansas (CBK)", "Auburn (CBK)", "Florida (CBK)", "Georgia (CBK)", "Kentucky (CBK)", "LSU (CBK)", "Mississippi State (CBK)", "Missouri (CBK)", "Ole Miss (CBK)", "South Carolina (CBK)", "Tennessee (CBK)", "Texas A&M (CBK)", "Vanderbilt (CBK)",
        // Big Ten
        "Illinois (CBK)", "Indiana (CBK)", "Iowa (CBK)", "Maryland (CBK)", "Michigan (CBK)", "Michigan State (CBK)", "Minnesota (CBK)", "Nebraska (CBK)", "Northwestern (CBK)", "Ohio State (CBK)", "Penn State (CBK)", "Purdue (CBK)", "Rutgers (CBK)", "Wisconsin (CBK)",
        // ACC
        "Boston College (CBK)", "Clemson (CBK)", "Duke (CBK)", "Florida State (CBK)", "Georgia Tech (CBK)", "Louisville (CBK)", "Miami (CBK)", "NC State (CBK)", "North Carolina (CBK)", "Notre Dame (CBK)", "Pittsburgh (CBK)", "Syracuse (CBK)", "Virginia (CBK)", "Virginia Tech (CBK)", "Wake Forest (CBK)",
        // Big 12
        "Baylor (CBK)", "BYU (CBK)", "Cincinnati (CBK)", "Houston (CBK)", "Iowa State (CBK)", "Kansas (CBK)", "Kansas State (CBK)", "Oklahoma (CBK)", "Oklahoma State (CBK)", "TCU (CBK)", "Texas (CBK)", "Texas Tech (CBK)", "UCF (CBK)", "West Virginia (CBK)"
    ],
    CFB: [
        // SEC
        "Alabama (CFB)", "Arkansas (CFB)", "Auburn (CFB)", "Florida (CFB)", "Georgia (CFB)", "Kentucky (CFB)", "LSU (CFB)", "Mississippi State (CFB)", "Missouri (CFB)", "Ole Miss (CFB)", "South Carolina (CFB)", "Tennessee (CFB)", "Texas A&M (CFB)", "Vanderbilt (CFB)",
        // Big Ten
        "Illinois (CFB)", "Indiana (CFB)", "Iowa (CFB)", "Maryland (CFB)", "Michigan (CFB)", "Michigan State (CFB)", "Minnesota (CFB)", "Nebraska (CFB)", "Northwestern (CFB)", "Ohio State (CFB)", "Penn State (CFB)", "Purdue (CFB)", "Rutgers (CFB)", "Wisconsin (CFB)",
        // ACC
        "Boston College (CFB)", "Clemson (CFB)", "Duke (CFB)", "Florida State (CFB)", "Georgia Tech (CFB)", "Louisville (CFB)", "Miami (CFB)", "NC State (CFB)", "North Carolina (CFB)", "Notre Dame (CFB)", "Pittsburgh (CFB)", "Syracuse (CFB)", "Virginia (CFB)", "Virginia Tech (CFB)", "Wake Forest (CFB)",
        // Big 12
        "Baylor (CFB)", "BYU (CFB)", "Cincinnati (CFB)", "Houston (CFB)", "Iowa State (CFB)", "Kansas (CFB)", "Kansas State (CFB)", "Oklahoma (CFB)", "Oklahoma State (CFB)", "TCU (CFB)", "Texas (CFB)", "Texas Tech (CFB)", "UCF (CFB)", "West Virginia (CFB)"
    ],
    CBB: [
        // SEC
        "Alabama (CBB)", "Arkansas (CBB)", "Auburn (CBB)", "Florida (CBB)", "Georgia (CBB)", "Kentucky (CBB)", "LSU (CBB)", "Mississippi State (CBB)", "Missouri (CBB)", "Ole Miss (CBB)", "South Carolina (CBB)", "Tennessee (CBB)", "Texas A&M (CBB)", "Vanderbilt (CBB)",
        // Big Ten
        "Illinois (CBB)", "Indiana (CBB)", "Iowa (CBB)", "Maryland (CBB)", "Michigan (CBB)", "Michigan State (CBB)", "Minnesota (CBB)", "Nebraska (CBB)", "Northwestern (CBB)", "Ohio State (CBB)", "Penn State (CBB)", "Purdue (CBB)", "Rutgers (CBB)", "Wisconsin (CBB)",
        // ACC
        "Boston College (CBB)", "Clemson (CBB)", "Duke (CBB)", "Florida State (CBB)", "Georgia Tech (CBB)", "Louisville (CBB)", "Miami (CBB)", "NC State (CBB)", "North Carolina (CBB)", "Notre Dame (CBB)", "Pittsburgh (CBB)", "Syracuse (CBB)", "Virginia (CBB)", "Virginia Tech (CBB)", "Wake Forest (CBB)",
        // Big 12
        "Baylor (CBB)", "BYU (CBB)", "Cincinnati (CBB)", "Houston (CBB)", "Iowa State (CBB)", "Kansas (CBB)", "Kansas State (CBB)", "Oklahoma (CBB)", "Oklahoma State (CBB)", "TCU (CBB)", "Texas (CBB)", "Texas Tech (CBB)", "UCF (CBB)", "West Virginia (CBB)"
    ],
    MLS: [
        "Atlanta United FC", "Austin FC", "CF Montréal", "Charlotte FC", "Chicago Fire FC", "FC Cincinnati", "Colorado Rapids", "Columbus Crew", "D.C. United", "FC Dallas", "Houston Dynamo FC", "Inter Miami CF", "LA Galaxy", "Los Angeles FC", "Minnesota United FC", "Nashville SC", "New England Revolution", "New York City FC", "New York Red Bulls", "Orlando City SC", "Philadelphia Union", "Portland Timbers", "Real Salt Lake", "San Jose Earthquakes", "Seattle Sounders FC", "Sporting Kansas City", "St. Louis City SC", "Toronto FC", "Vancouver Whitecaps FC"
    ],
    EPL: [
        "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton & Hove Albion", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool", "Luton Town", "Manchester City", "Manchester United", "Newcastle United", "Nottingham Forest", "Sheffield United", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"
    ],
    LL: [
        "Alavés", "Almería", "Athletic Bilbao", "Atlético Madrid", "Barcelona", "Cádiz", "Celta Vigo", "Getafe", "Girona", "Granada", "Las Palmas", "Mallorca", "Osasuna", "Rayo Vallecano", "Real Betis", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Villarreal"
    ],
    SA: [
        "Atalanta", "Bologna", "Cagliari", "Empoli", "Fiorentina", "Genoa", "Inter Milan", "Juventus", "Lazio", "Lecce", "AC Milan", "Monza", "Napoli", "Roma", "Salernitana", "Sassuolo", "Torino", "Udinese", "Hellas Verona", "Frosinone"
    ],
    BA: [
        "Augsburg", "Bayer Leverkusen", "Bayern Munich", "Bochum", "Borussia Dortmund", "Borussia Mönchengladbach", "Eintracht Frankfurt", "FC Heidenheim", "RB Leipzig", "SC Freiburg", "Stuttgart", "Union Berlin", "Werder Bremen", "Wolfsburg", "1. FC Köln", "Mainz 05", "Darmstadt 98", "Hoffenheim"
    ],
    L1: [
        "Clermont Foot", "Le Havre", "Lens", "Lille", "Lorient", "Lyon", "Marseille", "Metz", "Monaco", "Montpellier", "Nantes", "Nice", "Paris Saint-Germain", "Reims", "Rennes", "Strasbourg", "Toulouse", "Brest"
    ],
    F1: [
        "Max Verstappen", "Sergio Perez", "Lewis Hamilton", "George Russell", "Charles Leclerc", "Carlos Sainz", "Lando Norris", "Oscar Piastri", "Fernando Alonso", "Lance Stroll", "Esteban Ocon", "Pierre Gasly", "Yuki Tsunoda", "Daniel Ricciardo", "Valtteri Bottas", "Zhou Guanyu", "Kevin Magnussen", "Nico Hulkenberg", "Alex Albon", "Logan Sargeant"
    ],
    Nascar: [
        "Chase Elliott", "Kyle Larson", "Joey Logano", "Denny Hamlin", "Kevin Harvick", "Kyle Busch", "Martin Truex Jr.", "Ryan Blaney", "Alex Bowman", "William Byron"
    ],
    PGA: [
        "Scottie Scheffler", "Rory McIlroy", "Jon Rahm", "Patrick Cantlay", "Xander Schauffele", "Viktor Hovland", "Collin Morikawa", "Matt Fitzpatrick", "Jordan Spieth", "Tommy Fleetwood"
    ],
    LIV: [
        "Cameron Smith", "Dustin Johnson", "Brooks Koepka", "Bryson DeChambeau", "Patrick Reed", "Paul Casey", "Talor Gooch", "Matthew Wolff", "Carlos Ortiz", "Ian Poulter"
    ],
    UFC: [
        "Jon Jones", "Israel Adesanya", "Alexander Volkanovski", "Islam Makhachev", "Leon Edwards", "Sean O'Malley", "Dustin Poirier", "Charles Oliveira", "Justin Gaethje", "Curtis Blaydes"
    ]
};


let currentCategory = 'NFL';
let menuItems = categoryData[currentCategory];

// Store selected items as { category: string, item: string }
let selectedItems = [];

const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownSearch = document.getElementById('dropdownSearch');
const instructions = document.getElementById('instructions');
const resultsBtn = document.getElementById('resultsBtn');
const resultsSection = document.getElementById('resultsSection');
const dropdownMenuButton = document.getElementById('dropdownMenuButton');
const selectedItemsDisplay = document.getElementById('selectedItemsDisplay');
const categorySelect = document.getElementById('categorySelect');

function renderMenu(filter = "") {
    dropdownMenu.innerHTML = "";
    menuItems.filter(item => item.toLowerCase().includes(filter.toLowerCase())).forEach(item => {
        const li = document.createElement('li');
        li.className = 'dropdown-item';
        li.textContent = item;
        li.onclick = () => selectItem(item);
        dropdownMenu.appendChild(li);
    });
}


function selectItem(item) {
    // Check if already selected in this category
    if (!selectedItems.some(sel => sel.category === currentCategory && sel.item === item)) {
        selectedItems.push({ category: currentCategory, item });
        dropdownMenuButton.textContent = `Selected (${selectedItems.length})`;
        renderSelectedItems();
    }
}


function renderSelectedItems() {
    if (selectedItems.length === 0) {
        selectedItemsDisplay.innerHTML = '<span class="text-muted">No items selected.</span>';
        return;
    }
    // Group by category
    const grouped = {};
    selectedItems.forEach(({ category, item }) => {
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push(item);
    });
    let html = '<strong>Selected Items:</strong><br>';
    for (const cat in grouped) {
        html += `<div class="mt-2"><span class="fw-bold">${cat}:</span> ` + grouped[cat].map(item => `<span class="mx-1">${item}</span>`).join('') + '</div>';
    }
    selectedItemsDisplay.innerHTML = html;
}


categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    menuItems = categoryData[currentCategory];
    dropdownMenuButton.textContent = 'Select Items';
    dropdownSearch.value = '';
    renderMenu();
    renderSelectedItems();
});

// Show/hide instructions based on dropdown focus
let dropdownOpen = false;
dropdownSearch.addEventListener('focus', () => {
    instructions.style.display = 'none';
    dropdownOpen = true;
    renderMenu(dropdownSearch.value);
});
dropdownSearch.addEventListener('input', () => {
    renderMenu(dropdownSearch.value);
    // Open dropdown if not already open
    if (!dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.add('show');
        dropdownMenu.style.display = 'block';
    }
});
dropdownSearch.addEventListener('blur', () => {
    setTimeout(() => {
        dropdownMenu.classList.remove('show');
        dropdownMenu.style.display = '';
        if (!dropdownOpen) instructions.style.display = '';
    }, 200);
});
dropdownMenuButton.addEventListener('click', () => {
    instructions.style.display = 'none';
    dropdownOpen = true;
    renderMenu(dropdownSearch.value);
});
dropdownMenu.addEventListener('mouseleave', () => {
    dropdownOpen = false;
    if (!dropdownSearch.matches(':focus')) instructions.style.display = '';
});



resultsBtn.addEventListener('click', () => {
    // Calculate average rating of selected items
    let totalRating = 0;
    let count = 0;
    selectedItems.forEach(({ category, item }) => {
        let rating = null;
        if (category === 'NFL' && nflRatings[item] !== undefined) rating = nflRatings[item];
        else if (category === 'NBA' && nbaRatings[item] !== undefined) rating = nbaRatings[item];
        else if (category === 'NHL' && nhlRatings[item] !== undefined) rating = nhlRatings[item];
        else if (category === 'MLB' && mlbRatings[item] !== undefined) rating = mlbRatings[item];
        else if ((category === 'CBK' || category === 'CFB' || category === 'CBB') && collegeRatings[item] !== undefined) rating = collegeRatings[item];
        else if (category === 'MLS' && mlsRatings[item] !== undefined) rating = mlsRatings[item];
        else if (category === 'EPL' && eplRatings[item] !== undefined) rating = eplRatings[item];
        else if (category === 'LL' && llRatings[item] !== undefined) rating = llRatings[item];
        else if (category === 'SA' && saRatings[item] !== undefined) rating = saRatings[item];
        else if (category === 'BA' && baRatings[item] !== undefined) rating = baRatings[item];
        else if (category === 'L1' && l1Ratings[item] !== undefined) rating = l1Ratings[item];
        else if (category === 'F1' && f1Ratings[item] !== undefined) rating = f1Ratings[item];
        else if (category === 'Nascar' && nascarRatings[item] !== undefined) rating = nascarRatings[item];
        else if (category === 'PGA' && pgaRatings[item] !== undefined) rating = pgaRatings[item];
        else if (category === 'LIV' && livRatings[item] !== undefined) rating = livRatings[item];
        else if (category === 'UFC' && ufcRatings[item] !== undefined) rating = ufcRatings[item];
        if (rating !== null) {
            totalRating += rating;
            count++;
        }
    });
    let avgRating = count > 0 ? Math.ceil(totalRating / count) : 'N/A';

    let imgSrc = '';
    if (count === 0) {
        imgSrc = 'imgs/happy.png';
        resultsSection.innerHTML = `
            <div class='results-section'>
                <div class='score'>N/A</div>
                <img src='${imgSrc}' class='output-img' alt='Result' style='display:block;'>
            </div>
            <div class='output-text text-center'>No selections made!</div>
            <div class='text-center mt-4'>
                <button class='btn btn-secondary btn-lg' id='retakeBtn'>Retake</button>
            </div>
        `;
        instructions.style.display = 'none';
        resultsSection.style.display = '';
        resultsBtn.style.display = 'none';
        document.getElementById('retakeBtn').onclick = () => {
            location.reload();
        };
        return;
    }
    // Show loading while waiting for GPT
    resultsSection.innerHTML = `
        <div class='results-section'>
            <div class='score'>${avgRating}</div>
            <img src='imgs/loading.gif' class='output-img' alt='Loading' style='display:block;'>
        </div>
        <div class='output-text text-center'></div>
        <div class='text-center mt-4'>
            <button class='btn btn-secondary btn-lg' id='retakeBtn'>Retake</button>
        </div>
    `;
    instructions.style.display = 'none';
    resultsSection.style.display = '';
    resultsBtn.style.display = 'none';
    document.getElementById('retakeBtn').onclick = () => {
        location.reload();
    };
    // Get GPT response and update output
    getOpenAIResponse(selectedItems.map(sel => sel.item), avgRating).then(gptResponse => {
        // Choose misery image based on avgRating
        if (avgRating >= 1 && avgRating <= 19) imgSrc = 'imgs/1-19.png';
        else if (avgRating >= 20 && avgRating <= 39) imgSrc = 'imgs/20-39.png';
        else if (avgRating >= 40 && avgRating <= 59) imgSrc = 'imgs/40-59.png';
        else if (avgRating >= 60 && avgRating <= 79) imgSrc = 'imgs/60-79.png';
        else if (avgRating >= 80 && avgRating <= 100) imgSrc = 'imgs/80-100.png';
        else if (avgRating < 66) imgSrc = 'imgs/neutral.png';
        else imgSrc = 'imgs/sad.png';
        resultsSection.innerHTML = `
            <div class='results-section'>
                <div class='score'>${avgRating}</div>
                <img src='${imgSrc}' class='output-img' alt='Result' style='display:block;'>
            </div>
            <div class='output-text text-center' id='roastText'></div>
            <div class='text-center mt-4'>
                <button class='btn btn-secondary btn-lg' id='retakeBtn'>Retake</button>
            </div>
        `;
        document.getElementById('retakeBtn').onclick = () => {
            location.reload();
        };
        // Animate roast text typing
        const roastDiv = document.getElementById('roastText');
        let i = 0;
        function typeWriter() {
            if (i < gptResponse.length) {
                roastDiv.innerHTML += gptResponse.charAt(i);
                i++;
                setTimeout(typeWriter, 22); // ~45 chars/sec
            }
        }
        typeWriter();
    });
});

async function getOpenAIResponse(selectedTeams, avgRating) {
    // Helper to check for Louisville in any college category
    function hasLouisvilleCollege(selectedItems) {
        return selectedItems.some(sel =>
            ((sel.item === "Louisville (CBK)" && sel.category === "CBK") ||
             (sel.item === "Louisville (CFB)" && sel.category === "CFB") ||
             (sel.item === "Louisville (CBB)" && sel.category === "CBB"))
        );
    }

    // Special case: Thunder, Steelers, FC Cincinnati, Manchester City (+ Louisville in any college category) for Josh Johnson
    let specialTeamsJosh = ["Oklahoma City Thunder", "Pittsburgh Steelers", "FC Cincinnati", "Manchester City"];
    let isJosh = specialTeamsJosh.every(team => selectedTeams.includes(team)) && hasLouisvilleCollege(selectedItems) && selectedTeams.length === 4 + 1; // 4 teams + Louisville

    // Special case: Steelers, Cubs, Blackhawks, Pacers, Arsenal (+ Louisville in any college category) for Nick Leming
    let specialTeamsNick = ["Pittsburgh Steelers", "Chicago Cubs", "Chicago Blackhawks", "Indiana Pacers", "Arsenal"];
    let isNick = specialTeamsNick.every(team => selectedTeams.includes(team)) && hasLouisvilleCollege(selectedItems) && selectedTeams.length === 5 + 1; // 5 teams + Louisville

    // Special case: Chargers, Bulls, Reds, Everton, Louisville (Dalton Pirtle)
    let specialTeamsDalton = ["Los Angeles Chargers", "Chicago Bulls", "Cincinnati Reds", "Everton"];
    let isDalton = specialTeamsDalton.every(team => selectedTeams.includes(team)) && hasLouisvilleCollege(selectedItems) && selectedTeams.length === 5;

    // Special case: Bengals, Reds, FC Cincinnati, Louisville (Braden Mulcahy)
    let specialTeamsBraden = ["Cincinnati Bengals", "Cincinnati Reds", "FC Cincinnati"];
    let isBraden = specialTeamsBraden.every(team => selectedTeams.includes(team)) && hasLouisvilleCollege(selectedItems) && selectedTeams.length === 4;
    // Special case: Louisville football only (Jake Kehoe)
    let isJakeKehoe = selectedItems.length === 1 && selectedItems[0].item === "Louisville (CFB)" && selectedItems[0].category === "CFB";
    let systemPrompt = "";
    if (isJosh) {
        systemPrompt += `If the selected teams are Oklahoma City Thunder, Pittsburgh Steelers, FC Cincinnati, and Manchester City, insult Josh Johnson directly in the roast. Make it personal, clever, and brutal.\n`;
        console.log("Special roast for Josh Johnson triggered.");
    }
    if (isNick) {
        systemPrompt += `If the selected teams are Pittsburgh Steelers, Chicago Cubs, Chicago Blackhawks, Indiana Pacers, and Arsenal, address Nick Leming by name and roast him directly. Make the roast unmistakably personal, clever, and brutal—focus on Nick Leming, not just the teams.\n`;
        console.log("Special roast for Nick Leming triggered.");
    }
    if (isDalton) {
        systemPrompt += `If the selected teams are Los Angeles Chargers, Chicago Bulls, Cincinnati Reds, Everton, and Louisville (in any college category), address Dalton Pirtle by name and roast him directly. Make the roast unmistakably personal, clever, and brutal—focus on Dalton Pirtle, not just the teams.\n`;
        console.log("Special roast for Dalton Pirtle triggered.");
    }
    if (isBraden) {
        systemPrompt += `If the selected teams are Cincinnati Bengals, Cincinnati Reds, FC Cincinnati, and Louisville (in any college category), address Braden Mulcahy by name and roast him directly. Make the roast unmistakably personal, clever, and brutal—focus on Braden Mulcahy, not just the teams.\n`;
        console.log("Special roast for Braden Mulcahy triggered.");
    }
    if (isJakeKehoe) {
        systemPrompt += `If the only team selected is Louisville in college football (CFB), address Jake Kehoe by name and roast him directly. Make the roast unmistakably personal, clever, and brutal—focus on Jake Kehoe, not just the team.\n`;
        console.log("Special roast for Jake Kehoe triggered.");
    }
    systemPrompt += `You are the voice of a “Sports Misery Indicator.”\nPersona: razor-witted sports historian with a grudge, equal parts sports-bar sarcasm and dramatic sportswriter flair.\nStyle: short, punchy, quotable. 1–2 sentences max.\nAllowed: mild profanity and sharp snark; no slurs or hate speech.\nMake it personal:\n- Reference infamous championship losses, long droughts, playoff chokes, or humiliating moments specific to the teams.\n- Twist the knife, but keep it clever—never just list stats without punch.\n- Always react to the misery score (1=ecstatic, 100=utter despair).\nNever invent fictional championships; rely on known or plausible sports history.\nReturn only the roast—no explanations or setup.\n\nTone guide:\n- 1–15: smug optimism, gentle ribbing, hinting at past pain but focusing on the rare bright spots.\n- 16–40: dry sarcasm, slip in a sly reminder of a collapse.\n- 41–65: confident roast, highlight at least one big postseason failure.\n- 66–85: bleak humor; call back to gut-punch games or lost championships.\n- 86–100: full gallows humor; hammer their longest droughts and most cursed moments.\n\nRules:\n- 1–2 sentences, 20–45 words.\n- Always name at least one team.\n- If PROFANITY_LEVEL ≥ 2, you may use one spicy word for emphasis (no slurs).\n- If multiple teams, connect their miseries (e.g., “combined decades without…”).\n- Make history sound personal, like you’re talking to a lifelong fan nursing old wounds.\n- Do NOT explicitly start with 'Oh, [team] fans' or similar; make the roast fluid and natural.`;
    let userPrompt = `Misery Score: ${avgRating}. Teams: ${selectedTeams.join(", ")}.`;
    const body = {
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ],
        max_tokens: 100
    };
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data.choices && data.choices[0] && data.choices[0].message.content ? data.choices[0].message.content : "No response.";
}

// Initial render
renderMenu();
renderSelectedItems();
