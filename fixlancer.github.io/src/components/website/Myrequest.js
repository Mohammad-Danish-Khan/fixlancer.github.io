import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Nav , Col , Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tpro from "./img/tpro.png"
import Header from "./Mheader";
import Footer from "./Footer"
import Request from "./Section/Request"
import Fix from "./Section/Fix"
import Card from './Section/Fix';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Myrequest extends React.Component{
    render(){
        return(
            <>
                <div className="job-request">
                    <Header/>
                    <Container>
                    <div className="title e">
                        <h5>My Request</h5>
                    </div>
                        <div className="job-request-wrap">
                            <Request/>
                            <Request/>
                            <Request/>
                        </div>
                    </Container>

                </div>
                <div className="feature">
                    <Container  >
                  <div className="title mb-3">
                      <h4>Recommended for You</h4>
                  </div>
                    </Container>
                    {/* <Fix/> */}
                    <Card/>
                </div>
            <Footer/>
            </>
        )
    }
}