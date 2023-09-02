
import React, { ReactNode } from "react";
import { Footer, NavBar } from "../constants";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
