import React, { useState } from 'react'
import { Alert, Input, Pagination } from 'antd';
import ProductPage from './ProductPage';
import { useDispatch } from 'react-redux';
import { setApiEndPoint } from '../redux/slices/categorySlice/apiSlice';
import HeroSection from '../components/HeroSection';
const { Search } = Input;

const HomePage = () => {
    const [alert, setAlert] = useState(false);
    const apiEndpoints = {
        electronics: 'https://fakestoreapi.com/products/category/electronics',
        "mens clothing": "https://fakestoreapi.com/products/category/men's clothing",
        "womens clothing": "https://fakestoreapi.com/products/category/women's clothing",
        jewelery: 'https://fakestoreapi.com/products/category/jewelery',
    };

    const dispatch = useDispatch();

    const onSearch = (value) => {
        const category = value.trim().toLowerCase();
        console.log(category);

        // Identify the API endpoint
        const endpoint = apiEndpoints[category];
        if (endpoint) {
            // Dispatch the endpoint to Redux
            dispatch(setApiEndPoint(endpoint));
            console.log(`API Endpoint for ${category}: ${endpoint}`);
        } else {
            console.error('Category not found. Please enter a valid category.');
            setAlert(true);
        }
    };

    // Handle pagination change
    const onPageChange = () => {
        setCurrentPage(page);
        dispatch();
    }

    const onClose = (e) => {
        console.log(e, 'I was closed.');
    };

  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',marginTop: '20px', marginLeft: '35%'}}>
        <Search
            placeholder="enter category to search 🐛"
            onSearch={onSearch}
            style={{width: '50%'}}
            />
        </div>
        {
            alert && (
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closable
                    onClose={onClose}
                    style={{width: '50%', margin: 'auto', marginBlock: '30px'}}
                />
            )
        }
        <ProductPage/>

        <Pagination style={{marginBlock: '20px'}} onChange={onPageChange} align="center" defaultCurrent={1} total={20} />
    </div>
  )
}

export default HomePage
