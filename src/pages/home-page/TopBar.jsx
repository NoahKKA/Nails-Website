//Imports

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Person, Calendar, Cart4 } from "react-bootstrap-icons";

//Function
function TopBar() {
  return (
    <div className='bg-black '>
    <Navbar className="bg-body-tertiary">
      <Navbar.Brand href="#login"><Person /></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Nav.Link href="#Shopping" className='px-2'><Cart4 /></Nav.Link>
      <Nav.Link href="#appointments" className='px-2'><Calendar /></Nav.Link>
      </Navbar.Collapse>
  </Navbar>
  </div>
  )
}
//Export
export default TopBar;