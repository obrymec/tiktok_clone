/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-17
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.0.4
*/

// Dependencies.
import RightChat from "../components/rchat.jsx";
import LeftChat from "../components/lchat.jsx";
import "../css/msgcontext.css";
import React from "react";

/*
* @description: Builds chat messages context view.
* @type: UI
*/
export default class ChatContext extends React.PureComponent {
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
        this.container = React.createRef ();
    }

    /*
    * @description: Moves the scrollbar at the bottom of the chat message data.
    * @return: void
    */
    scroll_to_bottom = () => this.container.current.scrollTop = this.container.current.scrollHeight;

    /*
    * @description: Called when this component comes to mount into app view.
    * @return: void
    */
    componentDidMount = () => this.scroll_to_bottom ();

    /*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
	render = () => <div className = "active-guest-messages" ref = {this.container}>
        {/* Chat datetime representation */}
        {this.props.chats.map ((item, index) => <div className = "chat-datetime" key = {index}>
            {/* Label date */}
            <div className = "msg-date" align = "center"><label>{item.datetime}</label></div>
            {/* Chat message for the selected user contact */}
            <div className = "chat-msg-user-contact">
                {/* Building all submitted message between the connected user and his contact */}
                {item.messages.map ((elmt, pos) => (elmt.is_contact ?
                    // Left chat message data building.
                    <LeftChat key = {pos} text = {elmt.text} top = {((pos > 0 && item.messages[(pos - 1)].is_contact) ? 0 : 15)}
                        profil = {((pos > 0 && item.messages[(pos - 1)].is_contact) ? null : this.props.contactProfil)}
                        bottom = {((pos < (item.messages.length - 1) && item.messages[(pos + 1)].is_contact) ? 5 : 15)}
                    /> :
                    // Right chat message data building.
                    <RightChat key = {pos} text = {elmt.text} top = {((pos > 0 && !item.messages[(pos - 1)].is_contact) ? 0 : 15)}
                        bottom = {((pos < (item.messages.length - 1) && !item.messages[(pos + 1)].is_contact) ? 5 : 15)}
                        profil = {((pos > 0 && !item.messages[(pos - 1)].is_contact) ? null : this.props.userProfil)}
                    />)
                )}
            </div>
        </div>)}
    </div>;
}
