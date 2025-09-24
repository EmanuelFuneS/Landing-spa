import CardService from "../../card-service";
import "./styles.css";

const data = [
  {
    title: "Facial Spa Treatment",
    subtitle: "$65.00- 50 Minute Voucher ",
    description:
      "It is a long established fact that a reader will be distracted by the It is a long established fact that a reader.",
    imageUrl: "",
  },
  {
    title: "Back Massage",
    subtitle: "$125.00- 50 Minute Voucher ",
    description:
      "It is a long established fact that a reader will be distracted by the It is a long established fact that a reader.",
    imageUrl: "",
  },
  {
    title: "Foot Massage",
    subtitle: "$65.00- 50 Minute Voucher ",
    description:
      "It is a long established fact that a reader will be distracted by the It is a long established fact that a reader.",
    imageUrl: "",
  },
  {
    title: "Thai Stone Massage",
    subtitle: "$69.00- 50 Minute Voucher ",
    description:
      "It is a long established fact that a reader will be distracted by the It is a long established fact that a reader.",
    imageUrl: "",
  },
];

const Services = () => {
  return (
    <section id="service" className="services-section">
      <h2 className="section-title">Services</h2>
      <div className="service-grid">
        {data.map((service, index) => (
          <CardService key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
