// This folder is for any utility functions such as data formatting. 
const teamCon= {
    "Milwaukee": "Milwaukee Bucks",
    "Houston": "Houston Rockets",
    "Memphis": "Memphis Grizzlies",
    "New York": "New York Knicks",
    "Utah": "Utah Jazz",
    "LA Lakers": "Los Angeles Lakers",
    "Charlotte": "Charlotte Hornets",
    "Phoenix":"Phoenix Suns",
    "Boston":"Boston Celtics",
    "New Orleans":"New Orleans Pelicans",
    "San Antonio":"San Antonio Spurs",
    "Golden State":"Golden State Warriors",
    "Detroit":"Detroit Pistons",
    "Okla City":"Oklahoma City Thunder",
    "LA Clippers":"Los Angeles Clippers",
    "Washington":"Washington Wizards",
    "Orlando": "Orlando Magic",
    "Toronto":"Toronto Raptors",
    "Atlanta":"Atlanta Hawks",
    "Denver":"Denver Nuggets",
    "Minnesota":"Minnesota Timberwolves",
    "Indiana":"Indiana Pacers",
    "Sacramento":"Sacramento Kings",
    "Chicago":"Chicago Bulls",
    "Cleveland":"Cleveland Cavaliers",
    "Miami":"Miami Heat",
    "Portland":"Portland Trail Blazers",
    "Philadelphia":"Philadelphia 76ers",
    "Brooklyn":"Brooklyn Nets",
    "Dallas":"Dallas Mavericks"
}

export const arrayToObjTeam = async (data, setState) => {
    const statsArray = await data()

    const teamStatsObj = {}

    for (const team of statsArray.items) {
        const oldTeamName = team["team_name"]
        const newTeamName = teamCon[oldTeamName]
        teamStatsObj[newTeamName] = {...team, team_name: newTeamName}
    }
    
    setState(teamStatsObj)
}

export const arrayToObjNbaTeams = async (data, setState) => {
    const teamNames = await data()
    const teamNamesObj = {}

    for (const team of teamNames.response) {
        teamNamesObj[team.name] = team
    }

    setState(teamNamesObj)
}