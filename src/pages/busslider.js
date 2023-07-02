import "../styles/loan.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product";
import { productData1, responsive } from "../data";
import React from 'react';

export default function busslider() {
  const product = productData1.map((item) => (
    <Product
    name={item.name}
    loans={item.loans}
    price={item.price}
    description={item.description}
    />
  ));

  return (
    <div className="">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
  }