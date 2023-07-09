import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const [form] = Form.useForm();
  const { state } = useLocation();
  const navigate = useNavigate();
  const onFinish = () => {
    const values = form.getFieldsValue(true);
    const order = JSON.parse(window.localStorage.getItem("order"));
    if (order) {
      const userData = [
        ...order,
        {
          ...values,
          products: state?.prducts,
          qty: state?.qty,
          price: state?.price,
        },
      ];

      window.localStorage.setItem("order", JSON.stringify(userData));
      message.success("Order Placed Successfully!");
      window.localStorage.removeItem("cart");
      navigate("/");
    } else {
      window.localStorage.setItem(
        "order",
        JSON.stringify([
          {
            ...values,
            products: state?.prducts,
            qty: state?.qty,
            price: state?.price,
          },
        ])
      );
      message.success("Order Placed Successfully!");
      window.localStorage.removeItem("cart");
      navigate("/");
    }
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ width: "350px" }}
          form={form}
        >
          <Form.Item
            label="Customer name"
            name="name"
            rules={[
              { required: true, message: "Please input your Full Name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input />
          </Form.Item>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col>Qty: {state?.qty}</Col>
            <Col>Total Price: ${state?.price}</Col>
          </Row>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Confirm Order
            </Button>
          </Form.Item>
          <Link to={"/"}>Back to home</Link>
        </Form>
      </div>
    </>
  );
};

export default Order;
