/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-07-06
* @updated: 2022-09-21
* @framework: React
* @author: Obrymec
* @version: 0.1.4
*/

// Dependencies.
import Strings from "../libs/strings.js";
import Tools from "../libs/std.js";
import "../css/option.css";
import React from "react";
import $ from "jquery";

/*
* @description: Creates a simple menu option into the DOM.
* @type: UI
*/
export default class MenuOption extends React.PureComponent {
    /*
    * @description: Builds an option object reference.
    * @parameters:
    *   -> Object props: Contains class properties.
    * @return: void
    */
    constructor (props) {
        // Calls the parent constructor.
        super (props);
        // Attributes.
        this.supported_formats = [".png", ".jpg", ".jpeg", ".ico", ".svg"];
        this.disabled = false;
        this.container = null;
        this.option = null;
        this.ltext = null;
        this.rtext = null;
        this.licon = null;
        this.ricon = null;
        this.licnt = null;
        this.ricnt = null;
    }

    /*
    * @description: Returns path of any icon.
    * @parameters:
    *   -> ImageTagElement icon: Contains an icon tag reference.
    * @return: String
    */
    __get_icon_path = (icon, label) => (!Tools.is_empty (icon) ? $ (icon).attr ("src") : (label != null ? $ (label).html () : null));

    /*
    * @description: Changes the right icon.
    * @parameters:
    *   -> String icon_path: What is the new icon path access ?
    * @return: void
    */
    set_right_icon = icon_path => this.__set_icon (icon_path, this.ricon, 18, this.ricnt);

    /*
    * @description: Changes the left icon.
    * @parameters:
    *   -> String icon_path: What is the new icon path access ?
    * @return: void
    */
    set_left_icon = icon_path => this.__set_icon (icon_path, this.licon, 18, this.licnt);

    /*
    * @description: Returns right icon path.
    * @return: String
    */
    get_right_icon_path = () => this.__get_icon_path (this.ricon, this.rtext);

    /*
    * @description: Returns left icon path.
    * @return: String
    */
    get_left_icon_path = () => this.__get_icon_path (this.licon, this.ltext);

    /*
    * @description: Returns title value.
    * @return: String
    */
    get_title = () => $ (this.container).attr ("title");

    /*
    * @description: Returns option text.
    * @return: String
    */
    get_text = () => $ (this.option).html ();

    /*
    * @description: Returns the passed entries to component "data" tag.
    * @return: Object
    */
    get_entries = () => this.props.data;

    /*
    * @description: Returns option state.
    * @return: bool
    */
    is_enabled = () => !this.disabled;

    /*
    * @description: Called when option is pressed.
    * @return: void
    */
    __on_select = () => {
        // Checks option state.
        if (!this.disabled && typeof this.props.data.on_select === "function") this.props.data.on_select (this);
    }

    /*
    * @description: Returns component internal properties state.
    * @return: Object
    */
    get_data = () => ({
        supported_formats: this.supported_formats, right_container: this.ricnt, left_container: this.licnt, container: this.container,
        option_text: this.option, right_text: this.rtext, right_icon: this.ricon, left_text: this.ltext, left_icon: this.licon
    });

    /*
    * @description: Changes title value.
    * @parameters:
    *   -> String title: What is the new title value ?
    * @return: void
    */
    set_title = title => {
        // Checks the passed value.
        if (typeof title === "string" && !Tools.is_empty (title)) $ (this.container).attr ("title", title);
        // Error message.
        else console.error ("Invalid title value type !");
    }

    /*
    * @description: Changes option text.
    * @parameters:
    *   -> String value: What is the new option text ?
    * @return: void
    */
    set_text = text => {
        // Checks the passed value.
        if (typeof text === "string" && !Tools.is_empty (text)) $ (this.option).html (text);
        // Otherwise.
        else console.error ("Invalid text value type !");
    }

    /*
    * @description: Changes an icon value.
    * @parameters:
    *   -> String icon: What is the new icon path ?
    * @return: void
    */
    __set_icon = (path, icon, size, container) => {
        // Gets symbol extension.
        let format = Strings.get_file_extension (path);
        // Checks the passed icon value.
        if (this.supported_formats.indexOf (format) > -1) {
            // No image defined ?
            if (Tools.is_empty (icon)) {
                // Changes container content.
                $ (container).html ("<img src = '" + path + "' width = '" + size + "px' height = '" + size + "px'/>");
                // Adds "option-icon-data" class to container.
                $ (container).removeClass ("option-icon-data").addClass ("option-icon-data");
            // Otherwise.
            } else $ (icon).attr ("src", path);
        // Changes container html content structure and destroys "option-icon-data" class from container.
        } else $ (container).html ("<label>" + path + "</label>").removeClass ("option-icon-data");
    }

    /*
    * @description: Enables/Disables option for any handling.
    * @parameters:
    *   -> bool enabled: Should us enabled or disabled option ?
    * @return: void
    */
    enabled = enabled => {
        // Checks value type.
        if (typeof enabled === "boolean") {
            // Checks the passed value.
            if (!enabled) {
                // Throwns "disabled" event.
                if (typeof this.props.data.on_disabled === "function") this.props.data.on_disabled (this);
                // Disables interactions.
                $ (this.container).removeClass ("option-disabled").addClass ("option-disabled");
                // Updates "disabled" variable.
                this.disabled = true;
                // Otherwise.
            } else {
                // Throwns "enabled" event.
                if (typeof this.props.data.on_enabled === "function") this.props.data.on_enabled (this);
                // Enables interactions.
                $ (this.container).removeClass ("option-disabled");
                // Updates "disabled" variable.
                this.disabled = false;
            }
        // Otherwise.
        } else console.error ("Invalid value type. This method parameter must be a boolean.");
    }

    /*
    * @description: Corrects the passed component data.
    * @return: Object
    */
    __correct_data = () => {
        // Gets component properties.
        let data = (!Array.isArray (this.props.data) && typeof this.props.data === "object") ? this.props.data : {};
        // Corrects the passed right icon.
        data.right_icon = (typeof data.right_icon === "string" && !Tools.is_empty (data.right_icon) ? data.right_icon : null);
        // Corrects the passed left icon.
        data.left_icon = (typeof data.left_icon === "string" && !Tools.is_empty (data.left_icon) ? data.left_icon : null);
        // Checks right icon extension.
        data.is_right_ok = (this.supported_formats.indexOf (Strings.get_file_extension (data.right_icon)) > -1);
        // Checks left icon extension.
        data.is_left_ok = (this.supported_formats.indexOf (Strings.get_file_extension (data.left_icon)) > -1);
        // Gets id.
        data.id = (!Tools.is_empty (data.id) ? data.id : parseInt (Math.random () * 1000000000));
        // Gets title.
        data.title = (typeof data.title === "string" ? data.title.trim () : String (''));
        // Gets text.
        data.text = (typeof data.text === "string" ? data.text.trim () : String (''));
        // Gets state.
        data.disabled = (typeof data.disabled === "boolean" ? data.disabled : false);
        // Returns the final result.
        return data;
    }

    /*
    * @description: Called when this component is loaded and ready to use.
    * @return: void
    */
    componentDidMount = () => {
        // Gets text tag reference.
        this.option = document.querySelector ("div#opt-txt-" + this.props.data.id + " > label");
        // Gets the left text tag reference.
        this.rtext = document.querySelector ("div#opt-rt-" + this.props.data.id + " > label");
        // Gets the right text tag reference.
        this.ltext = document.querySelector ("div#opt-lt-" + this.props.data.id + " > label");
        // Gets left icon tag reference.
        this.licon = document.querySelector ("div#opt-lt-" + this.props.data.id + " > img");
        // Gets right icon tag reference.
        this.ricon = document.querySelector ("div#opt-rt-" + this.props.data.id + " > img");
        // Gets global container tag reference.
        this.container = document.querySelector ("div#opt-" + this.props.data.id);
        // Gets left icon container.
        this.licnt = document.querySelector ("div#opt-lt-" + this.props.data.id);
        // Gets right icon container.
        this.ricnt = document.querySelector ("div#opt-rt-" + this.props.data.id);
        // Changes right icon.
        this.set_right_icon (this.props.data.right_icon);
        // Changes left icon.
        this.set_left_icon (this.props.data.left_icon);
        // Sets state.
        this.enabled (!this.props.data.disabled);
        // Changes option text.
        this.set_text (this.props.data.text);
    }

    /*
    * @description: Returns this component as JSX format.
    * @return: JSXObject
    */
    render = () => {
        // Gets the corrected form of the given component "data" property.
        const data = this.__correct_data ();
        // Returns the final result.
        return <div className = "menu-option" id = {("opt-" + data.id)} title = {data.title} onClick = {() => this.__on_select ()}>
            {/* Left icon */}
            {data.left_icon != null && <div className = {("option-left-icon " + (data.is_left_ok ? "option-icon-data" : ''))}
            id = {("opt-lt-" + data.id)}>
                {/* Contains the left icon data */}
                {(data.is_left_ok ? <img src = {data.left_icon} width = "14px" height = "14px" alt = {''}/> : <label>{data.left_icon}</label>)}
            </div>}
            {/* Text field */}
            {data.text.length > 0 && <div className = "option-text" id = {("opt-txt-" + data.id)}><label>{data.text}</label></div>}
            {/* Right icon */}
            {data.right_icon != null && <div className = {("option-right-icon " + (data.is_right_ok ? "option-icon-data" : ''))}
            id = {("opt-rt-" + data.id)}>
                {/* Contains the right icon data */}
                {(data.is_right_ok ? <img src = {data.right_icon} width = "18px" height = "18px" alt = {''}/> : <label>{data.right_icon}</label>)}
            </div>}
        </div>;
    }
}
