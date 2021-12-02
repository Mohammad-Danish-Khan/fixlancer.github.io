import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import rec1 from "../img/rec1.png"
import rec2 from "../img/rec2.png"
import rec3 from "../img/rec3.png"
import rec4 from "../img/rec4.png"
import pro5 from "../img/pro5.png"
import pro6 from "../img/pro6.png"
import pro7 from "../img/pro7.png"
import pro8 from "../img/pro8.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export default class Recommend extends React.Component{
    render(){
        return( 
          <>
          <div className="Recommended-pg">
              <Container>
                  <Row>
                      <Col lg="3">
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <Link to="/view">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={rec1} className="img-fluid" alt="fixe"/>
                                      </div>
                                      <div className="f-text">
                                          <div className="f-title">
                                              <span>
                                                  <img src={pro5} className="img-fluid" alt="profile"/>
                                              </span>
                                              <span className="name">sadically_creative</span>
                                          </div>

                                          <div className="desc">
                                              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                          </div>
                                          
                                          <div className="nums d-flex justify-content-between">
                                              <div className="rating">
                                                  <span className="icn"><FontAwesomeIcon icon="star"  /></span>
                                                  <span className="n1 px-2">5.0</span>
                                                  <span className="n2">(6)</span>
                                              </div>
                                              
                                              <div className="number">
                                                  <span>N10,000</span>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </Link>
                              </div>
                          </div>
                      </Col>
                      <Col lg="3">
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <Link to="/view">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={rec2} className="img-fluid" alt="fixe"/>
                                      </div>
                                      <div className="f-text">
                                          <div className="f-title">
                                              <span>
                                                  <img src={pro6} className="img-fluid" alt="profile"/>
                                              </span>
                                              <span className="name">sadically_creative</span>
                                          </div>

                                          <div className="desc">
                                              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                          </div>
                                          
                                          <div className="nums d-flex justify-content-between">
                                              <div className="rating">
                                                  <span className="icn"><FontAwesomeIcon icon="star"  /></span>
                                                  <span className="n1 px-2">5.0</span>
                                                  <span className="n2">(6)</span>
                                              </div>
                                              
                                              <div className="number">
                                                  <span>N10,000</span>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </Link>
                              </div>
                          </div>
                      </Col>
                      <Col lg="3">
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <Link to="/view">
                                  
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={rec3} className="img-fluid" alt="fixe"/>
                                      </div>
                                      <div className="f-text">
                                          <div className="f-title">
                                              <span>
                                                  <img src={pro7} className="img-fluid" alt="profile"/>
                                              </span>
                                              <span className="name">sadically_creative</span>
                                          </div>

                                          <div className="desc">
                                              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                          </div>
                                          
                                          <div className="nums d-flex justify-content-between">
                                              <div className="rating">
                                                  <span className="icn"><FontAwesomeIcon icon="star"  /></span>
                                                  <span className="n1 px-2">5.0</span>
                                                  <span className="n2">(6)</span>
                                              </div>
                                              
                                              <div className="number">
                                                  <span>N10,000</span>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </Link>
                              </div>
                          </div>
                      </Col>
                      <Col lg="3">
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <Link to="/view">
                                    
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={rec4} className="img-fluid" alt="fixe"/>
                                      </div>
                                      <div className="f-text">
                                          <div className="f-title">
                                              <span>
                                                  <img src={pro8} className="img-fluid" alt="profile"/>
                                              </span>
                                              <span className="name">sadically_creative</span>
                                          </div>

                                          <div className="desc">
                                              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                          </div>
                                          
                                          <div className="nums d-flex justify-content-between">
                                              <div className="rating">
                                                  <span className="icn"><FontAwesomeIcon icon="star"  /></span>
                                                  <span className="n1 px-2">5.0</span>
                                                  <span className="n2">(6)</span>
                                              </div>
                                              
                                              <div className="number">
                                                  <span>N10,000</span>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                                  </Link>
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