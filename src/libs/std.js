/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-18
* @updated: 2022-09-21
* @framework: React
* @author: Obrymec
* @version: 0.0.2
*/

/*
* @description: Contains some multitudes of methodes to manage common problems.
* @type: Tools
*/
export default class Tools {
    /*
    * @description: Checks whether a variable is empty or not.
    * @parameters:
    *   -> Any value: Contains a property's value.
    * @return: Boolean
    */
    static is_empty = value => {
        // For a basic value.
        if (value === null || value === undefined || value === String ('')) return true;
        // For String format.
        else if (typeof value === "string") {
            // Removes all spaces and converts it into lower case.
            value = value.trim ().toLowerCase ();
            // Some invalid values have been detected.
            if (value === "undefined" || value === "null" || value === "nan" || value.length <= 0) return true;
        // For an object.
        } else if (!Array.isArray (value) && typeof value === "object" && Object.keys (value).length <= 0) return true;
        // For an array.
        else if (Array.isArray (value) && value.length <= 0) return true;
        // For others case.
        else return false;
    }
}
