import { Button, Card } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const CheckOutCard = () => {
  const cart = useSelector((state) => state.cart.cart);

  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const price = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <Card style={{width: 280}} title="Buynow 👜" bordered={false}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <p>total item: {quantity}</p>
                <p>total price: ₹{price}</p>
            </div>
        
        <Button type='primary'>Buy</Button>
        </div>
      </Card>
    </div>
  )
}

export default CheckOutCard
