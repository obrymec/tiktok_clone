/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-18
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.0.2
*/

// Dependencies.
import Tools from "./std";

/*
* @description: Contains some multitudes of methodes to manage common strings algorithm.
* @type: Strings
*/
export default class Strings {
    /*
    * @description: Returns a file extension from his access path.
    * @parameters:
    *   -> String path: Contains a file path.
    * @return: String
    */
    static get_file_extension = path => {
        // Is it okay ?
        if (typeof path === "string") {
            // Removes left/right spaces and convert it into full lower case.
            path = path.trim ().toLowerCase ();
            // Checks the passed path.
            if (path.includes ('/') && path.includes ('.')) {
                // Corrects the passed path.
                path = path.split ('/');
                // Gets file name.
                path = path[(path.length - 1)];
                // Gets file parts.
                path = (!Tools.is_empty (path) ? (path.includes ('.') ? path.split ('.') : null) : null);
                // Gets file format.
                path = (path !== null ? path[(path.length - 1)] : null);
                // Returns the final result.
                return (path !== null ? (!Tools.is_empty (path) ? ('.' + path).toLowerCase () : null) : null);
            }
        }
        // Returns a nullable value for others cases.
        return null;
    }
}
