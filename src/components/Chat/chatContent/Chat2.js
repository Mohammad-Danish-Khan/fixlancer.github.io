import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Orderchat from "./OrderChat"
import Header from "../../website/Mheader"

function Chat2() {
  return (
    <div>
      <div className="edit-offers">
        <Header />
      </div>
      <br />
      <Container>
        <Row>
          <Col className="col-custom-1"> </Col>
          <Col xs={10} className="col-custom-2">
            <Orderchat />
          </Col>
          <Col className="col-custom-1"> </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />

    </div>
  );
}

export default Chat2;