import React from 'react';
import { Col, Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

// Inline styles for reuse
const styles = {
    container: { 
        padding: '8px 0'
    },
    card: { 
        width: 250, 
        paddingInline: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    info: {
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px'
    },
    image: { height: 180 },
    buttonGroup: { 
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between'
    }
};

// Helper function to truncate description
const truncateDescription = (description, wordLimit = 5) => {
    const words = description.split(' ');
    return words.length > wordLimit
        ? words.slice(0, wordLimit).join(' ') + '...'
        : description;
};

// Component for rendering a single product card
const Cards = ({ product }) => {
    const navigate = useNavigate();

    // Navigate to the view product page with the selected product
    const viewHandler = () => {
        navigate('/view-product', { state: { product } });
    };

    // The item will dispatched to the cart
    const addTocartHandler = () => {

    };

    return (
        <Col className="gutter-row" offset={2} xs={22} md={12} xl={6} key={product.id}>
            <div style={styles.container}>
                <Card
                    hoverable
                    style={styles.card}
                    cover={
                        <img
                            alt="Product Image"
                            style={styles.image}
                            src={product.image}
                        />
                    }
                >
                    <div style={styles.info}>
                        {/* Display product price and title */}
                        <Meta title={`₹ ${product.price}`} description={product.title} />
                        
                        {/* Display truncated description */}
                        <Meta title={truncateDescription(product.description)} />

                        {/* Action buttons */}
                        <div style={styles.buttonGroup}>
                            <Button type="default" onClick={viewHandler}>
                                View
                            </Button>
                            <Button type="primary" onClick={addTocartHandler}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </Col>
    );
};

export default Cards;
