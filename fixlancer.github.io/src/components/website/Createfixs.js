import React from "react";
import ReactDom from "react-dom";
import { Container, Row, Button, Nav, Col, Form } from 'react-bootstrap';
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

export default class Createfix extends React.Component {
    render() {
        return (
            <>
                <div className="edit-offers">
                    <Header />
                </div>
                <div className="edit-offer">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8">
                                <div className="edit-wrap create-wrap">
                                    <Row className="justify-content-center">
                                        <Col lg="10">
                                            <div className="edit-info">
                                                <div className="edit-content ">
                                                    <Form>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Col lg="12">
                                                                <h6>Create a Fix to start <br /> Selling</h6>
                                                            </Col>
                                                            <Form.Label column sm="4">
                                                            </Form.Label>
                                                            <Col sm="5">
                                                                <Form.Control as="textarea" rows={2} placeholder="Enter Fix title" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Col lg="12">
                                                                <h6>Description</h6>
                                                            </Col>
                                                            <Form.Label column sm="4">
                                                            </Form.Label>
                                                            <Col sm="8">
                                                                <Form.Control as="textarea" rows={2} placeholder="Be detailed as possible" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Col lg="12">
                                                                <h6>Details you need to start<br /> the project</h6>
                                                            </Col>
                                                            <Form.Label column sm="4">

                                                            </Form.Label>
                                                            <Col sm="8">
                                                                <Form.Control as="textarea" rows={2} placeholder="Be detailed as possible" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Form.Label column sm="4">
                                                                Select Price
                                                            </Form.Label>
                                                            <Col sm="5">
                                                                <Form.Select className="">
                                                                    <option data-hidden="true">Select Price</option>
                                                                    <option value="">1</option>
                                                                    <option value="">2</option>
                                                                </Form.Select>
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Form.Label column sm="4">
                                                                Select Category
                                                            </Form.Label>
                                                            <Col sm="5">
                                                                <Form.Select className="">
                                                                    <option data-hidden="true">Select Category</option>
                                                                    <option value="">1</option>
                                                                    <option value="">2</option>
                                                                </Form.Select>
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Form.Label column sm="4">
                                                                Delivery Days
                                                            </Form.Label>
                                                            <Col sm="5">
                                                                <Form.Select className="">
                                                                    <option data-hidden="true">Delivery Days</option>
                                                                    <option value="">1</option>
                                                                    <option value="">2</option>
                                                                </Form.Select>
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Form.Label column sm="4">
                                                                Enter each tag seperated by comma (optional)
                                                            </Form.Label>
                                                            <Col sm="5">
                                                                <Form.Control className="" type="text" name="" id="" placeholder="" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Col lg="12">
                                                                <h6>Image Upload</h6>
                                                            </Col>
                                                            <Form.Label column sm="4">

                                                            </Form.Label>
                                                            <Col sm="8">
                                                                <Form.Control as="textarea" rows={2} placeholder="Be detailed as possible" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Col lg="12">
                                                                <h6>Video Upload</h6>
                                                            </Col>
                                                            <Form.Label column sm="4">

                                                            </Form.Label>
                                                            <Col sm="8">
                                                                <Form.Control as="textarea" rows={2} placeholder="Be detailed as possible" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Col lg="12">
                                                                <h6>Work Samples</h6>
                                                            </Col>
                                                            <Form.Label column sm="4">

                                                            </Form.Label>
                                                            <Col sm="5">
                                                                <Form.Control className="mb-2" type="text" name="" id="" placeholder="E.g. www.fixlancer.com" />
                                                                <Form.Control className="mb-2" type="text" name="" id="" placeholder="E.g. www.fixlancer.com" />
                                                                <Form.Control className="mb-2" type="text" name="" id="" placeholder="E.g. www.fixlancer.com" />
                                                                <Form.Control className="mb-2" type="text" name="" id="" placeholder="E.g. www.fixlancer.com" />
                                                                <Form.Control className="mb-2" type="text" name="" id="" placeholder="E.g. www.fixlancer.com" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                            <Col lg="12">
                                                                <h6>Extra</h6>
                                                            </Col>
                                                            <Col lg="12">
                                                                <p>Enter What you will do for extra</p>
                                                            </Col>
                                                            <Form.Label column sm="4">

                                                            </Form.Label>
                                                            <Col sm="5" className="extraCre e">
                                                                <Form.Control className="mb-3" type="text" name="" id="i" placeholder="Extra description" />
                                                                <Form.Control className="mb-3" type="text" name="" id="" placeholder="Amount" />

                                                            </Col>
                                                            <Col sm="3" className="extraCre e">
                                                                <Form.Control className="mb-3" type="text" name="" id="i" placeholder="Extra description" />
                                                                <Form.Control className="mb-3" type="text" name="" id="" placeholder="Amount" />

                                                            </Col>
                                                            <Col sm="5" className="extraCre a">
                                                                <Form.Control className="mb-3" type="text" name="" id="" placeholder="Extra description" />
                                                                <Form.Control className="mb-3" type="text" name="" id="" placeholder="Extra description" />
                                                            </Col>
                                                            <Col sm="3" className="extraCre a">
                                                                <Form.Control className="mb-3" type="text" name="" id="" placeholder="Amount" />
                                                                <Form.Control className="mb-3" type="text" name="" id="" placeholder="Amount" />
                                                            </Col>
                                                        </Form.Group>

                                                        <div className="btns text-center">
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