
import MainContent from "./components/MainContent/MainContent ";
import { Routes,Route } from "react-router-dom";
import ProductOverview from "./components/Products/ProductOverview";
import Cart from "./components/Common/Cart/Cart";
function App() {
  return (
    <div className=".container-fluid">
      <Routes>
        <Route path="/" element=<MainContent /> />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-overview" element=<ProductOverview /> />
      </Routes>
    </div>
  );
}

export default App;
