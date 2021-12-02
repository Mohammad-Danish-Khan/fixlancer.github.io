import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import Avatar from "../chatList/Avatar";


export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <div className="content__header_left">
          <div className="blocks">
            <div className="current-chatting-user">
              <div className="chatList__search">
                <div className="search_wrap">
                  <input type="search" placeholder="Messages" required />
                  <button className="search-btn">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2Z" fill="#454343"/>
                  </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn"> */}
        {/* <i className="fa fa-plus"></i> */}
        {/* <span>New conversation</span> */}
        {/* </button> */}
        <div className="chatlist__heading">
          {/* <h2>Chats</h2> */}
          {/* <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button> */}
        </div>

        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
