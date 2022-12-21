/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-18
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.0.3
*/

/*
* @description: Contains some multitudes of methodes to manages dates and times.
* @type: DateTime
*/
export default class DateTime {
    /*
    * @description: Returns the current datetime system.
    * @return: String
    */
    static get_datetime = () => {
        // Gets the current date time system.
        let datetime = new Date (), parts = [String (''), datetime.getDate (), datetime.getFullYear (), datetime.getHours (), datetime.getMinutes ()];
        // Determinates the real date month.
		switch (datetime.getMonth () + 1) {
            // January.
            case 1:
                parts[0] = "January";
                break;
            // Febuary.
            case 2:
                parts[0] = "Febuary";
                break;
            // March.
            case 3:
                parts[0] = "March";
                break;
            // April.
            case 4:
                parts[0] = "April";
                break;
            // May.
            case 5:
                parts[0] = "May";
                break;
            // June.
            case 6:
                parts[0] = "June";
                break;
            // July.
            case 7:
                parts[0] = "July";
                break;
            // August.
            case 8:
                parts[0] = "August";
                break;
            // September.
            case 9:
                parts[0] = "September";
                break;
            // October.
            case 10:
                parts[0] = "October";
                break;
            // November.
            case 11:
                parts[0] = "November";
                break;
            // December.
            case 12:
                parts[0] = "Décember";
                break;
            // Unknown month.
            default:
                parts[0] = "--------";
                break;
        }
        // Returns the final result.
        return (parts[0] + ' ' + parts[1] + ", " + parts[2] + ' ' + parts[3] + ':' + parts[4]);
    }
}
