import { Col, Row } from "react-bootstrap";
import React from 'react';
import LandingPageComponents from "../../components/LandingPageComponents";

export default function PageInitial() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <LandingPageComponents/>
          </Col>
        </Row>
      </Col>
    </>
  );
}