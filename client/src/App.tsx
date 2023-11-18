import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Hero";
import PlanSection from "./components/PlanSection";
import BannerSection from "./components/BannerSection";
import ChooseSection from "./components/ChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
// import Booking from "./components/Booking";

function App() {
  return (
    <>
      <Nav />
      <Home />
      {/* <Booking /> */}
      <PlanSection />
      <BannerSection />
      <ChooseSection />
      <TestimonialsSection />
    </>
  );
}

export default App;
