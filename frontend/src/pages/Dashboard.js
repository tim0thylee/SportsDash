import React, {useState, useEffect} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

import TeamAutoComplete from '../components/TeamAutoComplete';
import OddsDiplay from '../components/OddsDisplay';
import TeamStatsDisplay from '../components/TeamStatsDisplay'
import PlayerInjuryDisplay from '../components/PlayerInjuryDisplay';
import LastGamesDisplay from '../components/LastGamesDisplay'
import MatchupRecordDisplay from '../components/MatchupRecordDisplay';

import playerInjuryAPI from '../api/playerInjury'
import {INJURY_SAMPLE_DATA} from '../api/SampleData'
import { team_assists, team_points, team_rebounds, team_blocks, team_steals, team_threes, team_turnovers } from '../api/teamStats';
import { opp_assists, opp_points, opp_rebounds, opp_blocks, opp_steals, opp_threes, opp_turnovers } from '../api/oppStats';
import teamInfo from '../api/teamInfo'

import { arrayToObjTeam, arrayToObjNbaTeams } from '../utils/utils';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const debug = false        

function App({setLeftTeam, setRightTeam, leftTeam, rightTeam}) {
  // purpose of global state is for the purpose of less calls to the api. 


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

  const [nbaTeamInfo, setNbaTeamInfo] = useState({})

  useEffect(() => {
    // Call the data and store in odds. We do this to save number of data calls. 
    const callInjuryData= async () => {
      const oddsData = debug ? INJURY_SAMPLE_DATA : await playerInjuryAPI()
      setPlayersInjury(oddsData.items)
    }
    
    callInjuryData().catch(console.error)
    
    // These calls are for the team stats and opponent stats section. 
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

    //This call is to receive the teams from the nba api.
    //it retrieved data such as team logo and id
    arrayToObjNbaTeams(teamInfo, setNbaTeamInfo)
  }, [])

  //this is needed to handle the case where 
  const showNbaLogo = (curTeam) => {
    if (curTeam in nbaTeamInfo) {
      return <img src={nbaTeamInfo[curTeam].logo} alt={curTeam}/>
    } else {
      return <ImageNotSupportedIcon fontSize="large" sx={{height: '150px'}}/>
    }
  }

  return (
    <Container 
        maxWidth={false} 
        sx={{
          backgroundColor: 'rgba(232,244,248, 0.7)',
          marginTop: "20px",
          borderRadius: "10px"
        }}
      >
      <Grid container spacing={1}>
        <Grid item md={5}>
          {showNbaLogo(leftTeam)}
          <h2 style={{marginBottom: "10px"}}>{leftTeam}</h2> 
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
            textTip={`These are the average (mean) statistics 
            for the selected team for the current season. The rank represents the 
            team's rank in the category out of 30 nba teams.`}
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
            textTip={`These are the average (mean) statistics 
            for all of the opponents played in the current season. The rank represents the 
            team's rank in the category out of 30 nba teams.`}
          />
          <LastGamesDisplay team={leftTeam} allTeamInfo={nbaTeamInfo}/>
          <PlayerInjuryDisplay team={leftTeam} injuries={playersInjury} />
        </Grid>
        <Grid item md={2}>
          <OddsDiplay leftTeam={leftTeam} rightTeam={rightTeam}/>
          <MatchupRecordDisplay 
            leftTeam={leftTeam} 
            rightTeam={rightTeam}
            teamInfo={nbaTeamInfo}
          />
        </Grid>
        <Grid item md={5}>
          {showNbaLogo(rightTeam)}
          <h2 style={{marginBottom: "10px"}}>{rightTeam}</h2>
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
            textTip={`These are the average (mean) statistics 
            for the selected team for the current season. The rank represents the 
            team's rank in the category out of 30 nba teams.`}
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
            textTip={`These are the average (mean) statistics 
            for the selected team for the current season. The rank represents the 
            team's rank in the category out of 30 nba teams.`}
          />
          <LastGamesDisplay team={rightTeam} allTeamInfo={nbaTeamInfo}/>
          <PlayerInjuryDisplay team={rightTeam} injuries={playersInjury} /> 
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;