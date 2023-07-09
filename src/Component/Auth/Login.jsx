import { Button, Checkbox, Form, Input, message } from "antd";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = () => {
    const values = form.getFieldsValue(true);
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(values, user);
    if (user) {
      for (let i = 0; i < user.length; i++) {
        if (
          user[i].email.toString() === values.email.toString() &&
          user[i].password.toString() === values.password.toString()
        ) {
          let token =
            "I am Eftakhar Jaman. Last semester student of Eastern university. I know just like a drop of a water of an big ocean. I am hungry for knowledge. Whereever i go i try to earn some knowledge and help from senior.";
          window.localStorage.setItem("token", token);
          break;
        }
      }
    } else {
      message.error("You are not Authorized!");
    }
    const token = window.localStorage.getItem("token");
    console.log(token);
    if (token) {
      navigate("/panal");
    } else {
      message.error("You are not Authorized!");
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
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your Email Address!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
          <Link to={"/register"}>Create new account!</Link>
        </Form>
      </div>
    </>
  );
};

export default Login;
