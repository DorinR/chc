import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapperWrapper>
      <HeaderWrapper>
        <LogoContainer>
          {" "}
          <Logo src="/logo.png" alt="Website logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink href="#">English</NavLink>
          <VerticalSeparator />
          <NavLink href="#">1 (438) 530 1020</NavLink>
          <VerticalSeparator />
          <NavLink href="#">info@canadainnohub.com</NavLink>
          <CTAButton>Join C.I.H.</CTAButton>
        </NavLinks>
      </HeaderWrapper>
    </HeaderWrapperWrapper>
  );
};

const Logo = styled.img`
  height: 90px;
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
