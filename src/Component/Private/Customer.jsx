import { Button, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    setData(user);
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
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
              navigate("/register");
            }}
          >
            Add Customer
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

export default Customer;
