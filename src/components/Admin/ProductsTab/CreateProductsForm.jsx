import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { serverProductCreate, serverProductsGet } from "../../../hooks/productsHook";

export default function CreateProductsForm() {
  const dispatch = useDispatch();
  const onFinish = ({ products }) => {
    products.map((product) => {
      dispatch(serverProductCreate(product));
    });
    dispatch(serverProductsGet());
  };
  return (
    <Form name="create-products" onFinish={onFinish} autoComplete="off">
      <Form.List name="products">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "title"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing title",
                    },
                  ]}
                >
                  <Input placeholder="Title" />
                </Form.Item>
                <Form.Item {...restField} name={[name, "price"]}>
                  <Input placeholder="Price" />
                </Form.Item>
                <Form.Item {...restField} name={[name, "amount"]}>
                  <Input placeholder="Amount" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
