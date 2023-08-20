import { ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ApplicationRootDiv className="application-root-div">
      <Header />
      <Navbar />
      <MainContentLayout>{children}</MainContentLayout>
      <Footer />
    </ApplicationRootDiv>
  );
};

const Header = styled.div`
  background-color: transparent;
  height: 110px;
`;

const Footer = styled.div`
  background-color: #337ccf;
  min-height: 250px;
`;

const ApplicationRootDiv = styled.div`
  margin: auto;
`;

const MainContentLayout = styled.div`
  padding: 50px 0px;
  max-width: 900px;
  margin: auto;
`;
