import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Manu = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Dashboard",
      key: "dashboard",
      onClick: () => {
        navigate("/panal");
      },
    },
    {
      label: "Home",
      key: "home",
      onClick: () => {
        navigate("/");
      },
    },

    {
      label: "Customers List",
      key: "CustomersList",
      onClick: () => {
        navigate("/panal/coustomer/list");
      },
    },
    {
      label: "Order Lis",
      key: "OrderLis",
      onClick: () => {
        navigate("/panal/order/list");
      },
    },
    {
      label: " Product List",
      key: " ProductList",
      onClick: () => {
        navigate("/panal/product/list");
      },
    },
    {
      label: "Log Out",
      key: "log out",
      onClick: () => {
        window.localStorage.removeItem("token");
        navigate("/login");
      },
    },
  ];
  return (
    <>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={items}
      />
    </>
  );
};

export default Manu;
