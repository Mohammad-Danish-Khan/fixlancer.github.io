import React from 'react';
import ReactDOM from 'react-dom';
import {Container , Row , Col , Button , Form , Table} from 'react-bootstrap';
import Header from "./Mheader"
import Footer from "./Footer"
import fbox1 from "./img/fbox1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


export default class Finance extends React.Component{
    render(){
        return( 
          <>
          <div className="edit-offers">
           <Header/>
          </div>
            <div className="Request-widthdraw">
              <Container>
                  <div className="title">
                      <h4>Request Withdrawal</h4>
                  </div>
                  <Row className="justify-content-center">
                      <Col lg="4">
                          <div className="Rwidth-wrap">
                              <div className="w-box">
                                  <div className="box-content">
                                    <div className="d-flex align-items-center">
                                        <div className="imgs ">
                                            <img src={fbox1} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Revenue</p>
                                            <h6>N72,000.00</h6>
                                        </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="w-detail">
                                  <div className="detail-wrap">
                                    <div className="detail-box">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="text">
                                                <Form.Control type="text" placeholder="Enter Amout" />
                                            </Form.Group>
                                        </Form>
                                        <div className="text">
                                            <div className="text-box">
                                                <div className="head">
                                                    <div className="d-flex justify-content-between">
                                                        <h6>Bank Details</h6>
                                                        <FontAwesomeIcon icon="pencil-alt"  />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="d-flex justify-content-between ">
                                                        <div className="lft">
                                                            <span>Account Name:</span>
                                                        </div>
                                                        <div className="rgt">
                                                            <span>Fountain Bank Account</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between ">
                                                        <div className="lft">
                                                            <span>Account No:</span>
                                                        </div>
                                                        <div className="rgt">
                                                            <span>2891428066</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between ">
                                                        <div className="lft">
                                                            <span>Bank:</span>
                                                        </div>
                                                        <div className="rgt">
                                                            <span>GTBank</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="text">
                                                <Form.Control type="password" placeholder="Current password" />
                                            </Form.Group>
                                        </Form>
                                        <div className="btns">
                                            <Button>Withdraw</Button>
                                        </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Container>
            </div>
            <Footer/>
          </>
          )
         }
     }