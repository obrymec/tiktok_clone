/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-15
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.0.3
*/

// Dependencies.
import "../css/contact.css";
import React from "react";

/*
* @description: Builds a user contact view.
* @parameters:
*   -> Object props: Contains component data configurations (Read Only).
* @return: JSXObject
*/
export default function Contact (props) {
    // Creates a reference of user contact.
    let contact_reference = React.createRef ();
    // Builds this component by using JSX formatting.
	return <div ref = {contact_reference} className = "guest-contact" onClick = {() => props.onPressed (contact_reference.current, props.id)}>
        {/* Guest icon */}
        <div className = "guest-profil"><img src = {props.profil} width = "48px" height = "48px" alt = ''/></div>
        {/* Guest data */}
        <div className = "guest-data">
            {/* Guest name */}
            <div className = "guest-name"><label><strong>{props.name}</strong></label></div>
            {/* Bottom data */}
            <div className = "bottom-data">
                {/* Chat label */}
                <div className = "chat-label"><label>{props.label}</label></div>
                {/* Message date */}
                <div className = "msg-date"><label>{props.date}</label></div>
            </div>
        </div>
    </div>;
}
