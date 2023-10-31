import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationBar = () => {
  const { formatMessage } = useIntl();

  return (
    <NavbarContainer>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* About Us */}
            <NavDropdown
              title={formatMessage({ id: "navbar.about_us" })}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/a1">
                  {formatMessage({ id: "navbar.about_us.explore_association" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/a2">
                  {formatMessage({ id: "navbar.about_us.our_team" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/a3">
                  {formatMessage({ id: "navbar.about_us.our_services" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/a4">
                  {formatMessage({ id: "navbar.about_us.become_member" })}
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Projects */}
            <NavDropdown
              title={formatMessage({ id: "navbar.projects" })}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/b1">
                  {formatMessage({ id: "navbar.projects.air_cadets" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/b2">
                  {formatMessage({ id: "navbar.projects.casa_moldovei" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/b3">
                  {formatMessage({ id: "navbar.projects.airports_moldova" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/b4">
                  {formatMessage({ id: "navbar.projects.national_global" })}
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* News CA/RM/RO */}
            <NavDropdown
              title={formatMessage({ id: "navbar.news" })}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/c1">
                  {formatMessage({ id: "navbar.news.canada" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/c2">
                  {formatMessage({ id: "navbar.news.republic_moldova" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/c3">
                  {formatMessage({ id: "navbar.news.romania" })}
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Business, Sports */}
            <NavDropdown
              title={formatMessage({ id: "navbar.business_sports" })}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/d1">
                  {formatMessage({ id: "navbar.business_sports.business" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/d2">
                  {formatMessage({ id: "navbar.business_sports.sports" })}
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Partners */}
            <NavDropdown
              title={formatMessage({ id: "navbar.partners" })}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/e1">
                  {formatMessage({
                    id: "navbar.partners.technical_cooperation",
                  })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/e2">
                  {formatMessage({ id: "navbar.partners.voiaj" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/e3">
                  {formatMessage({ id: "navbar.partners.candore_college" })}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/e4">
                  {formatMessage({ id: "navbar.partners.airports_council" })}
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Contact */}
            <NavDropdown
              title={formatMessage({ id: "navbar.contact" })}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/f1">
                  {formatMessage({ id: "navbar.contact.contact_us" })}
                </Link>
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
