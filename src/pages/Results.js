import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const columns = [
    { id: 'number', label: 'No'},
    { id: 'name', label: 'Name', minWidth: 170 },
    {
        id: 'title',
        label: 'Title',
        minWidth: 170,
    },
    {
        id: 'amount',
        label: 'Amount',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(number, name, title, amount) {
    return { number, name, title, amount };
}

const datas = [
    {
        id: 1,
        name: 'Adi Gunawan',
        title: 'Patungan 10k',
        amount: 10000
    },
    {
        id: 2,
        name: 'Adi',
        title: 'Patungan 30k',
        amount: 30000
    },
    {
        id: 3,
        name: 'Gunawan',
        title: 'Patungan 15k',
        amount: 15000
    },
    {
        id: 4,
        name: 'Hidayat Gunawan',
        title: 'Patungan 20k',
        amount: 20000
    },
    {
        id: 1,
        name: 'Adi Gunawan',
        title: 'Patungan 10k',
        amount: 10000
    },
    {
        id: 2,
        name: 'Adi',
        title: 'Patungan 30k',
        amount: 30000
    },
    {
        id: 3,
        name: 'Gunawan',
        title: 'Patungan 15k',
        amount: 15000
    },
    {
        id: 4,
        name: 'Hidayat Gunawan',
        title: 'Patungan 20k',
        amount: 20000
    },
    {
        id: 1,
        name: 'Adi Gunawan',
        title: 'Patungan 10k',
        amount: 10000
    },
    {
        id: 2,
        name: 'Adi',
        title: 'Patungan 30k',
        amount: 30000
    },
    {
        id: 3,
        name: 'Gunawan',
        title: 'Patungan 15k',
        amount: 15000
    },
    {
        id: 4,
        name: 'Hidayat Gunawan',
        title: 'Patungan 20k',
        amount: 20000
    },
]

const rows = datas && datas.map((data, index) => createData(index + 1, data.name, data.title, data.amount));

export default function Results() {

    const history = useHistory();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (apiData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(apiData);
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <div>
            <div className='my-3'>
                <button
                    className='btn btn-link'
                    onClick={() => history.push('/')}
                >
                    {'< Back to Donation'}
                </button>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label='sticky table'>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, indexRow) => {
                                    return (
                                        <TableRow
                                            hover
                                            role='checkbox'
                                            tabIndex={-1}
                                            key={'tablerow-'+indexRow}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.format &&
                                                        typeof value ===
                                                            'number'
                                                            ? column.format(
                                                                  value
                                                              )
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <div className='text-center'>
                <button
                    className='my-3 text-center btn btn-success'
                    onClick={(e) => exportToCSV(datas, 'donaturs')}
                >
                    Export
                </button>
            </div>
        </div>
    );
}