/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-19
* @updated: 2022-09-19
* @framework: React
* @author: Obrymec
* @version: 0.0.1
*/

// Dependencies.
import "../css/msgsettings.css";
import React from "react";

/*
* @description: Builds a modal that contains message settings.
* @type: UI
*/
export default class MessagesSettings extends React.PureComponent {
    /*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
	render = () => <div className = "msg-settings-bg">
        {/* Modal representation */}
        <div className = "msg-settings-modal">
            {/* Messages header */}
            <div className = "msg-settings-header">
                {/* Main title */}
                <div className = "msg-set-title"><label>Messages settings</label></div>
                {/* Close icon container */}
                <div className = "close-icon" title = "Close." onClick = {() => this.props.onClosed ()}>
                    {/* Vector representation */}
                    <svg viewBox = "0 0 32 32" width = "24px" height = "24px" fill = "#343434">
                        <g><line className = "closer" x1 = '7' x2 = "25" y1 = '7' y2 = "25"/>
                        <line className = "closer" x1 = '7' x2 = "25" y1 = "25" y2 = '7'/></g>
                    </svg>
                </div>
            </div>
            {/* Message content */}
            <div className = "settings-content">
                {/* Title */}
                <div className = "cnt-title-text"><label><strong>Who can send you direct messages</strong></label></div>
                {/* Details section*/}
                <div className = "cnt-details-text">
                    {/* Help text */}
                    <label>With any option, you cant receive from users that you've sent messages to. Friends are your
                    followers that you follow back.</label>
                </div><br/>
                {/* Friends option */}
                <div className = "friends-option">
                    <input type = "radio" name = "choice" id = "fopt" value = "friends"/><label htmlFor = "fopt">Friends</label>
                </div><br/>
                {/* No one option */}
                <div className = "noone-option">
                    <input type = "radio" name = "choice" id = "nopt" value = "no-one"/><label htmlFor = "nopt">No one</label>
                </div>
            </div><br/>
            {/* Buttons section */}
            <div className = "buttons-section">
                {/* Cancel button */}
                <button id = "cancel-button" title = "Cancel." onClick = {() => this.props.onClosed ()}>Cancel</button>
                {/* Save button */}
                <button id = "save-button" title = "Save.">Save</button>
            </div>
        </div>
    </div>;
}
