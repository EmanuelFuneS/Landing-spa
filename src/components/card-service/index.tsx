interface CardServiceProps {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  buttonText: string;
}

const CardService = ({
  image,
  title,
  subtitle,
  text,
  buttonText,
}: CardServiceProps) => {
  return (
    <div className="card-service-container">
      <div className="image-container">
        <img src={image} className="image" />
      </div>
      <div className="wrapper">
        <h3 className="title">{title}</h3>
        <span className="subtitle">{subtitle}</span>
        <p className="text">{text}</p>
        <button className="button-card">{buttonText}</button>
      </div>
    </div>
  );
};

export default CardService;
