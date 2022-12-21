/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-17
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.0.2
*/

// Dependencies.
import "../css/msgheader.css";
import React from "react";

/*
* @description: Builds the selected user contact for chat messages.
* @type: UI
*/
export default class ChatMessagesHeader extends React.PureComponent {
    /*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
	render = () => <div className = "chat-messages-header">
        {/* Active user chat contact container */}
        <div className = "active-user-contact">
            {/* Active user contact image */}
            <div className = "active-user-profil"><img src = {this.props.contact.profil} width = "48px" height = "48px" alt = ''/></div>
            {/* Active user contact data */}
            <div className = "active-user-data">
                {/* Active guest name */}
                <div className = "active-username"><label><strong>{this.props.contact.name}</strong></label></div>
                {/* Active guest label */}
                <div className = "active-user-label"><label>@{this.props.contact.name}</label></div>
            </div>
        </div>    
    </div>;
}
