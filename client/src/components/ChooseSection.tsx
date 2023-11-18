import Tracks from "../assets/images/tracks.png";
import Cars from "../assets/images/cars.png";
import Drive from "../assets/images/cross-country.png";
import Prices from "../assets/images/pricing.png";
import Charges from "../assets/images/hidden-charges.png";

const ChooseSection = () => {
  type Data = {
    img: string;
    heading: string;
    description: string;
  };

  const data: Data[] = [
    {
      img: Drive,
      heading: "Cross Country Drive",
      description:
        "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.",
    },
    {
      img: Prices,
      heading: "All Inclusive Pricing",
      description:
        "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.",
    },
    {
      img: Charges,
      heading: "No Hidden Charges",
      description:
        "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.",
    },
  ];

  const renderData = (dataArray: Data[]) => {
    return dataArray.map((item, index) => (
      <div key={index} className=" flex flex-col items-center md:flex-row">
        <img
          src={item.img}
          alt={item.heading}
          className="h-[110px] w-[110px] overflow-clip inline mr-[11px]"
        />
        <div className=" lg:text-left flex flex-col justify-center">
          <h2 className="text-[24px] font-bold mb-[10px] w-full">
            {item.heading}
          </h2>
          <p className="text-[16px] leading-[1.43] text-[#706f7b]">
            {item.description}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="choose-section"
      className="pt-[2rem] pb-[10rem] bg-[white] "
      style={{
        backgroundImage: `url(${Tracks})`,
        backgroundPosition: "-255px 255px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="choose-container m-auto max-w-[1330px] px-[2.5rem] ">
        <div className="flex flex-col items-center">
          <img
            src={Cars}
            alt="car_image"
            className="overflow-clip w-full h-auto md:w-[90%]"
          />
          <div className="text-container flex flex-col items-center text-center   justify-around mt-[30px] w-full gap-[55px] lg:flex-row lg:text-left lg:gap-0 lg:items-start">
            <div className="flex flex-col items-center max-w-[500px] lg:items-start">
              <h4 className="text-[22px] font-semibold mb-[7px] w-full">
                Why Choose Us
              </h4>
              <h2 className="text-[42px] font-bold leading-[1.2] mb-[20px]">
                Best valued deals you will ever find
              </h2>
              <p className="text-[16px] leading-[24px] text-[#706f7b] mb-[33px]">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <a
                href="#home"
                className="flex text-[white] text-[16px] font-bold border-2 px-[25px] py-[15px] bg-[#ff4d30] border-[#ff4d30] shadow-[0_10px_15px_0_rgba(255,83,48,.35)] transition-all duration-300 w-fit"
              >
                Find Details &nbsp;
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
              </a>
            </div>
            <div className="flex flex-col max-w-[440px] gap-[45px] text-center ">
              {renderData(data)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
