import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Nav , Col , Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tpro from "./img/tpro.png"
import Header from "./Mheader";
import Footer from "./Footer"
import RequestJob from "./Section/RequestJob"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Allrequest extends React.Component{
    render(){
        return(
            <>
                <div className="job-request">
                    <Header/>
                    <Container>
                            <div className="title">
                                <h5>Job Request</h5>
                            </div>
                        <div className="job-request-wrap">
                            
                            <RequestJob/> 
                            <RequestJob/>
                            <RequestJob/>
                            <RequestJob/>
                            <RequestJob/>
                            <RequestJob/>
                        </div>
                    </Container>
                </div>
            <Footer/>
            </>
        )
    }
}