import { Col, Row } from "react-bootstrap";
import AddArqComponents from "../../components/AddArqComponents";
export default function AddArq() {
  return (
    <>
      <Col>
        <Row >
          <Col xs={12} sm={8} md={4}>
            <AddArqComponents/>
          </Col>
        </Row>
      </Col>
    </>
  );
}