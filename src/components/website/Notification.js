import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Nav , Col , Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Mheader"
import Card from "./Section/Card"
import noti from "./img/noti.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Notifiaction extends React.Component{
    render(){
        return(
            <>
            
            <div className="noti-header"> 
            <Header/>
                <div className="notification">
                    <Container>
                        <Row>
                            <Col lg="4">
                                <div className="notification-wrap">
                                    <div className="noti-wraps">
                                        <div className="noti-box">
                                            <div className="imgs text-center">
                                                <img src={noti} className="img-fluid" alt="" />
                                            </div>
                                                <div className="title text-center py-2">
                                                    <h4>michelle_Haruna</h4>
                                                    <span>@uidesigner</span>
                                                    <span><FontAwesomeIcon icon="pencil-alt"  /></span>
                                                </div>
                                                <div className="text">
                                                    <p>I am a graphics designer with more than 2yrs of experience. Clients satisfaction is a top priority to me. You can contact me anytime. I am always...</p>
                                                </div>
                                                <div className="info">
                                                    <div className="info-wrap">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="rating">
                                                                <span><FontAwesomeIcon icon="star"  /></span>
                                                                <span>100%</span>
                                                            </div>
                                                            <div className="phone">
                                                                <span><FontAwesomeIcon icon="phone-alt"  /></span>
                                                                <span>08167642321</span>
                                                            </div>
                                                            <div className="calendar">
                                                                <span><FontAwesomeIcon icon="calendar-alt"  /></span>
                                                                <span>Joined: Dec 2018</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btns text-center">
                                                    <Button>Contact Me</Button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="8">
                                <div className="notification-wrap">
                                    <div className="noti-head">
                                        <h6>Fix by michelle_Haruna</h6>
                                    </div>
                                    <div className="noti-content">
                                        <Card/>
                                        <Card/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            </>
        )
    }
}