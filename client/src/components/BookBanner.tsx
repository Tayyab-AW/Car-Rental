import BannerImg from "../assets/images/book-banner.png";

const BookBanner = () => {
  return (
    <div
      className="mt-[70px] py-[10px] flex relative md:h-[200px]"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute opacity-80 w-full h-full top-0 right-0 bg-[#2d2d2d]"></div>
      <div className="container flex justify-center max-w-[1330px] m-auto px-[25px] h-full w-full">
        <div className="text-content  flex flex-col md:flex-row items-center relative z-[5] text-center gap-[10px] md:text-left md:gap-[50px]">
          <h2 className="text-[32px] font-bold text-[white] md:w-[365px] lg:w-[625px] ">
            Book a car by getting in touch with us
          </h2>
          <span className=" flex flex-row text-[27px] flex-nowrap gap-[10px] text-[#ff4d30]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-phone"
            >
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
            </svg>
            <h3 className="text-[32px] font-bold w-full">(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;
