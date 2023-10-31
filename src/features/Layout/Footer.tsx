import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <FooterContainerContainer>
      <FooterContainer>
        <Column>
          <ColumnHeader>
            {formatMessage({ id: "navbar.about_us" })}
          </ColumnHeader>
          <MenuItem>
            <Link to="/a1">
              {formatMessage({ id: "navbar.about_us.explore_association" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/a2">
              {formatMessage({ id: "navbar.about_us.our_team" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/a3">
              {formatMessage({ id: "navbar.about_us.our_services" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/a4">
              {formatMessage({ id: "navbar.about_us.become_member" })}
            </Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>
            {formatMessage({ id: "navbar.projects" })}
          </ColumnHeader>
          <MenuItem>
            <Link to="/b1">
              {formatMessage({ id: "navbar.projects.air_cadets" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/b2">
              {formatMessage({ id: "navbar.projects.casa_moldovei" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/b3">
              {formatMessage({ id: "navbar.projects.airports_moldova" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/b4">
              {formatMessage({ id: "navbar.projects.national_global" })}
            </Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>{formatMessage({ id: "navbar.news" })}</ColumnHeader>
          <MenuItem>
            <Link to="/c1">{formatMessage({ id: "navbar.news.canada" })}</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/c2">
              {formatMessage({ id: "navbar.news.republic_moldova" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/c3">{formatMessage({ id: "navbar.news.romania" })}</Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>
            {formatMessage({ id: "navbar.business_sports" })}
          </ColumnHeader>
          <MenuItem>
            <Link to="/d1">
              {formatMessage({ id: "navbar.business_sports.business" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/d2">
              {formatMessage({ id: "navbar.business_sports.sports" })}
            </Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>
            {formatMessage({ id: "navbar.partners" })}
          </ColumnHeader>
          <MenuItem>
            <Link to="/e1">
              {formatMessage({ id: "navbar.partners.technical_cooperation" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/e2">
              {formatMessage({ id: "navbar.partners.voiaj" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/e3">
              {formatMessage({ id: "navbar.partners.candore_college" })}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/e4">
              {formatMessage({ id: "navbar.partners.airports_council" })}
            </Link>
          </MenuItem>
        </Column>

        <Column>
          <ColumnHeader>{formatMessage({ id: "navbar.contact" })}</ColumnHeader>
          <MenuItem>
            <Link to="/f1">
              {formatMessage({ id: "navbar.contact.contact_us" })}
            </Link>
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
