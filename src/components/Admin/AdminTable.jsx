import React, { useState } from "react";

import { Button, Popover, Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Category",
    key: "category",
    dataIndex: "category",
    render: (_, { category }) => (
      <>
        {
          <Popover content={category} style={{ width: 5 }}>
            <Tag color={"geekblue"} style={{ cursor: "pointer" }}>
              {category}
            </Tag>
          </Popover>
        }
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button
          onClick={() => {
          }}
          key={record.key}
          size="small"
        >
          Edit
        </Button>
      </Space>
    ),
  },
];

const AdminTable = ({ products, rowSelection }) => {
  const [current, setCurrent] = useState(1);
  return (
    <>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={products}
        pagination={{
          total: products.lenght,
          showTotal: (total) => `Total ${total} products`,
          defaultPageSize: 5,
          defaultCurrent: 1,
        }}
        showSizeChanger={false}
      />
    </>
  );
};

export default AdminTable;
