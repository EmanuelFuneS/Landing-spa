import Footer from "../../components/footer";
import NavBar from "../../components/nav-bar";
import Hero from "../../components/sections/hero";
import "./styles.css";
const Landing = () => {
  return (
    <div className="page-container">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Landing;
