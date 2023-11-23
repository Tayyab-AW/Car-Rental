import P1 from "../assets/images/pfp1.jpg";
import P2 from "../assets/images/pfp2.jpg";

const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="py-[100px]">
      <div className="m-auto max-w-[1330px] px-[25px] ">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="m-auto flex flex-col w-full items-center max-w-[700px] mb-[50px]">
            <h4 className="text-[22px] font-medium mb-[7px] w-full">
              Reviewed by People
            </h4>
            <h2 className="text-[42px] font-bold leading-[1.2] mb-[20px]">
              Client's Testimonials
            </h2>
            <p className="text-[16px] leading-[24px] text-[#706f7b]">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>

          <div className="flex items-center justify-center w-full gap-[30px] text-left lg:p-[30px]">
            <div className="w-[54rem] px-[30px] py-[50px] relative bg-[white] shadow-[0_20px_40px_0_rgba(0,0,0,.08)] lg:p-[55px]">
              <span className="quotes-icon hidden md:block absolute bottom-[33px] right-[60px] text-[#ff4d30] h-[93px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-quote"
                >
                  <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                  <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                </svg>
              </span>

              <p className="text-[22px] font-medium font-[Poppins]">
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable. "
              </p>

              <div className="flex ">
                <div className="flex items-center gap-[20px] mt-[30px]">
                  <img
                    src={P1}
                    alt="usr-img"
                    className="w-[70px] h-[70px] overflow-clip rounded-full"
                  />
                  <span>
                    <h4 className="text-[18px] font-bold font-[Poppins]">
                      Parry Hotter
                    </h4>
                    <p className="text-[16px]">Belgrade</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-[54rem] px-[30px] py-[50px] relative bg-[white] shadow-[0_20px_40px_0_rgba(0,0,0,.08)] lg:p-[55px]">
              <span className="quotes-icon hidden md:block absolute bottom-[33px] right-[60px] text-[#ff4d30] h-[93px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-quote"
                >
                  <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                  <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                </svg>
              </span>

              <p className="text-[22px] font-medium font-[Poppins]">
                "The car was in great condition and made our trip even better.
                Highly recommend for this car rental website!"
              </p>

              <div className="flex ">
                <div className="flex items-center gap-[20px] mt-[30px]">
                  <img
                    src={P2}
                    alt="usr-img"
                    className="w-[70px] h-[70px] overflow-clip rounded-full"
                  />
                  <span>
                    <h4 className="text-[18px] font-bold font-[Poppins]">
                      Ron Rizzly
                    </h4>
                    <p className="text-[16px]">Novi Sad</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
