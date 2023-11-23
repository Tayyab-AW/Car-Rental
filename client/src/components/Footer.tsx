const Footer = () => {
  return (
    <footer id="footer" className="py-[100px] bg-[white]">
      <div className="m-auto max-w-[1330px] px-[25px] ">
        <div className="footer-content grid justify-center gap-[80px] text-center grid-cols-[1fr] md:grid-cols-[1fr_1fr] md:text-left xl:grid-cols-[27fr_21fr_21fr_27fr]">
          <ul className=" ">
            <li className="mb-[15px] text-[24px]">
              <span className="font-bold">CAR</span> Rental
            </li>
            <li className="mb-[30px] text-[16px] leading-[27.2px] text-[#706f7b]">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li className=" flex items-center justify-center mb-[10px] font-medium  md:justify-start">
              <a
                href="tel:123456789"
                className="flex items-center text-[16px] font-medium font-[Rubik] md:items-start"
              >
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
                  className="tabler-icon tabler-icon-phone-call"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
                &nbsp; (123) -456-789
              </a>
            </li>
            <li className=" flex items-center justify-center mb-[10px] font-medium md:justify-start">
              <a
                href="mailto:  carrental@gmail.com"
                className="flex items-center text-[16px] font-medium font-[Rubik]  md:items-start"
              >
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
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
                &nbsp; carrental@gmail.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://xpeedstudio.com/"
                style={{ fontSize: "14px" }}
              >
                Design by XpeedStudio
              </a>
            </li>
          </ul>
          <ul className=" text-[16px]  [&>li]:mb-[10px]">
            <li className="text-[24px] font-bold uppercase">Company</li>
            <li>
              <a href="#home" className="text-[16px]">
                New York
              </a>
            </li>
            <li>
              <a href="#home">Careers</a>
            </li>
            <li>
              <a href="#home">Mobile</a>
            </li>
            <li>
              <a href="#home">Blog</a>
            </li>
            <li>
              <a href="#home">How we work</a>
            </li>
          </ul>
          <ul className=" text-[16px]  [&>li]:mb-[10px]">
            <li className="text-[24px] font-bold uppercase">Working Hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul className=" text-[16px]  [&>li]:mb-[10px]">
            <li className="text-[24px] font-bold uppercase">Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news &amp; updates.</p>
            </li>
            <li>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="mt-[10px] px-[60px] py-[10px] border-[1_solid_transparent] bg-[#ececec] text-[14px] leading-[26px] w-full"
              />
            </li>
            <li>
              <button className="border-[2_solid_#ff4d30] bg-[#ff4d30] rounded-sm shadow-[0_10px15px_0_rgba(255,83,48,.25)] w-full px-[25px] py-[15px] font-[Arial] font-bold text-[white]">
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
