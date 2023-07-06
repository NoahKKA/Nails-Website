//Imports
import BgImg from "../assets/images/Logo1.png";

//Function
function MidImgLogo() {
    return (
        <body>
            <div >
                <img
                    className="py-25 mx-auto max-w-[100%]"
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
