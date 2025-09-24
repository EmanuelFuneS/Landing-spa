import "./styles.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <img
          src="/public/spa-logo.svg"
          style={{
            width: "80px",
            height: "80px",
          }}
        />
        <p
          style={{
            fontSize: "15px",
          }}
        >
          We Don't keep our beauty secrets
        </p>
      </div>
      <div className="info-container">
        <div>
          <p className="title">Contact</p>
          <ul>
            <li className="paragraph">120 west street, 200 street Dhaka</li>
            <li className="paragraph">info.example@gmail.com</li>
            <li className="paragraph">+0923792378</li>
          </ul>
        </div>
        <div>
          <p className="title">Hours</p>
          <ul>
            <li className="paragraph">Mon to Fri- 9am-6pm</li>
            <li className="paragraph">sat - 10am-7pm </li>
            <li className="paragraph">Sun - 10am-7pm </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
