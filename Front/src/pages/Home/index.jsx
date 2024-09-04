import { Col, Row } from "react-bootstrap";
import HomeComponents from "../../components/HomeComponents";
import React from 'react';

export default function Home() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <HomeComponents/>
          </Col>
        </Row>
      </Col>
    </>
  );
}