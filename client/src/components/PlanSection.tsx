import Car from "../assets/images/select-car.png";
import Operator from "../assets/images/contact-operator.png";
import Drive from "../assets/images/let's-drive.png";

const PlanSection = () => {
  type Data = {
    img: string;
    heading: string;
    description: string;
  };

  const data: Data[] = [
    {
      img: Car,
      heading: "Select Car",
      description:
        "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
    },
    {
      img: Operator,
      heading: "Contact Operator",
      description:
        "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
    },
    {
      img: Drive,
      heading: "Let's Drive",
      description:
        "Whether you're hitting the open road, we've got you covered with our wide range of cars",
    },
  ];

  const renderData = (dataArray: Data[]) => {
    return dataArray.map((item, index) => (
      <div
        key={index}
        className=" p-[10px] text-center items-center md:px-[60px]"
      >
        <img
          src={item.img}
          alt={item.heading}
          className="h-[170px] w-[170px] overflow-clip inline"
        />
        <h2 className="text-[24px] font-bold mb-[10px] w-full">
          {item.heading}
        </h2>
        <p className="text-[16px] leading-[1.43] text-[#706f7b]">
          {item.description}
        </p>
      </div>
    ));
  };

  return (
    <section id="plan-section" className="py-[53px] ">
      <div className="container-div px-[25px] max-w-[1330px] m-auto">
        <div className="plan-container flex flex-col">
          <div className="title">
            <h3 className="text-[24px] font-medium text-center">
              Plan your trip now
            </h3>
            <h2 className="text-[42px] font-bold text-center mt-[13px] mb-[30px] ">
              Quick &amp; easy car rental
            </h2>
          </div>

          <div className="boxes grid px-[30px] mt-[10px] gap-y-[20px] grid-rows-[auto] grid-cols-[1fr] lg:mt-[37px] lg:grid-cols-[1fr_1fr_1fr]">
            {renderData(data)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
