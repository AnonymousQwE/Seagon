import React from "react";

import { Button, Form, Input } from "antd";

import { useDispatch } from "react-redux";
import { registerUser } from "../../hooks/userHook";

export default function UserRegistration() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(registerUser(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Полное Имя"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите Ваше имя!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите Ваш email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите Ваш пароль!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
