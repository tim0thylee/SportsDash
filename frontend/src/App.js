
import React, {useState, useEffect} from 'react'
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import TeamAutoComplete from './components/TeamAutoComplete';
import OddsDiplay from './components/OddsDisplay';
import PlayerTable from './components/PlayerTable'
import PlayerInjuryDisplay from './components/PlayerInjuryDisplay';
import playerInjuryAPI from './api/playerInjury'
import {INJURY_SAMPLE_DATA} from './api/SampleData'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const debug = false

function App() {
  const [leftTeam, setLeftTeam] = useState("Philadelpha 76ers")
  const [rightTeam, setRightTeam] = useState("Miami Heat")
  const [playersInjury, setPlayersInjury] = useState([])

  useEffect(() => {
    // Call the data and store in odds. 
    const callData= async () => {
        const oddsData = debug ? INJURY_SAMPLE_DATA : await playerInjuryAPI()
        setPlayersInjury(oddsData.items)
    }
    
    callData().catch(console.error)
  }, [])

  return (
    <div className="App">
      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item md={5}>
            <h2>{leftTeam}</h2> 
            <TeamAutoComplete team={leftTeam} setTeam={setLeftTeam}/>
            <PlayerTable/>
            <PlayerInjuryDisplay team={leftTeam} injuries={playersInjury} />
          </Grid>
          <Grid item md={2}>
            <OddsDiplay leftTeam={leftTeam} rightTeam={rightTeam}/>
          </Grid>
          <Grid item md={5}>
            <h2>{rightTeam}</h2>
            <TeamAutoComplete team={rightTeam} setTeam={setRightTeam}/>
            <PlayerTable/>
            <PlayerInjuryDisplay team={rightTeam} injuries={playersInjury} /> 
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
