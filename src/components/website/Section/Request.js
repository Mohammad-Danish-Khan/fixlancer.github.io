import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Form , Col , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reqimg from "../img/reqimg.png"
import warning from "../img/caution.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Request extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          close: false,
        };
      } 
    render(){
        return(
            <>
                
                <div className="request-box">
                    <Row>
                        <Col lg="1" md="1" sm="2" xs="2" className="p-0">
                            <div className="box-wrap">
                                <div className="box-img">
                                    <img src={reqimg} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col lg="11" md="11" sm="10" xs="10">
                            <div className="box-wrap">
                                <div className="box-info">
                                    <div className="box-content">
                                        <div className="text">
                                            <h4>I want my ui design done asap with with with immediate immeadite<br/>effect right now! </h4>

                                            <div className="detail">
                                                <div className="offer">
                                                    <span>
                                                        <FontAwesomeIcon icon={['fas', 'file-alt']} />
                                                    </span>
                                                    <span>2 offer</span>
                                                </div>
                                                <div className="deilver">
                                                    <span>
                                                        <FontAwesomeIcon icon="calendar-alt"  />
                                                    </span>
                                                    <span>1 Day delivery</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="numbtn">
                                            <h5>N5000</h5>

                                            <div className="pending" variant="none" onClick={() => this.setState({ show: true })}>
                                              <img src={warning} />
                                              <p>Pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


                <Modal 
              show={this.state.show}
              animation={true} className="request"
              size="md" shadow-lg border>
              <Modal.Body className="">
                <h6>Send Offer</h6>
                <Button className="time-btn"
                      variant="outline-dark" onClick={() => this.setState({ show: false })}>
                          <FontAwesomeIcon icon="times"  />
                          </Button>
                      <div className="fcontent-wrap">
                        <div className="text-wrap">
                            <div className="imgs">
                                <img src={reqimg} alt="" />
                            </div>
                            <div className="textbox">
                                <p>I want my ui design done asap with with with immediate immeadite effect right now! </p>
                            </div>
                        </div>
                        <div className="for-info">
                            <div className="frm-select bbr">
                                <div className="text">
                                    <p>Select Fix</p>
                                </div>
                                <div className="drop1">
                                <Form.Select>
                                    <option></option>
                                </Form.Select>
                                </div>
                            </div>
                            <Form.Group className=" form-group " controlId="exampleForm.ControlTextarea1">
                                {/* <Form.Label>Example textarea</Form.Label> */}
                                <Form.Control as="textarea" rows={5} placeholder="Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Est non ut magna lobortis non iaculis adipiscing fermentum neque. Eget 
                                 morbi et etiam placerat. Sed ullamcorper orci tellus enim, ultrices laoreet faucibus            
                                  molestie erat. Integer faucibus dignissim morbi pharetra nunc,
                                       Iaculis tincidunt." />
                            </Form.Group>

                            <div className="frm-select bbrs">
                                <div className="text">
                                    <p>Delivery Days</p>
                                </div>
                                <div className="drop">
                                <Form.Select>
                                    <option></option>
                                </Form.Select> 
                                </div>
                            </div>
                            <div className="frm-select bbr">
                                <div className="text">
                                    <p>Price</p>
                                </div>
                                <div className="drop">
                                    <Form.Control type="text" placeholder="" />
                                </div>
                            </div>

                            <div className="accept">
                            <Form>
                                {[ 'radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="I accept I have read the project and can complete"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    </div>
                                ))}
                            </Form>
                            </div>

                            <div className="btns">
                                <Button className="can">Cancel</Button>
                                <Button>
                                    <Link to="/Sendoffer">Submit offer</Link>
                                </Button>
                            </div>
                        </div>
                      </div>
              </Modal.Body>
            </Modal>
            </>
        )
    }
}