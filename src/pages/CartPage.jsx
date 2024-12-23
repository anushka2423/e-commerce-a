import React from 'react'
import CartItem from '../components/CartItem'
import CheckOutCard from '../components/CheckOutCard'

const CartPage = () => {
  return (
    <div style={{ display:'flex', justifyContent: 'space-evenly'}}>
      {/* <h1>Cart here 🎀</h1> */}
      <CartItem/>
      <CheckOutCard/>
    </div>
  )
}

export default CartPage
