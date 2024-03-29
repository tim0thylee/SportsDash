import React, {useState, useEffect} from 'react';
import moment from 'moment'
import { Link } from 'wouter';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

import gamesToday from '../api/gamesToday';


const pages = ['Home', 'Select Matchups', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({handleLeft, handleRight}) {
  const [anchorElNav, setAnchorElNav] =useState(null);
  const [anchorMatchup, setAnchorMatchup] = useState(null)
  const [todaysGames, setTodaysGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      let currentDate = moment().format("YYYY-MM-DD")
      let games = await gamesToday(currentDate)
      // for testing when there are not games that day. 
      // let games = await gamesToday("2023-04-12")
      setTodaysGames(games.response)
    }
    getGames().catch(console.error)
  }, [])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenMatchup = (event) => {
    handleCloseNavMenu()
    setAnchorMatchup(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseMatchup = (game) => {
    handleLeft(game.teams.away.name)
    handleRight(game.teams.home.name)
    handleCloseNavMenu()
    setAnchorMatchup(null)
  }

  const handleCloseNoMatchup = () => {
    handleCloseNavMenu()
    setAnchorMatchup(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsBasketballIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SportsDash
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Link href="/" className="noCustomStyle">
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem key={"Select Matchups"} onClick={handleOpenMatchup}>
                <Typography textAlign="center">Select Matchups</Typography>
              </MenuItem>
              {/* <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About</Typography>
              </MenuItem> */}
            </Menu>
          </Box>
          <SportsBasketballIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SportsDash
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link href="/" className="noCustomStyle">
              <Button
                key={"Home"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            </Link>
            <Button
              key={"Select Matchups"}
              onClick={handleOpenMatchup}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Select Matchups
            </Button>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorMatchup}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorMatchup)}
              onClose={handleCloseNoMatchup}
            >
              {!todaysGames.length ? 
                <MenuItem onClick={handleCloseNoMatchup}>
                  <Typography textAlign="center">No Games Today</Typography>
                </MenuItem> : 
                todaysGames.map((game) => (
                  <Link href="/matchup" className="noCustomStyle" onClick={() => handleCloseMatchup(game)}>
                    <MenuItem key={game.id}>
                      <Typography textAlign="center">
                          {game.teams.away.name} vs {game.teams.home.name}
                      </Typography>
                    </MenuItem>
                  </Link>
              ))}
            </Menu>
            {/* <Button
              key={"About"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
             About
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;