import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Form, Button, Tabs, Tab } from 'react-bootstrap';
import Slider from "react-slick";
import Header from './Header';
import Fix from './Section/Fix';
import Card from './Section/Fix';
import Recommended from './Section/Recommend';
import Footer from './Footer';
import store1 from "./img/g-store.jpg"
import store2 from "./img/a-store.jpg"
import cate1 from "./img/cate1.png"
import cate2 from "./img/cate2.png"
import cate3 from "./img/cate3.png"
import cate4 from "./img/cate4.png"
import cate5 from "./img/cate5.png"
import cate6 from "./img/cate6.jpg"
import cate7 from "./img/cate7.jpg"
import partner1 from "./img/part1.png"
import partner2 from "./img/part2.png"
import partner3 from "./img/part3.png"
import partner4 from "./img/part4.png"
import store from "./img/store.png"
import stores from "./img/Attachment_16319850781.png"
import stores1 from "./img/Attachment_1631985078.png"
import protecte from "./img/protected.png"
import flutter from "./img/flutter.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class Home extends React.Component {
    render() {
        const cateslider = {
            dots: false,
            infinite: true,
            centerMode: true,
            centerPadding: "10px",
            autoplay: false,
            speed: 200,
            slidesToShow: 5,
            swipeToSlide: true,
            // slidesToScroll: 5,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        swipeToSlide: true,
                        slidesToShow: 3,
                        //   slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        swipeToSlide: true,
                        slidesToShow: 2,
                        //   slidesToScroll: 1,
                        initialSlide: 1,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        swipeToSlide: true,
                        slidesToShow: 2,
                        //   slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                }
            ]
        };
        return (
            <>
                {/* ---------------home-banner------------ */}
                <div className="home-banner">
                    <div className="header">
                        <Header />
                    </div>
                    <Container >
                        <Row>
                            <Col lg="12">
                                <div className="banner-wrap">
                                    <div className="banner-info">
                                        <h3 className="screenH3">
                                            <span className="orgs">Find Services </span>
                                            <span>For Your <br /> Business </span>
                                        </h3>
                                        <h3 className="mobileH3">
                                            <span className="orgs">Find Services <br /> </span>
                                            <span>For Your Business </span>
                                        </h3>

                                        <Form>
                                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                                <Form.Control size="lg" type="search" onfocus="return false" placeholder="Job title or keyword and location" />
                                                {/* <i class="far fa-search"></i> */}
                                                <svg className="section-search-black screen-st" width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6392 2.68604C6.70482 2.68604 2.68555 6.70531 2.68555 11.6396C2.68555 16.574 6.70482 20.5932 11.6392 20.5932C13.7849 20.5932 15.7555 19.8313 17.2999 18.5664L22.6458 23.9124C22.7283 23.9983 22.8271 24.0669 22.9365 24.1142C23.0458 24.1614 23.1635 24.1864 23.2826 24.1876C23.4017 24.1888 23.5199 24.1663 23.6302 24.1212C23.7405 24.0762 23.8407 24.0096 23.9249 23.9254C24.0091 23.8412 24.0757 23.741 24.1207 23.6307C24.1658 23.5204 24.1883 23.4022 24.1871 23.2831C24.1859 23.164 24.161 23.0463 24.1137 22.937C24.0664 22.8276 23.9978 22.7288 23.9119 22.6463L18.566 17.3003C19.8308 15.756 20.5928 13.7854 20.5928 11.6396C20.5928 6.70531 16.5735 2.68604 11.6392 2.68604ZM11.6392 4.47676C15.6057 4.47676 18.802 7.67308 18.802 11.6396C18.802 15.6062 15.6057 18.8025 11.6392 18.8025C7.6726 18.8025 4.47627 15.6062 4.47627 11.6396C4.47627 7.67308 7.6726 4.47676 11.6392 4.47676Z" fill="#766C6C" fill-opacity="0.5" />
                                                </svg>
                                                <svg className="section-search-black mobile-st" width="15" height="15" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6392 2.68604C6.70482 2.68604 2.68555 6.70531 2.68555 11.6396C2.68555 16.574 6.70482 20.5932 11.6392 20.5932C13.7849 20.5932 15.7555 19.8313 17.2999 18.5664L22.6458 23.9124C22.7283 23.9983 22.8271 24.0669 22.9365 24.1142C23.0458 24.1614 23.1635 24.1864 23.2826 24.1876C23.4017 24.1888 23.5199 24.1663 23.6302 24.1212C23.7405 24.0762 23.8407 24.0096 23.9249 23.9254C24.0091 23.8412 24.0757 23.741 24.1207 23.6307C24.1658 23.5204 24.1883 23.4022 24.1871 23.2831C24.1859 23.164 24.161 23.0463 24.1137 22.937C24.0664 22.8276 23.9978 22.7288 23.9119 22.6463L18.566 17.3003C19.8308 15.756 20.5928 13.7854 20.5928 11.6396C20.5928 6.70531 16.5735 2.68604 11.6392 2.68604ZM11.6392 4.47676C15.6057 4.47676 18.802 7.67308 18.802 11.6396C18.802 15.6062 15.6057 18.8025 11.6392 18.8025C7.6726 18.8025 4.47627 15.6062 4.47627 11.6396C4.47627 7.67308 7.6726 4.47676 11.6392 4.47676Z" fill="#766C6C" fill-opacity="0.5" />
                                                </svg>
                                            </Form.Group>
                                            <Button size="lg">Search</Button>
                                        </Form>
                                        <div className="store">

                                            <h4>Download Our App</h4>
                                            <div className="play-icons">
                                                <img src={stores} className="img-fluid e" alt="store" />
                                                <img src={stores1} className="img-fluid a" alt="store" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* --------------category------------ */}
                <div className="category">
                    <Container  >
                        <div className="title mb-3">
                            <h4>Fix Category</h4>
                        </div>
                        <div className="category-slider">
                            <Slider {...cateslider}>
                                <div className="cate-slide">
                                    <div className="category-wrap ">
                                        <img src={cate1} className="img-fluid" alt="category" />
                                        <div className="text">
                                            <p>Graphics <br />Design</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cate-slide">
                                    <div className="category-wrap ">
                                        <img src={cate2} className="img-fluid" alt="category" />
                                        <div className="text">
                                            <p>Music & <br />Audio</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cate-slide">
                                    <div className="category-wrap ">
                                        <img src={cate3} className="img-fluid" alt="category" />
                                        <div className="text">
                                            <p>Digital <br /> Marketing </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cate-slide">
                                    <div className="category-wrap ">
                                        <img src={cate4} className="img-fluid" alt="category" />
                                        <div className="text">
                                            <p>Writing </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cate-slide">
                                    <div className="category-wrap ">
                                        <img src={cate5} className="img-fluid" alt="category" />
                                        <div className="text">
                                            <p>Video & <br /> Animation</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cate-slide">
                                    <div className="category-wrap ">
                                        <img src={cate6} className="img-fluid" alt="category" />
                                        <div className="text">
                                            <p>Business / Branding </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cate-slide">
                                    <div className="category-wrap ">
                                        <img src={cate7} className="img-fluid" alt="category" />
                                        <div className="text">
                                            <p>Programming & Tech </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                    </Container>
                </div>
                {/* ---------------feature----------- */}
                <div className="feature">
                    <Container >
                        <div className="title mb-3">
                            <h4>Featured Fixes</h4>
                        </div>
                    </Container>
                    {/* <Fix /> */}
                    <Card />
                </div>
                {/* ------------Recommended----------- */}
                <div className="Recommended recommend-st">
                    <Container>
                        <div className="title mb-3">
                            <h4>Recommended For You</h4>
                        </div>
                        <Recommended />
                        <Recommended />
                        <Recommended />
                    </Container>
                </div>

                {/* ---------the Blend---------- */}
                <div className="blend">
                    <div className="blend-heading">
                        <Container >
                            <div className="blend-wrap">
                                <div className="blend-info text-center">
                                    <h4>feel the blend</h4>
                                    <p>We make buying and selling more of a colaborative relation rather <br /> than a manipulative one</p>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="blend-tabs">
                        <Container >
                            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3" >
                                <Tab eventKey="home" title="How Fixlancer Works" className="tab1">
                                    <Row>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb1">Find services</h5>
                                                <p>search for a service , with few details, describe your project you wi;; have the freedom to choose from lots of expert that are ready to get your jobs</p>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb2">Hire with rease</h5>
                                                <p>We only house the best handswhen it comes to digital jobs, and we will walk you through every process until your job is done. No setup fee, No hidden charges</p>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb3">Work together</h5>
                                                <p>Chat dirtectly with your expert.
                                                    Ask question and request for changes where possible.
                                                    Feel the blend of friendship and work in one place.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="profile" title="Why Fixlancer?" className="tab2">
                                    <Row>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb1">Find an expert fast</h5>
                                                <p>It can take hours to find the perfect hand for yourvproject,but not with Fixlancer.Find services in miuntes with fixed prices all from the comfort of your home.</p>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb2">Secured payment always</h5>
                                                <p>Noted that for every service, You'll make an upfront payment. Your payment will be held on escrow until you approve the job based on your satisfaction.</p>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb3">24/7 assitance</h5>
                                                <p>Our help team is always available and ready to give you that premium support you need wherever, whenever.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Container>
                    </div>
                </div>

                {/* --------Our Partners-------- */}
                <div className="Partner">
                    <div className="title">
                        <h3>in the news</h3>
                    </div>
                    <Container >
                        <Row>
                            <Col lg="6">
                                <a href="https://techpoint.africa/2020/05/11/how-tech-startup-fixlancer-is-changing-the-job-market-in-nigeria/">
                                    <div className="partner-wrap">
                                        <div className="partner-info">
                                            <div className="partner-img">
                                                <img src={partner1} className="img-fluid" alt="Partner" />
                                            </div>
                                            <div className="text">
                                                <h5>How tech startup Fixlancer is changing the job market in Nigeria.</h5>
                                                <p>The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col lg="6">
                                <a href="https://www.nairaland.com/5285913/efe-ejeba-bags-fixlancer-endorsement/  ">
                                    <div className="partner-wrap">
                                        <div className="partner-info">
                                            <div className="partner-img">
                                                <img src={partner2} className="img-fluid" alt="Partner" />
                                            </div>
                                            <div className="text">
                                                <h5>Efe Ejeba Bags Fixlancer Endorsement Deal</h5>
                                                <p>As a team focused on winning and making individuals and businesses winners of all nations, they signed ‘Efe Ejeba’. He emerged as the winner of 2017 Big Brother Naija show with a clear step of a winner.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col lg="6">
                                <a href="https://disrupt-africa.com/2020/05/how-nigerian-tech-startup-fixlancer-is-changing-how-jobs-get-done/ ">
                                    <div className="partner-wrap">
                                        <div className="partner-info">
                                            <div className="partner-img">
                                                <img src={partner3} className="part3" alt="Partner" />
                                            </div>
                                            <div className="text">
                                                <h5>How Nigerian tech startup Fixlancer is changing how jobs get done</h5>
                                                <p>Nigerian freelancers whose ideas towards creativity and innovation are growing immensely have found a resting place because Fixlancer has created a platform where they can render services and smile at the end of each day; whether sunny or rainy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col lg="6">
                                <a href="https://www.nairaland.com/5285913/efe-ejeba-bags-fixlancer-endorsement/  ">
                                    <div className="partner-wrap">
                                        <div className="partner-info">
                                            <div className="partner-img one1">
                                                <img src={partner4} className="part4" alt="Partner" />
                                            </div>
                                            <div className="texts">
                                                <h5>Fixlancer partners with Jooble to change how jobs get done</h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* ----------Experience--------- */}
                {/* <div className="experience">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="experience-wrap">
                                <div className="experience-info text-center">
                                    <h4>Experience <br/> Fixlancer better</h4>
                                    <h4>on our mobile app</h4>
                                    <div className="erper-img ">
                                        <img src={store} className="w-25" alt="experience" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}

                <div className="protected">
                    <Container >
                        <Row>
                            <Col lg="12">
                                <div className="protected-wrap">
                                    <div className="p-img">
                                        <img src={protecte} className="" alt="protected" />
                                    </div>
                                    <div className="text">
                                        <h4>Funds Protected</h4>
                                        <p>We monitor every transcation and have smart procedures to protect <br />
                                            you from phishing, fraud and identity theft.</p>
                                    </div>

                                    {/* <div className="protected-box">
                                    <div className="box-wrap">
                                        <div className="box-info">
                                            <h5>Deposits are processed by us
                                            and Secured by:
                                            </h5>
                                            <div className="box-img">
                                              <img src={flutter} className="" alt="flutter" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="F-Footer">
                    <Footer />
                </div>

            </>
        )
    }
}
