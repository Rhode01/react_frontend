import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import "./cart.css";
import axios from "axios";
import { BASE_URL, GET_CART_PRODUCTS } from "../../../constants/Index";
const Cart = ({cartItems, incrementItemsInCart,decrementItemsInCart, addItemsToCartz}) => {
  const [product, setProductInfo] = useState([]);
  const [productImage, setProductImage] = useState([]);
  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const productIds = [].concat(cartItems).map((item) => item.productId);
        const response = await axios.get(`${GET_CART_PRODUCTS}/${productIds}`);
        if (response.status === 200) {
          const productImageUrls = response.data.product_image.map(
            (relativePath) => `${BASE_URL}${relativePath}`
          );
          setProductImage(productImageUrls);
        } else {
          console.log("failed");
        }
      } catch (error) {}
    };
    fetchCartProducts();
  }, [cartItems]);
  return (
    <>
      <div>
        <Navbar cartItems={cartItems} />
        <section className="cart-container">
          <div className="cart-content">
            <div className="cart-details">
              {cartItems.length === 0 ? (
                <h1 className="no-items product">No Items are added to Cart</h1>
              ) : (
                cartItems.map((item) => (
                  <div className="cart-list" key={item.productId}>
                    <div className="img">
                      <img src={item.productImageURL} alt="Product image" />
                    </div>
                    <div className="cart-details">
                  
                    </div>
                    <div className="cart-items-function">
                      <div className="removeCart">
                        <button className="removeCart">
                          <i className="uil uil-times"></i>
                        </button>
                      </div>
                      <div className="cartControl">
                        <button className="incCart" onClick={() => addItemsToCart()}>
                          <i className="uil uil-plus"></i>
                        </button>
                        <button className="desCart" onClick={() => incrementItemsInCart()}>
                          <i className="uil uil-minus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-price"></div>
                  </div>
                ))
              )}
            </div>
            <div className="cart-summary">
              <div className="cart-total product">
                <h2>Cart Summary</h2>
                <div className="d_flex">
                  <h4>Total Price :</h4>
                  <h3>$</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Cart;