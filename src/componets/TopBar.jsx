//Imports
import Nav from "react-bootstrap/Nav";
import { Calendar, Cart4, Moon, House} from "react-bootstrap-icons";

//Function
function TopBar() {
    return (
        <div>
            <Nav className="py-100 justify-content-center bg-slate-400">
                <h2>
                <Nav.Link  href="/" className="text-black px-4">
                    <House />
                </Nav.Link>
                </h2>
                <h2>
                <Nav.Link href="/Shopping" className="text-black px-4">
                    <Cart4 />
                </Nav.Link>
                </h2>
                <h2>
                <Nav.Link href="/Calendar" className="text-black px-4">
                    <Calendar />
                </Nav.Link>
                </h2>
                <h2>
                <Nav.Link href="/DarkMode" className="text-black px-4">
                    <Moon />
                </Nav.Link>
                </h2>
            </Nav>
        </div>
    );
}

//Export
export default TopBar;
