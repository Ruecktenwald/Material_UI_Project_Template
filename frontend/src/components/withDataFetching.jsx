import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Box } from '@mui/material';

const withDataFetching = (WrappedComponent, url) => {
  return function DataFetchingComponent(props) {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          // Log the URL to check if it's valid
          console.log('Fetching data from:', url);
    
          const response = await axios.get(url, {
            params: {
              page,
            },
          });
    
          if (response.data && response.data.data && response.data.columns) {
            setData(response.data.data);
            setColumns(response.data.columns);
          } else {
            throw new Error('Invalid response structure. Expected data and columns fields.');
          }
    
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
    
      fetchData();
    }, [url, page]);
    
    // Handle page change
    const handlePageChange = (newPage) => {
      setPage(newPage);
    };

    // Show a loading spinner while fetching data
    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      );
    }

    // Show an error message if something went wrong
    if (error) {
      return <p>Error: {error}</p>;
    }

    // Render the wrapped component with the fetched data
    return (
      <WrappedComponent
        data={data}
        columns={columns}
        page={page}
        onPageChange={handlePageChange}
        {...props} // Pass any additional props to the wrapped component
      />
    );
  };
};

export default withDataFetching;
