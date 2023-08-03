
import MainContent from "./components/MainContent/MainContent ";
import { Routes,Route } from "react-router-dom";
import ProductOverview from "./components/Products/ProductOverview";
import Cart from "./components/Common/Cart/Cart";
import Login from "./components/Pages/Login";
import { useState } from "react";

function App() {
   const cart = [];
   const [cartItems, setCartItems] = useState(cart);
   const [quantity, setQuantity] = useState(0);
   const addItemsToCart = (itemQuantity, productId) => {
     setCartItems((prevItems) => [
       ...prevItems,
       {
         Qty: parseInt(itemQuantity, 10), 
         productId: productId,
       },
     ]);
     console.log(cartItems)
   };

   const IncrementItemInCart = () => {
     setQuantity((prevQuantity) => prevQuantity + 1);
   };

   const DecrementItemInCart = () => {
     setQuantity((prevQuantity) => prevQuantity - 1); 
   };
  return (
    <div className=".container-fluid">
      <Routes>
        <Route path="/" element=<MainContent cartItems={cartItems} /> />
        <Route path="/login" element={<Login/>}/>
        <Route
          path="/cart"
          element={
            <Cart
              addItemsToCart={addItemsToCart}
              cartItems={cartItems}
              incrementItemsInCart={IncrementItemInCart}
              decrementItemsInCart={DecrementItemInCart}
            />
          }
        />
        <Route
          path="/product-overview"
          element=<ProductOverview
            addItemsToCart={addItemsToCart}
            incrementItemsInCart={IncrementItemInCart}
            decrementItemsInCart={DecrementItemInCart}
            quantity={quantity}
            cartItems={cartItems}
          />
        />
      </Routes>
    </div>
  );
}

export default App;
