import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Product from "./Product";
import { productData } from "./productData";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
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
  console.log("data: ", data);
  return (
    <>
      <Row gutter={[10, 10]} style={{ width: "100%", margin: "10px auto" }}>
        {data.map((item, idx) => {
          return (
            <Col
              key={idx}
              span={6}
              lg={6}
              md={8}
              sm={12}
              xs={24}
              onClick={() => {
                navigate(`/product/${item?.id}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <Product data={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ProductList;
