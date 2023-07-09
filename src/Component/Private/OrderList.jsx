import { FundViewOutlined } from "@ant-design/icons";
import { Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const order = JSON.parse(window.localStorage.getItem("order"));
    setData(order);
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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Products",
      dataIndex: "prducts",
      key: "prducts",
      render: (_, record, idx) => {
        console.log("record: ", record);
        return (
          <div>
            {record?.products.map((item, idx) => {
              return (
                <div key={idx}>
                  name: {item?.name} price:{item?.price}
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record, idx) => {
        return (
          <FundViewOutlined
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/panal/orderList/view", { state: { record } });
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

export default Order;
