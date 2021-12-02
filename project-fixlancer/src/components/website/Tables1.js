import React from "react";
import ReactDom from "react-dom";
import { Container , Table , Col , Form , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tpro from "./img/tpro.png"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Tables1 extends React.Component{
    render(){
        return(
            <>
            <div className="m-table">
                    <div className="am-table">
                        <div className="table-wrap">
                                {/* <div className="text">
                                    <span>Ongoing Sales</span>
                                </div> */}
                            <Table  className="responisive" responsive>
                                <thead>
                                    <tr>
                                    <th className="buyp">Buyer</th>
                                    <th>Fix</th>
                                    <th>Due In</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span><img src={tpro} alt="" /></span>
                                            <span>Geofrey Fernando</span>
                                        </td>
                                        <td>I can do your logo design work</td>
                                        <td>23/5/2020</td>
                                        <td><span className="org">N3,500</span></td>
                                        <td><span className="stas">Delivered </span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span><img src={tpro} alt="" /></span>
                                            <span>Geofrey Fernando</span>
                                        </td>
                                        <td>I can do your logo design work</td>
                                        <td>23/5/2020</td>
                                        <td><span className="org">N3,500</span></td>
                                        <td><span className="stas">Delivered </span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span><img src={tpro} alt="" /></span>
                                            <span>Geofrey Fernando</span>
                                        </td>
                                        <td>I can do your logo design work</td>
                                        <td>23/5/2020</td>
                                        <td><span className="org">N3,500</span></td>
                                        <td><span className="stas">Delivered </span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}