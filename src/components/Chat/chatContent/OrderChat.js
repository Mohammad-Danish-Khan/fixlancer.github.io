import React, { Component, useState, createRef, useEffect } from "react";
import { Button, Modal, Dropdown } from 'react-bootstrap';
import { Container ,Row ,Col } from "react-bootstrap";
import "./chatContent.css";
import Time from "./Time"
import Header from "../../website/Mheader"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
export default class OrderChat extends React.Component {

    messagesEndRef = createRef(null);
    chatItms = [
        {
            key: 1,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "Good morning, from me to you right here and now coming to you this evening ets get started to ti timorning yes sir nice day!",
        },
        {
            key: 2,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Good morning, from me to you right here and now comingto you this evening ets get started to ti timorning yes sir nice day!",
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
          
        };
        this.onInputchange = this.onInputchange.bind(this);
    }

    // scrollToBottom = () => {
    //     this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    // };

    componentDidMount() {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 13) {
                if (this.state.msg != "") {
                    this.chatItms.push({
                        key: 1,
                        type: "",
                        msg: this.state.msg,
                        image:
                            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
                    });
                    this.setState({ chat: [...this.chatItms] });
                    // this.scrollToBottom();
                    this.setState({ msg: "" });
                }
            }
        });
        // this.scrollToBottom();
    }
    onStateChange = (e) => {
        this.setState({ msg: e.target.value });
    };
    onDropdownOnOff = (e) => {
        this.state.dropdown == "none" ? this.setState({ dropdown: "flex" }) : this.setState({ dropdown: "none" });
    }
    onInputchange(event) {
        this.setState({
            textDataArea: event.target.value
        });
    }
    render() {
       
        return (
            
        
            <div className="main__chatcontent_orderFix">
         
                <div className="content__header-res">
                    <div className="blocks">
                        <div className="current-chatting-user">
                            <h5>Gloria Emeka</h5>
                            <div className="online-circle-div-res">
                                <div className="online-circle-Res"></div>
                                <p>Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="blocks blk-res">
                    <div className="settings ordfix">
                            
                            <button className="btn-Chat"
                                // style={{orangeBtn}}
                                >
                                <Link to="/OrderFix">Chat </Link>
                            </button>
                            <button className="btn-Order"
                            //   style={orangeBtnChat}
                                >
                                <Link to="/Orderchat" style={{
                                    color:"#fff!important"
                                }}> Order </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                
                <Container >
                    <Row className="infoTec screenBlock-e">
                        <Col xs={3}> <div className="BoxRes"></div> </Col>
                        <Col xs={3} className="borderBottom e">
                            <div className="">
                                <p className="normalText">Promote my telegram channel Promote my telegram channel </p>
                                <div className="iconDiv">
                                <div className="Tboy25">
                                    <span className="circleOrange">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="#FB7640"/>
                                        </svg>
                                    </span>
                                    <p>Tboy25</p>
                                </div>
                                <div className="dayCalender">
                                    <span className="circleOrange">
                                        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.82088 0.5421H7.13779V0.364628C7.13779 0.203289 6.97939 0.0742188 6.78139 0.0742188C6.5834 0.0742188 6.425 0.203289 6.425 0.364628V0.550167H4.84102V0.364628C4.84102 0.203289 4.68263 0.0742188 4.48463 0.0742188C4.28663 0.0742188 4.12823 0.203289 4.12823 0.364628V0.550167H2.53436V0.364628C2.53436 0.203289 2.37596 0.0742188 2.17797 0.0742188C1.97997 0.0742188 1.82157 0.203289 1.82157 0.364628V0.550167H1.13848C0.514792 0.550167 0 0.969646 0 1.47786V6.81009C0 7.31831 0.514792 7.73779 1.13848 7.73779H7.81098C8.43467 7.73779 8.94946 7.31831 8.94946 6.81009V1.46979C8.95936 0.961579 8.45447 0.5421 7.82088 0.5421ZM1.14838 1.12292H1.83147V1.30846C1.83147 1.46979 1.98987 1.59887 2.18787 1.59887C2.38586 1.59887 2.54426 1.46979 2.54426 1.30846V1.12292H4.13813V1.30846C4.13813 1.46979 4.29653 1.59887 4.49453 1.59887C4.69253 1.59887 4.85092 1.46979 4.85092 1.30846V1.12292H6.4448V1.30846C6.4448 1.46979 6.6032 1.59887 6.80119 1.59887C6.99919 1.59887 7.15759 1.46979 7.15759 1.30846V1.12292H7.84068C8.07827 1.12292 8.27627 1.28426 8.27627 1.47786V2.02641H0.712789V1.47786C0.712789 1.27619 0.910785 1.12292 1.14838 1.12292ZM7.82088 7.16504H1.14838C0.910785 7.16504 0.712789 7.0037 0.712789 6.81009V2.59916H8.24657V6.81009C8.25647 7.0037 8.05847 7.16504 7.82088 7.16504Z" fill="#808080"/>
                                            <path d="M7.11894 3.17969H6.26756C6.10917 3.17969 5.98047 3.28456 5.98047 3.41363V3.6637C5.98047 3.79277 6.10917 3.89764 6.26756 3.89764H7.12884C7.28724 3.89764 7.41593 3.79277 7.41593 3.6637V3.41363C7.41593 3.28456 7.28724 3.17969 7.11894 3.17969Z" fill="#808080"/>
                                            <path d="M4.9101 3.17969H4.04881C3.89042 3.17969 3.76172 3.28456 3.76172 3.41363V3.6637C3.76172 3.79277 3.89042 3.89764 4.04881 3.89764H4.9101C5.0685 3.89764 5.1972 3.79277 5.1972 3.6637V3.41363C5.1972 3.28456 5.0685 3.17969 4.9101 3.17969Z" fill="#808080"/>
                                            <path d="M2.70308 4.53516H1.84178C1.68339 4.53516 1.55469 4.64003 1.55469 4.7691V5.01917C1.55469 5.14824 1.68339 5.25312 1.84178 5.25312H2.70308C2.86147 5.25312 2.99017 5.14824 2.99017 5.01917V4.7691C2.99017 4.64003 2.86147 4.53516 2.70308 4.53516Z" fill="#808080"/>
                                            <path d="M7.11894 4.53516H6.26756C6.10917 4.53516 5.98047 4.64003 5.98047 4.7691V5.01917C5.98047 5.14824 6.10917 5.25312 6.26756 5.25312H7.12884C7.28724 5.25312 7.41593 5.14824 7.41593 5.01917V4.7691C7.41593 4.64003 7.28724 4.53516 7.11894 4.53516Z" fill="#808080"/>
                                            <path d="M4.9101 4.53516H4.04881C3.89042 4.53516 3.76172 4.64003 3.76172 4.7691V5.01917C3.76172 5.14824 3.89042 5.25312 4.04881 5.25312H4.9101C5.0685 5.25312 5.1972 5.14824 5.1972 5.01917V4.7691C5.1972 4.64003 5.0685 4.53516 4.9101 4.53516Z" fill="#808080"/>
                                            <path d="M2.70308 5.89844H1.84178C1.68339 5.89844 1.55469 6.00331 1.55469 6.13238V6.38245C1.55469 6.51153 1.68339 6.6164 1.84178 6.6164H2.70308C2.86147 6.6164 2.99017 6.51153 2.99017 6.38245V6.13238C2.99017 6.00331 2.86147 5.89844 2.70308 5.89844Z" fill="#808080"/>
                                            <path d="M7.11894 5.89844H6.26756C6.10917 5.89844 5.98047 6.00331 5.98047 6.13238V6.38245C5.98047 6.51153 6.10917 6.6164 6.26756 6.6164H7.12884C7.28724 6.6164 7.41593 6.51153 7.41593 6.38245V6.13238C7.41593 6.00331 7.28724 5.89844 7.11894 5.89844Z" fill="#808080"/>
                                            <path d="M4.9101 5.89844H4.04881C3.89042 5.89844 3.76172 6.00331 3.76172 6.13238V6.38245C3.76172 6.51153 3.89042 6.6164 4.04881 6.6164H4.9101C5.0685 6.6164 5.1972 6.51153 5.1972 6.38245V6.13238C5.1972 6.00331 5.0685 5.89844 4.9101 5.89844Z" fill="#808080"/>
                                        </svg>
                                    </span>
                                    <p>2 days delivery</p>
                                </div>
                            </div> 
                                <div><p className="extrasRes">Extras</p></div>
                            </div>
                        </Col>
                        <Col xs={1} className="borderBottom">
                            <div className="zela">
                               <p className="blackText">ID</p>
                               <p className="grayText">#65</p>
                               <span className=""></span>
                               <p className="blackText">Title</p>
                               <p className="grayText">Fast Delivery</p>
                            </div>  
                        </Col>
                        <Col xs={1} className="borderBottom">
                            <div className="zela">
                               <p className="blackText">Total</p>
                               <p className="grayText">N5,150</p>
                            </div>  
                        </Col>
                        <Col xs={2} className="borderBottom">
                            <div className="zela">
                               <p className="blackText">To Deliver</p>
                               <p className="grayText">21 May 2020</p>
                               <span className=""></span>
                               <p className="blackText">Amount</p>
                               <p className="grayText">5000</p>
                            </div> 
                        </Col>
                        <Col xs={1} className="borderBottom">
                            <div className="zela">
                               <p className="blackText">Seller</p>
                               <p className="grayText">Demouser</p>
                            </div> 
                        </Col>
                        <Col xs={1}></Col>
                    </Row>

                    <Row className="infoTec mobileBlock-e">
                        <Col xs={3}> <div className="BoxRes"></div> </Col>
                        <Col xs={9} className="borderBottom e">
                            <div className="">
                                <p className="normalText">Promote my telegram channel Promote my telegram channel </p>
                                <div className="iconDiv">
                                <div className="Tboy25">
                                    <span className="circleOrange">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="#FB7640"/>
                                        </svg>
                                    </span>
                                    <p>Tboy25</p>
                                </div>
                                <div className="dayCalender">
                                    <span className="circleOrange">
                                        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.82088 0.5421H7.13779V0.364628C7.13779 0.203289 6.97939 0.0742188 6.78139 0.0742188C6.5834 0.0742188 6.425 0.203289 6.425 0.364628V0.550167H4.84102V0.364628C4.84102 0.203289 4.68263 0.0742188 4.48463 0.0742188C4.28663 0.0742188 4.12823 0.203289 4.12823 0.364628V0.550167H2.53436V0.364628C2.53436 0.203289 2.37596 0.0742188 2.17797 0.0742188C1.97997 0.0742188 1.82157 0.203289 1.82157 0.364628V0.550167H1.13848C0.514792 0.550167 0 0.969646 0 1.47786V6.81009C0 7.31831 0.514792 7.73779 1.13848 7.73779H7.81098C8.43467 7.73779 8.94946 7.31831 8.94946 6.81009V1.46979C8.95936 0.961579 8.45447 0.5421 7.82088 0.5421ZM1.14838 1.12292H1.83147V1.30846C1.83147 1.46979 1.98987 1.59887 2.18787 1.59887C2.38586 1.59887 2.54426 1.46979 2.54426 1.30846V1.12292H4.13813V1.30846C4.13813 1.46979 4.29653 1.59887 4.49453 1.59887C4.69253 1.59887 4.85092 1.46979 4.85092 1.30846V1.12292H6.4448V1.30846C6.4448 1.46979 6.6032 1.59887 6.80119 1.59887C6.99919 1.59887 7.15759 1.46979 7.15759 1.30846V1.12292H7.84068C8.07827 1.12292 8.27627 1.28426 8.27627 1.47786V2.02641H0.712789V1.47786C0.712789 1.27619 0.910785 1.12292 1.14838 1.12292ZM7.82088 7.16504H1.14838C0.910785 7.16504 0.712789 7.0037 0.712789 6.81009V2.59916H8.24657V6.81009C8.25647 7.0037 8.05847 7.16504 7.82088 7.16504Z" fill="#808080"/>
                                            <path d="M7.11894 3.17969H6.26756C6.10917 3.17969 5.98047 3.28456 5.98047 3.41363V3.6637C5.98047 3.79277 6.10917 3.89764 6.26756 3.89764H7.12884C7.28724 3.89764 7.41593 3.79277 7.41593 3.6637V3.41363C7.41593 3.28456 7.28724 3.17969 7.11894 3.17969Z" fill="#808080"/>
                                            <path d="M4.9101 3.17969H4.04881C3.89042 3.17969 3.76172 3.28456 3.76172 3.41363V3.6637C3.76172 3.79277 3.89042 3.89764 4.04881 3.89764H4.9101C5.0685 3.89764 5.1972 3.79277 5.1972 3.6637V3.41363C5.1972 3.28456 5.0685 3.17969 4.9101 3.17969Z" fill="#808080"/>
                                            <path d="M2.70308 4.53516H1.84178C1.68339 4.53516 1.55469 4.64003 1.55469 4.7691V5.01917C1.55469 5.14824 1.68339 5.25312 1.84178 5.25312H2.70308C2.86147 5.25312 2.99017 5.14824 2.99017 5.01917V4.7691C2.99017 4.64003 2.86147 4.53516 2.70308 4.53516Z" fill="#808080"/>
                                            <path d="M7.11894 4.53516H6.26756C6.10917 4.53516 5.98047 4.64003 5.98047 4.7691V5.01917C5.98047 5.14824 6.10917 5.25312 6.26756 5.25312H7.12884C7.28724 5.25312 7.41593 5.14824 7.41593 5.01917V4.7691C7.41593 4.64003 7.28724 4.53516 7.11894 4.53516Z" fill="#808080"/>
                                            <path d="M4.9101 4.53516H4.04881C3.89042 4.53516 3.76172 4.64003 3.76172 4.7691V5.01917C3.76172 5.14824 3.89042 5.25312 4.04881 5.25312H4.9101C5.0685 5.25312 5.1972 5.14824 5.1972 5.01917V4.7691C5.1972 4.64003 5.0685 4.53516 4.9101 4.53516Z" fill="#808080"/>
                                            <path d="M2.70308 5.89844H1.84178C1.68339 5.89844 1.55469 6.00331 1.55469 6.13238V6.38245C1.55469 6.51153 1.68339 6.6164 1.84178 6.6164H2.70308C2.86147 6.6164 2.99017 6.51153 2.99017 6.38245V6.13238C2.99017 6.00331 2.86147 5.89844 2.70308 5.89844Z" fill="#808080"/>
                                            <path d="M7.11894 5.89844H6.26756C6.10917 5.89844 5.98047 6.00331 5.98047 6.13238V6.38245C5.98047 6.51153 6.10917 6.6164 6.26756 6.6164H7.12884C7.28724 6.6164 7.41593 6.51153 7.41593 6.38245V6.13238C7.41593 6.00331 7.28724 5.89844 7.11894 5.89844Z" fill="#808080"/>
                                            <path d="M4.9101 5.89844H4.04881C3.89042 5.89844 3.76172 6.00331 3.76172 6.13238V6.38245C3.76172 6.51153 3.89042 6.6164 4.04881 6.6164H4.9101C5.0685 6.6164 5.1972 6.51153 5.1972 6.38245V6.13238C5.1972 6.00331 5.0685 5.89844 4.9101 5.89844Z" fill="#808080"/>
                                        </svg>
                                    </span>
                                    <p>2 days delivery</p>
                                </div>
                            </div> 
                            </div>
                        </Col>
                        </Row>
                        <Row className="mobileBlock-e">
                        <Col xs={3} className="borderBottom">
                            <div className="zela">
                               <p className="blackText">ID</p>
                               <p className="grayText">#65</p>
                               <span className=""></span>
                            </div>  
                        </Col>
                        <Col xs={3} className="borderBottom">
                            <div className="zela">
                               <p className="blackText">Total</p>
                               <p className="grayText">N5,150</p>
                            </div>  
                        </Col>
                        <Col xs={3} className="borderBottom">
                            <div className="zela">
                               <p className="blackText">To Deliver</p>
                               <p className="grayText">21 May 2020</p>
                               <span className=""></span>
                               
                            </div> 
                        </Col>
                        <Col xs={3} className="borderBottom">
                            <div className="zela">
                               <p className="blackText">Seller</p>
                               <p className="grayText">Demouser</p>
                            </div> 
                        </Col>
                        <Col xs={1}></Col>
                        <div><p className="extrasRes">Extras</p>
                        <Row>
                                <Col> 
                                    <p className="blackText">Title</p>
                                    <p className="blackText">Amount</p>
                                </Col>
                                <Col>
                                    <p className="grayText">Fast Delivery</p>
                                    <p className="grayText">5000</p>
                                 </Col>
                                 <Col></Col>
                            </Row>
                        </div>
                    </Row>
                    
                    <Row>
                        <Time />
                    </Row>
                    <Row>
                        <div>
                            <p className="reqP">Requirements</p>
                             <div className="requirementRes">
                                 <input type="text" className="requirementInput" placeholder="This is the Requirements"/>
                                 <p className="attachmentRes">Attachment</p>
                                 <div class="upload-btn-wrapper-res">
                                    <button class="btn-Res">No  Attachments</button>
                                    <input type="file" name="myfile" />
                                </div>
                             </div>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <p className="reqP a">Milestone</p>
                            <p className="milestoneP">No milestone released yet</p>
                             <div className="requirementRes">
                                 <p className="per">Enter the amount in percentage you want to release to the seller</p>
                                 <input type="text" className="percentageInput" placeholder="Enter Percent e.g. 10"/>
                                 <p className="mileR">*Milestones released cannot be refunded *It must not be higher than 10%</p>
                             </div>
                        </div>
                    </Row>
                    <Row>
                        <button className="release-Btn">Release</button>
                    </Row>
                </Container>
                    

            

                
                </div>
               
                <div className="content__footer">

                    {/* <div className="sendNewMessageOrderFix_Res">
                        <div className="sendNewMessageOrderFix">
                            <input
                                type="text"
                                // placeholder="Type a message here"
                                onChange={this.onStateChange}
                                value={this.state.msg}
                            />
                        </div> */}

                        {/* <div className="sendNewMessageOrderFix">
                            <div className="OrderDropDown">
                                <Dropdown drop="end" onClick={this.onDropdownOnOff}>
                                    <Dropdown.Toggle className="addFiles" variant="success" id="dropdown-basic">
                                        <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 0.65625C7.76404 0.65625 0.65625 7.76404 0.65625 16.5C0.65625 25.236 7.76404 32.3438 16.5 32.3438C25.236 32.3438 32.3438 25.236 32.3438 16.5C32.3438 7.76404 25.236 0.65625 16.5 0.65625ZM16.5 3.09375C23.9172 3.09375 29.9062 9.08276 29.9062 16.5C29.9062 23.9172 23.9172 29.9062 16.5 29.9062C9.08276 29.9062 3.09375 23.9172 3.09375 16.5C3.09375 9.08276 9.08276 3.09375 16.5 3.09375ZM15.2812 9.1875V15.2812H9.1875V17.7188H15.2812V23.8125H17.7188V17.7188H23.8125V15.2812H17.7188V9.1875H15.2812Z" fill="#B9B0B0" />
                                        </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ display: this.state.dropdown }}>
                                        <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 0.65625C7.76404 0.65625 0.65625 7.76404 0.65625 16.5C0.65625 25.236 7.76404 32.3438 16.5 32.3438C25.236 32.3438 32.3438 25.236 32.3438 16.5C32.3438 7.76404 25.236 0.65625 16.5 0.65625ZM16.5 3.09375C23.9172 3.09375 29.9062 9.08276 29.9062 16.5C29.9062 23.9172 23.9172 29.9062 16.5 29.9062C9.08276 29.9062 3.09375 23.9172 3.09375 16.5C3.09375 9.08276 9.08276 3.09375 16.5 3.09375ZM15.2812 9.1875V15.2812H9.1875V17.7188H15.2812V23.8125H17.7188V17.7188H23.8125V15.2812H17.7188V9.1875H15.2812Z" fill="#B9B0B0" />
                                        </svg>
                                        <Dropdown.Item href="javascript:void(0)">Offer Extras</Dropdown.Item>
                                        <Dropdown.Item href="javascript:void(0)" onClick={handleDeliver}>Deliver Job</Dropdown.Item>
                                        <Dropdown.Item href="javascript:void(0)" onClick={reqCancell}>Request Cancellation</Dropdown.Item>
                                        <Dropdown.Item href="javascript:void(0)" onClick={handleShow}>Dispute</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Button className="addFiles" variant="primary" >
                                    <svg width="25" height="25" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2829 0.625C16.675 0.625 15.0942 1.24829 13.8747 2.46777L3.03488 13.3076C-0.402252 16.7448 -0.402252 22.3363 3.03488 25.7734C6.47201 29.2106 12.0636 29.2106 15.5007 25.7734L22.7273 18.5469L21.1013 16.9209L13.8747 24.1475C11.3228 26.6993 7.21274 26.6993 4.66086 24.1475C2.10898 21.5956 2.10898 17.4855 4.66086 14.9336L15.5007 4.09375C17.0544 2.54004 19.5476 2.54004 21.1013 4.09375C22.655 5.64746 22.655 8.14062 21.1013 9.69434L10.2614 20.5342C9.7059 21.0897 8.82968 21.0897 8.27414 20.5342C7.7186 19.9786 7.7186 19.1024 8.27414 18.5469L18.2107 8.61035L16.5847 6.98438L6.64816 16.9209C5.20737 18.3617 5.20737 20.7194 6.64816 22.1602C8.08896 23.601 10.4466 23.601 11.8874 22.1602L22.7273 11.3203C25.1662 8.88135 25.1662 4.90674 22.7273 2.46777C21.5078 1.24829 19.8908 0.625 18.2829 0.625Z" fill="#B9B0B0" />
                                    </svg>
                                </Button>
                            </div>
                            <button className="btnSendMsg" id="sendMsgBtn">
                                Send
                            </button>
                        </div>
                 */}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}
