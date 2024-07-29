import { Col, Row } from "react-bootstrap";
import AlertComponents from "../../components/AlertComponents";
import React from 'react';

export default function Alert() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <AlertComponents/>
          </Col>
        </Row>
      </Col>
    </>
  );
}