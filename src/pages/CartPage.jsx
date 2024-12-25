import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import CheckOutCard from "../components/CheckOutCard";
import { useSelector } from "react-redux";
import Title from "antd/es/typography/Title";

const CartPage = () => {
  // Access cart items from the Redux store
  const cart = useSelector((state) => state.cart.cart);

  // Styles
  const styles = {
    emptyCart: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      marginTop: "20vh",
    },
    cartContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "25px",
    },
    cartItems: {
      display: "flex",
      flexDirection: "column",
      width: "55%",
      gap: "30px",
      alignItems: "center",
    },
  };

  return (
    <>
      {/* Show empty cart message */}
      {cart.length === 0 ? (
        <div style={styles.emptyCart}>
          <Title level={3}>Your cart is empty😦</Title>
          <p>Add items👘 to the cart to see them here.👜</p>
        </div>
      ) : (
        // Show cart items and checkout card
        <div style={styles.cartContainer}>
          <div style={styles.cartItems}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div>
            <CheckOutCard />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
