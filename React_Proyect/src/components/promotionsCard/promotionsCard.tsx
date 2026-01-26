import "./promotionsCard.css";

type Props = {
  title: string;
  description: string;
  image: string;
  price?: string;
  onClick?: () => void;
};

const PromotionsCard = ({ title, description, image, price, onClick }: Props) => {
  return (
    <div className="promotions-card" onClick={onClick}>
      <div className="promotions-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="promotions-card__content">
        <h3>{title}</h3>
        <p>{description}</p>

        {price && <span className="promotions-card__price">{price}</span>}

        <button>Ver más</button>
      </div>
    </div>
  );
};

export default PromotionsCard;
