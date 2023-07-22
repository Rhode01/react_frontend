/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div className="search-bar-brand">Rhode Ecommerce</div>
      <div className="search-bar-panel">
        <input type="text"
          placeholder="What are you looking for?"
          className="search-bar-input"
        />
        <button className="search-bar-button">
          <i className="uil uil-search"></i>
        </button>
      </div>
      <div className="search-bar-cart">
        <Link to="/cart" className="cart-link">
          <i className="uil uil-shopping-cart">{props.cartItems}</i>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
