import Rating from "../Rating";

const Testimonial = ({ image, name, review, rating }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-text">
        <Rating rating={rating} />
      </div>
      <div className="testimonial-card-info">
        <div className="testimonial-image">
          <img src={image} alt="person" />
        </div>
        <div className="testimonial-card-text">{name}</div>
      </div>
      <div className="testimonial-card-riview">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Testimonial;
