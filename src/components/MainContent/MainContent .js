
import React, { useState } from "react";
import "./MainContent.css";
import Navbar from "../Header/Navbar";
import SearchBar from "../Search_bar/SearchBar";
import ImageSlider from "../Image_Slider/ImageSlider";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
const MainContent = () => {
  const cart = [
    {
      Qty: "",
      productId: "",
    },
  ];
  const [cartItems, setCartItems] = useState(cart);
  const addItemsToCart = (itemQuantity, productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      Qty: itemQuantity,
      productId: productId,
    }));
  };
  return (
    <>
      <Navbar addItems={addItemsToCart} />
      <SearchBar cartItems ={cartItems}/>
      <div className="main-content">
        <Categories />
        <div className="center-content">
          <ImageSlider />
        </div>
      </div>
      <div className="products">
        <Products />
      </div>
    </>
  );
};
export default MainContent;
