import React, { useState } from "react";
import { Button, Form, Input, Modal, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { serverProductCreate } from "../../../hooks/productsHook";

export default function ProductCreateModal({ open, setOpen }) {
  const dispatch = useDispatch();

  const onFinish = async ({ products }) => {
    console.log(products);
    setConfirmLoading(true);
    await products.map(async (product) => {
      await dispatch(serverProductCreate(product));
      return true;
    });
    setConfirmLoading(false);
    setOpen(false);
  };

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [field, setField] = useState(0);

  const handleOk = async () => {};

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Create New Products"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={[]}
      >
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
                      <Input type="number" placeholder="Price" />
                    </Form.Item>
                    <Form.Item {...restField} name={[name, "amount"]}>
                      <Input type="number" placeholder="Amount" />
                    </Form.Item>
                    <MinusCircleOutlined
                      onClick={() => {
                        setField(field - 1);
                        remove(name);
                      }}
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      setField(field + 1);
                      add();
                    }}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item></Form.Item>
          <Form.Item>
            <Button disabled={!field} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
