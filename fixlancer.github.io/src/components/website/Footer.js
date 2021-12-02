import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col , ListGroup,Button,Collapse} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo.png"
import store1 from "./img/a-store.jpg"
import store2 from "./img/g-store.jpg"
import Faq from "./Faq"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open:false,
            open1:false,
            open2:false,
            open3:false
        };
    }
    render(){
        return( 
          <>
          <div className="footer">
              <Container>
                  <Row>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4>Company</h4>
                                </div>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>LAbout us</ListGroup.Item>
                                        <ListGroup.Item>How it works</ListGroup.Item>
                                        <ListGroup.Item> <Link className="clr-ch" to="Faq">FAQs</Link> </ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4>Quick Links</h4>
                                </div>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Start Selling</ListGroup.Item>
                                        <ListGroup.Item>Post Job Request</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4>Connect</h4>
                                </div>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Facebook</ListGroup.Item>
                                        <ListGroup.Item>Instargram</ListGroup.Item>
                                        <ListGroup.Item>Twitter</ListGroup.Item>
                                        <ListGroup.Item>Linkedin</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4>Leagal</h4>
                                </div>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Terms and Conditions</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                      </Col>
                  </Row>

                  <div className="footer-bottom">
                      <div className="logo">
                        <img src={logo} className="img-fluid" alt="logo"/>
                      </div>
                      <div className="text">
                          <p>Nigeria’s premiumn Online marketplace</p>
                      </div>
                      <div className="icons">
                                            
                                            
                                            
                          <span><FontAwesomeIcon icon={['fab', 'facebook-square']} /></span>
                          <span><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
                          <span><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
                      </div>
                      <div className="store-imgs">
                          <div className="stores-wrap">
                            <img src={store1} className="img-fluid" alt="store"/>
                            <img src={store2} className="img-fluid" alt="store"/>
                          </div>
                      </div>
                  </div>

              </Container>
          </div>
          <div className="footer a">
              <Container>
                  <Row>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                            <div className="title">
                                <h4 
                                    onClick={() => this.setState({ open : (!(this.state.open)) }) }
                                    aria-controls="example-collapse-text"
                                    aria-expanded={this.state.open}
                                >Company</h4>
                            </div>
                            <Collapse in={this.state.open}>
                            <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>LAbout us</ListGroup.Item>
                                        <ListGroup.Item>How it works</ListGroup.Item>
                                        <ListGroup.Item> <Link className="clr-ch" to="Faq">FAQs</Link> </ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                            </div>
                            </Collapse>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4
                                    onClick={() => this.setState({ open1 : (!(this.state.open1)) }) }
                                    aria-controls="example-collapse-text"
                                    aria-expanded={this.state.open1}
                                    >Quick Links</h4>
                                </div>
                            <Collapse in={this.state.open1}>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Start Selling</ListGroup.Item>
                                        <ListGroup.Item>Post Job Request</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Collapse>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4
                                    onClick={() => this.setState({ open2 : (!(this.state.open2)) }) }
                                    aria-controls="example-collapse-text"
                                    aria-expanded={this.state.open2}
                                    >Connect</h4>
                                </div>
                            <Collapse in={this.state.open2}>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Facebook</ListGroup.Item>
                                        <ListGroup.Item>Instargram</ListGroup.Item>
                                        <ListGroup.Item>Twitter</ListGroup.Item>
                                        <ListGroup.Item>Linkedin</ListGroup.Item>
                                    </ListGroup>
                                </div>
                                </Collapse>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4
                                    onClick={() => this.setState({ open3 : (!(this.state.open3)) }) }
                                    aria-controls="example-collapse-text"
                                    aria-expanded={this.state.open3}
                                    >Leagal</h4>
                                </div>
                            <Collapse in={this.state.open3}>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Terms and Conditions</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Collapse>
                            </div>
                        </div>
                      </Col>
                  </Row>

                  <div className="footer-bottom">
                      <div className="logo">
                        <img src={logo} className="img-fluid" alt="logo"/>
                      </div>
                      <div className="text">
                          <p>Nigeria’s premiumn Online marketplace</p>
                      </div>
                      <div className="icons">
                                            
                                            
                                            
                          <span><FontAwesomeIcon icon={['fab', 'facebook-square']} /></span>
                          <span><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
                          <span><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
                      </div>
                      <div className="store-imgs">
                          <div className="stores-wrap">
                            <img src={store1} className="img-fluid" alt="store"/>
                            <img src={store2} className="img-fluid" alt="store"/>
                          </div>
                      </div>
                  </div>

              </Container>
          </div>
          </>
         )
        }
    }