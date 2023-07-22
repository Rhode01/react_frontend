
import MainContent from "./components/MainContent/MainContent ";
import { Routes,Route } from "react-router-dom";
import ProductOverview from "./components/Products/ProductOverview";
function App() {
  return (
    <div className=".container-fluid">
    <Routes>
      <Route path="/" element=<MainContent/>/>
      <Route path="/product-overview" element=<ProductOverview/> />
    </Routes>
    </div>
  );
}

export default App;
