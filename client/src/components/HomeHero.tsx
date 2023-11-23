import { Link } from "react-router-dom";
import BG from "../assets/images/hero-bg.png";
import Car from "../assets/images/main-car.png";

const HomeHero = () => {
  return (
    <section id="hero" className="h-full w-full">
      <div className="max-w-[1330px] px-[25px] m-auto ">
        <img
          src={BG}
          className="hidden lg:block absolute top-0 right-0 overflow-clip z-[1]"
        />
        <div className="content flex items-center justify-center h-screen w-full relative lg:justify-start  ">
          <div className="mt-[50px] flex items-center justify-center text-center flex-col max-w-[500px] lg:text-start lg:items-start z-10">
            <h4 className=" text-[22px] font-bold">Plan your trip now</h4>
            <h1 className=" text-[52px] font-bold mt-[10px] mb-[23px] leading-[62.4px]">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </h1>
            <p className=" text-[16px] text-[#706f7b] mb-[40px] leading-[25.6px]">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex flex-col gap-[20px] md:flex-row">
              <Link
                to=""
                className="flex gap-x-[5px] items-center px-[80px] md:px-[30px] py-[18px] border-2 border-[#ff4d30] bg-[#ff4d30] shadow-[0_10px_15px_0_rgba(255,83,48,.35)] text-[16px] font-bold text-center rounded-[3px] text-[white] transition-all duration-300"
              >
                Book Ride
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-circle-check"
                >
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M9 12l2 2l4 -4"></path>
                </svg>
              </Link>
              <Link
                to=""
                className="flex gap-x-[5px] items-center px-[30px] py-[18px] border-2 border-[#010103] bg-[#010103] text-[16px] font-bold text-center rounded-[3px] text-[white] transition-all duration-300"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-chevron-right"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
            </div>
          </div>
          <img
            src={Car}
            className="hidden lg:block mt-[50px] absolute right-0 z-[2] overflow-clip w-[65%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
