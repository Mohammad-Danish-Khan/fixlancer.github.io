import React from 'react';
import ReactDOM from 'react-dom';
import {Container , Row , Col , Button , Form , Table} from 'react-bootstrap';
import Header from "./Mheader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


export default class Finance extends React.Component{
    render(){
        return( 
          <>
          <Header/>
            <div className="history">
              <Container>
                  <div className="history-wrap">
                    <div className="title">
                      <h4>Transaction History</h4>
                    </div>
                    <Row className="justify-content-center">
                      <Col lg="11">
                        <Table  className="" responsive>
                          <thead>
                            <tr>
                              <th className="bbr">Transaction</th>
                              <th className="bbr">Date</th>
                              <th className="amt">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="bbr">Cleared funds for completed order with ID #147</td>
                              <td className="bbr">20 Jul 6:00pm</td>
                              <td className="amt">N3,500</td>
                            </tr>
                            <tr>
                              <td className="bbr">Cleared funds for completed order with ID #147</td>
                              <td className="bbr">20 Jul 6:00pm</td>
                              <td className="amt">N3,500</td>
                            </tr>
                            <tr>
                              <td className="bbr">Cleared funds for completed order with ID #147</td>
                              <td className="bbr">20 Jul 6:00pm</td>
                              <td className="amt">N3,500</td>
                            </tr>
                            <tr>
                              <td className="bbr">Cleared funds for completed order with ID #147</td>
                              <td className="bbr">20 Jul 6:00pm</td>
                              <td className="amt">N3,500</td>
                            </tr>
                            <tr>
                              <td className="bbr">Cleared funds for completed order with ID #147</td>
                              <td className="bbr">20 Jul 6:00pm</td>
                              <td className="amt">N3,500</td>
                            </tr>
                            <tr>
                              <td className="bbr">Cleared funds for completed order with ID #147</td>
                              <td className="bbr">20 Jul 6:00pm</td>
                              <td className="amt">N3,500</td>
                            </tr>
                            <tr>
                              <td className="bbr">Cleared funds for completed order with ID #147</td>
                              <td className="bbr">20 Jul 6:00pm</td>
                              <td className="amt">N3,500</td>
                            </tr>
                            <tr>
                              <td className="bbr">Cleared funds for completed order with ID #147</td>
                              <td className="bbr">20 Jul 6:00pm</td>
                              <td className="amt">N3,500</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </div>
              </Container>
            </div>
          </>
          )
         }
     }