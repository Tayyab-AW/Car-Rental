import { useState } from "react";

const FaqSection = () => {
  const [isOpen, setisOpen] = useState<string>("0");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.id);
    isOpen === e.currentTarget.id
      ? setisOpen("0")
      : setisOpen(e.currentTarget.id);
  };

  type Data = {
    number: string;
    heading: string;
    description: string;
  };

  const data: Data[] = [
    {
      number: "1",
      heading: "1. What is special about comparing rental car deals?",
      description:
        "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
    },
    {
      number: "2",
      heading: "2. How do I find the car rental deals?",
      description:
        "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      number: "3",
      heading: "3. How do I find such low rental car prices?",
      description:
        "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];

  const renderData = (dataArray: Data[]) => {
    return dataArray.map((item) => (
      <button
        className="w-full relative faq-box cursor-pointer flex flex-col bg-[white] shadow-[0_10px_15px_0_rgba(0,0,0,.1)] mt-[10px] max-w-[800px]"
        onClick={handleClick}
        id={item.number}
        key={item.number}
      >
        <div
          className={`faq-box__question w-full overflow-hidden flex items-center text-left justify-between px-[45px] py-[18px] transition-all bg-[${
            isOpen === item.number ? "#ff4d30" : "white"
          }] text-[${isOpen === item.number ? "white" : "black"}] shadow-[${
            isOpen === item.number
              ? "0_10px_15px_0_rgba(255,83,48,.35)"
              : "0_3px_6px_0_rgba(0,0,0,.1)"
          }]`}
        >
          <p className="text-[18px] font-medium font-[Poppins]">
            {item.heading}
          </p>
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
            className="tabler-icon tabler-icon-chevron-down"
          >
            <path d="M6 9l6 6l6 -6"></path>
          </svg>
        </div>
        <div
          className="faq-box__answer  text-left px-[45px]  max-h-[550px] overflow-hidden font-[Rubik] text-[16px] leading-[26.6px] text-[#706f7b]"
          style={{
            maxHeight: isOpen === item.number ? "550px" : 0,
            transition:
              isOpen === item.number ? "all 0.40s ease" : "all 0.40s ease",
            paddingTop: isOpen === item.number ? "28px" : 0,
            paddingBottom: isOpen === item.number ? "28px" : 0,
          }}
        >
          {item.description}
        </div>
      </button>
    ));
  };

  return (
    <section id="faq-section" className="py-[100px] bg-[white]">
      <div className="m-auto max-w-[1330px] px-[25px] ">
        <div className="flex flex-col text-center items-center">
          <div className="m-auto flex flex-col w-full items-center max-w-[800px] md:mb-[50px] lg:mb-[0px]">
            <h5 className="text-[22px] font-medium mb-[7px] w-full">FAQ</h5>
            <h2 className="text-[42px] font-bold leading-[1.2] mb-[20px]">
              Frequently Asked Questions
            </h2>
            <p className="text-[16px] leading-[24px] text-[#706f7b]">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>

          <div className="all-questions flex flex-col items-center mt-[70px] ">
            {renderData(data)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
