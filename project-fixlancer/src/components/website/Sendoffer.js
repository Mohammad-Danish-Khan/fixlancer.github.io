import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Form , Col , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reqimg from "./img/reqimg.png"
import Header from "./Mheader";
import Footer from "./Footer"
import Btns from "./Section/Btns"
import Request from "./Section/Arequest"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Sendoffer extends React.Component {
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
                <div className="job-request">
                    <Header/>
                    <Container>
                        <div className="job-request-wrap">
                            <div className="title">
                                <h5>My Request</h5>
                                <span>Graphics Design &#8250;  Flyer Design</span>
                            </div>
                            
                            <Request/>
                            <div className="title">
                                <h5>Your Offer</h5>
                            </div>
                            <Request/>

                            <div className="edit-btns text-center py-5">
                                <Button  variant="none" onClick={() => this.setState({ show: true })}>Edit offer</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            <Footer/>

            <Modal 
              show={this.state.show}
              animation={true} className="request"
              size="md" shadow-lg border>
              <Modal.Body className="">
                <h6>Eidt Offer</h6>
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
                                    <p>Delivery Days</p>
                                </div>
                                <div className="drop1">
                                <Form.Select>
                                    <option>Default select</option>
                                </Form.Select>
                                </div>
                            </div>
                            <Form.Group className=" form-group mb-3" controlId="exampleForm.ControlTextarea1">
                                {/* <Form.Label>Example textarea</Form.Label> */}
                                <Form.Control as="textarea" rows={3} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est non ut magna lobortis non iaculis adipiscing fermentum neque. Eget morbi et etiam placerat. Sed ullamcorper orci tellus enim, ultrices laoreet faucibus molestie erat. Integer faucibus dignissim morbi pharetra nunc, ac egestas tincidunt eleifend. Pellentesque in congue dolor dignissim ac nisl aliquet consequat nisl. Arcu egestas vestibulum, porttitor lectus.
                                    dolor in sit nec ut mollis. Condimentum libero ultricies nisi ornare dictum. Quis at adipiscing pellentesque orci nibh in nisi, volutpat vehicula. Elementum sed enim dictum iaculis posuere imperdiet sit pretium, venenatis. Iaculis tincidunt." />
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
                                    <Btns/>
                        </div>
                      </div>
              </Modal.Body>
            </Modal>

            </>
        )
    }
}