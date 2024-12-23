import { Button, Card } from 'antd'
import Title from 'antd/es/skeleton/Title'
import React from 'react'

const CheckOutCard = () => {
  return (
    <div>
      <Card style={{width: 280}} title="Buynow 👜" bordered={false}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <p>total item: 2</p>
                <p>total price: ₹400</p>
            </div>
        
        <Button type='primary'>Buy</Button>
        </div>
      </Card>
    </div>
  )
}

export default CheckOutCard
