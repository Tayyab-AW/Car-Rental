import { useState } from "react";
import Logo from "../assets/images/logo.png";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="h-[110px] w-full max-w-[1330px] px-[20px] py-[27px] flex items-center justify-between m-auto z-40 ">
      <div className="w-[145px]">
        <a href="/">
          <img src={Logo} className="h-auto w-auto" />
        </a>
      </div>
      <ul className="hidden lg:flex gap-[21px]">
        <li>
          <a
            href="/#home"
            className="text-[16px] font-medium text-left cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#home"
            className="text-[16px] font-medium text-left cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#home"
            className="text-[16px] font-medium text-left cursor-pointer"
          >
            Models
          </a>
        </li>
        <li>
          <a
            href="/#home"
            className="text-[16px] font-medium text-left cursor-pointer"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="/#home"
            className="text-[16px] font-medium text-left cursor-pointer"
          >
            Our Team
          </a>
        </li>
        <li>
          <a
            href="/#home"
            className="text-[16px] font-medium text-left cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="items-center gap-[25px] hidden lg:flex">
        <button className="text-[16px] font-medium text-left cursor-pointer">
          Sign In
        </button>
        <button className="flex items-center justify-center text-[16px] font-medium text-left cursor-pointer h-[50px] w-[125px] px-[30px] py-[15px] bg-[#ff4d30] shadow-[0_10px_15px_0_rgba(255,83,48,.35)] text-[white]  rounded-sm">
          Register
        </button>
      </div>

      <div className="lg:hidden">
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-menu-2"
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </button>
        <div
          className="lg:hidden w-auto absolute top-[120px] right-[20px]  rounded-md shadow-[0_10px_15px_0_rgba(255,83,48,.35)] overflow-hidden"
          style={{
            maxHeight: isOpen ? "300px" : 0,
            transition: isOpen
              ? "max-height 0.50s ease-in"
              : "max-height 0.50s ease-out",
          }}
        >
          <ul className="flex flex-col items-center justify-center gap-[21px] py-[20px] px-[40px]">
            <li>
              <a
                href="/#home"
                className="text-[16px] font-medium text-left cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#home"
                className="text-[16px] font-medium text-left cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#home"
                className="text-[16px] font-medium text-left cursor-pointer"
              >
                Models
              </a>
            </li>
            <li>
              <a
                href="/#home"
                className="text-[16px] font-medium text-left cursor-pointer"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/#home"
                className="text-[16px] font-medium text-left cursor-pointer"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="/#home"
                className="text-[16px] font-medium text-left cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
