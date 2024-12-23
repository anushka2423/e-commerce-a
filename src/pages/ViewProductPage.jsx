import React from 'react';
import { Button, Rate } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve product data from route state
  const product = location.state?.product;

  // Fallback if no product is passed
  if (!product) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Product not found!</h1>
        <Button type="primary" onClick={() => navigate('/')}>
          Go Back to Product Page
        </Button>
      </div>
    );
  }

  // Styles
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '75%',
      margin: 'auto',
      display: 'flex',
      gap: '50px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      textAlign: 'center',
    },
    image: {
      width: '300px',
      marginBottom: '20px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    },
    titlePrice: {
      lineHeight: '1.5',
      display: 'flex',
      gap: '10px',
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
    rate: {
      fontSize: '18px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Product Image and Title */}
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.title} style={styles.image} />
        <h2>{product.title}</h2>
      </div>

      {/* Product Details */}
      <div style={styles.details}>
        <h1 style={styles.titlePrice}>
          {product.category}
          <span>{`₹ ${product.price}`}</span>
        </h1>
        <p style={styles.description}>{product.description}</p>

        {/* Product Rating */}
        <Rate
          allowHalf
          defaultValue={product.rating.rate}
          disabled
          style={styles.rate}
        />

        {/* Stock Information */}
        <h2>
          <span>Stock: </span> {product.rating.count}
        </h2>

        {/* Navigation Button */}
        <Button type="primary" onClick={() => navigate('/')}>
          Go Back to Product Page
        </Button>
      </div>
    </div>
  );
};

export default ViewProductPage;
