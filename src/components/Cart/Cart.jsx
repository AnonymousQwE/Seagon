import { Button, Card, Col, Divider, Layout, Row, Statistic } from "antd";

import { useState } from "react";
import CartItem from "./CartItem";

const { Sider } = Layout;

export default function Cart() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      width={500}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Row>
        <div
          style={{
            display: collapsed ? "none" : "flex",
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "20px",
            color: "white",
          }}
        >
          Корзина
        </div>
        <Col
          style={{
            display: "flex",
            background: "red",
            justifyContent: "space-around",
          }}
          span={24}
        >
          <Statistic
            title="Итого"
            value={1000}
            suffix={"сум"}
            valueStyle={{ color: "#0958d9" }}
          />
          <Button
            style={{
              marginTop: 16,
            }}
            type="primary"
          >
            Оплатить
          </Button>
        </Col>
        <Col
          style={{
            marginTop: "10px",
          }}
          offset={1}
          span={22}
        >
          <Row></Row>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
      </Row>
    </Sider>
  );
}
