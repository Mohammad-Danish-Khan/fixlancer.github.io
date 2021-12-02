import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Nav , Col , Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tpro from "./img/tpro.png"
import Header from "./Mheader";
import Footer from "./Footer"
import Request from "./Section/Arequest"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Jobrequestbuyer extends React.Component{
    render(){
        return(
            <>
                <div className="job-request">
                    <Header/>
                    <Container>
                        <div className="job-request-wrap">
                            <div className="title">
                                <h5>My Request</h5>
                                <span>Graphics Design  &#8250;  Flyer Design</span>
                            </div>
                            
                            <Request/>

                            

                            <div className="title">
                                <h5>Offer</h5>
                            </div>
                            <Request/>

                            <div className="edit-btns text-center py-5">
                                <Button className="mess">
                                    <Link to="/Chatbody">Message</Link>
                                </Button>
                                <Button  variant="none" onClick={() => this.setState({ show: true })}>Order now</Button>
                            </div>
                            <Request/>

                            <div className="edit-btns text-center py-5">
                                <Button className="mess">
                                    <Link to="/Chatbody">Message</Link>
                                </Button>
                                <Button  variant="none" onClick={() => this.setState({ show: true })}>Order now</Button>
                            </div>
                            <Request/>

                            <div className="edit-btns text-center py-5">
                                <Button className="mess">
                                    <Link to="/Chatbody">Message</Link>
                                </Button>
                                <Button  variant="none" onClick={() => this.setState({ show: true })}>Order now</Button>
                            </div>
                            <Request/>

                            <div className="edit-btns text-center py-5">
                                <Button className="mess">
                                    <Link to="/Chatbody">Message</Link>
                                </Button>
                                <Button  variant="none" onClick={() => this.setState({ show: true })}>Order nowr</Button>
                            </div>
                            <Request/>

                            <div className="edit-btns text-center py-5">
                                <Button className="mess">
                                    <Link to="/Chatbody">Message</Link>
                                </Button>
                                <Button  variant="none" onClick={() => this.setState({ show: true })}>Order now</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            <Footer/>
            </>
        )
    }
}