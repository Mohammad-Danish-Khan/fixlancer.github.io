import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Nav , Col , Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loader from "./img/loader.gif"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Loader extends React.Component{
    render(){
        return(
            <>
            <div className="loader">
                <img src={loader} alt="" className="" />
            </div>
            </>
        )
    }
}