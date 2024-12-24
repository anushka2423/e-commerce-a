import React, { useState } from 'react';
import { Col, Card, Button, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/slices/cartSlice/cartSlice';

const { Meta } = Card;

// Inline styles for reuse
const styles = {
    container: { 
        padding: '8px 0'
        
    },
    card: { 
        // width: , 
        paddingInline: '10px 10px',
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
const truncate = (description, wordLimit = 5) => {
    const words = description.split(' ');
    return words.length > wordLimit
        ? words.slice(0, wordLimit).join(' ') + '...'
        : description;
};

// Component for rendering a single product card
const Cards = ({ product }) => {
    const [alertVisible, setAlertVisible] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Navigate to the view product page with the selected product
    const viewHandler = () => {
        navigate('/view-product', { state: { product } });
    };

    // The item will dispatched to the cart
    const addTocartHandler = () => {
        dispatch(addtoCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
        }));
        console.log("Product added to cartL");
        setAlertVisible(true);

        // Hide the alert after 3 seconds
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };

    return (
        <Col className="gutter-row" offset={1} xs={22} md={12} xl={6} key={product.id}>
            <div style={styles.container}>
            {alertVisible && (
                    <Alert
                        type="success"
                        showIcon
                        message="Product added to cart"
                        closable
                        onClose={() => setAlertVisible(false)}
                    />
                )}
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
                        <Meta title={`₹ ${product.price}`} description={truncate(product.title, 2)} />
                        
                        {/* Display truncated description */}
                        <Meta title={truncate(product.description)} />

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
