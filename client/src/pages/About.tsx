import BookBanner from "../components/BookBanner";
import PagesHero from "../components/PagesHero";
import PlanSection from "../components/PlanSection";
import AboutMain from "../assets/images/about-main.jpg";
import Car from "../assets/images/about-car.png";
import Hotel from "../assets/images/about-hotel.png";
import Repair from "../assets/images/about-repair.png";

const About = () => {
  type Data = {
    img: string;
    heading: number;
    description: string;
  };

  const data: Data[] = [
    {
      img: Car,
      heading: 20,
      description: "Car Types",
    },
    {
      img: Hotel,
      heading: 85,
      description: "Rental Outlets",
    },
    {
      img: Repair,
      heading: 75,
      description: "Repair Shop",
    },
  ];

  const renderData = (dataArray: Data[]) => {
    return dataArray.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <img src={item.img} alt={item.description} className="w-[70px]" />
        <span className="flex flex-col gap-[10px] md:flex-row items-center ">
          <h4 className="text-[46px] font-bold">{item.heading}</h4>
          <p className="text-[16px] text-[#706f7b] mb-[40px] md:mb-[0px]">
            {item.description}
          </p>
        </span>
      </div>
    ));
  };

  return (
    <div>
      <PagesHero name="About" />

      <div className="m-auto max-w-[1330px] px-[25px] ">
        <div className="flex flex-col items-center my-[100px] gap-[50px] max-w-full md:max-w-[490px] text-center m-auto lg:flex-row lg:max-w-[900px]">
          <img
            src={AboutMain}
            alt="about-main"
            className="h-auto w-full md:w-[430px] md:h-[430px] overflow-clip"
          />

          <div className="flex flex-col text-center  lg:text-left">
            <h3 className="text-[22px] font-medium">About Company</h3>
            <h2 className="text-[42px] font-bold ">
              You start the engine and your adventure begins
            </h2>
            <p className="text-[16px] text-[#706f7b] mt-[20px] mb-[40px]">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="flex flex-col md:flex-row gap-[0]  md:gap-[40px] items-center">
              {renderData(data)}
            </div>
          </div>
        </div>
        <PlanSection />
      </div>

      <BookBanner />
    </div>
  );
};

export default About;
