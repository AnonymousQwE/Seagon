import React from "react";
import { PlusCircleOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export default function ProductCard() {
  return (
    <Card
      className="card"
      cover={
        <img
          alt="example"
          src="https://icdn.lenta.ru/images/2022/10/31/11/20221031114742010/square_1024_webp_8f466724f273b97b62416bb38f7c4ab3.webp"
        />
      }
      actions={[
        <PlusCircleOutlined key="add" />,
        <EllipsisOutlined key="more" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://www.afisha.uz/uploads/media/2022/12/d40fee42fda89361254735ef6281eaa3_l.jpg" />
        }
        title="Product Title"
        description="Product Desc"
      />
    </Card>
  );
}
