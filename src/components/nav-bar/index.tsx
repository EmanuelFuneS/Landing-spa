import "./styles.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <div>
        <img
          src="../public/spa-logo.svg"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </div>

      <ul className="link-list">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
