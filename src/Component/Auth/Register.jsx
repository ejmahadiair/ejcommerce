import { Button, Form, Input, message } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    const values = form.getFieldsValue();
    console.log("values: ", values);
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user) {
      const userData = [...user, values];
      let have = false;
      for (let i = 0; i < user.length; i++) {
        if (user[i].email.toString() === values.email.toString()) {
          have = true;
          break;
        }
      }
      if (!have) {
        window.localStorage.setItem("user", JSON.stringify(userData));
        message.success("Account Created Successfully!");
      } else {
        message.warning("This email already used");
      }
    } else {
      window.localStorage.setItem("user", JSON.stringify([values]));
      message.success("Account Created Successfully!");
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
          initialValues={{
            remember: true,
            name: "Eftakhar Jaman",
            email: "ejmahadiair@gmail.com",
            phone: "+8801642167361",
            password: "123456",
            conpassword: "123456",
          }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ width: "350px" }}
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input your Full Name!" },
            ]}
          >
            <Input />
          </Form.Item>
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
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input your Phone number" },
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
            label="Confirm Password"
            name="conpassword"
            rules={[
              { required: true, message: "Please input your password again!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <Link to={"/login"}>Already have an account!</Link>
        </Form>
      </div>
    </>
  );
};

export default Register;
