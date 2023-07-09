import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, message, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const products = JSON.parse(window.localStorage.getItem("cart"));
    setData(products);
    let tPrice = 0;
    if (products) {
      tPrice = products.reduce((acc, cur) => acc + cur.price, 0);
    }

    setTotalPrice(tPrice);
  }, [setData]);

  const colomns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 70,
    },
    {
      title: "Product Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record, idx) => {
        console.log("record: ", record, idx);
        return (
          <DeleteOutlined
            style={{ cursor: "pointer" }}
            onClick={() => {
              setData(data.splice(idx, 1));
              window.localStorage.setItem("cart", JSON.stringify(data));
              message.success("Product removed successfully!");
              const afterRemove = JSON.parse(
                window.localStorage.getItem("cart")
              );
              setData(afterRemove);
            }}
          />
        );
      },
      width: 150,
      align: "center",
    },
  ];
  return (
    <>
      <Row gutter={[10, 10]} style={{ width: "100%" }}>
        <Button
          type="primary"
          style={{ marginLeft: "auto", marginTop: "10px" }}
          onClick={() => {
            const token = window.localStorage.getItem("token");

            if (token) {
              if (data) {
                navigate("/order", {
                  state: { prducts: data, qty: data.length, price: totalPrice },
                });
              } else {
                message.error("No product for checkout!");
              }
            } else {
              message.warning("You are unauthorized!");
            }
          }}
        >
          Check Out ${totalPrice}
        </Button>
        <Col style={{ width: "inherit", margin: "20px auto" }}>
          <Table columns={colomns} dataSource={data || []} />
        </Col>
      </Row>
    </>
  );
};

export default Cart;
