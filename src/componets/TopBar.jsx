//Imports
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Nav";
import {
  Calendar,
  Cart4,
  MoonStars,
  MoonStarsFill,
  House,
  QuestionCircle
} from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

//Function
function TopBar() {
  return (
    <div>
      <Navbar className="fixed-top py-100 justify-content-between bg-gradient-to-r from-green-300 via-cyan-300 to-green-300">
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
              href="/Shopping"
              className="text-black px-4"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Shopping"
            >
              <Cart4 />
            </Nav.Link>
          </h2>
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
            <Dropdown>
              <Dropdown.Toggle
                className="custom-toggle text-black px-4"
                data-toggle="tooltip"
                data-placement="bottom"
                title="DarkMode"
              >
                <MoonStars />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right">
                <Dropdown.Item>
                  <MoonStars />
                  <span className="mt-2">Light Mode</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <MoonStarsFill />
                  <span className="mt-2">Dark Mode</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <QuestionCircle />
                  <span className="mt-2">Auto</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </h2>
        </div>
      </Navbar>
    </div>
  );
}

//Export
export default TopBar;
