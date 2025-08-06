import type React from "react";
import "./styles.css";
interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return <div className="layout-container">{children}</div>;
};

export default LandingLayout;
