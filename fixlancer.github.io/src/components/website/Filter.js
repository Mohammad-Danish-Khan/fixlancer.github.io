import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Col , Row} from 'react-bootstrap';
import Mheader from "./Mheader"
import Footer from './Footer';
import Fix from './Section/Fix';
import Recommended from './Section/Recommend';
import balance from "./img/balance.png"
import sale1 from "./img/sale1.png"
import sale2 from "./img/sale2.png"
import blog from "./img/blog.png"
import blog1 from "./img/blog1.png"
import blog2 from "./img/blog2.png"
import blog3 from "./img/blog3.png"
import blog4 from "./img/fixe5.png"
import blog5 from "./img/blog4.png"
import blog6 from "./img/blog5.png"
import blog7 from "./img/blog6.png"
import pro1 from "./img/pro1.png"
import pro2 from "./img/pro2.png"
import pro3 from "./img/pro3.png"
import pro4 from "./img/pro4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class Filter extends React.Component{
    render(){
        return( 
          <>
          <div className="header">
              <Mheader/>
          </div>
          {/* <div className="mhome-banner"> */}
              {/* <Container>
                  <Row className="justify-content-center">
                      <Col lg="3">
                        <div className="banner-wrap bbox1">
                            <div className="banner-box">
                                <div className="box-img">
                                    <img src={sale1} className="img-fluid" alt="balance" />
                                </div>
                            </div>
                            <div className="box-info">
                                <div className="box-text">
                                    <span>Ongoing Sales</span>
                                    <h4>10</h4>
                                </div>
                            </div>
                        </div>
                      </Col>
                     
                     
                      <Col lg="3">
                        <div className="banner-wrap bbox2">
                            <div className="banner-box">
                                <div className="box-img">
                                    <img src={balance} className="img-fluid" alt="balance" />
                                </div>
                            </div>
                            <div className="box-info">
                                <div className="box-text">
                                    <span>balance</span>
                                    <h4>N30,000.00</h4>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="banner-wrap bbox3">
                            <div className="banner-box">
                                <div className="box-img">
                                    <img src={sale2} className="img-fluid" alt="balance" />
                                </div>
                            </div>
                            <div className="box-info">
                                <div className="box-text">
                                    <span>Ongoing Orders</span>
                                    <h4>4</h4>
                                </div>
                            </div>
                        </div>
                      </Col>
                  </Row>
              </Container> */}
          {/* </div> */}
          
                {/* ------------Recommended----------- */}
                <div className="feature">
                    <Container>
                  <div className="title mb-3">
                      <h4>My Files</h4>
                  </div>
                  
                  <Row>
                      <Col lg="3">
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={blog} className="img-fluid" alt="blog"/>
                                      </div>
                                      <div className="f-text">
                                          <div className="f-title">
                                              <span>
                                                  <img src={pro1} className="img-fluid" alt="profile"/>
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
                              </div>
                          </div>
                      </Col>
                      <Col lg="3">
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={blog1} className="img-fluid" alt="blog"/>
                                      </div>
                                      <div className="f-text">
                                          <div className="f-title">
                                              <span>
                                                  <img src={pro2} className="img-fluid" alt="profile"/>
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
                              </div>
                          </div>
                      </Col>
                      <Col lg="3">
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={blog2} className="img-fluid" alt="blog"/>
                                      </div>
                                      <div className="f-text">
                                          <div className="f-title">
                                              <span>
                                                  <img src={pro3} className="img-fluid" alt="profile"/>
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
                              </div>
                          </div>
                      </Col>
                      <Col lg="3">
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={blog3} className="img-fluid" alt="blog"/>
                                      </div>
                                      <div className="f-text">
                                          <div className="f-title">
                                              <span>
                                                  <img src={pro4} className="img-fluid" alt="profile"/>
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
                              </div>
                          </div>
                      </Col>
                  </Row>
                    </Container>
                    {/* <Fix/> */}
                </div>



                {/* ------------MY Fix----------- */}
                <div className="Recommended">
                    <Container>
                        <div className="title mb-3">
                            <h4>Featured</h4>
                        </div>
                        <Row>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog4} className="img-fluid" alt="blog"/>
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro1} className="img-fluid" alt="profile"/>
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
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog5} className="img-fluid" alt="blog"/>
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro2} className="img-fluid" alt="profile"/>
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
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog6} className="img-fluid" alt="blog"/>
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro3} className="img-fluid" alt="profile"/>
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
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog7} className="img-fluid" alt="blog"/>
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro4} className="img-fluid" alt="profile"/>
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
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* ------------MY Fix----------- */}
                <div className="Recommended">
                    <Container>
                        <div className="title mb-3">
                            <h4>Featured</h4>
                        </div>
                        <Row>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog4} className="img-fluid" alt="blog"/>
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro1} className="img-fluid" alt="profile"/>
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
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog5} className="img-fluid" alt="blog"/>
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro2} className="img-fluid" alt="profile"/>
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
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog6} className="img-fluid" alt="blog"/>
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro3} className="img-fluid" alt="profile"/>
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
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog7} className="img-fluid" alt="blog"/>
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro4} className="img-fluid" alt="profile"/>
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
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* ------------Footer----------- */}
                <div className="F-footer">
                    <Footer/>
                </div>

          </>
         )
        }
    }