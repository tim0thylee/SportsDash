import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const PlayerInjuryTable = ({players}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center">Injury Date</TableCell>
            <TableCell align="center">Injury Status</TableCell>
            <TableCell align="center">Injury Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow
              key={player.player_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {player.player_name}
              </TableCell>
              <TableCell align="center">{player.player_pos}</TableCell>
              <TableCell align="center">{player.injury_date}</TableCell>
              <TableCell align="center">{player.injury_status}</TableCell>
              <TableCell align="left">{player.injury_desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlayerInjuryTable