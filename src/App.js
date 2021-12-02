import React from "react";
import { Container ,Row ,Col } from "react-bootstrap";
import "./App.css";
import "./components/Chat/FontawsomeIcons"
import ChatBody from "./components/Chat/chatBody/ChatBody";
import OrderFix from "./components/Main"
import OrderChat from "./components/Chat/chatContent/OrderChat"
function App() {
  return (
<div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
    <Container>
      {/* <ChatBody /> */}
      <Row>
        <Col> </Col>
        <Col xs={10}>
          <OrderFix />
          {/* {<OrderChat />} */}
        </Col>
        <Col> </Col>
      </Row>
  </Container>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

  </div>
  );
}

export default App;