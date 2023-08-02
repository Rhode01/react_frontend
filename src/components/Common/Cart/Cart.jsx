import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import "./cart.css";
const Cart = ({ CartItem, decreaseQty, addToCart}) => {
  return (
    <>
    <div>
      <Navbar />
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            <h1 className='no-items product'>No Items are add in Cart</h1>
              return (
                <div className="cart-list product d_flex" key="">
                  <div className="img">
                    <img src="" alt="Product image" />
                  </div>
                  <div className="cart-details">
                    <h3></h3>
                    <h4>
                      
                      <span></span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="uil uil-times"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button className="incCart" onClick={() => addToCart()}>
                        <i className="uil uil-plus"></i>
                      </button>
                      <button className="desCart" onClick={() => decreaseQty()}>
                        <i className="uil uil-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
          </div>
              )
          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>$</h3>
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