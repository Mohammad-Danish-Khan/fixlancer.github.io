import React, { Component, useState, createRef, useEffect } from "react";
import { Button, Modal, Dropdown,  } from 'react-bootstrap';
import "./chatContent.css";
import ChatItem from "./ChatItem";
import Rating from "../Rating";
import Rate from "../Rate";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
export default class OrderFix extends React.Component {

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
            rating2: 0,
            chat: this.chatItms,
            msg: "",
            show: false,
            blockElement: "none",
            sendDocument: "none",
            dropdown: "none",
            markAsComplete: "none",
            deliver: false,
            ratingAlert: "none",
            markComplete: false,
            textDataArea: "Excellent job again, thanks",
            reqModification: "none",
            cancell : "none",
            cancelOrder : false,
            cancelled:"none",
            reqCancelled: "none",
            acceptOffer :"none",
            offering: false,
            extra:false
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
        
        
        const onPayNow = () => this.setState({
            cancell: "none",
            reqModification: "none",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false,
            cancelOrder : false,
            cancelled:"none",
            reqCancelled : "none",
            offering: false,
            acceptOffer :"block",
            extra: false
        });;
        const handleExtra = () => this.setState({
            cancell: "none",
            reqModification: "none",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false,
            cancelOrder : false,
            cancelled:"none",
            reqCancelled : "none",
            extra: true
        });;
        const handlOffering = () => this.setState({
            cancell: "none",
            reqModification: "none",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false,
            cancelOrder : false,
            cancelled:"none",
            reqCancelled : "none",
            extra: false,
            offering: true
        });;
        const requestRejected = () => this.setState({
            cancell: "none",
            reqModification: "none",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false,
            cancelOrder : false,
            cancelled:"none",
            reqCancelled : "table",
        });;
        const requestRejectCancel = () => this.setState({
            cancell: "none",
            reqModification: "none",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false,
            cancelOrder : false,
            cancelled:"flex"
        });;
        const cancelOrder = () => this.setState({
            cancell: "table",
            reqModification: "none",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false,
            cancelOrder : false,
           
        });;
        const requestAcceptCancel = () => this.setState({
            reqModification: "none",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false,
            cancelOrder : true,
            cancell: "none",
        });;
        const reqCancell = () => this.setState({
            cancell: "table",
            reqModification: "none",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false,
            cancelled:"none",
            reqCancelled : "none"
        });;
        const reqModification = () => this.setState({
            reqModification: "flex",
            markAsComplete: "none",
            ratingAlert: "none",
            markComplete: false
        });;
        const handleMarkAlert = () => this.setState({
            ratingAlert: "flex",
            markAsComplete: "none",
            markComplete: false
        });;

        const handleMarkComplete = () => this.setState({
            markComplete: false
        });;
        const markComplete = () => this.setState({
            markComplete: true,
            ratingAlert:"none"
        });;
        const handlSendDocument = () => this.setState({
            sendDocument: "block", deliver: false, markAsComplete: "table"
        });;

        const handleDeliverClose = () => this.setState({
            deliver: false,
        });;
        const handleDeliver = () => this.setState({
            deliver: true,
            reqModification : "none"
        });;
        const handleClose = () => this.setState({
            show: false
        });;
        const handleShow = () => this.setState({
            show: true
        });;
        const handleDispute = () => this.setState({
            dispute: true
        });;
        const handleSendDispute = () => this.setState({
            sendDispute: false,
            show: false,
            dispute: false,
            blockElement: "block"
        });;
        const orangeBtn =()=> this.setState({  
            backgroundColor: "#E16F26!important",
            border: "2px solid #E16F26!important",
            marginLeft: "0px !important;",
        })

        const orangeBtnChat =()=> this.setState({
            backgroundColor: "#E16F26!important",
            border: "2px solid #E16F26!important",
            marginLeft: "81px!important",
         })
        return (
            <div className="main__chatcontent_orderFix">
                <Modal className="model_alert" show={this.state.show}>
                    <Modal.Header >
                        <Modal.Title>Dispute</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Having issues with this Order? Open a dispute below, an admin will come in to assist</p>
                        <textarea placeholder="Be detailed as possible...."></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" className="primaryDispute" onClick={handleDispute} >
                            Send Dispute
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className="model_alert-res1" show={this.state.deliver}>
                    <Modal.Header >
                        <Modal.Title>Deliver Work</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9995 0.281738C5.37295 0.281738 0 5.63938 0 12.247C0 18.8547 5.37295 24.2133 11.9995 24.2133C18.626 24.2133 24 18.8547 24 12.247C24 5.63938 18.626 0.281738 11.9995 0.281738ZM14.4975 18.8263C13.8799 19.0694 13.3882 19.2538 13.0194 19.3814C12.6517 19.5091 12.224 19.5729 11.7374 19.5729C10.9897 19.5729 10.4076 19.3906 9.99314 19.0269C9.57867 18.6632 9.37245 18.2023 9.37245 17.6422C9.37245 17.4244 9.38768 17.2015 9.41816 16.9746C9.44965 16.7477 9.49943 16.4924 9.56749 16.2058L10.3406 13.4829C10.4086 13.2215 10.4676 12.9733 10.5143 12.7424C10.561 12.5094 10.5834 12.2957 10.5834 12.1012C10.5834 11.7547 10.5112 11.5116 10.368 11.3749C10.2227 11.2381 9.94946 11.1713 9.5421 11.1713C9.34298 11.1713 9.13778 11.2006 8.92749 11.2624C8.71924 11.3262 8.53841 11.384 8.3901 11.4407L8.59429 10.602C9.10019 10.3963 9.58476 10.2201 10.047 10.0742C10.5092 9.9263 10.946 9.85337 11.3575 9.85337C12.1001 9.85337 12.673 10.0337 13.0763 10.3902C13.4776 10.7478 13.6797 11.2128 13.6797 11.7841C13.6797 11.9026 13.6655 12.1113 13.6381 12.4091C13.6107 12.7079 13.5589 12.9804 13.4837 13.2306L12.7147 15.9454C12.6517 16.1632 12.5958 16.4124 12.545 16.691C12.4952 16.9695 12.4709 17.1823 12.4709 17.3251C12.4709 17.6857 12.5511 17.9319 12.7137 18.0625C12.8742 18.1932 13.1556 18.2591 13.5538 18.2591C13.7417 18.2591 13.952 18.2256 14.1897 18.1608C14.4254 18.096 14.5961 18.0382 14.7037 17.9886L14.4975 18.8263ZM14.3614 7.80715C14.0028 8.13941 13.571 8.30554 13.0662 8.30554C12.5623 8.30554 12.1275 8.13941 11.7658 7.80715C11.4062 7.47489 11.2244 7.07072 11.2244 6.59867C11.2244 6.12763 11.4072 5.72244 11.7658 5.38715C12.1275 5.05084 12.5623 4.8837 13.0662 4.8837C13.571 4.8837 14.0038 5.05084 14.3614 5.38715C14.72 5.72244 14.8998 6.12763 14.8998 6.59867C14.8998 7.07173 14.72 7.47489 14.3614 7.80715Z" fill="#FFAD08" />
                        </svg>
                            For your safety, keep communications and payments within Fixlancer</p>
                        <textarea placeholder="Type in your delivey message, explaining the content being delivered."></textarea>
                        <div class="upload-btn-wrapper">
                            <button class="btnRes">Upload a file</button>
                            <input type="file" name="myfile" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleDeliverClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handlSendDocument} >
                            Deliver Work
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal className="model_alert-res1 e" show={this.state.extra}>
                    <Modal.Header >
                        <Modal.Title>Mark as complete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="offering">What you are offering</p>
                        <textarea placeholder="I can deliver this job on time for more pay!"></textarea>
                        <div className="extra-res">    
                            <div className="ex-res">
                                <p>Delivery Time</p>
                                <input type="text" placeholder="Delivery Time"/>
                            </div>
                            <div className="ex-res">
                                    <p>Amount</p>
                                    <input type="text" placeholder="200000" style={{width:"100px"}}/>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="b" onClick={handleDeliverClose}>
                             Cancel
                        </Button>
                        <Button variant="primary" className="b" onClick={handlOffering} >
                            Send Offer
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal className="model_alert-res1 offer" show={this.state.offering}>
                    <Modal.Body>
                        <div>
                            <p class="payExtra">Pay for Extras</p>
                            <div className="flexAndSpaceBetween">
                                <p className="payR">Available Balance</p>
                                <p className="payR">N72,000</p>
                            </div>
                            <hr style={{ margin: "0rem 0 1rem 0"}}/>
                            <div className="flexAndSpaceBetween">
                                <p>Fast delivery</p>
                                <p>N1,000</p>
                            </div>
                             <div className="flexAndSpaceBetween">
                                <p>Fee</p> 
                                <p>N0</p>
                            </div>
                            <div className="flexAndSpaceBetween">
                                <p>Total</p>
                                <p className="payR">N72,000</p>
                            </div>
                        </div>
                        <button onClick={onPayNow}>Pay Now</button>
                        <span>Your payment will be processed and cannot be undone</span>
                    </Modal.Body>
                </Modal>


                <Modal className="model_alert-res1" show={this.state.markComplete}>
                    <Modal.Header >
                        <Modal.Title>Mark as complete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9995 0.281738C5.37295 0.281738 0 5.63938 0 12.247C0 18.8547 5.37295 24.2133 11.9995 24.2133C18.626 24.2133 24 18.8547 24 12.247C24 5.63938 18.626 0.281738 11.9995 0.281738ZM14.4975 18.8263C13.8799 19.0694 13.3882 19.2538 13.0194 19.3814C12.6517 19.5091 12.224 19.5729 11.7374 19.5729C10.9897 19.5729 10.4076 19.3906 9.99314 19.0269C9.57867 18.6632 9.37245 18.2023 9.37245 17.6422C9.37245 17.4244 9.38768 17.2015 9.41816 16.9746C9.44965 16.7477 9.49943 16.4924 9.56749 16.2058L10.3406 13.4829C10.4086 13.2215 10.4676 12.9733 10.5143 12.7424C10.561 12.5094 10.5834 12.2957 10.5834 12.1012C10.5834 11.7547 10.5112 11.5116 10.368 11.3749C10.2227 11.2381 9.94946 11.1713 9.5421 11.1713C9.34298 11.1713 9.13778 11.2006 8.92749 11.2624C8.71924 11.3262 8.53841 11.384 8.3901 11.4407L8.59429 10.602C9.10019 10.3963 9.58476 10.2201 10.047 10.0742C10.5092 9.9263 10.946 9.85337 11.3575 9.85337C12.1001 9.85337 12.673 10.0337 13.0763 10.3902C13.4776 10.7478 13.6797 11.2128 13.6797 11.7841C13.6797 11.9026 13.6655 12.1113 13.6381 12.4091C13.6107 12.7079 13.5589 12.9804 13.4837 13.2306L12.7147 15.9454C12.6517 16.1632 12.5958 16.4124 12.545 16.691C12.4952 16.9695 12.4709 17.1823 12.4709 17.3251C12.4709 17.6857 12.5511 17.9319 12.7137 18.0625C12.8742 18.1932 13.1556 18.2591 13.5538 18.2591C13.7417 18.2591 13.952 18.2256 14.1897 18.1608C14.4254 18.096 14.5961 18.0382 14.7037 17.9886L14.4975 18.8263ZM14.3614 7.80715C14.0028 8.13941 13.571 8.30554 13.0662 8.30554C12.5623 8.30554 12.1275 8.13941 11.7658 7.80715C11.4062 7.47489 11.2244 7.07072 11.2244 6.59867C11.2244 6.12763 11.4072 5.72244 11.7658 5.38715C12.1275 5.05084 12.5623 4.8837 13.0662 4.8837C13.571 4.8837 14.0038 5.05084 14.3614 5.38715C14.72 5.72244 14.8998 6.12763 14.8998 6.59867C14.8998 7.07173 14.72 7.47489 14.3614 7.80715Z" fill="#FFAD08" />
                        </svg> Only Mark as Complete when you are satisified & all files have been deliverd.</p>
                        <>
                            <div className="row">
                                <div className="col text-center rating-res">
                                    <Rate rating={this.state.rating2} onRating={(rate) => this.setState({ rating2: rate })} />
                                </div>
                            </div>
                        </>
                        <textarea placeholder="Add your review!"
                            // value={this.state.textDataArea}
                            onChange={this.onInputchange}
                        ></textarea>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleMarkComplete}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleMarkAlert}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>



                <Modal className="model_alert-res dispute-resCoo" show={this.state.dispute}>
                    <Modal.Body>

                        <svg width="88" height="89" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.9961 73.1222H85.4179C86.8418 73.1222 87.9961 74.2732 87.9961 75.693V86.0189C87.9961 87.4387 86.8418 88.5897 85.4179 88.5897H43.9961C42.5723 88.5897 41.418 87.4387 41.418 86.0189V75.693C41.418 74.2732 42.5721 73.1222 43.9961 73.1222Z" fill="#B44021" />
                            <path d="M2.26796 67.3072L29.7499 39.9036L40.7183 50.8407L13.2365 78.2443C11.7245 79.752 9.73833 80.5059 7.75231 80.5059C5.7663 80.5059 3.78011 79.7522 2.26813 78.2443C-0.756014 75.229 -0.756014 70.3225 2.26796 67.3072Z" fill="#B44021" />
                            <path d="M29.7148 32.6047L48.003 14.3688L66.3214 32.635L48.0333 50.871L29.7148 32.6047Z" fill="#B44021" />
                            <path d="M75.4621 34.4347L79.1385 38.1006C80.1453 39.1046 80.1453 40.7323 79.1385 41.7362L57.1711 63.6409C56.6677 64.1429 56.0079 64.394 55.3482 64.394C54.6885 64.394 54.0285 64.1431 53.5253 63.6409L49.8489 59.975C48.842 58.971 48.842 57.3434 49.8489 56.3394L71.8161 34.4349C72.8229 33.4307 74.4552 33.4307 75.4621 34.4347Z" fill="#B44021" />
                            <path d="M24.2338 30.7995C23.2269 31.8035 21.5946 31.8035 20.5878 30.7995L16.9114 27.1336C15.9045 26.1296 15.9045 24.502 16.9114 23.498L38.8786 1.59325C39.8851 0.589446 41.5175 0.589274 42.5245 1.59325L46.201 5.25918C47.2078 6.26315 47.2078 7.8908 46.201 8.89477L24.2338 30.7995Z" fill="#B44021" />
                        </svg>
                        <Modal.Title>Dispute Sent</Modal.Title>
                        <p>Your dispute has been sent. A notification would be sent to @username</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleSendDispute} >
                            Okay
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal className="model_alert-res dispute-resCancel" show={this.state.cancelOrder}>
                    <Modal.Body>

                    <svg width="88" height="89" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse opacity="0.1" cx="44" cy="44.7149" rx="44" ry="43.8746" fill="#F73C41"/>
                        <g clip-path="url(#clip0)">
                        <path d="M68.4455 26.0839L62.6846 20.3394L44.001 38.9695L25.3176 20.3394L19.5566 26.0839L38.2401 44.7141L19.5566 63.3444L25.3176 69.0889L44.001 50.4587L62.6844 69.0889L68.4454 63.3444L49.7621 44.7141L68.4455 26.0839Z" fill="#F73C41"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="48.8889" height="48.7496" fill="white" transform="translate(19.5566 20.3394)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <Modal.Title>Cancel Order?</Modal.Title>
                        <p>When you request a mutual cancellation, your order is not cancelled immediately. The seller is given 2 days to accept or decline your offer to cancel.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className="cancelWhiteBtn" onClick={cancelOrder} >
                            Cancel
                        </Button>
                        <Button variant="primary"  className="cancelOrangeBtn"  onClick={requestRejectCancel} >
                             Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
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
                    <div className="settings ordcht">
                            <button className="btn-Chat" >
                                <Link to="/OrderFix">Chat</Link>
                            </button>
                            <button className="btn-Order" >
                                <Link to="/Orderchat"> Order </Link>
                            </button>
                        </div>
                       
                    </div>
                </div>
                <div className="content__body-res">
                    <center>
                        <span className="content__body_Res"><svg width="25" height="25" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 0.25C12.4766 0.25 10.4399 1.41382 8.61328 2.38281C6.78662 3.35181 5.12793 4.1875 2.0625 4.1875H0.71875V5.5C0.71875 15.6309 4.2251 22.2241 7.77344 26.2129C11.3218 30.2017 14.9961 31.668 14.9961 31.668L15.5 31.832L16.0039 31.668C16.0039 31.668 19.6782 30.2324 23.2266 26.2539C26.7749 22.2754 30.2812 15.6667 30.2812 5.5V4.1875H28.9375C25.8878 4.1875 24.2134 3.35181 22.3867 2.38281C20.5601 1.41382 18.5234 0.25 15.5 0.25ZM15.5 2.875C17.8516 2.875 19.2006 3.67993 21.085 4.67969C22.6754 5.52563 24.7855 6.33569 27.5098 6.60742C27.2526 15.4873 24.2449 21.1321 21.2109 24.5312C18.4604 27.6125 16.1509 28.6379 15.5 28.9199C14.8439 28.6328 12.5396 27.5818 9.78906 24.4902C6.75513 21.0808 3.74744 15.4463 3.49023 6.60742C6.22498 6.33569 8.32458 5.52563 9.91504 4.67969C11.7994 3.67993 13.1484 2.875 15.5 2.875ZM15.5 6.8125C11.0646 6.8125 7.4375 10.3552 7.4375 14.6875C7.4375 19.0198 11.0646 22.5625 15.5 22.5625C19.9354 22.5625 23.5625 19.0198 23.5625 14.6875C23.5625 10.3552 19.9354 6.8125 15.5 6.8125ZM15.248 9.47852C15.5577 9.94507 15.1588 10.8525 15.0381 11.2832C14.8596 11.9189 14.8229 12.8059 14.1982 13.2109C13.7363 13.5083 13.9568 12.9084 13.6104 12.7188C13.1904 12.4932 12.4451 13.134 12.5605 13.5801C12.6183 13.8057 13.1904 14.0005 13.4004 13.9902C13.8571 13.9697 14.2927 13.5442 14.5762 14.0312C15.2218 15.1489 13.7783 16.3076 13.9463 17.4355C13.9673 17.5894 14.4135 19.0762 14.5342 19.8145C13.5684 19.6453 12.6813 19.2659 11.9727 18.666C11.8257 18.4763 11.6997 18.2712 11.5947 18.0918C11.3953 17.7637 11.3323 17.7739 11.0488 17.5996C11.0331 17.5894 11.0226 17.5688 11.0068 17.5586C10.5239 16.8357 10.23 15.9744 10.167 15.0566C10.2877 14.8157 10.4977 14.5952 10.7129 14.4004C10.9124 14.2209 10.9963 14.1697 11.2588 14.1133C11.5107 14.0569 11.8519 14.144 12.0146 13.8672C12.1669 13.6108 12.0042 13.4211 11.8047 13.293C11.4792 13.0828 10.6289 13.1802 10.5029 12.7188C10.5659 12.5598 10.6761 12.4163 10.7549 12.2676C10.8021 12.2317 10.8389 12.1907 10.8809 12.1445C10.9806 12.0266 10.9911 11.9497 10.9648 11.8574C11.8729 10.4578 13.4371 9.56055 15.248 9.47852ZM17.8096 9.9707C19.6205 10.8115 20.875 12.5855 20.875 14.6875C20.875 16.5076 19.9512 18.0969 18.5234 19.0352C18.7124 18.8352 18.8751 18.6353 18.9854 18.3789C19.1848 17.9072 19.1533 17.3074 19.0273 16.8203C18.9381 16.4819 18.8909 16.2974 18.6074 16.082C18.429 15.9436 18.114 15.8564 18.0195 15.6309C17.7886 15.0618 18.3765 14.5132 18.8174 14.2363C19.1638 14.0159 20.3606 13.4827 19.4893 13.1699C18.7859 12.9187 18.1193 13.5391 17.4736 12.9648C17.0012 12.5496 17.1692 11.8164 17.3477 11.2832C17.4841 10.873 17.5786 10.3552 17.8096 9.9707Z" fill="#878585" />
                        </svg>For your safety, keep communications and payments within Fixlancer
                        </span>
                    </center>
                    <div className="chat__items">
                        {this.state.chat.map((itm, index) => {
                            return (
                                <ChatItem
                                    animationDelay={index + 2}
                                    key={itm.key}
                                    user={itm.type ? itm.type : "me"}
                                    msg={itm.msg}
                                    image={itm.image}
                                />
                            );
                        })}
                        <div ref={this.messagesEndRef} />
                    </div>
                    <div className="dispute-res" style={{ display: this.state.blockElement }}>
                        <span><svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7345 25.9226H30.5475C31.0567 25.9226 31.4695 26.3354 31.4695 26.8446V30.5478C31.4695 31.057 31.0567 31.4698 30.5475 31.4698H15.7345C15.2253 31.4698 14.8125 31.057 14.8125 30.5478V26.8446C14.8125 26.3354 15.2252 25.9226 15.7345 25.9226Z" fill="#E16F26" />
                            <path d="M0.811052 23.8372L10.639 14.0093L14.5614 17.9317L4.73355 27.7596C4.19285 28.3003 3.48256 28.5707 2.77233 28.5707C2.06211 28.5707 1.35182 28.3004 0.811113 27.7596C-0.270361 26.6782 -0.270361 24.9186 0.811052 23.8372Z" fill="#E16F26" />
                            <path d="M10.625 11.3916L17.1651 4.85153L23.716 11.4025L17.1759 17.9425L10.625 11.3916Z" fill="#E16F26" />
                            <path d="M26.9883 12.0479L28.303 13.3626C28.6631 13.7227 28.6631 14.3064 28.303 14.6665L20.4472 22.5223C20.2671 22.7023 20.0312 22.7923 19.7953 22.7923C19.5594 22.7923 19.3233 22.7024 19.1434 22.5223L17.8286 21.2075C17.4686 20.8475 17.4686 20.2637 17.8286 19.9037L25.6844 12.0479C26.0445 11.6878 26.6282 11.6878 26.9883 12.0479Z" fill="#E16F26" />
                            <path d="M8.66598 10.7442C8.30592 11.1042 7.72218 11.1042 7.36212 10.7442L6.04739 9.42945C5.68733 9.06939 5.68733 8.48566 6.04739 8.1256L13.9031 0.269779C14.2631 -0.090221 14.8469 -0.0902824 15.207 0.269779L16.5217 1.58451C16.8818 1.94457 16.8818 2.5283 16.5217 2.88837L8.66598 10.7442Z" fill="#E16F26" />
                        </svg>
                            <p>Under Dispute</p>
                        </span>
                    </div>
                    <div></div>
                    <div className="document-res" style={{ display: this.state.sendDocument }}>
                        <span>
                        </span>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M7.12848 10.7849L11.5539 6.44002L10.0788 4.99174L8.11193 6.92278V0.164062H6.14509V6.92278L4.17825 4.99174L2.70312 6.44002L7.12848 10.7849Z" fill="white" />
                                <path d="M0.246094 11.7502H14.0141V13.6813H0.246094V11.7502Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="13.768" height="13.5174" fill="white" transform="translate(0.246094 0.164062)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div></div>
                    <div className className="markAsComplete" style={{ display: this.state.markAsComplete }}>
                        <button className="whiteBtn" onClick={reqModification}>Request Modification</button>
                        <button className="OrangeBtn" onClick={markComplete}>Mark As Complete</button>
                    </div>
                    <div></div>
                    <div className="ratingAlert" style={{ display: this.state.ratingAlert }}>
                        <span>{this.state.rating2}
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.785 4.4437C12.6788 4.2321 12.4664 4.1263 12.2541 4.1263H8.21866L6.94432 0.317408C6.83812 -0.105803 6.09476 -0.105803 5.88237 0.317408L4.60804 4.1263H0.572634C0.360245 4.1263 0.147855 4.2321 0.0416606 4.4437C-0.0645342 4.65531 0.0416614 4.86692 0.254051 5.07852L3.54609 7.40618L2.27175 11.2151C2.16556 11.4267 2.27175 11.6383 2.48414 11.8499C2.69653 11.9557 2.90892 11.9557 3.12131 11.8499L6.41335 9.52223L9.70538 11.8499C9.81158 11.9557 9.91777 11.9557 10.024 11.9557C10.1302 11.9557 10.2364 11.9557 10.3426 11.8499C10.5549 11.7441 10.6611 11.5325 10.5549 11.2151L9.2806 7.40618L12.5726 5.07852C12.785 4.86692 12.8912 4.65531 12.785 4.4437Z" fill="white" /></svg>
                        </span>
                        <div> {this.state.textDataArea}</div>
                    </div>
                    <div></div>
                    <div className="modification-res" style={{ display: this.state.reqModification }}>
                        <span>
                            <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9964 0.266846L13.2608 4.9255C12.1421 5.20134 11.0745 5.6151 10.1142 6.19233L6.27284 3.45435L3.49399 6.23319L6.19111 10.0745C5.60877 11.04 5.16436 12.0974 4.88341 13.2212L0.265625 13.9976V17.9207L4.88341 18.738C5.16436 19.8618 5.60877 20.9192 6.19111 21.8846L3.45312 25.726L6.23197 28.5048L10.0733 25.8077C11.0337 26.3849 12.1013 26.7987 13.22 27.0745L13.9964 31.7332H17.9195L18.7776 27.0745C19.8912 26.7936 20.9282 26.3492 21.8834 25.7668L25.7656 28.5048L28.5445 25.726L25.7656 21.8846C26.3377 20.9294 26.7975 19.8873 27.0733 18.7789L31.732 17.9207V13.9976L27.0733 13.2212C26.7975 12.1127 26.3377 11.0706 25.7656 10.1154L28.5036 6.23319L25.7248 3.45435L21.8834 6.23319C20.9282 5.65597 19.8555 5.20645 18.7368 4.9255L17.9195 0.266846H13.9964ZM15.9988 7.45915C20.7136 7.45915 24.5397 11.2852 24.5397 16C24.5397 20.7149 20.7136 24.5409 15.9988 24.5409C11.284 24.5409 7.45793 20.7098 7.45793 16C7.45793 11.2903 11.284 7.45915 15.9988 7.45915ZM15.9988 9.54329C12.4435 9.54329 9.54207 12.4447 9.54207 16C9.54207 19.5553 12.4435 22.4567 15.9988 22.4567C19.5541 22.4567 22.4555 19.5553 22.4555 16C22.4555 12.4447 19.5541 9.54329 15.9988 9.54329ZM15.9579 13.3029C17.4546 13.3029 18.6959 14.4982 18.6959 16C18.6959 17.4967 17.4546 18.6971 15.9579 18.6971C14.4612 18.6971 13.2608 17.4967 13.2608 16C13.2608 14.4982 14.4612 13.3029 15.9579 13.3029Z" fill="#363333" />
                            </svg>
                            <div className="modi-res">
                                <div><b>Modification Requested</b></div>
                                <div>The buyer requested for modifications</div>
                            </div>
                        </span>
                    </div>
                    <div></div>
                   
                    <div className="cancell-res a" style={{ display : this.state.cancell }}>
                        <span>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.1248 12.0086L16.2458 14.1297C16.539 14.4237 16.539 14.8977 16.2458 15.1902L15.1853 16.2515C14.892 16.544 14.418 16.5447 14.1248 16.2515L12.003 14.1297L9.88278 16.25C9.58879 16.544 9.114 16.544 8.82077 16.2515L7.76027 15.1902C7.46704 14.8977 7.46779 14.4222 7.76178 14.1289L9.88202 12.0086L7.76547 9.89207C7.47224 9.59883 7.47224 9.12477 7.76547 8.83153L8.82597 7.77025C9.1192 7.47776 9.59324 7.47701 9.88647 7.77025L12.0029 9.88678L14.1344 7.75447C14.4284 7.46048 14.9032 7.46048 15.1964 7.75372L16.2569 8.81425C16.5502 9.10749 16.5494 9.5823 16.2562 9.87629L14.1248 12.0086ZM12 24C5.37222 24 0 18.6275 0 12.0004C0 5.37239 5.37222 0 12 0C18.6278 0 24 5.37239 24 12.0004C24 18.6268 18.6277 24 12 24ZM12 2.25002C6.61503 2.25002 2.25004 6.61516 2.25004 12.0003C2.25004 17.3854 6.61503 21.7506 12 21.7506C17.385 21.7506 21.75 17.3855 21.75 12.0004C21.75 6.61524 17.385 2.25002 12 2.25002Z" fill="#F73C41"/>
                        </svg>

                            <div className="can-res">
                                <div><b>Order Cancellation</b></div>
                                <div>You have requested a mutual cancellation for this order</div>
                            </div>
                        </span>
                    </div>
                    <div className className="markAsComplete" style={{ display: this.state.cancell }}>
                            <button className="whiteBtn" onClick={requestAcceptCancel}>Accept</button>
                            <button className="OrangeBtn" onClick={requestRejected}>Reject</button>
                    </div>

                    <div className="cancell-res a" style={{ display : this.state.cancelled }}>
                        <span>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.1248 12.0086L16.2458 14.1297C16.539 14.4237 16.539 14.8977 16.2458 15.1902L15.1853 16.2515C14.892 16.544 14.418 16.5447 14.1248 16.2515L12.003 14.1297L9.88278 16.25C9.58879 16.544 9.114 16.544 8.82077 16.2515L7.76027 15.1902C7.46704 14.8977 7.46779 14.4222 7.76178 14.1289L9.88202 12.0086L7.76547 9.89207C7.47224 9.59883 7.47224 9.12477 7.76547 8.83153L8.82597 7.77025C9.1192 7.47776 9.59324 7.47701 9.88647 7.77025L12.0029 9.88678L14.1344 7.75447C14.4284 7.46048 14.9032 7.46048 15.1964 7.75372L16.2569 8.81425C16.5502 9.10749 16.5494 9.5823 16.2562 9.87629L14.1248 12.0086ZM12 24C5.37222 24 0 18.6275 0 12.0004C0 5.37239 5.37222 0 12 0C18.6278 0 24 5.37239 24 12.0004C24 18.6268 18.6277 24 12 24ZM12 2.25002C6.61503 2.25002 2.25004 6.61516 2.25004 12.0003C2.25004 17.3854 6.61503 21.7506 12 21.7506C17.385 21.7506 21.75 17.3855 21.75 12.0004C21.75 6.61524 17.385 2.25002 12 2.25002Z" fill="#F73C41"/>
                        </svg>

                            <div className="can-res">
                                <div><b>Order Cancelled</b></div>
                                <div>You have requested a mutual cancellation for this order</div>
                            </div>
                        </span>
                    </div>

                <div className="reqCancelled" style={{ display : this.state.reqCancelled }}>
                    <div className="cancell-res ed" >
                        <span>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.1248 12.0086L16.2458 14.1297C16.539 14.4237 16.539 14.8977 16.2458 15.1902L15.1853 16.2515C14.892 16.544 14.418 16.5447 14.1248 16.2515L12.003 14.1297L9.88278 16.25C9.58879 16.544 9.114 16.544 8.82077 16.2515L7.76027 15.1902C7.46704 14.8977 7.46779 14.4222 7.76178 14.1289L9.88202 12.0086L7.76547 9.89207C7.47224 9.59883 7.47224 9.12477 7.76547 8.83153L8.82597 7.77025C9.1192 7.47776 9.59324 7.47701 9.88647 7.77025L12.0029 9.88678L14.1344 7.75447C14.4284 7.46048 14.9032 7.46048 15.1964 7.75372L16.2569 8.81425C16.5502 9.10749 16.5494 9.5823 16.2562 9.87629L14.1248 12.0086ZM12 24C5.37222 24 0 18.6275 0 12.0004C0 5.37239 5.37222 0 12 0C18.6278 0 24 5.37239 24 12.0004C24 18.6268 18.6277 24 12 24ZM12 2.25002C6.61503 2.25002 2.25004 6.61516 2.25004 12.0003C2.25004 17.3854 6.61503 21.7506 12 21.7506C17.385 21.7506 21.75 17.3855 21.75 12.0004C21.75 6.61524 17.385 2.25002 12 2.25002Z" fill="#F73C41"/>
                        </svg>

                            <div className="can-res">
                                <div><b>Order Cancelled</b></div>
                                <div>You have requested a mutual cancellation for this order</div>
                            </div>
                        </span>
                    </div>
                    <div className="cancell-res ed" >
                        <span>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.373 0 0 5.35315 0 11.9557C0 18.5582 5.373 23.9113 12 23.9113C18.627 23.9113 24 18.5582 24 11.9557C24 5.35315 18.627 0 12 0ZM12 2.98892C13.9425 2.98892 15.7297 3.61958 17.2005 4.66421L4.6785 17.134C3.63 15.6687 3 13.888 3 11.9557C3 7.01126 7.03725 2.98892 12 2.98892ZM12 20.9224C10.0575 20.9224 8.27025 20.2918 6.7995 19.2471L19.3215 6.77737C20.37 8.24269 21 10.0233 21 11.9557C21 16.9001 16.9627 20.9224 12 20.9224Z" fill="#F73C41"/>
                        </svg>
                            <div className="can-res">
                                <div><b>Order Denied</b></div>
                                <div>Mutual Cancellation of the Order was rejected.</div>
                            </div>
                        </span>
                    </div>
                    </div>
                    <div className="extrasBlock" style={{display:this.state.acceptOffer}}>
                        <p className="extrasP">EXTRAS</p>
                        <div>
                            <span className="dayFast">
                                <p>Fast Delivery (+1day)</p>
                                <p>N1000</p>
                            </span>
                            <p className="acceptOffer">Accepct Offer</p>
                        </div>
                    </div>
                </div>
                <div className="content__footer">

                    <div className="sendNewMessageOrderFix_Res">
                        <div className="sendNewMessageOrderFix">
                            <input
                                type="text"
                                // placeholder="Type a message here"
                                onChange={this.onStateChange}
                                value={this.state.msg}
                            />
                        </div>

                        <div className="sendNewMessageOrderFix">
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
                                        <Dropdown.Item href="javascript:void(0)" onClick={handleExtra}>Offer Extras</Dropdown.Item>
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
                    </div>
                </div>
            </div>
        );
    }
}
