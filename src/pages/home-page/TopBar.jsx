//Imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { House, Calendar, Cart4 } from "react-bootstrap-icons";
import IconImg from "../img/abby.png";

//Function
function TopBar() {
  return (  
    <div className="relative">
      <Navbar className="bg-cyan-500 fixed top-0 left-0 right-0">
        <Navbar.Brand href="#GlobalHomeBtn" className='px-4'><img className="   max-w-[5%] " src={IconImg} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#Shopping" className='px-2' target="_blank"><Cart4 /></Nav.Link>
            <Nav.Link href="#appointments" className='px-4'><Calendar /></Nav.Link>
          </Navbar.Collapse>
      </Navbar>
     </div>
  )
}

//Export
export default TopBar;