import Footer from "../../components/footer";
import NavBar from "../../components/nav-bar";
import Hero from "../../components/sections/hero";
import LandingLayout from "../layout";
import "./styles.css";
const Landing = () => {
  return (
    <LandingLayout>
      <div className="page-container">
        <NavBar />
        <Hero />
        <Footer />
      </div>
    </LandingLayout>
  );
};

export default Landing;
