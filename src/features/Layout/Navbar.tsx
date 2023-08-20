import styled from "styled-components";
import { useIsMobile } from "../../Hooks/mobile/useIsMobile";
import { HamburgerMenu } from "../../components/HamburgerMenu/HamburgerMenu";
import {
  DropdownNavbarButton,
  NavbarDropdownOption,
} from "./DropdownNavbarButton";

export const Navbar = () => {
  return (
    <ResponsiveNavbar>
      <span>
        <DropdownNavbarButton label="About" path="about">
          <NavbarDropdownOption label="Icon Bar" to="/ui/icon-bar" />
        </DropdownNavbarButton>
        <DropdownNavbarButton label="Projects" path="projects">
          <NavbarDropdownOption label="Icon Bar" to="/ui/icon-bar" />
        </DropdownNavbarButton>
        <DropdownNavbarButton label="Info" path="info">
          <NavbarDropdownOption label="Icon Bar" to="/ui/icon-bar" />
        </DropdownNavbarButton>
        <DropdownNavbarButton label="Social" path="social">
          <NavbarDropdownOption label="Icon Bar" to="/ui/icon-bar" />
        </DropdownNavbarButton>
        <DropdownNavbarButton label="Partners" path="partners">
          <NavbarDropdownOption label="Icon Bar" to="/ui/icon-bar" />
        </DropdownNavbarButton>
        <DropdownNavbarButton label="Contact" path="contact">
          <NavbarDropdownOption label="Icon Bar" to="/ui/icon-bar" />
        </DropdownNavbarButton>
      </span>
    </ResponsiveNavbar>
  );
};

const ResponsiveNavbar = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  let menuOptions = null;

  if (isMobile) {
    menuOptions = <HamburgerMenu>{children}</HamburgerMenu>;
  } else {
    menuOptions = children;
  }

  return (
    <NavbarContainer className="navbar-container" isMobile={isMobile}>
      {menuOptions}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.isMobile ? "flex-end" : "space-between"};

  background-color: ${({ isMobile }) => (isMobile ? "transparent" : "#337ccf")};

  span {
    margin: auto;
    display: flex;
    gap: 30px;
  }
`;
