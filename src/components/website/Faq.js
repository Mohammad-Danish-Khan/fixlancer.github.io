import React from "react";
import ReactDom from "react-dom";
import { Container , Row , Tab , Nav , Col , Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tpro from "./img/tpro.png"
import Header from "./Header"
import Footer from "./Footer"
import Tables from "./Tables"
import Tables1 from "./Tables1"
import Tables2 from "./Tables2"
import Tables3 from "./Tables3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Mheader from "./Mheader";

export default class Faq extends React.Component{
    render(){
        return(
            <>
            <div className="faq-banner">
                <Header/>
                <Container>
                    <div className="banner-wrap">
                        <div className="banner-info">
                                <h5>Common Questions Asked?</h5>
                                <p>We give you the leverage to get jobs done <br/>
                                person-to-person in an easy,<br/>
                                fast and secured way
                                </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="faq">
                <div className="faq-wrap">
                    <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="About">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="About">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="Forbuyers">For Buyers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="Forsellers">For Sellers</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="About">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How does Fixlancer work?</Accordion.Header>
                                        <Accordion.Body>
                                        Fixlancer.com is a freelance, digital marketplace for small and 
                                        large scale businesses. It's a platform where you can Work or Hire
                                        freelance services from home.
                                        A service offered on Fixlancer is 
                                        called a Fix.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How do i contact a buyer/seller on an ongoing order?</Accordion.Header>
                                        <Accordion.Body>
                                        When an order is created, an order page is created where both parties can
                                        communicate, and seller can deliver work.
                                        And it can be accessed via the 'Sales'
                                        link(for sellers) or 'Orders' link(for buyers) on the menu.
                                        We strongly advice all 
                                        communications should be done on the order page for transparency.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                </Tab.Pane>
                                <Tab.Pane eventKey="Forbuyers">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How do I place an order?</Accordion.Header>
                                            <Accordion.Body>
                                                As a user/guest you are absolutely free to browse through our various category of Fixes and select your preferred Fix. and click the 'Order Now' button.
                                                It can also be done through a custom offer received in your inbox from the seller or through a Job Request posted by you.
                                                After you place the order, a new page is created where you can send your requirememts, communicate with the seller and get updates on the order in progress.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>When can I cancel an order?</Accordion.Header>
                                            <Accordion.Body>
                                            Cancellation of order can only be initiated when an order is still in progress. Upon completion it is not allowed. Order cancellation will only take effect on a mutual ground between both parties, Otherwise filing a dispute will be the next available option.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How do I contact seller</Accordion.Header>
                                            <Accordion.Body>
                                            Contacting a seller is quite easy. Visit the Fix page or the seller's profile, there is a contact seller button on these pages. Click the button, type your message and send. You will be notified when they respond
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>How do I find a Fix</Accordion.Header>
                                            <Accordion.Body>
                                            You will be able to find a Fix by searching any keywords related to the type of services you are interested in.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Forsellers">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How does the order process work?</Accordion.Header>
                                            <Accordion.Body>
                                                When an order is placed, the funds are held on escrow with Fixlancer. Once you complete the order, 85% of the order amount will be released to you but placed in your pending balance for 3 days to clear. This is so to ensure buyer satisfaction. After 3 days it will be available for you to withdraw to your Bank Account
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What happens when my buyer stops responding after delivery?</Accordion.Header>
                                            <Accordion.Body>
                                            The buyer will have 3 days to respond from the day you delivered or order will be automatically marked as complete and funds released to you.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How do I withdraw my earnings</Accordion.Header>
                                            <Accordion.Body>
                                                Once logged in, from the menu, click Finance
                                                Click Request Withdrawal from the sidebar (its underneath the page when on mobile),
                                                Enter your amount (minimum withdrawal is N1500), your bank account details will autofill the space if it's set
                                                Then enter your password, and submit.
                                                Your request will be processed within 2-3 business days
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>How do I start selling?</Accordion.Header>
                                            <Accordion.Body>
                                            Click on the menu link, navigate to 'Start Selling' click on the link. Create a fix of the service you are offering, click submit and you are set.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>What to avoid?</Accordion.Header>
                                            <Accordion.Body>
                                            Creating duplicate accounts
                                            Requesting to take communications and payments outside Fixlancer
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Why was my Fix deleted?</Accordion.Header>
                                            <Accordion.Body>
                                            On Fixlancer, we monitor all Fixes created from time to time and whenever a Fix violates our terms of service we are obliged to delete that Fix without prior warning to the seller.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    </Container>
                </div>
                
                <div className="box">
                    <Container>
                        <Row className="justify-content-center o">
                            <Col lg="5">
                                <div className="box-wrap">
                                    <div className="box-info">
                                        <div className="icon">
                                            <FontAwesomeIcon icon="envelope"  />
                                        </div>
                                        <div className="text">
                                            <p>Feel free to Contact Fixlancer Support</p>
                                            <span>support@fixlancer.com</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="box-wrap">
                                    <div className="box-info">
                                        <div className="icon">
                                            <h6>Connect with us</h6>
                                            {/* <FontAwesomeIcon icon="instagram"  /> */}
                                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                                            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}