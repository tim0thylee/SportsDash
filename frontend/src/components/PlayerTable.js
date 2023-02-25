import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, points, rebounds, assists, steals, blocks, turnovers) {
  return { name, points, rebounds, assists, steals, blocks, turnovers };
}

const rows = [
  createData("lebron", 23.4, 10, 10, 1,3,4),
  createData("lebron", 23.4, 10, 10, 1,3,4),
  createData("lebron", 23.4, 10, 10, 1,3,4),
  createData("lebron", 23.4, 10, 10, 1,3,4),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Rebounds</TableCell>
            <TableCell align="right">Assists</TableCell>
            <TableCell align="right">Steals</TableCell>
            <TableCell align="right">Blocks</TableCell>
            <TableCell align="right">Turnovers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.rebounds}</TableCell>
              <TableCell align="right">{row.assists}</TableCell>
              <TableCell align="right">{row.steals}</TableCell>
              <TableCell align="right">{row.blocks}</TableCell>
              <TableCell align="right">{row.turnovers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}