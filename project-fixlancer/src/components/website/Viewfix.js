import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Tab, Tabs, ListGroup, Button, Carousel } from 'react-bootstrap';
import Header from "./Mheader";
import Footer from "./Footer";
import Recommended from "./Section/Recommend";
import viewf1 from "./img/viewf1.png"
import sld1 from "./img/birmingham-museums-trust-5EUh-tq31eA-unsplash.jpg"
import sld2 from "./img/steve-johnson-3Sf_G9m0gcQ-unsplash.jpg"
import sld3 from "./img/timon-klauser-3MAmj1ZKSZA-unsplash.jpg"
import viewf2 from "./img/viewf2.png"
import viewf3 from "./img/viewf3.png"
import profile from "./img/profile.png"
import profile2 from "./img/profile2.png"
import flag from "./img/flag.png"
import Card from './Section/Fix';
import blog15 from "./img/blog15.png"
import blog16 from "./img/blog16.png"
import blog17 from "./img/blog17.png"
import blog18 from "./img/blog18.png"
import fixe1 from "./img/rec1.png"
import fixe2 from "./img/rec2.png"
import fixe3 from "./img/rec3.png"
import fixe4 from "./img/rec4.png"
import pro1 from "./img/pro1.png"
import pro2 from "./img/pro2.png"
import pro3 from "./img/pro3.png"
import pro4 from "./img/pro4.png"
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default class Viewfix extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };
        const settings1 = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // prevArrow: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };
        const settings2 = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "-125px",
            dots: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            // prevArrow: false,
            // nextArrow: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };
        return (
            <div className="viewFix-st">
                <div className="header">
                    <Header />
                </div>
                <Container>
                <div className="titleDesign">
                    <p>Graphic Design <b>&#62;</b> Flyer Design</p>
                </div>
                </Container>
                <div className="view-banner">
                        {/* <Slider  {...settings2}>
                      <div className="banner-slider">
                            <div className="banner-wrap">
                                <div className="banner-info">
                                    <img src={viewf3} className="img-fluid" alt="" />
                                </div>
                            </div>
                      </div>
                      <div className="banner-slider">
                            <div className="banner-wrap">
                                <div className="banner-info">
                                    <img src={viewf2} className="img-fluid" alt="" />
                                </div>
                            </div>
                      </div>
                      <div className="banner-slider">
                            <div className="banner-wrap">
                                <div className="banner-info">
                                    <img src={viewf1} className="img-fluid" alt="" />
                                </div>
                            </div>
                      </div>
                      <div className="banner-slider">
                            <div className="banner-wrap">
                                <div className="banner-info">
                                    <img src={viewf3} className="img-fluid" alt="" />
                                </div>
                            </div>
                      </div>
                      <div className="banner-slider">
                            <div className="banner-wrap">
                                <div className="banner-info">
                                    <img src={viewf2} className="img-fluid" alt="" />
                                </div>
                            </div>
                      </div>
                      <div className="banner-slider">
                            <div className="banner-wrap">
                                <div className="banner-info">
                                    <img src={viewf1} className="img-fluid" alt="" />
                                </div>
                            </div>
                      </div>
                  </Slider>
                  */}

                        <Carousel className="carouselSt">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={sld1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    {/* <h3>First slide label</h3> */}
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={sld2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    {/* <h3>Second slide label</h3> */}
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={sld3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    {/* <h3>Third slide label</h3> */}
                                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </div>

                <div className="view-text">
                    <h5>I will design eyecatching flyer design
                        will suit your needs perfectly
                    </h5>
                    <div className="d-flex justify-content-between a">
                        <div className="rating">
                            <span className="yell"><svg width="25" height="25" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.2632 7.02284L23.8451 23.6628L5.72907 25.5749C4.56314 25.6982 4.09459 27.143 4.96532 27.9271L18.4975 40.1214L14.718 57.9449C14.4743 59.0919 15.7039 59.9843 16.7195 59.3993L32.4996 50.2952L48.2797 59.3979C49.2953 59.9829 50.5236 59.0906 50.2812 57.9436L46.5017 40.1214L60.0339 27.9271C60.9046 27.143 60.4347 25.6982 59.2701 25.5749L41.1541 23.6615L33.7359 7.02284C33.2593 5.9517 31.7399 5.9517 31.2632 7.02284Z" fill="url(#paint0_linear)" />
                                <path d="M41.1545 23.6614L33.7364 7.02275C33.498 6.4865 32.9997 6.21973 32.5 6.21973V33.8542L41.1545 23.6614Z" fill="url(#paint1_linear)" />
                                <path d="M46.5021 40.1238V40.1225L60.0343 27.9282C60.45 27.5531 60.5529 27.029 60.427 26.5686L32.5 33.854L46.5021 40.1238Z" fill="url(#paint2_linear)" />
                                <path d="M46.5021 40.124L32.5 33.8542L49.6749 59.3627C50.1218 59.0797 50.4102 58.5515 50.2816 57.9449L46.5021 40.124Z" fill="url(#paint3_linear)" />
                                <path d="M18.4977 40.1238V40.1225L4.96552 27.9282C4.54979 27.5531 4.44687 27.029 4.57281 26.5686L32.4998 33.854L18.4977 40.1238Z" fill="url(#paint4_linear)" />
                                <path d="M15.2803 59.3383C15.6811 59.6132 16.2255 59.6836 16.7198 59.3979L32.4999 50.2952V33.8542L15.2803 59.3383Z" fill="url(#paint5_linear)" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="52.7999" y1="8.61263" x2="13.4167" y2="61.2978" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFDA1C" />
                                        <stop offset="1" stop-color="#FEB705" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear" x1="41.3766" y1="20.0363" x2="34.6409" y2="20.0363" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFDA1C" />
                                        <stop offset="1" stop-color="#FEB705" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear" x1="51.1103" y1="41.8923" x2="47.2496" y2="32.1884" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFDA1C" />
                                        <stop offset="1" stop-color="#FEB705" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear" x1="47.2469" y1="42.502" x2="42.5804" y2="45.6138" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFDA1C" />
                                        <stop offset="1" stop-color="#FEB705" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear" x1="13.8895" y1="41.8923" x2="17.7502" y2="32.1884" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFDA1C" />
                                        <stop offset="1" stop-color="#FEB705" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear" x1="30.7408" y1="51.5925" x2="25.0425" y2="47.4365" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFDA1C" />
                                        <stop offset="1" stop-color="#FEB705" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            </span>
                            <span className="yell px-2">5.0</span>
                            <span className="px-2">(2345)</span>
                        </div>
                        <div className="num">
                            <span>N15,000</span>
                        </div>
                    </div>
                </div>

                <div className="view-tabs">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Description" >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Enim mattis  facilisis ac elit adipiscing amet, ultrices sed.
                                Sed tortor amet est, commodo laoreet turpis. Fames risus,
                                diam lobortis interdum vitae viverra pellentesque luctus pharetra.
                                Erat lorem laoreet nisi, nec facilisi  vehicula.Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Enim mattis </p>
                        </Tab>
                        <Tab eventKey="profile" title="Work Samples">
                            <div className="sample-wrap">
                                <ListGroup>
                                    <ListGroup.Item> <span >www.worksamplesexsample.com</span> </ListGroup.Item>
                                    <ListGroup.Item>  <span >www.worksamplesexsample.com</span> </ListGroup.Item>
                                    <ListGroup.Item> <span >www.worksamplesexsample.com</span> </ListGroup.Item>
                                    <ListGroup.Item>  <span >www.worksamplesexsample.com</span> </ListGroup.Item>
                                    <ListGroup.Item> <span >www.worksamplesexsample.com</span> </ListGroup.Item>
                                    <ListGroup.Item>  <span >www.worksamplesexsample.com</span> </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

                <div className="point">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <div className="point-wrap">
                                    <div className="point-info">
                                        <ListGroup className="listGroup-st">
                                            <ListGroup.Item> <span className="check"><FontAwesomeIcon icon="check" /></span> For extra fast delivery in less than 8 hours for N1,000</ListGroup.Item>
                                            <ListGroup.Item> <span className="info"> <FontAwesomeIcon icon="info" /></span> You funds are held on escrow till your job is completed</ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="view-btns">
                    <Container>
                        <Row>
                            <div className="btn-wrap">
                                <Button className="chat" >

                                    <svg width="25" height="25" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.9997 4.83325C15.6742 4.83325 4.83301 14.5918 4.83301 26.5833C4.83301 39.2925 17.013 49.5609 31.4163 48.2197V55.808L35.138 53.4203C37.8737 51.6658 51.5883 42.236 53.0286 28.8912C53.118 28.1323 53.1663 27.3614 53.1663 26.5833C53.1663 14.5918 42.3252 4.83325 28.9997 4.83325ZM21.7497 28.9999H16.9163V24.1666H21.7497V28.9999ZM31.4163 28.9999H26.583V24.1666H31.4163V28.9999ZM41.083 28.9999H36.2497V24.1666H41.083V28.9999Z" fill="#E16F26" />
                                    </svg>


                                    <Link to="/Chatbody">Chat</Link>
                                </Button>
                                <Button className="order">Order Now N5,000</Button>
                            </div>
                        </Row>
                    </Container>
                </div>
                <div className="view-profile">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="5">
                                <div className="title">
                                    <h4>About Seller</h4>
                                </div>
                                <div className="imgs">
                                    <img src={profile} className="img-fluid" alt="profile" />
                                </div>
                                <div className="text py-3">
                                    <p>isura_creed</p>
                                </div>
                                <div className="rating text-center">
                                    <span><FontAwesomeIcon icon="star" /></span>
                                    <span><FontAwesomeIcon icon="star" /></span>
                                    <span><FontAwesomeIcon icon="star" /></span>
                                    <span><FontAwesomeIcon icon="star" /></span>
                                    <span><FontAwesomeIcon icon="star" /></span>
                                    <span className="nums">5.0</span>
                                </div>
                                <div className="btns">
                                    <Button>
                                        <Link to="/Orderchat">Contact me</Link>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="view-reviews">
                    <Container>
                        <Row>
                            <div className="heading p-0">
                                <span className="rat">Ratings 5.0</span>
                                <span className="yell"><FontAwesomeIcon icon="star" /></span>
                                <span className="rev">( 20 Reviews )</span>
                            </div>

                            <div className="profile">
                                <div className="profile-wrap">
                                    <div className="title">
                                        <div className="d-flex">
                                            <div className="imgs">
                                                <img src={profile2} alt="profile" />
                                            </div>
                                            <div className="texts">
                                                <h6>DannyCoal</h6>
                                                <p><span><img src={flag} alt="" /></span> <span>DannyCoal</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <span className="yell"><FontAwesomeIcon icon="star" /></span>
                                        <span className="px-2">5.0</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mattis facilisis ac elit adipiscing amet, ultrices sed. Sed tortor amet est, commodo laoreet turpis. Fames risus, diam lobortis interdum vitae viverra pellentesque luctus pharetra. Erat lorem laoreet nisi,</p>
                                <span>3 weeks ago</span>
                            </div>
                        </Row>
                    </Container>
                </div>

                {/* ------------Recommended----------- */}
                <div className="Recommended Seller fixViewSt">
                    <Container >
                        <div className="title mb-3">
                            <h4>More Fixes by the Seller</h4>
                        </div>
                    </Container >
                    </div>
                    <Card />
                    {/* <Container  className="container-st">
                        <div className="try homeCardStChange">
                            <Slider {...settings}>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={blog15} className="img-fluid" alt="blog" />
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
                                </div>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={blog16} className="img-fluid" alt="blog" />
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
                                </div>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={blog17} className="img-fluid" alt="blog" />
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
                                </div>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={blog18} className="img-fluid" alt="blog" />
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
                                </div>

                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={fixe3} className="img-fluid" alt="fixe" />
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
                                </div>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={fixe4} className="img-fluid" alt="fixe" />
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
                                </div>
                            </Slider>
                        </div>
                    </Container>
                 */}
                

                {/* ------------Recommended----------- */}
                <div className="Recommended fixViewSt">
                    <Container>
                        <div className="title mb-3">
                            <h4>Recommended For You</h4>
                        </div>
                    </Container>
                </div>
                    <Card />

                    {/* <Container className="container-st">
                        <div className="try homeCardStChange" >
                            <Slider {...settings}>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={fixe1} className="img-fluid" alt="fixe" />
                                                </div>
                                                <div className="f-text">
                                                    <div className="f-title">
                                                        <span>
                                                            <img src={pro1} className="img-fluid" alt="profile" />
                                                        </span>
                                                        <span className="name">sadically_creative</span>
                                                    </div>

                                                    <div className="desc">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
                                </div>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={fixe2} className="img-fluid" alt="fixe" />
                                                </div>
                                                <div className="f-text">
                                                    <div className="f-title">
                                                        <span>
                                                            <img src={pro2} className="img-fluid" alt="profile" />
                                                        </span>
                                                        <span className="name">sadically_creative</span>
                                                    </div>

                                                    <div className="desc">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
                                </div>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={fixe3} className="img-fluid" alt="fixe" />
                                                </div>
                                                <div className="f-text">
                                                    <div className="f-title">
                                                        <span>
                                                            <img src={pro3} className="img-fluid" alt="profile" />
                                                        </span>
                                                        <span className="name">sadically_creative</span>
                                                    </div>

                                                    <div className="desc">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
                                </div>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={fixe4} className="img-fluid" alt="fixe" />
                                                </div>
                                                <div className="f-text">
                                                    <div className="f-title">
                                                        <span>
                                                            <img src={pro4} className="img-fluid" alt="profile" />
                                                        </span>
                                                        <span className="name">sadically_creative</span>
                                                    </div>

                                                    <div className="desc">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
                                </div>
                           

                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={fixe3} className="img-fluid" alt="fixe" />
                                                </div>
                                                <div className="f-text">
                                                    <div className="f-title">
                                                        <span>
                                                            <img src={pro3} className="img-fluid" alt="profile" />
                                                        </span>
                                                        <span className="name">sadically_creative</span>
                                                    </div>

                                                    <div className="desc">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
                                </div>
                                <div>
                                    <div className="fixe-box">
                                        <div className="fixe-wrap">
                                            <div className="fixe-info">
                                                <div className="f-img">
                                                    <img src={fixe4} className="img-fluid" alt="fixe" />
                                                </div>
                                                <div className="f-text">
                                                    <div className="f-title">
                                                        <span>
                                                            <img src={pro4} className="img-fluid" alt="profile" />
                                                        </span>
                                                        <span className="name">sadically_creative</span>
                                                    </div>

                                                    <div className="desc">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                    </div>

                                                    <div className="nums d-flex justify-content-between">
                                                        <div className="rating">
                                                            <span className="icn"><FontAwesomeIcon icon="star" />
                                                            </span>
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
                                </div>
                            </Slider>
                        </div>
                    </Container>
                 */}
                {/* </div> */}
                <br/>
                <Footer />
            </div>
        )
    }
}