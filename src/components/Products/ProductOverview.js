/** @format */

import React, { useEffect, useState } from "react";
import { BASE_URL, GET_PRODUCT_DETAILS } from "../../constants/Index";
import axios from "axios";
import "./products.css";
import Navbar from "../Common/Header/Navbar";
import Button from "../Buttons/Button";

const ProductOverview = ({ incrementItemsInCart, decrementItemsInCart}) => {
  const proId = localStorage.getItem("productId");
  const productId = JSON.parse(proId);
  const [product, setProduct] = useState([]);
  const [productImage, setProductImage] = useState([]);

  useEffect(() => {
    const fetch_productDetails = async () => {
      try {
        const response = await axios.get(`${GET_PRODUCT_DETAILS}/${productId}`);
        if (response.status === 200) {
          const productImageUrl = `${BASE_URL}${response.data.product_image}`;
          setProductImage(productImageUrl);
          setProduct(response.data.product);
        } else {
          console.log("Error: Unable to fetch product details");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetch_productDetails();
  }, [productId]);

  return (
    <div>
      <Navbar />
      {product && (
        <>
          <div className="wrapper">
            <div className="col-1-2">
              <div className="product-wrap">
                <div className="product-shot">
                  <img src={productImage} alt="" className="image-image" />
                </div>
              </div>
            </div>
            <div className="col-1-2">
              <div className="product-info">
                <h2>{product.product_name}</h2>
                <h2>{product.product_price}</h2>
                <div className="desc">{product.product_description}</div>
                <ul className="sizing-list">
                  <li style={{ textDecoration: "None" }} className="size">
                    {product.product_size}
                  </li>
                </ul>
              </div>
            </div>
            <div className="buynow">
              <h2>{product.product_name}</h2>
              <h6>Quantity</h6>
              <span style={{ padding: "10px" }}>
                <i
                  className="uil uil-plus"
                  style={{ cursor: "pointer" }}
                  onClick={IncrementItemInCart}
                ></i>
                {quantity}
                <i
                  className="uil uil-minus"
                  style={{
                    marginLeft: "10px",
                    cursor: quantity === 1 ? "not-allowed" : "pointer",
                    opacity: quantity === 1 ? 0.5 : 1,
                  }}
                  onClick={quantity === 1 ? undefined : DecrementItemInCart}
                ></i>
              </span>
              <div>
                <Button name="Buy Now" />
                <Button name="Add to Cart" color="#639e95" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductOverview;
