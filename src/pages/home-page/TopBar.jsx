//Imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Person, Calendar, Cart4 } from "react-bootstrap-icons";

//Function
function TopBar() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container className='bg-cyan-500'>
      <Navbar.Brand href="#login"><Person /></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Nav.Link href="#Shopping" className='px-2'><Cart4 /></Nav.Link>
      <Nav.Link href="#appointments" className='px-2'><Calendar /></Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
//Export
export default TopBar;