// DataTable.jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const DataTable = ({ data = [], columns = [], page, onPageChange }) => {
  // Handle missing or undefined columns
  if (!columns || columns.length === 0) {
    return <p>No columns available</p>; // Fallback if no columns are provided
  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data} // Use the data for the rows
        columns={columns} // Use the columns
        page={page - 1} // DataGrid's pagination is zero-indexed, so subtract 1
        pageSize={5} // Adjust the number of rows displayed per page
        pagination
        onPageChange={(params) => onPageChange(params.page + 1)} // Pass the new page
        disableSelectionOnClick // Optional: Disable selection on row click
      />
    </Box>
  );
};

export default DataTable;
