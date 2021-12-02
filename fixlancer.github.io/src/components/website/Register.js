import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col , Form , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo.png"
import store from "./img/store.jpeg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";



export default class Register extends React.Component{
    render(){
        return( 
          <>
          <div className="login reg">
              <Container  fluid={true}  >
                  <Row>
                      <Col lg="5" className="p-0">
                        <div className="login-wrap login-content">
                            <div className="login-info">
                                <div className="logo text-center">
                                    <Link to="/">
                                    <img src={logo} className="img-fluid" alt="logo" />
                                    </Link>
                                </div>
                                <div className="texts text-center">
                                    <p>We give you the levereage to get jobs <br/> done person in an easy, fast and <br/> secured way</p>
                                </div>
                                <div className="imgs  text-center">
                                    <img src={store} alt="" />
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="7" className="p-0">
                        <div className="login-wrap">
                            <div className="login-info">
                                <div className="login-box reg-box">
                                    <div className="box-wrap">
                                        <div className="title">
                                            <div className="t-head">
                                                <div className="heading">
                                                    <h4>Create Account</h4>
                                                </div>
                                                <div className=" links text">
                                                    <span>Do you have account? <Link to="/login">Sign in</Link></span>
                                                </div>
                                            </div>
                                            <p>Follow the instructions to make it easier to register and you will be
                                                 <br/>able to explore inside.</p>

                                        </div>
                                        <Form>
                                            <Row>
                                                <Col lg="6">
                                                    <Form.Group className="mb-3" controlId="Name">
                                                        <Form.Label>Usarname</Form.Label>
                                                        <Form.Control type="text" placeholder="Usarname" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6" >
                                                    <Form.Group className="mb-3" controlId="Email">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control type="email" placeholder="Email" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="mb-3" controlId="phone">
                                                        <Form.Label>Mobile Number</Form.Label>
                                                        <Form.Control type="text" placeholder="Mobile Number" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="mb-3" controlId="Country">
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Control type="text" placeholder="Country" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="mb-3" controlId="City">
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control type="text" placeholder="City" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <Form.Group className="mb-3" controlId="password">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="mb-3" controlId="Name">
                                                        <Form.Label>Retype Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Retype Password" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="mb-3" controlId="Name">
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Control type="text" placeholder="Country" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <Button variant="primary"  className="d-block" type="submit">
                                                         <Link to="/Loader">Create Account</Link>
                                                    </Button>
                                                </Col>
                                            </Row>
                                            {/* <div className="text">
                                                <span>Do you have account? <Link to="/login">Sign in</Link></span>
                                            </div> */}
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          </>
         )
        }
    }