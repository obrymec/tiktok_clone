/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-07-28
* @updated: 2022-09-21
* @framework: React
* @author: Obrymec
* @version: 0.0.8
*/

// Dependencies.
import MenuOption from "./option.jsx";
import Tools from "../libs/std.js";
import React from "react";
import "../css/menu.css";

/*
* @description: Creates a menu into the DOM.
* @type: UI
*/
export default class Menu extends React.PureComponent {
    /*
    * @description: Builds view instance.
    * @parameters:
    *   -> Object props: Contains class properties.
    * @return: void
    */
    constructor (props) {
        // Calls the parent constructor.
        super (props);
        // Attributes.
        this.virtual = [];
        this.state = {
            data: []
        };
    }

    /*
    * @description: Returns the passed entries to component "data" tag.
    * @return: Object
    */
    get_entries = () => this.props.data;

    /*
    * @description: Returns component internal properties state.
    * @return: Object
    */
    get_data = () => this.state.data;

    /*
    * @description: Returns the associated option reference from the menu.
    * @parameters:
    *   -> int index: Contains an option index.
    * @return: MenuOption
    */
    get_option_reference = index => {
        // Corrects the given index.
        index = ((typeof index === "number") ? parseInt (index) : null);
        // Checks index.
        if (index != null && index >= 0 && index < this.state.data.length) return this.state.data[index].ref;
        // Returns a nullable value.
        return null;
    }

    /*
    * @description: Corrects the passed component data.
    * @return: Object
    */
    __correct_data = () => {
        // Gets component properties.
        let data = (!Array.isArray (this.props.data) && typeof this.props.data === "object") ? this.props.data : {};
        // Gets dropdown id.
        data.id = (!Tools.is_empty (data.id) ? data.id : parseInt (Math.random () * 1000000000));
        // Corrects the given data.
        data.data = (Array.isArray (data.data) ? data.data : []);
        // Returns the final result.
        return data;
    }

    /*
    * @description: Removes the current item index from the menu.
    * @parameters:
    *   -> int index: Contains item index.
    * @return: void
    */
    remove_item = index => {
        // Checks the passed index value.
        if (typeof index === "number" && index >= 0 && index < this.state.data.length) {
            // Gets the current menu data.
            let menu_data = [...this.state.data];
            // Removes the passed item index.
            menu_data = menu_data.filter ((item, idx) => idx !== index);
            // Updates the real data.
            this.setState ({data: menu_data});
            // Updates virtual menu data.
            this.virtual = menu_data;
        }
    }

    /*
    * @description: Adds an item into the menu.
    * @parameters:
    *   -> Object data: Contains an option data.
    * @return: void
    */
    add_item = data => {
        // Checks data type.
        if (!Array.isArray (data) && typeof data === "object") {
            // Gets the current menu data.
            let menu_data = [...this.state.data];
            // Adds the current item.
            menu_data.push (data);
            // Updates the real data.
            this.setState ({data: menu_data});
            // Updates virtual menu data.
            this.virtual = menu_data;
        // Otherwise.
        } else console.error ("Invalid data type !");
    }

    /*
    * @description: Builds only options that contains the passed value.
    * @parameters:
    *   -> int | String value: Contains a value.
    * @return: void
    */
    search_item = value => {
        // Contains the final result.
        let menu_data = [];
        // Checks value type.
        if (!Tools.is_empty (value) && (typeof value === "number" || typeof value === "string")) {
            // Gets the current menu data.
            menu_data = [...this.virtual];
            // Removes unused option.
            menu_data = menu_data.filter ((item, idx) => {
                // Clones the current item data.
                let opt = {...item};
                // Gets item key.
                opt.text = ((opt.hasOwnProperty ("text") && typeof opt.text === "string" && opt.text.trim ().length > 0)
                    ? opt.text.toLowerCase ().trim () : null);
                // Searches option key.
                let skey = (opt.text != null && typeof value === "string" && value.trim ().length > 0
                    && opt.text.includes (value.toLowerCase ().trim ()));
                // Searches option index.
                let sidx = (typeof value === "number" && parseInt (value) === idx);
                // Checks search conditions.
                return (skey || sidx);
            });
            // Updates the global menu data.
            this.setState ({data: menu_data});
        // Gets old menu data.
        } else this.setState ({data: [...this.virtual]});
        // Calls "on_search" event for any user search.
        if (typeof this.props.data.on_search === "function") this.props.data.on_search (menu_data);
    }

    /*
    * @description: Called when this component is loaded and ready to use.
    * @return: void
    */
    componentDidMount = () => {
        // Checks the given data.
        if (Array.isArray (this.props.data.data)) {
            // Contains the final result.
            let menu_data = [];
            // Generating option reference.
            for (let idx = 0; idx < this.props.data.data.length; idx++) {
                // Gets the current data.
                let item_data = this.props.data.data[idx];
                // Adds item reference to the current item data.
                item_data.ref = React.createRef ();
                // Adds the current data to the final result.
                menu_data.push (item_data);
            }
            // Updates real menu data.
            this.setState ({data: [...menu_data]});
            // Updates virtual menu data.
            this.virtual = [...menu_data];
        }
    }

    /*
    * @description: Returns this component as JSX format.
    * @return: JSXObject
    */
    render = () => {
        // Gets the corrected form of the given component "data" property.
        const data = this.__correct_data ();
        // Returns the final result.
        return <div className = "menu" id = {("meu-" + data.id)}>
            {/* Generating menu options */}
            {this.state.data.map ((item, index) => !Array.isArray (item) && typeof item === "object" &&
                <div className = "menu-item" key = {index}>
                    {/* Creates a menu option */}
                    <MenuOption data = {item} key = {index} ref = {this.state.data[index].ref}/>
                </div>
            )}
        </div>
    }
}
