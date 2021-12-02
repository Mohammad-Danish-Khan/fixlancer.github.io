import React from 'react';
import ReactDOM from 'react-dom';
import {Container , Row , Col , Button , Form , ListGroup} from 'react-bootstrap';
import Header from "./Mheader"
import gbox from "./img/g-box.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


export default class Orderdetail2 extends React.Component{
    render(){
        return( 
          <>
          <div className="edit-offers">
           <Header/>
          </div>
          <div className="order-head">
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
            <div className="order-detail detail2">

                <Container>
                    <Row className="justify-content-center">
                      <Col lg="11">
                          <Row>
                              <Col lg="7">
                                <div className="details-wraps">
                                  <div className="promote">
                                      <div className="imgs">
                                            <img src={gbox} className="img-fluid" alt="" />
                                      </div>
                                      <div className="text">
                                        <p >Promote my telegram channel</p>
                                        <p>Promote my telegram channel</p>

                                        <div className="show">
                                          <span><FontAwesomeIcon icon="circle"  /></span>
                                          <span>Tboy25</span>
                                          <span className="clen"><FontAwesomeIcon icon="calendar-alt"  /></span>
                                          <span>2 days delivery</span>
                                        </div>
                                      </div>
                                  </div>

                                  <div className="bbr"></div>

                                  <div className="tips">
                                    <h4>important tips</h4>
                                    <ListGroup>
                                      <ListGroup.Item>Your funds are held on escrow and not sent directly to the seller.</ListGroup.Item>
                                      <ListGroup.Item>Seller can only receive funds when you release it upon satisfaction with the work done.</ListGroup.Item>
                                      <ListGroup.Item>100% Money Back Guarantee if you are not satisfied after work done.</ListGroup.Item>
                                    </ListGroup>
                                  </div>
                                </div>
                                </Col>
                              <Col lg="5">
                                <div className="details-wraps sum-card">
                                  <div className="summary">
                                        <div className="summary-wrap">
                                            <h5>summary</h5>
                                            <div className="d-flex justify-content-between box1">
                                                <div className="text">
                                                    <span>Available Balance</span>
                                                </div>
                                                <div className="num">
                                                  <span>N72,000</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between box">
                                                <div className="text">
                                                    <span>Fix Price</span>
                                                </div>
                                                <div className="num">
                                                  <span>N5,000</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between box">
                                                <div className="text">
                                                    <span>Discount</span>
                                                </div>
                                                <div className="num nums d-flex">
                                                  <span><Form.Control type="text" placeholder="Normal text" /></span>
                                                  <span><Button>apply</Button></span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between box">
                                                <div className="text">
                                                    <span>Fee</span>
                                                </div>
                                                <div className="num">
                                                  <span>N150</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between box">
                                                <div className="text">
                                                    <span>Total</span>
                                                </div>
                                                <div className="num">
                                                  <span>N5,150</span>
                                                </div>
                                            </div>
                                            <div className="box-btn">
                                              <Button>Proceed to Pay</Button>
                                              <p>You won't be charged yet</p>
                                            </div>
                                        </div>
                                  </div>

                                  <div className="btn-contact">
                                    <span>Having difficulties making payment?</span>
                                    <Button>Contact Us</Button>
                                  </div>
                                </div>
                              </Col>
                          </Row>
                      </Col>
                    </Row>
                </Container>
            </div>
          </>
          )
         }
     }