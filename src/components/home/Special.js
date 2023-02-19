import {Link} from 'react-router-dom';

const Special = ({ image, name, price, description, link }) => {
  return (
    <article>
      <div className="special-card">
        <div className="special-card-image">
          <Link to={link} aria-label="On Click">
            <img src={image} alt="special" height="100%" width="100%" />
          </Link>
        </div>
        <div className="special-card-content">
          <div className="special-card-name-price">
            <span className="special-card-name">{name}</span>
            <span className="special-card-price">{price}</span>
          </div>
          <div className="special-card-description">
            <p>{description}</p>
          </div>
          <div className="special-card-link" aria-label="On Click">
            <Link to={link}>
              Order a delivery <img src="/delivery.png" alt="link" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Special;
