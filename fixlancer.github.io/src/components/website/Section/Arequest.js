import React from "react";
import ReactDom from "react-dom";
import { Container , Row , ListGroup , Nav , Col , Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reqimg from "../img/reqimg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Arequest extends React.Component{
    render(){
        return(
            <>
                
                <div className="Arequest-box">
                            <Row>
                                <Col lg="11">
                                    <div className="box-wrap">
                                        <div className="box-info">
                                            <Row>
                                                <Col lg="1">
                                                    <div className="box-wrap">
                                                        <div className="box-img">
                                                            <img src={reqimg} alt="" />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="11">
                                                    <div className="box-content">
                                                        <div className="title">
                                                            <h4>I want my ui design done asap with with with immediate immeadite<br/>effect right now! </h4>

                                                        </div>
                                                        <div className="text">
                                                            <p>Hi guys, I urgently need a standalone bulk SMS and bulk voice messaging service just like voiceandtext.com</p>
                                                        <ListGroup>
                                                            <ListGroup.Item>1 Normal bulk SMS messaging</ListGroup.Item>
                                                            <ListGroup.Item>2 Normal bulk voice messaging</ListGroup.Item>
                                                            <ListGroup.Item>3. Normal bulk email messaging</ListGroup.Item>
                                                            <ListGroup.Item>4 Online payment using cashenvoy and Luno wallet</ListGroup.Item>
                                                            <ListGroup.Item>5 Up to N500 Referral bonus system</ListGroup.Item>
                                                            <ListGroup.Item>Up to N100 Sign up bonus</ListGroup.Item>
                                                            <ListGroup.Item>7 Sms, Voice and email advert</ListGroup.Item>
                                                            <ListGroup.Item>8 Credit Transfer to other users</ListGroup.Item>
                                                            <ListGroup.Item>9 N200 bonus for every N3000 credit purchase</ListGroup.Item>
                                                            <ListGroup.Item>10 Shortcode purchase and manager</ListGroup.Item>
                                                            <ListGroup.Item>11 Can upload contct either by typing in the contacts or uploading it from Excel other file extension</ListGroup.Item>
                                                            <ListGroup.Item>12 Contact Might be either in local or international format</ListGroup.Item>
                                                            <ListGroup.Item>12 Contact Might be either in local or international format</ListGroup.Item>    
                                                        </ListGroup>
                                                        </div>
                                                        <div className="numbtns">

                                                            <div className="detail">
                                                                <div className="offer">
                                                                    <span>
                                                                    <FontAwesomeIcon icon={['fas', 'circle']}  />
                                                                    </span>
                                                                    <span>username23</span>
                                                                </div>
                                                                <div className="deilver">
                                                                    <span>
                                                                    <FontAwesomeIcon icon="calendar-alt"  />
                                                                    </span>
                                                                    <span>1 Day delivery</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <span> 
                                                                    <FontAwesomeIcon icon="star"  />
                                                                    </span>
                                                                    <span className="yell">5.0</span>
                                                                    <span>(2345)</span>
                                                                </div>
                                                            </div>
                                                            <div className="nums">
                                                                <h5>N5000</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
            </>
        )
    }
}