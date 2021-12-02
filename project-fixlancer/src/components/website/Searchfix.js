import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Modal, Button, ListGroup, Ratio } from 'react-bootstrap';
import Header from "./Mheader";
import Recommmed from "./Section/Recom";
import Footer from "./Footer";
import pro1 from "./img/pro1.png"
import pro2 from "./img/pro2.png"
import pro3 from "./img/pro3.png"
import pro4 from "./img/pro4.png"
import blog7 from "./img/blog7.png"
import blog8 from "./img/blog8.png"
import blog9 from "./img/blog9.png"
import blog10 from "./img/blog10.png"
import blog11 from "./img/blog11.png"
import blog12 from "./img/blog12.png"
import blog13 from "./img/blog13.png"
import blog14 from "./img/blog14.png"
import blog15 from "./img/blog15.png"
import blog16 from "./img/blog16.png"
import blog17 from "./img/blog17.png"
import blog18 from "./img/blog18.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {
    Slider,
    SliderInput,
    SliderTrack,
    SliderRange,
    SliderHandle,
    SliderMarker,
} from "@reach/slider";
import "@reach/slider/styles.css";

export default class Searchfix extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            close: false,
        };
    }
    render() {
        return (
            <>
                <div className="header">
                    <Header />
                </div>
                <div className="searchfix">
                    <Container>
                        <Row>
                            <Col lg="8">
                                <div className="filter">
                                    <div className="filter-wrap">
                                        <div className="result-text">
                                            <h5>Showing 14,000 results for “Design Logo”</h5>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="filter">
                                    <div className="filter-wrap">
                                        <div className="filter-btn text-end">
                                            <Button variant="none" onClick={() => this.setState({ show: true })}>
                                                Filter<i class="fal fa-sliders-h"></i></Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog7} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro1} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog8} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro2} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog9} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro3} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog10} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro4} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog11} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro1} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog12} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro2} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog13} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro3} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog14} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro4} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                    < Recommmed />
                    <Container>
                        <Row>

                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog15} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro1} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog16} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro2} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog17} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro3} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="fixe-box">
                                    <div className="fixe-wrap">
                                        <div className="fixe-info">
                                            <div className="f-img">
                                                <img src={blog18} className="img-fluid" alt="fixe" />
                                            </div>
                                            <div className="f-text">
                                                <div className="f-title">
                                                    <span>
                                                        <img src={pro4} className="img-fluid" alt="profile" />
                                                    </span>
                                                    <span className="name">sadically_creative</span>
                                                </div>

                                                <div className="desc">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                                                </div>

                                                <div className="nums d-flex justify-content-between">
                                                    <div className="rating">
                                                        <span className="icn"><FontAwesomeIcon icon="star" /></span>
                                                        <span className="n1 px-2">5.0</span>
                                                        <span className="n2">(6)</span>
                                                    </div>

                                                    <div className="number">
                                                        <span>N10,000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
                <Footer />

                <div className="search-modal">
                    {/* filterSearch */}
                    <Modal className="model_alert z e" show={this.state.show}>
                        <Modal.Header >
                            <Modal.Title>Filter Results</Modal.Title>
                            <h6 variant="secondary e" onClick={() => this.setState({ show: false })}>
                                X
                            </h6>
                        </Modal.Header>
                        <Modal.Body>

                            <div className="content-wrap">
                                <div className="price">
                                    <h5>Price</h5>
                                    <div className="range d-flex justify-content-between">
                                        <div>Minimum</div>
                                        <div className="r-slide"><Slider /></div>
                                        <div>Maximum</div>
                                    </div>
                                </div>
                                <div className="m-category">
                                    <h5>Category</h5>
                                    <div className="categoryD">
                                        <div>
                                            <input type="checkbox" id="vehicle" /> <p>Graphic & Design</p>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="vehicle" /> <p>Logo Design</p>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="vehicle" /> <p>Mobile Applications</p>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="vehicle" /> <p>iOS Applications</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>

            </>
        )
    }
}