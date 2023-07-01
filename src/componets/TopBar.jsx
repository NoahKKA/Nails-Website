//Imports
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Calendar, Cart4, Moon } from "react-bootstrap-icons";
import IconImg from "../assets/images/abby.png";
import { Link } from "react-router-dom";

//Function
function TopBar() {
  return (
    <div>
      <Navbar fixed="top" className="bg-cyan-500">
        <Navbar.Brand href="#GlobalHomeBtn" className="px-4">
          <img className="   max-w-[5%] " src={IconImg} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#DarkMode" className="px-2" target="_blank">
            <Moon />
          </Nav.Link>
          <Nav.Link href="#Shopping" className="px-2" target="_blank">
            <Cart4 />
          </Nav.Link>
          <Link to="/Calendar" className="px-2 text-black">
            <Calendar />
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

//Export
export default TopBar;
