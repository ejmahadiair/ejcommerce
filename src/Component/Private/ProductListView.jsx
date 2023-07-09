import { Button, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../Public/Product/productData";
const ProductListView = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const product = JSON.parse(window.localStorage.getItem("products"));
    if (product) {
      setData([...product, ...productData]);
    } else {
      setData([...productData]);
    }
  }, [setData]);

  const colomns = [
    {
      title: "Sl",
      dataIndex: "sl",
      key: "sl",
      render: (_v, record, idx) => {
        return <>{idx + 1}</>;
      },
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Product price",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <>
      <Row gutter={[10, 10]} style={{ width: "100%" }}>
        <Col
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px auto",
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              navigate("/panal/product/create");
            }}
          >
            Add Product
          </Button>
        </Col>
        <Col style={{ width: "100%", margin: "20px auto" }}>
          <Table
            columns={colomns}
            dataSource={data || []}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default ProductListView;
