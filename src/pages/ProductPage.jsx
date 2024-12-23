import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  // Retrieve the API endpoint from the Redux store
  const apiEndPoint = useSelector((state) => state.api.apiEndPoint);

  // Centralized styling
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Render the ProductCard component if the API endpoint is available */}
      {apiEndPoint ? (
        <ProductCard api={apiEndPoint} />
      ) : (
        <div>Loading products...</div>
      )}
    </div>
  );
};

export default ProductPage;
