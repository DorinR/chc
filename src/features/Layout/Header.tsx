import { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../..";

interface LangContextType {
  changeLang: (lang: string) => void;
}

export const Header = () => {
  const setLanguage = (useContext(LangContext) as LangContextType).changeLang; // Add a type assertion to fix the 'Object is of type 'unknown'' error

  return (
    <HeaderWrapperWrapper>
      <HeaderWrapper>
        <LogoContainer>
          {" "}
          <Logo src="/logo2.png" alt="Website logo" />
        </LogoContainer>
        <NavLinks>
          {/* <LanguageToggler setLanguage={setLanguage} />{" "}
          {/* Pass setLanguage as a prop */}
          {/* <VerticalSeparator />  */}
          <NavLink href="#">1 (438) 530 1020</NavLink>
          <VerticalSeparator />
          <NavLink href="mailto:canadamdro@gmail.com">
            canadamdro@gmail.com
          </NavLink>
        </NavLinks>
      </HeaderWrapper>
    </HeaderWrapperWrapper>
  );
};

interface LanguageTogglerProps {
  setLanguage: (lang: "en" | "ro" | "ru") => void; // Define the setLanguage prop
}

const LanguageToggler = ({ setLanguage }: LanguageTogglerProps) => {
  return <NavLink onClick={() => setLanguage("ro")}>English</NavLink>; // Call setLanguage when the NavLink is clicked
};

const Logo = styled.img`
  height: 100px;
`;

const VerticalSeparator = styled.span`
  height: 24px;
  width: 1px;
  background-color: #e0e0e0;
  display: inline-block;
`;

const CTAButton = styled.button`
  background-color: #f04f47;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 25px;

  &:hover {
    background-color: #d43f37;
  }
`;

const HeaderWrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 110px;
  width: 900px;
  color: black;
  padding-left: 0px;
  padding-right: 0px;
`;

const LogoContainer = styled.div`
  width: 150px; // Width of the container
  height: 100px; // Height of the container
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden; // This will ensure the image doesn't spill out of the container
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;
