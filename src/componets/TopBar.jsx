//Imports
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Nav";
import {
    House,
    Calendar,
    Send
} from "react-bootstrap-icons";


//Function
function TopBar() {
    return (
        <div>
            <Navbar className="fixed-top justify-content-between bg-gradient-to-r from-green-300 via-cyan-300 to-green-300">
                <h2 style={{ marginLeft: "1rem" }}>
                    <Nav.Link
                        href="/"
                        className="text-black px-4"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Home"
                    >
                        <House />
                    </Nav.Link>
                </h2>
                <div className="d-flex align-items-center">
                    <h2 className="text-center" style={{ marginRight: "1rem" }}>
                        <Nav.Link
                            href="/Calendar"
                            className="text-black px-4"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Calendar"
                        >
                            <Calendar />
                        </Nav.Link>
                    </h2>
                    <h2 className="text-center" style={{ marginRight: "1rem" }}>
                        <Nav.Link
                            href="/contact"
                            className="text-black px-4"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Contact us"
                        >
                            <Send />
                        </Nav.Link>
                    </h2>
                </div>
            </Navbar>
        </div>
    );
}

//Export
export default TopBar;
