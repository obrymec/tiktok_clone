/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-15
* @updated: 2022-09-19
* @framework: React
* @author: Obrymec
* @version: 0.1.1
*/

// Dependencies.
import Profil1 from "../assets/images/profil_1.jpeg";
import Profil7 from "../assets/images/profil_7.jpeg";
import Profil2 from "../assets/images/profil_2.gif";
import Profil3 from "../assets/images/profil_3.jpg";
import Profil4 from "../assets/images/profil_4.jpg";
import Profil5 from "../assets/images/profil_5.jpg";
import Profil6 from "../assets/images/profil_6.jpg";
import Profil8 from "../assets/images/profil_8.jpg";
import Profil9 from "../assets/images/profil_9.jpg";
import ChatMessagesHeader from "./msgheader.jsx";
import ChatMessageEditor from "./msgeditor.jsx";
import DateTime from "../libs/datetime.js";
import Contacts from "./contacts.jsx";
import ChatContext from "./chat.jsx";
import lodash from "lodash";
import React from "react";
import "../css/body.css";

/*
* @description: Creates application body view.
* @type: UI
*/
export default class Body extends React.PureComponent {
	/*
    * @description: Builds view instance.
    * @parameters:
    *   -> Object props: Contains class properties.
    * @return: void
    */
	constructor (props) {
		// Calls the parent constructor.
		super (props);
		// Global attributes.
        this.chat_context = React.createRef ();
		this.state = {
            active_index: 0,
            chats: [
                {
                    label: "This message isn't...",
                    name: "Lumia Noella",
                    date: "9/3/2022",
                    profil: Profil2,
                    data: [
                        {
                            datetime: "August 21, 2022 19:45",
                            messages: [
                                {is_contact: true, text: "Hi"},
                                {is_contact: true, text: "How are you ?"},
                                {is_contact: false, text: "Good morning"},
                                {is_contact: false, text: "I'm fine, thanks !"},
                                {is_contact: true, text: "Super"},
                                {is_contact: true, text: "Have you finish to do yours packs ?"},
                                {is_contact: false, text: "Not again"},
                                {is_contact: false, text: "I'm making that."},
                                {is_contact: true, text: "Alright"}
                            ]
                        },
                        {
                            datetime: "August 22, 2022 06:11",
                            messages: [
                                {is_contact: true, text: "Hi"},
                                {is_contact: true, text: "I'm waiting for you."},
                                {is_contact: true, text: "Please, try to make that quickly."},
                                {is_contact: false, text: "Good morning"},
                                {is_contact: false, text: "Received message 5/5"},
                                {is_contact: true, text: "Good"},
                                {is_contact: false, text: "See you later"},
                            ]
                        }
                    ]
                },
                {
                    label: "Shared a video",
                    name: "Yaya de Lille",
                    date: "9/13/2022",
                    profil: Profil3,
                    data: [
                        {
                            datetime: "August 21, 2022 20:00",
                            messages: [
                                {is_contact: true, text: "Message 1"},
                                {is_contact: false, text: "Message 2"},
                                {is_contact: false, text: "Message 3"}
                            ]
                        }
                    ]
                },
                {
                    label: "This message isn't...",
                    name: "Reina Cru Ella",
                    date: "9/11/2022",
                    profil: Profil4,
                    data: [
                        {
                            datetime: "August 22, 2022 00:56",
                            messages: [
                                {is_contact: true, text: "Message 1"},
                                {is_contact: false, text: "Message 2"},
                                {is_contact: false, text: "Message 3"}
                            ]
                        }
                    ]
                        
                },
                {
                    label: "Ok compris",
                    name: "Aicha Kone",
                    date: "9/11/2022",
                    profil: Profil5,
                    data: [
                        {
                            datetime: "September 3, 2022 18:29",
                            messages: [
                                {is_contact: true, text: "Message 1"},
                                {is_contact: false, text: "Message 2"},
                                {is_contact: false, text: "Message 3"}
                            ]
                        }
                    ]
                },
                {
                    label: "This message isn't...",
                    name: "Alice Eli",
                    date: "9/11/2022",
                    profil: Profil6,
                    data: [
                        {
                            datetime: "September 11, 2022 09:15",
                            messages: [
                                {is_contact: true, text: "Message 1"},
                                {is_contact: false, text: "Message 2"},
                                {is_contact: false, text: "Message 3"}
                            ]
                        }
                    ]
                },
                {
                    label: "Shared a photo",
                    name: "Eric Miller",
                    date: "9/12/2022",
                    profil: Profil7,
                    data: [
                        {
                            datetime: "Febuary 7, 2021 11:11",
                            messages: [
                                {is_contact: true, text: "Message 1"},
                                {is_contact: false, text: "Message 2"},
                                {is_contact: false, text: "Message 3"}
                            ]
                        }
                    ]
                },
                {
                    label: "This message isn't...",
                    name: "Steven Jonathan",
                    date: "10/8/2022",
                    profil: Profil8,
                    data: [
                        {
                            datetime: "March 19, 2022 16:03",
                            messages: [
                                {is_contact: true, text: "Message 1"},
                                {is_contact: false, text: "Message 2"},
                                {is_contact: false, text: "Message 3"}
                            ]
                        }
                    ]
                },
                {
                    label: "This message was...",
                    date: "13/10/2022",
                    name: "Edwardo",
                    profil: Profil9,
                    data: [
                        {
                            datetime: "December 25, 2022 00:05",
                            messages: [
                                {is_contact: true, text: "Message 1"},
                                {is_contact: false, text: "Message 2"},
                                {is_contact: false, text: "Message 3"}
                            ]
                        }
                    ]
                }
            ]
        };
	}

    /*
    * @description: Sets active user contact index.
    * @parameters:
    *   -> int id: Contains the new value of index.
    * @return: void
    */
    __set_active_contact_index = new_index => this.setState ({active_index: new_index});

    /*
    * @description: Sends a written message to another connected user.
    * @parameters:
    *   -> String datetime: What the current datetime for message to send ?
    *   -> bool is_contact: Is it from the main user or his contact ?
    *   -> String message: Contains the message to be sent.
    * @return: void
    */
    __send_message = (datetime, is_contact, message) => {
        // Gets chats data.
        let chats = lodash.cloneDeep (this.state.chats), today = (datetime.split (',')[0] + ", " + new Date ().getFullYear ());
        // Gets chat datetime index.
        let index = chats[this.state.active_index].data.findLastIndex (item => {
            // Returns the imposed constraint.
            return ((item.datetime.split (',')[0] + ", " + new Date ().getFullYear ()) === today);
        });
        // The given datetime is it defined ?
        if (index > -1) chats[this.state.active_index].data[index].messages.push ({is_contact: is_contact, text: message});
        // Adds the current message with the given datetime for today.
        else chats[this.state.active_index].data.push ({datetime: DateTime.get_datetime (), messages: [{is_contact: is_contact, text: message}]});
        // Updates the global state.
        this.setState ({chats: chats});
        // Moves the scrollbar at the full bottom.
        setTimeout (() => this.chat_context.current.scroll_to_bottom (), 100);
    }

	/*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
	render = () => <div className = "chat-workspace">
        {/* Global container */}
        <br/><div className = "chat-container">
            {/* Left arrow container */}
            <div className = "left-arrow" title = "Back to the previous page.">
                {/* Vector image */}
                <svg viewBox = "0 0 24 24" width = "24px" height = "24px" fill = "#343434">
                    <polygon fillRule = "evenodd" points = {`6.414 13 12.707 19.293 11.293 
                    20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13`}/>
                </svg>
            </div>
            {/* Availables users contacts */}
            <Contacts onSettings = {() => this.props.onSettings ()} chatContext = {this.chat_context.current} contacts = {this.state.chats}
                setIndex = {this.__set_active_contact_index}/>
            {/* Messages worksapce */}
            <div className = "messages-workspace">
                {/* Messages header container */}
                <ChatMessagesHeader contact = {this.state.chats[this.state.active_index]}/>
                {/* Chat context */}
                <ChatContext chats = {this.state.chats[this.state.active_index].data} userProfil = {Profil1}
                    contactProfil = {this.state.chats[this.state.active_index].profil} ref = {this.chat_context}/>
                {/* Message editor */}
                <ChatMessageEditor sendMessage = {this.__send_message}/>
            </div>
        </div>
    </div>;
}
