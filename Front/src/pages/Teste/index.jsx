import { Col, Row } from "react-bootstrap";
import Buttest from "../../components/Buttest";
import React from 'react';

export default function TestJ() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <Buttest/>
          </Col>
        </Row>
      </Col>
    </>
  );
}