import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const nbaTeams = [
"Atlanta Hawks", 
"Boston Celtics", 
"Brooklyn Nets", 
"Charlotte Hornets",
"Chicago Bulls",
"Cleveland Cavaliers",
"Dallas Mavericks",
"Denver Nuggets",
"Detroit Pistons",
"Golden State Warriors",
"Houston Rockets",
"Indiana Pacers",
"Los Angeles Clippers",
"Los Angeles Lakers",
"Memphis Grizzlies",
"Miami Heat",
"Milwaukee Bucks",
"Minnesota Timberwolves",
"New Orleans Pelicans",
"New York Knicks",
"Oklahoma City Thunder",
"Orlando Magic",
"Philadelphia 76ers",
"Phoenix Suns",
"Portland Trail Blazers",
"Sacramento Kings",
"San Antonio Spurs",
"Toronto Raptors",
"Utah Jazz",
"Washington Wizards"]

const TeamAutoComplete = ({team, setTeam}) => { 
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={nbaTeams}
            onChange={(e, newValue) => {
                setTeam(newValue)
            }}
            value={team}
            sx={{ width: 300}}
            renderInput={(params) => <TextField {...params} label="Choose a team" />}
      />
    )
}

export default TeamAutoComplete