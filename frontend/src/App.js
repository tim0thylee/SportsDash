
import React, {useState, useEffect} from 'react'
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import TeamAutoComplete from './components/TeamAutoComplete';
import OddsDiplay from './components/OddsDisplay';
import TeamStatsDisplay from './components/TeamStatsDisplay'
import PlayerInjuryDisplay from './components/PlayerInjuryDisplay';

import playerInjuryAPI from './api/playerInjury'
import {INJURY_SAMPLE_DATA} from './api/SampleData'
import { team_assists, team_points, team_rebounds, team_blocks, team_steals, team_threes, team_turnovers } from './api/teamStats';
import { opp_assists, opp_points, opp_rebounds, opp_blocks, opp_steals, opp_threes, opp_turnovers } from './api/oppStats';
import { arrayToObjTeam } from './utils/utils';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const debug = false

function App() {
  // purpose of global state is for the purpose of less calls to the api. 
  const [leftTeam, setLeftTeam] = useState("Boston Celtics")
  const [rightTeam, setRightTeam] = useState("Miami Heat")
  const [playersInjury, setPlayersInjury] = useState([])
  const [teamAssists, setTeamAssists] = useState({})
  const [teamPoints, setTeamPoints] = useState({})
  const [teamRebounds, setTeamRebounds] = useState({})
  const [teamBlocks, setTeamBlocks] = useState({})
  const [teamSteals, setTeamSteals] = useState({})
  const [teamTurnovers, setTeamTurnovers] = useState({})
  const [teamThrees, setTeamThrees] = useState({})
  const [oppAssists, setOppAssists] = useState({})
  const [oppPoints, setOppPoints] = useState({})
  const [oppRebounds, setOppRebounds] = useState({})
  const [oppBlocks, setOppBlocks] = useState({})
  const [oppSteals, setOppSteals] = useState({})
  const [oppTurnovers, setOppTurnovers] = useState({})
  const [oppThrees, setOppThrees] = useState({})

  useEffect(() => {
    // Call the data and store in odds. We do this to save number of data calls. 
    const callInjuryData= async () => {
      const oddsData = debug ? INJURY_SAMPLE_DATA : await playerInjuryAPI()
      setPlayersInjury(oddsData.items)
    }
    
    callInjuryData().catch(console.error)
    arrayToObjTeam(team_assists, setTeamAssists).catch(console.error)
    arrayToObjTeam(team_points, setTeamPoints).catch(console.error)
    arrayToObjTeam(team_rebounds, setTeamRebounds).catch(console.error)
    arrayToObjTeam(team_blocks, setTeamBlocks).catch(console.error)
    arrayToObjTeam(team_steals, setTeamSteals).catch(console.error)
    arrayToObjTeam(team_turnovers, setTeamTurnovers).catch(console.error)
    arrayToObjTeam(team_threes, setTeamThrees).catch(console.error)
    arrayToObjTeam(opp_assists, setOppAssists).catch(console.error)
    arrayToObjTeam(opp_points, setOppPoints).catch(console.error)
    arrayToObjTeam(opp_rebounds, setOppRebounds).catch(console.error)
    arrayToObjTeam(opp_blocks, setOppBlocks).catch(console.error)
    arrayToObjTeam(opp_steals, setOppSteals).catch(console.error)
    arrayToObjTeam(opp_turnovers, setOppTurnovers).catch(console.error)
    arrayToObjTeam(opp_threes, setOppThrees).catch(console.error)
  }, [])

  return (
    <div className="App">
      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item md={5}>
            <h2>{leftTeam}</h2> 
            <TeamAutoComplete team={leftTeam} setTeam={setLeftTeam}/>
            <TeamStatsDisplay
              title={"Team Stats"} 
              team = {leftTeam}
              assists = {teamAssists}
              points = {teamPoints}
              rebounds = {teamRebounds}
              blocks = {teamBlocks}
              steals = {teamSteals}
              turnovers = {teamTurnovers}
              threes = {teamThrees}
            />
            <TeamStatsDisplay
              title={"Opponent Stats"} 
              team = {leftTeam}
              assists = {oppAssists}
              points = {oppPoints}
              rebounds = {oppRebounds}
              blocks = {oppBlocks}
              steals = {oppSteals}
              turnovers = {oppTurnovers}
              threes = {oppThrees}
            />
            <PlayerInjuryDisplay team={leftTeam} injuries={playersInjury} />
          </Grid>
          <Grid item md={2}>
            <OddsDiplay leftTeam={leftTeam} rightTeam={rightTeam}/>
          </Grid>
          <Grid item md={5}>
            <h2>{rightTeam}</h2>
            <TeamAutoComplete team={rightTeam} setTeam={setRightTeam}/>
            <TeamStatsDisplay
              title={"Team Stats"}  
              team = {rightTeam}
              assists = {teamAssists}
              points = {teamPoints}
              rebounds = {teamRebounds}
              blocks = {teamBlocks}
              steals = {teamSteals}
              turnovers = {teamTurnovers}
              threes = {teamThrees}
            />
            <TeamStatsDisplay
              title={"Opponent Stats"} 
              team = {rightTeam}
              assists = {oppAssists}
              points = {oppPoints}
              rebounds = {oppRebounds}
              blocks = {oppBlocks}
              steals = {oppSteals}
              turnovers = {oppTurnovers}
              threes = {oppThrees}
            />
            <PlayerInjuryDisplay team={rightTeam} injuries={playersInjury} /> 
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
