import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainerContainer>
      <FooterContainer>
        <Column>
          <ColumnHeader>About Us</ColumnHeader>
          <MenuItem>
            <Link to="/a1">
              Association A.O. Explore Canada-Moldova-Romania
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/a2">Our Team</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/a3">Our Services</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/a4">How to become a member</Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>Projects</ColumnHeader>
          <MenuItem>
            <Link to="/b1">Air cadets</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/b2">Casa Moldovei</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/b3">Airports of Moldova</Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>Info</ColumnHeader>
          <MenuItem>
            <Link to="/c1">Canada</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/c2">Republic of Moldova</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/c3">Romania</Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>Business/Sports</ColumnHeader>
          <MenuItem>
            <Link to="/d1">Business</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/d2">Sports</Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>Partners</ColumnHeader>
          <MenuItem>
            <Link to="/e1">Technical Cooperation Bureau (ICAO/OACI)</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/e2">Voiak</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/e3">Candore College</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/e4">Airports Council International</Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>Contact</ColumnHeader>
          <MenuItem>
            <Link to="/f1">Action</Link>
          </MenuItem>
        </Column>
      </FooterContainer>
    </FooterContainerContainer>
  );
};

const FooterContainerContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(51, 124, 207);
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  max-width: 1000px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 16%; /* 100% divided by 6 (number of columns) */
  text-align: left; /* Left-aligned text */
  margin: 0 1%; /* Adjust margins as needed */
`;

const ColumnHeader = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  font-size: 1.2rem;
`;

const MenuItem = styled.div`
  margin: 5px 0;
  > a {
    color: white;
  }
`;
