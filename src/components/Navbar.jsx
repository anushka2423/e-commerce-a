import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { FilterOutlined, HomeOutlined, MenuOutlined, ProductOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Menu } from 'antd';
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
    label: <Link to="/">Home</Link>,
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: <Link to="/product" rel="noopener noreferrer">Products</Link>,
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
  {
    label: 'Filter',
    key: 'filter',
    icon: <FilterOutlined />,
    children: [
      {label: 'low to high', key: 'asc'},
      {label: 'high to low', key: 'desc'},
    ]
  }
];

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
  const cartItems = useSelector((state) => state.cart.cart);
  const count = cartItems.length;

  // Redux selectors
  const username = useSelector((state) => state.user.username);
  const token = useSelector((state) => state.user.token);  

  // Handle menu item clicks
  const handleMenuClick = (e) => {
    console.log('Menu clicked:', e);
    setCurrent(e.key);

    if (e.key === 'asc') {
      // Dispatch the filter action
      dispatch(setApiEndPoint('https://fakestoreapi.com/products?sort=asc'));
    }else if(e.key === 'desc') {
      dispatch(setApiEndPoint('https://fakestoreapi.com/products?sort=desc'));
    } else if (apiEndpoints[e.key]) {
      // Dispatch API endpoint update if the key exists in apiEndpoints
      dispatch(setApiEndPoint(apiEndpoints[e.key]));
    }
  };

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
    setCurrent('');
    navigate('/login');
    alert('Logged out successfully!');
  };

  return (
    <div style={styles.container}>
      <div>hello {username}</div>
      <Menu onClick={handleMenuClick} selectedKeys={[current]}  items={productMenuItems} style={styles.menu} />
      <div style={styles.userMenu}>
        <Link to="/cart" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#333",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <Badge
                  count={count === 0 ? 0 : count}
                  offset={[-5, 5]}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <Avatar
                    shape="square"
                    icon={<ShoppingCartOutlined />}
                    style={{
                      backgroundColor: "transparent",
                      color: "#333",
                    }}
                  />
                </Badge>
              </div>
              <span style={{ marginLeft: "8px" }}>Cart</span>
            </button>
          </Link>
        {token ? (
          <Button style={{marginTop: "10px"}} onClick={handleLogout}>Logout</Button>
        ) : (
          <Button style={{marginTop: "10px"}} onClick={() => navigate('/login')} type='primary'>LogIn</Button>
        )}
      </div>
  </div>
  );
};

export default Navbar;
