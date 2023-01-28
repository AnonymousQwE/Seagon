import React from "react";
import { Button, Card, Col, Divider, Layout, Row, Statistic } from "antd";

export default function CartItem() {
  return (
    <>
      <Col style={{marginBottom:'10px'}}>
        <Card bordered={false}>
          <Row
            style={{
              textAlign: "center",
            }}
          >
            <Col
              style={{
                textAlign: "left",
                background: "green",
              }}
              span={12}
            >
              Распределитель 4v210
            </Col>
            <Col
              style={{
                background: "green",
              }}
              offset={1}
              span={1}
            >
              5
            </Col>
            <Col
              style={{
                background: "green",
              }}
              offset={1}
              span={4}
            >
              1000
            </Col>
            <Col
              style={{
                background: "green",
              }}
              offset={1}
              span={4}
            >
              5000
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}
