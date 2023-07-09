import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";

const Deshboard = () => {
  const [user, setUser] = useState(0);
  const [product, setProduct] = useState(0);
  const [order, setOrder] = useState(0);
  const [cart, setCart] = useState(0);
  const [totalAmount, setTotalAmout] = useState(0);
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user) {
      setUser(user.length);
    }
    const product = JSON.parse(window.localStorage.getItem("products"));
    if (product) {
      setProduct(product.length + 8);
    }

    const order = JSON.parse(window.localStorage.getItem("order"));
    if (order) {
      setOrder(order.length);
      const amount = order.reduce(
        (acc, cur) => Number(acc) + Number(cur.price),
        0
      );
      setTotalAmout(amount);
    }
    const cart = JSON.parse(window.localStorage.getItem("cart"));
    if (cart) {
      setCart(cart.length);
    }
  }, []);
  return (
    <Row style={{ display: "flex", gap: "20px" }}>
      <Col span={6}>
        <Button type="primary" style={{ width: "100%" }}>
          Total User {user}
        </Button>
      </Col>
      <Col span={6}>
        <Button
          type="primary"
          style={{ backgroundColor: "green", width: "100%" }}
        >
          Total Product {product}
        </Button>
      </Col>
      <Col span={6}>
        <Button
          type="primary"
          style={{ backgroundColor: "black", width: "100%" }}
        >
          Total Order {order}
        </Button>
      </Col>
      <Col span={6}>
        <Button
          type="primary"
          style={{ backgroundColor: "gray", width: "100%" }}
        >
          Total Cart Item {cart}
        </Button>
      </Col>
      <Col span={6}>
        <Button
          type="primary"
          style={{ backgroundColor: "tomato", width: "100%" }}
        >
          Total Total Earn Amount {totalAmount}
        </Button>
      </Col>
    </Row>
  );
};

export default Deshboard;
