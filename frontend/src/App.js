
import React, {useState, useEffect} from 'react'
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import TeamAutoComplete from './components/TeamAutoComplete';
import OddsDiplay from './components/OddsDisplay';
import PlayerTable from './components/PlayerTable'
import PlayerInjuryDisplay from './components/PlayerInjuryDisplay';


function App() {
  const [leftTeam, setLeftTeam] = useState("Philadelpha 76ers")
  const [rightTeam, setRightTeam] = useState("Miami Heat")

  return (
    <div className="App">
      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item md={5}>
            {leftTeam} 
            <TeamAutoComplete team={leftTeam} setTeam={setLeftTeam}/>
            <PlayerTable/>
            <PlayerInjuryDisplay team={leftTeam}/>
          </Grid>
          <Grid item md={2}>
            <OddsDiplay leftTeam={leftTeam} rightTeam={rightTeam}/>
          </Grid>
          <Grid item md={5}>
            {rightTeam}
            <TeamAutoComplete team={rightTeam} setTeam={setRightTeam}/>
            <PlayerTable/>
            <PlayerInjuryDisplay team={rightTeam}/> 
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
