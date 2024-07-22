import { Col, Row } from "react-bootstrap";
import React from 'react';
import CarregamentoComponents from "../../components/CarregamentoComponents";

export default function Carregamento() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <CarregamentoComponents/>
          </Col>
        </Row>
      </Col>
    </>
  );
}