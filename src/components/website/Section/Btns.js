import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Button , Form , Col , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import error from "../img/error.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Btns extends React.Component {
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


                
            <div className="btns">
                <Button className="can">Cancel</Button>
                <Button variant="none" onClick={() => this.setState({ show: true })}> Save
                </Button>
            </div>


            <Modal 
              show={this.state.show}
              animation={true} className="offer"
              size="md" shadow-lg border>
              <Modal.Body className="">
                  <div className="btn-wrap">
                      
                  <div className="img">
                      <img src={error} className="img-fluid" alt="" />
                  </div>
                  <div className="text">
                      <h4 className="py-3">Send Offer</h4>
                      <p>Discard changes made to this offer?</p>
                  </div>
                    <div className="ybtns">
                        <Button className="yes">
                                yes
                                </Button>
                                <Button
                            variant="outline-dark" onClick={() => this.setState({ show: false })}>No</Button>
                    </div>
                  </div>
              </Modal.Body>
            </Modal>

            </>
        )
    }
}