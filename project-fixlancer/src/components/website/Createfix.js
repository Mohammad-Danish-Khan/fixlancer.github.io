import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Nav , Col , Form} from 'react-bootstrap';
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

export default class Createfix extends React.Component{
    render(){
        return(
            <>
            <div className="edit-offers">
             <Header/>
            </div>
            <div className="edit-offer">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <div className="edit-wrap">
                                <Row className="justify-content-center">
                                    <Col lg="6">
                                        <div className="edit-info">
                                            <div className="edit-content">
                                            <Form>
                                                <div className="title">
                                                    <h4>New<br/> Request</h4>
                                                </div>
                                                <Form.Group className="mb-3" controlId="Title">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" name="" id="" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="done">
                                                    <Form.Label>Describe the job you want done.</Form.Label>
                                                    <Form.Control as="textarea" rows={4} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="Category">
                                                    <Form.Label>Select a Category</Form.Label>
                                                    <Form.Select  className="">
                                                        <option data-hidden="true">Select a Category</option>
                                                        <option value="">Business/Branding</option>
                                                        <option value="">Digital Marketing</option>
                                                        <option value="">Ecommerce </option>
                                                        <option value="">Graphics Design</option>
                                                        <option value="">Logo Design</option>
                                                        <option value="">Mobile App</option>
                                                        <option value="">SEO </option>
                                                        <option value="">Software Development</option>
                                                        <option value="">Video & Animations </option>
                                                        <option value="">Web Design/Dev </option>
                                                        <option value="">Writing </option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="Deliverydays">
                                                    <Form.Label>Delivery days</Form.Label>
                                                    <Form.Select  className="">
                                                        <option data-hidden="true">Delivery days</option>
                                                        <option value="">24 hours</option>
                                                        <option value="">2 days</option>
                                                        <option value="">3 days </option>
                                                        <option value="">4 days</option>
                                                        <option value="">5 days</option>
                                                        <option value="">6 days</option>
                                                        <option value="">7 days</option>
                                                        <option value="">10 days</option>
                                                        <option value="">15 days</option>
                                                        <option value="">30 days</option>
                                                        <option value="">45 days</option>
                                                        <option value="">60 days</option>
                                                        <option value="">90 days</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <div className="btns">
                                                    <Button>Post Request</Button>
                                                </div>
                                            </Form>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}