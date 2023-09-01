//Imports
import React from "react";
import BgImg from "../assets/images/logoImg.png";

//Function
function MidImgLogo() {
    return (
        <body>
            <div className="bg-green-100" >
                <img
                    className="py-25 mx-auto max-w-[100%] rounded-b-full"
                    src={BgImg}
                    alt="Logo"
                />
            </div>
        </body>
    );
}

//export
export default MidImgLogo;
