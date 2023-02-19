import Testimonial from "./Testimonial";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <h1>Testimonials</h1>
        <div className="testimonials-list">
          <Testimonial
            image="/images/1.jpg"
            name="Russel O."
            review="This is my absolute favorite restaurant. Recommeded"
            rating={5}
          />
          <Testimonial
            image="/images/2.jpg"
            name="Peter Paul"
            review="Amazing wines, food and service"
            rating={4}
          />
          <Testimonial
            image="/images/3.jpg"
            name="Thiago Silva"
            review="This is my absolute favorite restaurant. Thumbs up"
            rating={5}
          />
          <Testimonial
            image="/images/4.jpg"
            name="Ray Luis"
            review="Slow Service"
            rating={1}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
