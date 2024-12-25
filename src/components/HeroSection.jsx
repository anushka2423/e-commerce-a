import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  const [products, setProducts] = useState([]);

  const random = Math.floor(Math.random() * 3);

  // Function to select random products
  const getRandomProducts = async () => {
    try {
      // electronics
      const electronics = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const randomEle = electronics.data[random];

      // clothing
      const clothing = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const randomCloth = clothing.data[random];

      // jewelry
      const jewelery = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const randomJewel = jewelery.data[random];

      setProducts([randomEle, randomCloth, randomJewel]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getRandomProducts();
  }, []);

  console.log("products", products);

  return (
    <Carousel
      autoplay
      style={{
        width: "100vw",
        margin: "0 auto",
        height: "60vh",
        marginBottom: "30px",
        padding: "0 20px",
      }}
      speed={0.8}
    >
      {products.map((product, index) => (
        <div key={index}>
          <HeroCard product={product} />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSection;
