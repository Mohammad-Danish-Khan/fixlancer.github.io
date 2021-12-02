import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fixe1 from "../img/fixe1.png"
import fixe2 from "../img/fixe2.png"
import fixe3 from "../img/fixe3.png"
import fixe4 from "../img/fixe4.png"
import pro1 from "../img/pro1.png"
import pro2 from "../img/pro2.png"
import pro3 from "../img/pro3.png"
import pro4 from "../img/pro4.png"
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Card2 extends React.Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            centerMode: false,
            // centerPadding: "50px",
            autoplay:false,
            speed: 200,
            slidesToShow: 4,
            swipeToSlide: true,
            // slidesToScroll: 1,
            arrows: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                //   slidesToScroll: 1,
                swipeToSlide: true,
                  infinite: true,
                  arrows: false,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                //   slidesToScroll: 1,
                swipeToSlide: true,
                  initialSlide: 1,
                  arrows: false,
                  dots: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                //   slidesToScroll: 1,
                  swipeToSlide: true,
                  arrows: false,
                  dots: false
                }
              }
            ]
          };
        return( 
          <>
        <div className="try homeCardStChange">
            <Container  >
                <Slider {...settings}>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <Link to="/view">
                                    <div className="fixe-info">
                                        <div className="f-img">
                                            <img src={fixe1} className="img-fluid" alt="fixe"/>
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
                                                    <span className="icn">
                                                    <FontAwesomeIcon icon="star"  />
                                                        </span>
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
                    </div>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <Link to="/view">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe2} className="img-fluid" alt="fixe"/>
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
                                                <span className="icn">
                                                                    <FontAwesomeIcon icon="star"  />
                                                                    </span>
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
                    </div>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <Link to="/view">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe3} className="img-fluid" alt="fixe"/>
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
                                                <span className="icn">
                                                    
                                                <FontAwesomeIcon icon="star"  />
                                                </span>
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
                    </div>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <Link to="/view">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe4} className="img-fluid" alt="fixe"/>
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
                                                <span className="icn">
                                                                    <FontAwesomeIcon icon="star"  />
                                                    </span>
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
                    </div>
                    {/* ----------------------- */}
                    
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <Link to="/view">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe3} className="img-fluid" alt="fixe"/>
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
                                                <span className="icn">
                                                                    <FontAwesomeIcon icon="star"  /></span>
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
                    </div>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <Link to="/view">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe4} className="img-fluid" alt="fixe"/>
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
                                                <span className="icn">
                                                                    <FontAwesomeIcon icon="star"  /></span>
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
                    </div>
                </Slider>
            </Container>
        </div>
         
          </>
         )
        }
    }