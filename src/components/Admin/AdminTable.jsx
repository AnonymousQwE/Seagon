import React from "react";

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
        <Button key={record.key} size="small">
          Edit
        </Button>
      </Space>
    ),
  },
];

// const products = [
//   {
//     key: "key1",
//     title: "Product Title",
//     cost: 20,
//     price: 120000,
//     tags: ["Пневмораспределители", "Денис 121 Магазин"],
//   },
//   {
//     key: "key2",
//     title: "Product Title",
//     cost: 30,
//     price: 130000,
//     tags: ["Пневмораспределители", "Денис 121 Магазин"],
//   },
//   {
//     key: "key3",
//     title: "Product Title",
//     cost: 40,
//     price: 140000,
//     tags: ["Пневмораспределители", "Денис 121 Магазин"],
//   },
// ];

const AdminTable = ({ products, rowSelection }) => {

  return (
    <>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={products}
        pagination={{ current: 1, pageSize: 5 }}
        showSizeChanger={false}
      />
    </>
  );
};

export default AdminTable;
