import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TeamStatsTable = ({allStats}) => {

  return (
    <TableContainer component={Paper} sx={{ marginBottom: '50px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stat Type</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Average Per Game</TableCell>
            <TableCell align="right">Last 3 Average</TableCell>
            <TableCell align="right">Last Game</TableCell>
            <TableCell align="right">Home Average</TableCell>
            <TableCell align="right">Away Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allStats.map((row) => {
            if (!row) {
              return (
                <TableCell>
                </TableCell>
              )
            }
            return (
              <TableRow
                key={row.stat_type}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.stat_type}
                </TableCell>
                <TableCell align="right">{row.rank}</TableCell>
                <TableCell align="right">{row.total_avg}</TableCell>
                <TableCell align="right">{row.last_three_avg}</TableCell>
                <TableCell align="right">{row.last_game}</TableCell>
                <TableCell align="right">{row.home_avg}</TableCell>
                <TableCell align="right">{row.away_avg}</TableCell>
              </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TeamStatsTable