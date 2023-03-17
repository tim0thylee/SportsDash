import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function OddsTable({leftTeam, rightTeam, odds}) {
    return (
    <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
        <TableHead>
            <TableRow>
            <TableCell>Book Name</TableCell>
            <TableCell>{leftTeam.split(" ")[1]}</TableCell>
            <TableCell>{rightTeam.split(" ")[1]}</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {odds.bookmakers.map((odd) => {
                // below is to show the right odds are shown on the right team. 
                const firstTeam =  odd.markets[0].outcomes[0]
                const secondTeam = odd.markets[0].outcomes[1]

                const leftTeamPrice = firstTeam.name === leftTeam ? firstTeam.price : secondTeam.price
                const rightTeamPrice = firstTeam.name === rightTeam ? firstTeam.price : secondTeam.price
                return (
                    <TableRow
                        key={odd.key}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {odd.title}
                        </TableCell>
                        <TableCell align="right">{leftTeamPrice}</TableCell>
                        <TableCell align="right">{rightTeamPrice}</TableCell>
                    </TableRow>)
            })}
        </TableBody>
        </Table>
    </TableContainer>
    );
}

export default OddsTable