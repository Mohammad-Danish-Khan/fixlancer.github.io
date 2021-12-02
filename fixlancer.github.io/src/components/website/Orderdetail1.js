import React from 'react';
import ReactDOM from 'react-dom';
import {Container , Row , Col , Button , Form} from 'react-bootstrap';
import Header from "./Mheader"
// import Upload from "./Section/Upload"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


export default class Orderdetail1 extends React.Component{
    render(){
        return( 
          <>
          <div className="edit-offers">
           <Header/>
          </div>
          <div className="order-head order-head1">
            <div className="order-head-wraps">

              <div className="ords px-2">
                <div className="num">
                  <span>1</span>
                  <span className="text">Order Details</span>
                  <FontAwesomeIcon icon="chevron-right"  />
                </div>
              </div>

              <div className="surq px-2">
                <div className="num">
                  <span>2</span>
                  <span  className="text">Submit Requirements</span>
                </div>
              </div>
            </div>
          </div>

            <div className="order-detail">
                <Container>
                    <Row className="justify-content-center">
                      <Col lg="8">
                        <div className="detail-wrap">
                          <div className="detail-info">
                            <div className="text">
                              <p>The seller request for the following to be provided before start working on your order.</p>
                            </div>
                            <div className="box-uploade">
                              <span>Provide the necessary requirements for the order. Be detailed as possible and/or attach a file.</span>
                            </div>

                            <div className="uploade">
                                {/* <Upload/> */}
                                <Form.Group controlId="formFile" className="mb-3">
                                  {/* <Form.Label>Default file input example</Form.Label> */}
                                  <Form.Control className="bg-white border-1" type="file" />
                                </Form.Group>
                            </div>
                            <div className="text2 text-center">
                              <span>By clicking Start Order, I agree to the information I provide as complete. Any further changes may be subject to extra cost.</span>
                            </div>
                            <div className="btns text-center mt-2">
                              <Button>Start order</Button>
                            </div>

                          </div>
                        </div>
                      </Col>
                    </Row>
                </Container>
            </div>
          </>
          )
         }
     }