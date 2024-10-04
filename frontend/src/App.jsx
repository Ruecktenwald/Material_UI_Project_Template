import React from 'react';
import withDataFetching from './components/withDataFetching';
import DataTable from './components/DataTable';
import { Container, Typography } from '@mui/material';

// Wrap the DataTable component with the data-fetching HOC
const DataTableWithFetching = withDataFetching(DataTable, 'http://localhost:8000/api/generic-table');

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Data Table
      </Typography>
      {/* Render the DataTable with automatic data fetching */}
      <DataTableWithFetching />
    </Container>
  );
}

export default App;
