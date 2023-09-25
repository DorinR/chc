import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationBar = () => {
  return (
    <NavbarContainer>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* About Us */}
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/a1">
                  Association A.O. Explore Canada-Moldova-Romania
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/a2">Our Team</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/a3">Our Services</Link>
              </NavDropdown.Item>{" "}
              <NavDropdown.Item>
                <Link to="/a4">How to become a member</Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Projects */}
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/b1">Air cadets</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/b2">Casa Moldovei</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/b3">Airports of Moldova</Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Info CA/RM/RO */}
            <NavDropdown title="Info CA/RM/RO" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/c1">Canada</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/c2">Republic of Moldova</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/c3">Romania</Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Business, Sports */}
            <NavDropdown title="Business/Sports" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/d1">Business</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/d2">Sports</Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Partners */}
            <NavDropdown title="Partners" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/e1"> Technical Cooperation Bureau (ICAO/OACI)</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/e2">Voiak</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/e3">Candore College</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/e4">Airports Council International</Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Contact */}
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/f1">Action</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #337ccf;
  nav {
    background-color: #337ccf !important;
  }

  .navbar-nav {
    gap: 32px;
  }

  .dropdown-item > a {
    color: black;
  }

  .nav-item > a {
    color: white !important;
    font-weight: bold;
    color: white;
    font-size: 1.1rem;
  }
`;
