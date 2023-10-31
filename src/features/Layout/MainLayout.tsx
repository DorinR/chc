import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavigationBar } from "./Navbar2";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ApplicationRootDiv className="application-root-div">
      <Header />
      <NavigationBar />
      <MainContentLayout>{children}</MainContentLayout>
      <Footer />
    </ApplicationRootDiv>
  );
};

const ApplicationRootDiv = styled.div`
  margin: auto;
`;

const MainContentLayout = styled.div`
  padding: 50px 0px;
  max-width: 1000px;
  margin: auto;
  min-height: 600px;
`;
