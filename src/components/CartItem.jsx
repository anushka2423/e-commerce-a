import { Button, Card, Select } from 'antd'
const { Meta } = Card;
import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/slices/cartSlice/cartSlice';

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const decrementHandler = () => {
        dispatch(decrementQuantity({id: item.id}));
    };

    const incrementHandler = () => {
        dispatch(incrementQuantity({id: item.id}));
    };

    const removehandler = () => {
        dispatch(removeFromCart({id: item.id}));
    }

  return (
    <Card
        style={{width: "100%"}}
        hoverable
    >
        <div style={{display: 'flex', gap: 50, alignItems: 'center'}}>
            <div style={{width: "25%"}}>
                <img src={item.image} alt="Product image" width= "100%" height= "100%"/>
            </div>  
            <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
                {/* Display product price and title */}
                <Meta title={item.title} description={`Price: ₹${item.price}`} />

                {/* Action buttons */}
                <div style={{display: 'flex', gap: 40}}>
                    <p>Quantity</p>
                    <div>
                        <Button onClick={decrementHandler}>-</Button>
                        <span style={{paddingInline: '10px'}}>{item.quantity}</span>
                        <Button onClick={incrementHandler}>+</Button>
                    </div>

                    <Button type="primary" danger onClick={removehandler}>
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default CartItem
