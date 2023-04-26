
import React, {useState, useEffect} from 'react'
import './App.css';
import Container from '@mui/material/Container';
import {Route} from 'wouter'


import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const debug = false

function App() {
  const [leftTeam, setLeftTeam] = useState("Charlotte Hornets")
  const [rightTeam, setRightTeam] = useState("Detroit Pistons")
  return (
    <div className="App">
      <Container maxWidth={false}>
        <Navbar 
          handleLeft={setLeftTeam} 
          handleRight={setRightTeam}
        />
        <Route path="/">
          <HomePage/>
        </Route>
        <Route path ="/matchup">
          <Dashboard 
            setLeftTeam={setLeftTeam} 
            setRightTeam={setRightTeam} 
            leftTeam={leftTeam} 
            rightTeam={rightTeam}
          />
        </Route>
      </Container>
    </div>
  );
}

export default App;
