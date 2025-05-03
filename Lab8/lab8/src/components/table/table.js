import {useReactTable,getCoreRowModel,getFilteredRowModel,getPaginationRowModel,ColumnDef,flexRender,} from '@tanstack/react-table';
  import { useState } from 'react';
  import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton,Typography,Box,TableFooter,TablePagination} from '@mui/material';
  import {FirstPage,LastPage,KeyboardArrowLeft,KeyboardArrowRight,} from '@mui/icons-material';
  
  
  const ReactTableExample = () => {
    const [data, setData] = useState([
      { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
    ]);
  
    const columns = [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },

      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'Type',
        header: 'Type',
      },
    ];
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
  
    return (
      <Box sx={{ p: 2 }}>
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 650 }} aria-label="react table example">
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} hover>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
                      {[10, 20, 30, 40, 50].map((pageSize) => (
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