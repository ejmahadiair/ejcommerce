import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Customer from "./Component/Private/Customer";
import Deshboard from "./Component/Private/Deshboard";
import Panal from "./Component/Private/Panal";
import Cart from "./Component/Public/Cart/Cart";

import Home from "./Component/Public/Home";
import Order from "./Component/Public/Order/Order";
import ProductDetails from "./Component/Public/Product/ProductDetails";
import ProductList from "./Component/Public/Product/ProductList";
import OrderList from "./Component/Private/OrderList";
import OrderView from "./Component/Private/OrderView";
import ProductListView from "./Component/Private/ProductListView";
import ProductCreate from "./Component/Private/ProductCreate";
function App() {
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      window.localStorage.removeItem("token");
      navigate("/login");
    }, 1000 * 60 * 60);
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Login />} />
        </Route>
        {token ? (
          <Route path="/panal" element={<Panal />}>
            <Route index element={<Deshboard />} />
            <Route path="/panal/coustomer/list" element={<Customer />} />
            <Route path="/panal/order/list" element={<OrderList />} />
            <Route path="/panal/orderList/view" element={<OrderView />} />
            <Route path="/panal/product/list" element={<ProductListView />} />
            <Route path="/panal/product/create" element={<ProductCreate />} />
          </Route>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
