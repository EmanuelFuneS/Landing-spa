import "./styles.css";

interface CardServiceProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const CardService = ({
  title,
  subtitle,
  description,
  imageUrl,
}: CardServiceProps) => {
  return (
    <div id="card-service-container">
      <div id="image-container">
        <img src={imageUrl} id="image" />
      </div>
      <div id="info-wrapper">
        <p id="title">{title}</p>
        <span id="subtitle">{subtitle}</span>
        <p id="description">{description}</p>
        <button id="button-card">Book Now</button>
      </div>
    </div>
  );
};

export default CardService;
