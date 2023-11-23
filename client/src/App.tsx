import "./App.css";
import Nav from "./components/Nav";
import PlanSection from "./components/PlanSection";
import BannerSection from "./components/BannerSection";
import ChooseSection from "./components/ChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";
import PickSection from "./components/PickSection";
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import CheckboxGroup from "./components/text";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Booking />
      <PlanSection />
      <PickSection />
      <BannerSection />
      <ChooseSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadSection />
      <Footer />
      <CheckboxGroup />
    </>
  );
}

export default App;
