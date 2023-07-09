import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../Public/Product/productData";
const ProductCreate = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = () => {
    const values = form.getFieldsValue(true);
    const product = JSON.parse(window.localStorage.getItem("products"));
    let have = false;
    for (let i = 0; i < productData.length; i++) {
      if (Number(productData[i]?.id === Number(values?.id))) {
        have = true;
        break;
      }
    }
    if (!have) {
      if (product) {
        for (let i = 0; i < product.length; i++) {
          if (Number(product[i]?.id === Number(values?.id))) {
            have = true;
            break;
          }
        }
        if (!have) {
          const productData = [...product, values];
          window.localStorage.setItem("products", JSON.stringify(productData));
          message.success("Product Created Successfully!");
          navigate("/panal/product/list");
        } else {
          message.warning("Id used give new one");
        }
      } else {
        window.localStorage.setItem("products", JSON.stringify([values]));
        message.success("Product Created Successfully!");
        navigate("/panal/product/list");
      }
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
            label="Product Name"
            name="name"
            rules={[{ required: true, message: "Please input Product Name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="desc"
            rules={[{ required: true, message: "Please input Description!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input Price!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="product Id"
            name="id"
            rules={[{ required: true, message: "Please input Product id!" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ProductCreate;
