import { Col, Row } from "react-bootstrap";
import React from 'react';
import TestComponents from "../../components/TestComponents";

export default function Teste() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <TestComponents/>
          </Col>
        </Row>
      </Col>
    </>
  );
}