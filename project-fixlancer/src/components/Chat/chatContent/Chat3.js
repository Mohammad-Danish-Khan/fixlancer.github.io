import React from "react";
import { Container ,Row ,Col } from "react-bootstrap";
import Orderfix from "./OrderFix"
import Header from "../../website/Mheader"


function Chat3() {
    return (
  <div>
     <div className="edit-offers">
        <Header />
      </div>
    <br/>
      <Container>
        <Row>
          <Col className="col-custom-1"> </Col>
          <Col className="col-custom-2" xs={10}>
            <Orderfix />
          </Col>
          <Col className="col-custom-1"> </Col>
        </Row>
    </Container>
    <br/>
    <br/>
  
    </div>
    );
  }
  
  export default Chat3;