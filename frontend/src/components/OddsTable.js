import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function descendingComparator(a, b, orderBy) {
   
    const findB = b.markets[0].outcomes.find((outcome) => outcome.name === orderBy)
    const findA = a.markets[0].outcomes.find((outcome) => outcome.name === orderBy)

    if (findB && findA) {
        const teamB = findB.price
        const teamA = findA.price
        if (teamB < teamA) {
            return -1;
        }
        if (teamB > teamA) {
            return 1;
        }
        return 0;
    }
}

function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }  

const sortedRowInformation = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray.map((el, index) => [el, index])

    stabilizedRowArray.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
          return order;
        }
        return a[1] - b[1];
    })
    return stabilizedRowArray.map((el) => el[0])
}

function OddsTable({leftTeam, rightTeam, odds}) {

    const [orderDirection, setOrderDirection] = useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = useState(leftTeam)

    const handleRequestSort = (event, property) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property)
    }

    const oddsMapped = () => {
        return odds.bookmakers.map((odd) => {
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
                    <TableCell>
                        {leftTeamPrice}
                    </TableCell>
                    <TableCell>
                        {rightTeamPrice}
                    </TableCell>
                </TableRow>)
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Book Name</TableCell>
                        <TableCell key={leftTeam}>
                            <TableSortLabel
                                active={valueToOrderBy === leftTeam}
                                direction={valueToOrderBy === leftTeam ? orderDirection : 'asc'}
                                onClick={createSortHandler(leftTeam)}
                            >
                                {leftTeam.split(" ").pop()}
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key={rightTeam}>
                            <TableSortLabel
                                active={valueToOrderBy === rightTeam}
                                direction={valueToOrderBy === rightTeam ? orderDirection : 'asc'}
                                onClick={createSortHandler(rightTeam)}
                            >
                                {rightTeam.split(" ").pop()}
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sortedRowInformation(odds.bookmakers, getComparator(orderDirection, valueToOrderBy))
                        .map((odd, index) => {
                            // below is to show the right odds are shown on the right team. 
                            const firstTeam =  odd.markets[0].outcomes[0]
                            const secondTeam = odd.markets[0].outcomes[1]
                            console.log(firstTeam, secondTeam)
                            const leftTeamPrice = firstTeam.name === leftTeam ? firstTeam.price : secondTeam.price
                            const rightTeamPrice = firstTeam.name === rightTeam ? firstTeam.price : secondTeam.price
                            
                            return (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {odd.title}
                                    </TableCell>
                                    <TableCell align="center">
                                        {leftTeamPrice}
                                    </TableCell>
                                    <TableCell align="center">
                                        {rightTeamPrice}
                                    </TableCell>
                                </TableRow>)
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OddsTable