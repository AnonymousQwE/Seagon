import React, { useState } from "react";

import { Button, List, Popover, Space, Table, Tag } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag, i) => {
          let color = i === 0 ? "geekblue" : "green";
          let popover = i === 0 ? "Категория" : "Поставщик";
          return (
            <Popover key={"pop" + i} content={popover} style={{ width: 5 }}>
              <Tag key={"tag" + i} color={color} style={{ cursor: "pointer" }}>
                {tag}
              </Tag>
            </Popover>
          );
        })}
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

const products = [
  {
    key: "key1",
    title: "Product Title",
    cost: 20,
    price: 120000,
    tags: ["Пневмораспределители", "Денис 121 Магазин"],
  },
  {
    key: "key2",
    title: "Product Title",
    cost: 30,
    price: 130000,
    tags: ["Пневмораспределители", "Денис 121 Магазин"],
  },
  {
    key: "key3",
    title: "Product Title",
    cost: 40,
    price: 140000,
    tags: ["Пневмораспределители", "Денис 121 Магазин"],
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const AdminTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
      <List itemLayout="horizontal" style={{ marginBottom: 15 }}>
        <List.Item style={{ justifyContent: "flex-start", gap: 10 }}>
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size={"default"}
          />
          <Button
            danger
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
            type="primary"
            shape="round"
            icon={<DeleteOutlined />}
            size={"default"}
          />
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </List.Item>
      </List>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={products}
        pagination={{ current: 1, pageSize: 1 }}
        showSizeChanger={false}
      />
    </>
  );
};

export default AdminTable;
