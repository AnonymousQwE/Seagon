import React, { useState } from "react";

import { Button, Popover, Space, Table, Tag } from "antd";
import { useSelector } from "react-redux";

const AdminTable = ({ products, rowSelection }) => {
  const { categoryList } = useSelector((state) => state.products);

  function currentCategory(catId) {
    const currentCat = categoryList.filter((cat) => cat.id == catId);
    return currentCat ? currentCat[0]?.title : catId;
  }

  function createFiltersCategory() {
    const newCat = categoryList.map((cat) => {
      return { text: cat.title, value: cat.id };
    });
    return newCat;
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: true,
      sorter: {
        compare: (a, b) => a.title.localeCompare(b.title),
        multiple: 3,
      },
      defaultSortOrder: "ascend",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: { compare: (a, b) => a.amount - b.amount, multiple: 2 },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: { compare: (a, b) => a.price - b.price, multiple: 1 },
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      filters: createFiltersCategory(),
      onFilter: (value, record) => value === record.category,

      render: (_, { category }) => (
        <>
          {
            <Popover content={"Категория"} style={{ width: 5 }}>
              <Tag
                color={
                  currentCategory(category) === "Пневмораспределители"
                    ? "blue"
                    : currentCategory(category) === "Пневмоцилиндры"
                    ? "cyan"
                    : "none"
                }
                style={{ cursor: "pointer" }}
              >
                {currentCategory(category)}
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
          <Button onClick={() => {}} key={record.key} size="small">
            Edit
          </Button>
        </Space>
      ),
    },
  ];

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
        showSizeChanger={true}
      />
    </>
  );
};

export default AdminTable;
