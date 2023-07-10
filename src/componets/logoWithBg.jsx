//Imports
import BgImg from "../assets/images/Logo1.png";

//Function
function MidImgLogo() {
    return (
        <body>
            <div>
                <img
                    className="py-25 mx-auto max-w-[100%]"
                    src={BgImg}
                    alt="Logo"
                />
            </div>
        </body>
    );
}

//export
export default MidImgLogo;
