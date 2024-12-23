import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { MenuOutlined, ProductOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setApiEndPoint } from '../redux/slices/categorySlice/apiSlice';
import { logout } from '../redux/slices/userSlice/userSlice';

// API Endpoints for categories
const apiEndpoints = {
  electronics: 'https://fakestoreapi.com/products/category/electronics',
  "men's clothing": 'https://fakestoreapi.com/products/category/men\'s clothing',
  "women's clothing": 'https://fakestoreapi.com/products/category/women\'s clothing',
  jewelery: 'https://fakestoreapi.com/products/category/jewelery',
};

// Menu items for categories and products
const productMenuItems = [
  {
    label: <a href="/" rel="noopener noreferrer">Products</a>,
    key: 'products',
    icon: <ProductOutlined />,
  },
  {
    label: 'Categories',
    key: 'categories',
    icon: <MenuOutlined />,
    children: [
      { label: 'Electronics', key: 'electronics' },
      { label: "Men's Clothing", key: "men's clothing" },
      { label: "Women's Clothing", key: "women's clothing" },
      { label: 'Jewelery', key: 'jewelery' },
    ],
  },
];

// Menu items for cart
const cartMenuItem = {
  label: <a href="/cart" rel="noopener noreferrer">Cart</a>,
  key: 'cart',
  icon: <ShoppingCartOutlined />,
};

// Styles for reusable components
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    alignItems: 'center',
    margin: '0 20px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '300px',
  },
  userMenu: {
    display: 'flex',
  }
};

const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux selectors
  const username = useSelector((state) => state.user.username);
  const token = useSelector((state) => state.user.token);  

  // Handle menu item clicks
  const handleMenuClick = (e) => {
    console.log('Menu clicked:', e);
    setCurrent(e.key);

    // Dispatch API endpoint update if the key exists in apiEndpoints
    if (apiEndpoints[e.key]) {
      dispatch(setApiEndPoint(apiEndpoints[e.key]));
    }
  };

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
    setCurrent('');
    alert('Logged out successfully!');
  };

  return (
    <div style={styles.container}>
      <div>hello {username}</div>
      <Menu onClick={handleMenuClick} selectedKeys={[current]} mode="horizontal" items={productMenuItems} style={styles.menu} />
      <div style={styles.userMenu}>
        <Menu onClick={handleMenuClick} selectedKeys={[current]} mode="horizontal" items={[cartMenuItem]} style={{minWidth: "100px"}} />
        {token ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={() => navigate('/login')} type='primary'>LogIn</Button>
        )}
      </div>
  </div>
  );
};

export default Navbar;
