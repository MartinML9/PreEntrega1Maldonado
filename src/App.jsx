import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import CartProvider from "./context/CartProvider";
import CheckoutContainer from "./components/Checkout/CheckoutContainer";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div>
            <h1 className="ms-5 mb-0 fs-2">Inicio</h1>
            <ItemListContainer />
          </div>
        } />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailsContainer />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<h2>Error 404: Page not found</h2>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
