const BannerSection = () => {
  return (
    <section
      id="banner-section"
      className="flex my-[80px] py-[60px] text-center bg-[#2d2d2d]"
    >
      <div className="banner-container px-[25px] max-w-[1330px] m-auto">
        <div className="banner-content flex flex-col items-center justify-between gap-[15px]">
          <h2 className="text-[42px] md:text-[52px] font-bold text-center text-[white] leading-[54.6px] md:leading-[67.6px] ">
            Save big with our cheap car rental!
          </h2>
          <p className="text-[20px] md:text-[24px] text-[white] font-['Poppins',sans-serif]">
            Top Airports. Local Suppliers.
            <span className="text-[#ff4d30]"> 24/7</span> Support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
