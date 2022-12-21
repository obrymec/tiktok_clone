/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-14
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.1.8
*/

// Dependencies.
import ProfilImage from "../assets/images/profil_1.jpeg";
import LoopIcon from "../assets/images/loop.svg";
import Menu from "../components/menu.jsx";
import "../css/header.css";
import React from "react";

/*
* @description: Creates application header bar view.
* @type: UI
*/
export default class Header extends React.PureComponent {
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
        this.field = React.createRef ();
        this.menu = React.createRef ();
		this.state = {
            show_suggestions: false,
            suggestions: [
                {left_icon: LoopIcon, text: "hellodelu974", on_select: ref => this.__on_select (ref.get_text ())},
                {left_icon: LoopIcon, text: "hello house", on_select: ref => this.__on_select (ref.get_text ())},
                {left_icon: LoopIcon, text: "hello songs", on_select: ref => this.__on_select (ref.get_text ())},
                {left_icon: LoopIcon, text: "hellokitty", on_select: ref => this.__on_select (ref.get_text ())},
                {left_icon: LoopIcon, text: "hello guys", on_select: ref => this.__on_select (ref.get_text ())},
                {left_icon: LoopIcon, text: "hellofresh", on_select: ref => this.__on_select (ref.get_text ())},
                {left_icon: LoopIcon, text: "helloxh", on_select: ref => this.__on_select (ref.get_text ())},
                {left_icon: LoopIcon, text: "hello", on_select: ref => this.__on_select (ref.get_text ())}
            ]
        }
    }

    /*
    * @description: Called when search input value changed.
    * @parameters:
    *   -> InputEvent event: Contains the current input event object reference.
    * @return: void
    */
    __on_input_value_changed = event => this.menu.current.search_item (event.target.value);

    /*
    * @description: Called when a search is done.
    * @parameters:
    *   -> Array results: Contains the results search.
    * @return: void
    */
    __on_search = results => this.setState ({show_suggestions: results.length > 0});

    /*
    * @description: Called when the clear button is pressed.
    * @return: void
    */
    __on_clear_search_field = () => {
        // Clears input search field.
        this.field.current.value = String ('');
        // Makes a search with an empty id.
        this.menu.current.search_item (this.field.current.value);
    }

    /*
    * @description: Called when any suggestion is pressed.
    * @return: void
    */
    __on_select = value => {
        // Hide suggestions.
        this.setState ({show_suggestions: false});
        // Updates search input field.
        this.field.current.value = value;
    }

	/*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
	render = () => <div className = "global-header">
		{/* Tiktok image */}
        <div className = "tiktok-img">
            {/* Vector representation */}
            <svg viewBox = "0 0 512 512" width = "32px" height = "32px">
                <path className = "tiktok-1" d = {`M415.27,214.69V146.55c-89.08-3.75-91.89-84.69-92-92.3v-.57H254.49V319.06h0a54.5,
                54.5,0,1,1-38.64-52.18V196.59A123.49,123.49,0,1,0,323.43,319.06c0-1.73-.05-3.45-.12-5.16V183.22C355,212.22,
                415.27,214.69,415.27,214.69Z`}/><path d = {`M435.54,231.47V163.33c-89.08-3.76-91.89-84.7-92-92.3v-.58H274.76V335.84h0a54.54,
                54.54,0,1,1-38.64-52.18V213.37A123.49,123.49,0,1,0,343.7,335.84c0-1.73-.05-3.45-.12-5.16V200C375.28,229,
                435.54,231.47,435.54,231.47Z`}/><path className = "tiktok-2" d = {`M325,70.45c3.32,18.07,13,
                46.34,41.28,62.87-21.6-25.15-22.7-57.61-22.74-62.29v-.58Z`}/><path className = "tiktok-2" d = {`M435.54,231.47V163.33a127.94,
                127.94,0,0,1-20.27-2.42v53.66s-60.26-2.47-92-31.46V313.78c.07,1.72.12,3.43.12,5.16a123.49,123.49,0,0,1-191.9,102.81A123.48,
                123.48,0,0,0,343.7,335.84c0-1.73-.05-3.45-.12-5.16V200C375.28,229,435.54,231.47,435.54,231.47Z`}/>
                <path className = "tiktok-2" d = {`M215.85,266.76a54.56,54.56,0,0,0-39.63,101.31,54.54,54.54,0,0,1,59.9-84.41V213.37a124.69,
                124.69,0,0,0-15.91-1c-1.46,0-2.91,0-4.36.09Z`}/>
            </svg>
            {/* Tiktok text representation */}
            <div className = "tiktok-text"><label><strong>TikTok</strong></label></div>
        </div>
        {/* Search container */}
        <div className = "searcher" title = "Search something here.">
            {/* Input representation */}
            <input type = "text" placeholder = "Search accounts and videos" onChange = {this.__on_input_value_changed} ref = {this.field}/>
            {/* Menu dropdown suggestions */}
            <div className = "menu-dropdown" style = {{display: (this.state.show_suggestions ? "inline-block" : "none")}}>
                {/* Draw menu dropdown */}
                <Menu data = {{data: this.state.suggestions, on_search: this.__on_search}} ref = {this.menu}/>
            </div>
            {/* Clear icon section */}
            <div className = "clear-icon" title = "Clear the given value.">
                {/* Vector representation */}
                <svg viewBox = "0 0 512 512" width = "18px" height = "18px" fill = "silver">
                    <g><path d = {`M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,
                    379.7,33,256,33z M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,
                    2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8 l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,
                    0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76 l-75.9-75c-3.1-3.1-3.1-8.2,
                    0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7 c1.5-1.5,3.5-2.3,5.6-2.3c2.1,
                    0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z`}/></g>
                </svg>
            </div>
            {/* Icon seacher section */}
            <div className = "searcher-icon">
                {/* Vector representation */}
                <svg viewBox = "0 0 32 32" width = "22px" height = "22px" fill = "silver" onClick = {() => this.field.current.value = String ('')}>
                    <g><path d = {`M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,
                    28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z`}/></g>
                </svg>
            </div>
        </div>
        {/* Right data */}
        <section className = "right-data">
            {/* Upload button */}
            <div className = "upload-btn" title = "Send something.">
                {/* Add icon container */}
                <div className = "add-icon">
                    {/* Vector representation */}
                    <svg viewBox = "0 0 32 32" width = "24px" height = "24px" fill = "#343434">
                        <g><line className = "plus" x1 = "16" x2 = "16" y1 = '7' y2 = "25"/>
                        <line className = "plus" x1 = '7' x2 = "25" y1 = "16" y2 = "16"/></g>
                    </svg>
                </div>
                {/* Text representation */}
                <div className = "upload-text"><label><strong>Upload</strong></label></div>
            </div>
            {/* Mail icon representation */}
            <div className = "mail-icon">
                {/* Vector representation */}
                <svg viewBox = "0 0 24 24" width = "32px" height = "32px" fill = "#343434">
                    <g><path d = {`M21.5,11.1l-17.9-9C2.7,1.7,1.7,2.5,2.1,3.4l2.5,6.7L16,12L4.6,13.9l-2.5,6.7c-0.3,0.9,0.6,
                    1.7,1.5,1.2l17.9-9 C22.2,12.5,22.2,11.5,21.5,11.1z`}/></g>
                </svg>
            </div>
            {/* Minus icon representation */}
            <div className = "minus-icon">
                {/* Vector representation */}
                <svg viewBox = "0 0 15 15" fill = "none" height = "26px" width = "26px">
                    <path d = {`M5.5 11.4928L5.91594 11.2154C5.8232 11.0763 5.66712 10.9928 5.5 10.9928V11.4928ZM7.5 14.4909L7.08406 
                    14.7683C7.1768 14.9074 7.33288 14.9909 7.5 14.9909C7.66712 14.9909 7.8232 14.9074 7.91594 14.7683L7.5 
                    14.4909ZM9.5 11.4928V10.9928C9.33288 10.9928 9.1768 11.0763 9.08406 11.2154L9.5 11.4928ZM5.08406 11.7703L7.08406 
                    14.7683L7.91594 14.2134L5.91594 11.2154L5.08406 11.7703ZM7.91594 14.7683L9.91594 11.7703L9.08406 11.2154L7.08406 
                    14.2134L7.91594 14.7683ZM9.5 11.9928H13.5V10.9928H9.5V11.9928ZM13.5 11.9928C14.3288 11.9928 15 11.3226 15 
                    10.4935H14C14 10.7697 13.7772 10.9928 13.5 10.9928V11.9928ZM15 10.4935V1.49935H14V10.4935H15ZM15 1.49935C15 
                    0.670259 14.3288 0 13.5 0V1C13.7772 1 14 1.22316 14 1.49935H15ZM13.5 0H1.5V1H13.5V0ZM1.5 0C0.671165 0 0 0.670259 
                    0 1.49935H1C1 1.22316 1.22283 1 1.5 1V0ZM0 1.49935V10.4935H1V1.49935H0ZM0 10.4935C0 11.3226 0.671165 11.9928 1.5 
                    11.9928V10.9928C1.22284 10.9928 1 10.7697 1 10.4935H0ZM1.5 11.9928H5.5V10.9928H1.5V11.9928ZM5 7H10V6H5V7Z`} fill = "#343434"/>
                </svg>
            </div>
            {/* User profil representation */}
            <div className = "user-profil" title = "My profil."><img src = {ProfilImage} width = "44px" height = "44px" alt = ''/></div>
        </section>
	</div>;
}
