import React, { useState } from 'react'
import { Alert, Input } from 'antd';
import ProductPage from './ProductPage';
import { useDispatch } from 'react-redux';
import { setApiEndPoint } from '../redux/slices/categorySlice/apiSlice';
import HeroSection from '../components/HeroSection';
const { Search } = Input;

const HomePage = () => {

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
            dispatch(setApiEndPoint('https://fakestoreapi.com/products'));
        }
    };

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
        
        <div style={{marginBottom: '5%'}}>
            <HeroSection/>
        </div>
        <ProductPage/>
    </div>
  )
}

export default HomePage
