import React from "react";
import { Container ,Row ,Col } from "react-bootstrap";
import Chatbody from "./ChatBody"
import Header from "../../website/Mheader"


function Chat1() {
    return (
  <div>
    
    <div className="edit-offers">
      <Header/>
    </div>
    <br/>
      <Container>
        <Row>
          <Col className="chatB" lg={12} xs="12" >
            <Chatbody />
          </Col>
        </Row>
    </Container>
    </div>
    );
  }
  
  export default Chat1;