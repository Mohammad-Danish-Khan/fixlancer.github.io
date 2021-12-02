import React from "react";
import ReactDom from "react-dom";
import { Container , Tabs , Tab , Form , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tpro from "./img/tpro.png"
import Header from "./Mheader"
import Tables from "./Tables"
import Tables1 from "./Tables1"
import Tables2 from "./Tables2"
import Tables3 from "./Tables3"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Mheader from "./Mheader";

export default class Managesale extends React.Component{
    render(){
        return(
            <>
            <div className="edit-offers">
             <Header/>
            </div>
            <div className="m-sale">
                <Container>
                    <div className="title">
                     <h5>Manage Orders</h5>
                    </div>

                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Ongoing">
                            <Tables />
                        </Tab>
                        <Tab eventKey="profile" title="Delivered">
                            <Tables1 />
                        </Tab>
                        <Tab eventKey="contact" title="Completed">
                            <Tables2 />
                        </Tab>
                        <Tab eventKey="Cancelled" title="Cancelled">
                            <Tables3 />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
            </>
        )
    }
}