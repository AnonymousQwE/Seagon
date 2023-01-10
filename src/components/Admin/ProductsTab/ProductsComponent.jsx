import React, { useEffect, useState } from "react";

import { Content } from "antd/es/layout/layout";
import { Button, List } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import AdminTable from "../AdminTable";
import ProductCreateModal from "./ProductCreateModal";
import { useDispatch, useSelector } from "react-redux";
import {
  serverProductDelete,
  serverProductsGet,
} from "../../../hooks/productsHook";
import { async } from "parse/dist/parse";

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

export default function ProductsComponent() {
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(serverProductsGet());
  }, [loading]);

  console.log(products);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const setLoadedHandler = (status) => {
    setLoading(status);
  };

  const deleteHandle = async () => {
    setLoadedHandler(true);
    selectedRowKeys.map(async (key) => {
     await dispatch(serverProductDelete({ key, setLoading }));
    });
    setLoadedHandler(false);
    setSelectedRowKeys([]);
    
  };

  //MODAL

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  return (
    <Content
      style={{
        padding: "0 24px",
        minHeight: 280,
      }}
    >
      <List itemLayout="horizontal" style={{ marginBottom: 15 }}>
        <List.Item style={{ justifyContent: "flex-start", gap: 10 }}>
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size={"default"}
            onClick={showModal}
          />
          <Button
            danger
            onClick={() => {
              deleteHandle(setLoadedHandler);
            }}
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
        <ProductCreateModal setOpen={setOpen} open={open} />
      </List>
      <AdminTable products={products} rowSelection={rowSelection} />
    </Content>
  );
}
