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

export default function ProductsComponent() {
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(serverProductsGet());
  }, [loading]);

  const deleteHandle = async () => {
    setLoading(false);
    selectedRow.map(async (delProd) => {
      const currentProducts = products.filter((prod) => prod !== delProd);
      await dispatch(
        serverProductDelete({ currentProducts, key: delProd.key, setLoading })
      );
      return;
    });
    setSelectedRow([]);
    setLoading(true);
  };

  const rowSelection = {
    onChange: (_, selectedRows) => {
      setSelectedRow(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const hasSelected = selectedRow.length > 0;

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
              deleteHandle();
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
            {hasSelected ? `Selected ${selectedRow.length} items` : ""}
          </span>
        </List.Item>
        <ProductCreateModal setOpen={setOpen} open={open} />
      </List>
      <AdminTable products={products} rowSelection={rowSelection} />
    </Content>
  );
}
