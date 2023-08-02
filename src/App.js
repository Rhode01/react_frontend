
import MainContent from "./components/MainContent/MainContent ";
import { Routes,Route } from "react-router-dom";
import ProductOverview from "./components/Products/ProductOverview";
import Cart from "./components/Common/Cart/Cart";
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
     setQuantity((prevQuantity) => prevQuantity + parseInt(itemQuantity, 10));
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
        <Route
          path="/"
          element=<MainContent cartItems={cartItems}      />
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route
          path="/product-overview"
          element=<ProductOverview
            addItemsToCart={addItemsToCart}
            incrementItemsInCart={IncrementItemInCart}
            decrementItemsInCart={DecrementItemInCart}
            quantity={quantity}
          />
        />
      </Routes>
    </div>
  );
}

export default App;
