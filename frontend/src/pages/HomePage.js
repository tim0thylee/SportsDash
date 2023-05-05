import React from 'react'
import {Link} from 'wouter'
import {Animated} from "react-animated-css";
import './css/HomePage.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from '../images/sportsdash-high-resolution-logo-black-on-transparent-background.png'

const HomePage = () => {
    return (
        <Box sx={{ 
                flexGrow: 1, 
                height: {xs:"100%", md: '700px'}, 
                display: "flex", 
                justifyContent:"center", 
                alignItems: "center",
                alignContent: "center",
            }}>
            <Box sx={{marginRight: '20px'}}>
                <Animated animationIn='fadeIn'>
                    <p className='majorParagraph'>
                        Don't bet
                        <br/>
                        without strategy.
                        <br/>
                        Analyze your reasoning.
                    </p>
                </Animated>
                <Animated animationIn='fadeIn' animationInDelay={500} >
                    <p className="minorParagraph">
                        SportsDash helps you view the data you need
                        <br/>
                        to make smarter bets and find the best value.
                        <br/>
                        <br/>
                        Now showing data for the 2022-2023 NBA season.
                    </p>
                </Animated>
                <Animated animationIn='fadeIn' animationInDelay={1000} >
                    <Link href="matchup">
                        <Button variant="contained">
                            <DashboardIcon sx={{marginRight: "5px"}}/>
                            Begin analysis
                            <ArrowForwardIcon sx={{marginLeft: "10px"}}/>
                        </Button>
                    </Link>
                </Animated>
            </Box>
            <Box sx={{display: {xs: "none", md: "flex", marginTop: "10px", marginLeft: "20px"}}}>
                <Animated animationIn='rollIn'>
                    <img className="sportsLogo" src={Logo} alt="SportsDash Logo"/>
                </Animated>
            </Box>
        </Box>
      );
}

export default HomePage