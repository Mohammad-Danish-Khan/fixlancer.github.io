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

export default class Editoffer extends React.Component{
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
                                                    <h4>Personal Details</h4>
                                                </div>
                                                <Form.Group className="mb-3" controlId="Username">
                                                    <Form.Label>Username</Form.Label>
                                                    <Form.Control type="text" name="" id="" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="Fullname">
                                                    <Form.Label>Full name</Form.Label>
                                                    <Form.Control type="text" name="" id="" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="City">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control type="text" name="" id="" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="Mobile No.">
                                                    <Form.Label>Mobile No.</Form.Label>
                                                    <Form.Control type="text" name="" id="" />
                                                    <Form.Text className="text-muted">
                                                        *For sms notifications
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="Bio">
                                                    <Form.Label>Bio</Form.Label>
                                                    <Form.Control as="textarea" rows={4} />
                                                    <Form.Text className="text-muted">
                                                        *Posting of contact informations may result in perment blocking of your account    
                                                    </Form.Text>
                                                </Form.Group>
                                                <div className="title">
                                                    <h4>Change Password</h4>
                                                </div>
                                                <Form.Group className="mb-3" controlId="Passoword">
                                                    <Form.Label>Passoword</Form.Label>
                                                    <Form.Control type="password" name="" id="" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="RepeatPassword">
                                                    <Form.Label>Repeat Password</Form.Label>
                                                    <Form.Control type="password" name="" id="" />
                                                </Form.Group>
                                                <div className="title">
                                                    <h4>Bank Transfer Details</h4>
                                                </div>
                                                
                                                <Form.Group className="mb-3" controlId="Bankname">
                                                    <Form.Label>Bank name</Form.Label>
                                                    <Form.Select  className="">
                                                        <option data-hidden="true">Bank</option>
                                                        <option value="">Access Bank</option>
                                                        <option value="">Citi Bank</option>
                                                        <option value="">Ecobank </option>
                                                        <option value="">FCMB</option>
                                                        <option value="">Fidelity Bank</option>
                                                        <option value="">First Bank of Nigeria </option>
                                                        <option value="">GTBank Plc </option>
                                                        <option value="">Heritage Bank </option>
                                                        <option value="">JAIZ Bank </option>
                                                        <option value="">Keystone Bank </option>
                                                        <option value="">Kuda </option>
                                                        <option value="">Paga</option>
                                                        <option value="">PALMPAY  </option>
                                                        <option value="">PayAttitude Online</option>
                                                        <option value="">Paycom(OPay)</option>
                                                        <option value="">POLARIS BANK</option>
                                                        <option value="">Providus Bank</option>
                                                        <option value="">Rubies</option>
                                                        <option value="">Sparkle</option>
                                                        <option value="">Stanbic IBTC Bank</option>
                                                        <option value="">Stanbic Mobile Money</option>
                                                        <option value="">Standard Chartered</option>
                                                        <option value="">Sterling Bank</option>
                                                        <option value="">SUNTRUST BANK</option>
                                                        <option value="">Titan Trust Bank</option>
                                                        <option value="">Union Bank</option>
                                                        <option value="">United Bank of Africa (UBA)</option>
                                                        <option value="">Unity Bank</option>
                                                        <option value="">VDF MFB</option>
                                                        <option value="">Wema Bank</option>
                                                        <option value="">ZENITH BANK PLC</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="Accountname">
                                                    <Form.Label>Account name</Form.Label>
                                                    <Form.Control type="text" name="" id="" />
                                                </Form.Group>
                                                <Form.Group className="mb-5" controlId="AccountNo">
                                                    <Form.Label>Account No.</Form.Label>
                                                    <Form.Control type="text" name="" id="" />
                                                </Form.Group>
                                                <div className="btns">
                                                    <Button>Save</Button>
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