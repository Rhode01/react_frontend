/** @format */

import React from "react";

const Button = (props) => {
  const handleBuyNow = (name) => {
    console.log(name);
  };
  const buttonOnClick = (name) => {
    console.log(name);
    if (name === "Buy Now") {
      handleBuyNow();
    }
    if (name === "Add to Cart") {
      handleBuyNow(name);
    }
  };
  return (
    <div className>
    Hello
      {/* <button onClick={()=>buttonOnClick(props.name)}>{props.name}</button> */}
    </div>
  );
};
export default Button;
