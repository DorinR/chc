import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LangContext } from "../..";

interface LangContextType {
  changeLang: (lang: string) => void;
  lang: "en" | "fr" | "ro";
}

export const Header = () => {
  const { changeLang: setLanguage, lang } = useContext(
    LangContext
  ) as LangContextType; // Add a type assertion to fix the 'Object is of type 'unknown'' error
  const navigate = useNavigate();

  return (
    <HeaderWrapperWrapper>
      <HeaderWrapper>
        <LogoContainer
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          <Logo src="/logo2_no_text.png" alt="Website logo" />
        </LogoContainer>
        <NavLinks>
          <LanguageToggler setLanguage={setLanguage} lang={lang} />{" "}
          {/* Pass setLanguage as a prop */}
          <VerticalSeparator />
          <NavLink href="#">1 (438) 501 7075</NavLink>
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
  setLanguage: (lang: "en" | "fr" | "ro") => void; // Define the setLanguage prop
  lang: "en" | "fr" | "ro";
}

const LanguageToggler = ({ setLanguage, lang }: LanguageTogglerProps) => {
  return (
    <>
      {lang !== "en" && (
        <NavLink onClick={() => setLanguage("en")}>
          <StyledImage src="/british.png" />
        </NavLink>
      )}
      {lang !== "fr" && (
        <NavLink onClick={() => setLanguage("fr")}>
          <StyledImage src="/french.png" />
        </NavLink>
      )}
      {lang !== "ro" && (
        <NavLink onClick={() => setLanguage("ro")}>
          <StyledImage src="/romanian.png" />
        </NavLink>
      )}
    </>
  );
};

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  overflow: hidden;
  object-fit: cover;

  border-radius: 2px;
`;

const Logo = styled.img`
  height: 125px;
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
  height: 150px;
  width: 900px;
  color: black;
  padding-left: 0px;
  padding-right: 0px;
`;

const LogoContainer = styled.div`
  width: 150px; // Width of the container
  height: 150px; // Height of the container
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden; // This will ensure the image doesn't spill out of the container

  cursor: pointer;
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
