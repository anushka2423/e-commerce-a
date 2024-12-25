import React from "react";
import { Typography, Flex, Button } from "antd";

const { Title, Paragraph } = Typography;
const HeroCard = ({ product }) => {

  return (
    <Flex
      justify="space-between"
      style={{
        padding: 20,
        margin: "20px",
        borderRadius: 5,
        border: "1px solid transparent",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      }}
      align="center"
    >
      <div
        style={{
          width: "40%",
        }}
      >
        <Flex vertical>
          <Title
            style={{
              width: "100%",
            }}
          >
            {" "}
            {product?.title}
          </Title>
          <Paragraph>{product?.description}</Paragraph>
          <Button
            style={{
              width: "20%",
              marginTop: 10,
              color: "black",
              borderRadius: 5,
              fontSize: 16,
              fontWeight: "bold",
              padding: "10px",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Buy now
          </Button>
        </Flex>
      </div>
      <div
        style={{
          width: "50%",
        }}
      >
        <img
          src={product?.image}
          style={{
            width: "60%",
            height: "40vh",
            objectFit: "fill",
            borderRadius: 10,
            margin: "0 auto",
            padding: "10px",
          }}
          alt="Product Image"
        />
      </div>
    </Flex>
  );
};

export default HeroCard;
