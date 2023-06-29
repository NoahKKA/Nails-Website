//Imports
import { Box } from "react-bootstrap-icons";
import BgImg from "../img/temp.jpg";

//Function
function MidImgLogo() {
    return (
        <body>
            <div className="py-10">
                <img
                    className=" my-2 py-25 mx-auto max-w-full "
                    src={BgImg}
                    alt="Logo"
                />
            </div>
            {/* <form id='Appointment' method='get'>
                <select id="session-type">
                    <option value>Select Appointment Type</option>
                </select>
            </form> */}
        </body>
    );
}

//export
export default MidImgLogo;
