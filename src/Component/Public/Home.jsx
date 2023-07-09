import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const Home = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const items = [
    {
      label: "Home",
      key: "home",
      onClick: () => {
        navigate("/");
      },
    },
    {
      label: "Cart",
      key: "cart",
      icon: <ShoppingCartOutlined />,
      onClick: () => {
        navigate("/cart");
      },
    },
    {
      label: "Log In",
      key: "login",
      onClick: () => {
        navigate("/login");
      },
    },
    {
      label: "Register",
      key: "register",
      onClick: () => {
        navigate("/register");
      },
    },
    token && {
      label: "Admin Panal",
      key: "panal",
      onClick: () => {
        navigate("/panal");
      },
    },
  ];
  return (
    <>
      <Menu
        onClick={() => {}}
        // selectedKeys={["home"]}
        mode="horizontal"
        items={items}
      />
      <Outlet />
    </>
  );
};

export default Home;
