import { Col, Row } from "react-bootstrap";
import React from 'react';
import LogoComponents from "../../components/LogoComponents";

export default function Logo() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <LogoComponents/>
          </Col>
        </Row>
      </Col>
    </>
  );
}