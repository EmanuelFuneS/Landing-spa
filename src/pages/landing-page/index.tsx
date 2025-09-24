import Hero from "../../components/sections/hero";
import LearnMore from "../../components/sections/learn-more";
import Services from "../../components/sections/services";
import LandingLayout from "../layout";
import "./styles.css";

const Landing = () => {
  return (
    <LandingLayout>
      <div className="page-container">
        <Hero />
        <LearnMore />
        <Services />
      </div>
    </LandingLayout>
  );
};

export default Landing;
