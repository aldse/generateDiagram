import { Col, Row } from "react-bootstrap";
import React from 'react';
import TesteComponent from "../../components/TesteComponent";

export default function Teste() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <TesteComponent/>
          </Col>
        </Row>
      </Col>
    </>
  );
}