import {useReactTable,getCoreRowModel,getFilteredRowModel,getPaginationRowModel,getSortedRowModel} from '@tanstack/react-table';
import { useState } from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton,Typography,Box,TableFooter} from '@mui/material';
import {FirstPage,LastPage,KeyboardArrowLeft,KeyboardArrowRight} from '@mui/icons-material';
import axios from 'axios';
const ReactTableExample = () => {
  const [data,setData] = useState([
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
  ]);
  axios.get('http://localhost:8000/users')
  .then(response=>
    {
      console.log("Пользователи:", response.data)
      setData(response.data)

})
  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      accessorKey: 'User',
      header: 'Name',
      enableSorting: true,
    },
    {
      accessorKey: 'Email',
      header: 'Email',
      enableSorting: true,
    },
    {
      accessorKey: 'Type',
      header: 'Type',
      enableSorting: true,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Box sx={{ p: 2 }}>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="react table example">
          <TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableCell 
                    key={header.id} 
                    onClick={header.column.getToggleSortingHandler()}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {header.column.columnDef.header}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted()] ?? null}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id} hover>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {cell.getValue()}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: 1,
                  }}
                >
                  <IconButton
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                    aria-label="first page"
                  >
                    <FirstPage />
                  </IconButton>
                  <IconButton
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    aria-label="previous page"
                  >
                    <KeyboardArrowLeft />
                  </IconButton>
                  <IconButton
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    aria-label="next page"
                  >
                    <KeyboardArrowRight />
                  </IconButton>
                  <IconButton
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                    aria-label="last page"
                  >
                    <LastPage />
                  </IconButton>

                  <Typography variant="body2" sx={{ display: 'flex', gap: 1 }}>
                    <span>Page</span>
                    <strong>
                      {table.getState().pagination.pageIndex + 1} of{' '}
                      {table.getPageCount()}
                    </strong>
                  </Typography>

                  <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                      table.setPageSize(Number(e.target.value));
                    }}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      marginLeft: '16px',
                    }}
                  >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ReactTableExample;