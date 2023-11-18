import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Hero";
import PlanSection from "./components/PlanSection";
import BannerSection from "./components/BannerSection";
import ChooseSection from "./components/ChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";
import PickSection from "./components/PickSection";
// import Booking from "./components/Booking";

function App() {
  return (
    <>
      <Nav />
      <Home />
      {/* <Booking /> */}
      <PlanSection />
      <PickSection />
      <BannerSection />
      <ChooseSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadSection />
      <Footer />
    </>
  );
}

export default App;
