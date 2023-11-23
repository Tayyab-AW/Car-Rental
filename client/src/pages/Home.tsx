import BannerSection from "../components/BannerSection";
import Booking from "../components/Booking";
import ChooseSection from "../components/ChooseSection";
import DownloadSection from "../components/DownloadSection";
import FaqSection from "../components/FaqSection";
import Hero from "../components/HomeHero";
import PickSection from "../components/PickSection";
import PlanSection from "../components/PlanSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Booking />
      <PlanSection />
      <PickSection />
      <BannerSection />
      <ChooseSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadSection />
    </div>
  );
};

export default Home;
