import React from 'react';
import ReactDOM from 'react-dom';
import {Container , Row , Col , Button , Form , ListGroup} from 'react-bootstrap';
import Header from "./Mheader"
import fbox1 from "./img/fbox1.png"
import fbox2 from "./img/fbox2.png"
import fbox3 from "./img/fbox3.png"
import fbox4 from "./img/fbox4.png"
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
          <div className="finance">
              <Container>
                  <div className="title">
                      <h4>Finance</h4>
                  </div>
                  <Row className="justify-content-center">
                      <Col lg="10">
                          <div className="finance-wrap">
                              <div className="finance-box">
                                <Row>
                                    <Col lg="3">
                                        <div className="finance-info fbox1">
                                            <div className="finance-content">
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
                                    </Col>
                                    <Col lg="3">
                                        <div className="finance-info fbox2">
                                            <div className="finance-content">
                                                <div className="d-flex align-items-center">
                                                    <div className="imgs ">
                                                        <img src={fbox2} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <p>Pending</p>
                                                        <h6>N15,000.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="3">
                                        <div className="finance-info fbox3">
                                            <div className="finance-content">
                                                <div className="d-flex align-items-center">
                                                    <div className="imgs ">
                                                        <img src={fbox3} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <p>Refunds</p>
                                                        <h6>N3,000.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="3">
                                        <div className="finance-info fbox4">
                                            <div className="finance-content">
                                                <div className="d-flex align-items-center">
                                                    <div className="imgs ">
                                                        <img src={fbox4} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <p>Deposit</p>
                                                        <h6>N0.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                              </div>
                          </div>

                          <div className="widthdraw">
                            <div className="title">
                                <h4>Withdrawals</h4>
                            </div>
                            <div className="widthdraw-content">
                                <Row>
                                    <Col lg="4" md="4" sm="4" xs="5">
                                        <div className="width-wrap">
                                            <div className="text">
                                                <h6>Joseph Prince</h6>
                                                <p>0000000011</p>
                                                <p>GTBank</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="4" xs="5">
                                        <div className="width-wrap">
                                            <div className="text">
                                                <h6>N10,000</h6>
                                                <p className="pd">09 Jul 20</p>
                                                <p>5:16pm</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="4" xs="2">
                                        <div className="width-wrap">
                                            <div className="icon">
                                                <FontAwesomeIcon icon="times"  />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="widthdraw-content">
                                <Row>
                                    <Col lg="4" md="4" sm="4" xs="5">
                                        <div className="width-wrap">
                                            <div className="text">
                                                <h6>Joseph Prince</h6>
                                                <p>0000000011</p>
                                                <p>GTBank</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="4" xs="5">
                                        <div className="width-wrap">
                                            <div className="text">
                                                <h6>N10,000</h6>
                                                <p className="pd">09 Jul 20</p>
                                                <p>5:16pm</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="4" xs="2">
                                        <div className="width-wrap">
                                            <div className="icon">
                                                <FontAwesomeIcon icon="times"  />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                                <div className="btns text-center mt-5">
                                    <Button className="req">
                                        <Link to="/Widthdraw">Request Withdrawal</Link>
                                    </Button>
                                    <Button className="his">
                                        <Link to="/History">Transaction History</Link>
                                    </Button>
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