import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import { Button, Modal, Dropdown } from 'react-bootstrap';
import rectangle from "../../website/img/rectangle.png"
import messageText from "../../website/img/birmingham-museums-trust-5EUh-tq31eA-unsplash.jpg"


export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Good morning, I want to boost my telegram channel in three weeks to help sponsor my new single I would be releasing",
    },
    {
      key: 2,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Good morning, I want to boost my telegram channel ",
    },
    
    // {
    //   key: 3,
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    //   type: "other",
    //   msg: "What about you?",
    // },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: 'Good morning, I want to boost my telegram channel Good morning,I want to boost my'
      // msg: 'Good morning, I want to boost my telegram channel Good morning,I want to boost my  div className="flaggedRs"><div className="flaggedService"><div className="flagS"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9993 0C7.61168 0 0 7.61168 0 16.9993C0 26.3869 7.61168 34 16.9993 34C26.3869 34 34 26.3869 34 16.9993C34 7.61168 26.3869 0 16.9993 0ZM20.5382 26.3466C19.6632 26.692 18.9666 26.9539 18.4442 27.1352C17.9232 27.3166 17.3173 27.4072 16.628 27.4072C15.5688 27.4072 14.7441 27.1482 14.157 26.6315C13.5698 26.1149 13.2776 25.4601 13.2776 24.6642C13.2776 24.3548 13.2992 24.0382 13.3424 23.7158C13.387 23.3934 13.4575 23.0308 13.5539 22.6235L14.6491 18.755C14.7456 18.3837 14.829 18.0312 14.8952 17.703C14.9614 17.372 14.9931 17.0684 14.9931 16.792C14.9931 16.2999 14.8909 15.9545 14.688 15.7602C14.4822 15.5659 14.0951 15.4709 13.518 15.4709C13.2359 15.4709 12.9452 15.5126 12.6473 15.6004C12.3523 15.6911 12.0961 15.7731 11.886 15.8537L12.1752 14.6621C12.8919 14.3699 13.5784 14.1195 14.2332 13.9123C14.888 13.7022 15.5069 13.5986 16.0897 13.5986C17.1418 13.5986 17.9534 13.8547 18.5248 14.3613C19.0932 14.8693 19.3796 15.5299 19.3796 16.3416C19.3796 16.51 19.3595 16.8064 19.3206 17.2295C19.2818 17.6541 19.2084 18.0412 19.1019 18.3967L18.0124 22.2536C17.9232 22.563 17.8441 22.9171 17.7721 23.3128C17.7016 23.7086 17.667 24.0108 17.667 24.2138C17.667 24.7261 17.7807 25.0758 18.011 25.2615C18.2384 25.4471 18.637 25.5407 19.2012 25.5407C19.4674 25.5407 19.7653 25.4932 20.1021 25.4011C20.436 25.309 20.6778 25.2269 20.8303 25.1564L20.5382 26.3466ZM20.3453 10.6915C19.8373 11.1635 19.2257 11.3995 18.5104 11.3995C17.7966 11.3995 17.1806 11.1635 16.6683 10.6915C16.1588 10.2194 15.9012 9.64521 15.9012 8.97456C15.9012 8.30535 16.1603 7.72969 16.6683 7.25333C17.1806 6.77553 17.7966 6.53807 18.5104 6.53807C19.2257 6.53807 19.8387 6.77553 20.3453 7.25333C20.8533 7.72969 21.1081 8.30535 21.1081 8.97456C21.1081 9.64665 20.8533 10.2194 20.3453 10.6915Z" fill="#FA6C27"/></svg></div><div>Your messages was flagged for services by our team, due to possible Terms of Services violation. This process may take up to 24 hours. In the meantime, your messages is not visible to @username<span>8:30 PM</span></div></div></div>',
    },
    // {
    //   key: 5,
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    //   type: "other",
    //   msg: "Finally. What's the plan?",
    // },
    // {
    //   key: 6,
    //   image:
    //     "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    //   type: "",
    //   msg: "what plan mate?",
    // },
    // {
    //   key: 7,
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    //   type: "other",
    //   msg: "I'm taliking about the tutorial",
    // },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
      show:false,
      customOffer:"none"
    };
  }
 createCustomOffer = () => this.setState({
  customOffer: "block",
  show: false,
});;
 
 handleDeliver = () => this.setState({
    show: true,
  });;
  handleClose = () => this.setState({
    show: false,
  });
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <h5>radovandanley</h5>
              <div className="online-circle-div">
                <div className="online-circle"></div>
                <p>online</p>
              </div>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__create">
          <button onClick={this.handleDeliver}>
           + CREATE AN OFFER
          </button>
        </div>
        <div className="content__body">
         <center>

          <p>For your safety, keep communications and
               payments within Fixlancer</p>
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

       

            <div className="flaggedRs">
              <div className="flaggedService">
                <div className="flagS">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9993 0C7.61168 0 0 7.61168 0 16.9993C0 26.3869 7.61168 34 16.9993 34C26.3869 34 34 26.3869 34 16.9993C34 7.61168 26.3869 0 16.9993 0ZM20.5382 26.3466C19.6632 26.692 18.9666 26.9539 18.4442 27.1352C17.9232 27.3166 17.3173 27.4072 16.628 27.4072C15.5688 27.4072 14.7441 27.1482 14.157 26.6315C13.5698 26.1149 13.2776 25.4601 13.2776 24.6642C13.2776 24.3548 13.2992 24.0382 13.3424 23.7158C13.387 23.3934 13.4575 23.0308 13.5539 22.6235L14.6491 18.755C14.7456 18.3837 14.829 18.0312 14.8952 17.703C14.9614 17.372 14.9931 17.0684 14.9931 16.792C14.9931 16.2999 14.8909 15.9545 14.688 15.7602C14.4822 15.5659 14.0951 15.4709 13.518 15.4709C13.2359 15.4709 12.9452 15.5126 12.6473 15.6004C12.3523 15.6911 12.0961 15.7731 11.886 15.8537L12.1752 14.6621C12.8919 14.3699 13.5784 14.1195 14.2332 13.9123C14.888 13.7022 15.5069 13.5986 16.0897 13.5986C17.1418 13.5986 17.9534 13.8547 18.5248 14.3613C19.0932 14.8693 19.3796 15.5299 19.3796 16.3416C19.3796 16.51 19.3595 16.8064 19.3206 17.2295C19.2818 17.6541 19.2084 18.0412 19.1019 18.3967L18.0124 22.2536C17.9232 22.563 17.8441 22.9171 17.7721 23.3128C17.7016 23.7086 17.667 24.0108 17.667 24.2138C17.667 24.7261 17.7807 25.0758 18.011 25.2615C18.2384 25.4471 18.637 25.5407 19.2012 25.5407C19.4674 25.5407 19.7653 25.4932 20.1021 25.4011C20.436 25.309 20.6778 25.2269 20.8303 25.1564L20.5382 26.3466ZM20.3453 10.6915C19.8373 11.1635 19.2257 11.3995 18.5104 11.3995C17.7966 11.3995 17.1806 11.1635 16.6683 10.6915C16.1588 10.2194 15.9012 9.64521 15.9012 8.97456C15.9012 8.30535 16.1603 7.72969 16.6683 7.25333C17.1806 6.77553 17.7966 6.53807 18.5104 6.53807C19.2257 6.53807 19.8387 6.77553 20.3453 7.25333C20.8533 7.72969 21.1081 8.30535 21.1081 8.97456C21.1081 9.64665 20.8533 10.2194 20.3453 10.6915Z" fill="#FA6C27"/>
                  </svg>
                </div>
                <div>
                   Your messages was flagged for services by our team, due to possible Terms of Services violation. This process may take up to 24 hours. In the meantime, your messages is not visible to @username
                   <span>8:30 PM</span>
                </div>
              </div>
            </div>

            <div className="supportRS">
              <div className="restrictedSupport">
                <div>
                  <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3C10.398 3 5.61133 4.03711 5.61133 4.03711L5.60742 4.04102C5.15448 4.13169 4.74689 4.37635 4.45387 4.73345C4.16086 5.09055 4.00049 5.53807 4 6V12C4 22.398 14.0215 26.7441 14.0215 26.7441C14.3203 26.9119 14.6573 27 15 27C15.3414 26.9993 15.6769 26.9112 15.9746 26.7441H15.9785C15.9795 26.7441 26 22.398 26 12V6C26.0002 5.53685 25.8397 5.08797 25.5459 4.72999C25.252 4.37201 24.843 4.12712 24.3887 4.03711C24.3887 4.03711 19.602 3 15 3ZM13.7871 7H16.2129L16.0117 16H13.9883L13.7871 7ZM15.0039 18.8105C15.8259 18.8105 16.3184 19.2528 16.3184 20.0078C16.3184 20.7488 15.8259 21.1895 15.0039 21.1895C14.1759 21.1895 13.6797 20.7488 13.6797 20.0078C13.6797 19.2528 14.1749 18.8105 15.0039 18.8105Z" fill="#FF0000"/>
                  </svg>
                </div>
                <div>
                  Message restricted by Fixlancer Support
                </div>
              </div>
            </div>
            
            <div className="thisMessage">
              <div className="mrTo">
                <h3>Hello. I need to appy some</h3>
                <h4>This message is related to:</h4>

                <div className="messageRelated">
                  <div className="mImg">
                    <img src={messageText} />
                  </div>
                  <div className="relatedText">
                    <h2>Do professional menu within 4 hours</h2>
                    <p>bonneswill</p>
                  </div>
                </div>
              <span>8:30 PM</span>

              </div>
            </div>

            <div className="customerOffer" style={{display:this.state.customOffer}}>
              <div className="offer01">
                <div className="offerOrderDiv">
                  <img src={rectangle} />
                </div>
                <div className="customOrderDiv">
                  <h3>CUSTOM OFFER</h3>
                  <h4>Loraeam ipsum dolor isura ctreed bla engl <br/>Loraeam ipsum dolor isura ctreed bla </h4>
                  <div>
                    <p>1 Day(s) delivery</p>
                    <p style={{color:"black"}}>N5,000</p>
                  </div>
                </div>
              </div>
              <div className="offer02">
                <button>ORDER NOW</button>
              </div>
            </div>


          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
            <svg className="content_svg_footer1" width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.41732 0.583496C2.93821 0.583496 0.0839844 3.43772 0.0839844 6.91683V26.7085C0.0839844 31.499 4.00182 35.4168 8.79232 35.4168C13.5828 35.4168 17.5007 31.499 17.5007 26.7085V8.50016H14.334V26.7085C14.334 29.7872 11.871 32.2502 8.79232 32.2502C5.71365 32.2502 3.25065 29.7872 3.25065 26.7085V6.91683C3.25065 5.14877 4.64926 3.75016 6.41732 3.75016C8.18537 3.75016 9.58399 5.14877 9.58399 6.91683V23.5418C9.58399 23.9961 9.24664 24.3335 8.79232 24.3335C8.338 24.3335 8.00065 23.9961 8.00065 23.5418V8.50016H4.83398V23.5418C4.83398 25.7095 6.62464 27.5002 8.79232 27.5002C10.96 27.5002 12.7507 25.7095 12.7507 23.5418V6.91683C12.7507 3.43772 9.89643 0.583496 6.41732 0.583496Z" fill="#363333" fill-opacity="0.3"/>
            </svg>
            <svg className="content_svg_footer2" width="12" height="20" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.41732 0.583496C2.93821 0.583496 0.0839844 3.43772 0.0839844 6.91683V26.7085C0.0839844 31.499 4.00182 35.4168 8.79232 35.4168C13.5828 35.4168 17.5007 31.499 17.5007 26.7085V8.50016H14.334V26.7085C14.334 29.7872 11.871 32.2502 8.79232 32.2502C5.71365 32.2502 3.25065 29.7872 3.25065 26.7085V6.91683C3.25065 5.14877 4.64926 3.75016 6.41732 3.75016C8.18537 3.75016 9.58399 5.14877 9.58399 6.91683V23.5418C9.58399 23.9961 9.24664 24.3335 8.79232 24.3335C8.338 24.3335 8.00065 23.9961 8.00065 23.5418V8.50016H4.83398V23.5418C4.83398 25.7095 6.62464 27.5002 8.79232 27.5002C10.96 27.5002 12.7507 25.7095 12.7507 23.5418V6.91683C12.7507 3.43772 9.89643 0.583496 6.41732 0.583496Z" fill="#363333" fill-opacity="0.3"/>
            </svg>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              Send
              {/* <i className="fa fa-paper-plane"></i> */}
            </button>
          </div>
        </div>
          <Modal className="model_alert z" show={this.state.show}>
                    <Modal.Header >
                        <Modal.Title>Custom Offer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input class="form-control"  type="text" placeholder="Select your Fix" /> 
                      <div className="selectOrderCreate">

                    <select class="form-control" aria-label="Default select example">
                        <option selected>Delivery Days</option>
                        <option >24 hours</option>
                        <option >2 days</option>
                        <option >4 days</option>
                        <option >5 days</option>
                        <option >7 days</option>
                        <option >10 days</option>
                        <option >15 days</option>
                        <option >30 days</option>
                        <option >45 days</option>
                        <option >60 days</option>
                        <option >90 days</option>
                    </select>
                    <select class="form-control" aria-label="Default select example">
                        <option selected>Price</option>
                    </select>
                    </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" className="primaryDispute" onClick={this.createCustomOffer}  >
                             Submit Offer
                        </Button>
                    </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
