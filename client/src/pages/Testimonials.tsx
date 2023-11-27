import BookBanner from "../components/BookBanner";
import PagesHero from "../components/PagesHero";
import TestimonialsSection from "../components/TestimonialsSection";

const Testimonials = () => {
  return (
    <div>
      <PagesHero name="Testimonials" />
      <TestimonialsSection />
      <BookBanner />
    </div>
  );
};

export default Testimonials;
