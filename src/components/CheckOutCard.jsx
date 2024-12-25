import { Button, Card } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeall } from '../redux/slices/cartSlice/cartSlice'

const CheckOutCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const token = useSelector((state) => state.user.token);

  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const price = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const buynowhandler = () => {
    if(token) {
      alert('order is successfull');
      dispatch(removeall());
    }else {
      alert('you need to login first');
      navigate('/login');
    }
  }

  return (
    <div>
      <Card style={{width: 280}} title="Buynow 👜" bordered={false}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <p>total item: {quantity}</p>
                <p>total price: ₹{price}</p>
            </div>
        
        <Button onClick={buynowhandler} type='primary'>Buy</Button>
        </div>
      </Card>
    </div>
  )
}

export default CheckOutCard
