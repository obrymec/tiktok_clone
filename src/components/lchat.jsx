/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-16
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.0.2
*/

// Dependencies.
import "../css/lchat.css";
import React from "react";

/*
* @description: Builds a chat message for the current connected user.
* @parameters:
*   -> Object props: Contains component data configurations (Read Only).
* @return: JSXObject
*/
export default function LeftChat (props) {
    // Builds this component by using JSX formatting.
    return <div className = "left-chat-msg" style = {{marginTop: (props.top + "px"), marginBottom: (props.bottom + "px")}}>
        {/* Guest profil */}
        <div className = "user-profil">{typeof props.profil === "string" && <img src = {props.profil} width = "32px" height = "32px" alt = ''/>}</div>
        {/* Chat message data */}
        <div className = "chat-msg-data"><label id = "chat-text">{props.text}</label></div>
    </div>;
}
