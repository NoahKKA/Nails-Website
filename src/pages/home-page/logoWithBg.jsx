//Imports
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
        </body>
    );
}

//export
export default MidImgLogo;
