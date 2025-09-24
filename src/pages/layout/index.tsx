import type React from "react";
import Footer from "../../components/layout/footer";
import NavBar from "../../components/layout/nav-bar";
import "./styles.css";
interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default LandingLayout;
