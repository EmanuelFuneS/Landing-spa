import Footer from "../../components/layout/footer";
import NavBar from "../../components/layout/nav-bar";
import Hero from "../../components/sections/hero";
import LearnMore from "../../components/sections/learn-more";
import LandingLayout from "../layout";
import "./styles.css";
const Landing = () => {
  return (
    <LandingLayout>
      <div className="page-container">
        <NavBar />
        <Hero />
        <LearnMore />
        <Footer />
      </div>
    </LandingLayout>
  );
};

export default Landing;
