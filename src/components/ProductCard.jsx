import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import Card from './Card';
import axios from 'axios';

const ProductCard = ({ api }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the given API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(api);
      setProducts(response.data);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to fetch products. Please try again later.');
    }
  };

  // Fetch products on component mount or when the API URL changes
  useEffect(() => {
    fetchProducts();
  }, [api]);

  return (
    <div>
      {error ? (
        <div style={{ textAlign: 'center', color: 'red', margin: '20px 0' }}>
          {error}
        </div>
      ) : (
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProductCard;
