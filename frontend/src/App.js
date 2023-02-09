
import React, {useState} from 'react'
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import TeamAutoComplete from './components/TeamAutoComplete';
import OddsDiplay from './components/OddsDisplay';
import oddsApi from './api/odds';

function App() {
  // console.log(oddsApi("nba"))
  const [leftTeam, setLeftTeam] = useState("")
  const [rightTeam, setRightTeam] = useState("")

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {leftTeam} 
          <TeamAutoComplete team={leftTeam} setTeam={setLeftTeam}/>
          <OddsDiplay/>
          {rightTeam} 
          <TeamAutoComplete team={rightTeam} setTeam={setRightTeam}/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
