import { useLayoutEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

type NavType = {
  link: string;
  to: string;
};

const NavLinks: NavType[] = [
  { link: "Home", to: "/" },
  { link: "About", to: "/about" },
  { link: "Vechical Models", to: "/models" },
  { link: "Testimonials", to: "/testimonials" },
  { link: "Our Team", to: "/team" },
  { link: "Contact", to: "/contact" },
];

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const renderData = (dataArray: NavType[]) => {
    return dataArray.map((item) => (
      <li key={item.link}>
        <Link
          to={item.to}
          onClick={handleClick}
          className="text-[16px] font-medium text-left cursor-pointer"
        >
          {item.link}
        </Link>
      </li>
    ));
  };

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <nav id="nav" className="absolute h-[110px] w-full z-40 ">
      <div className="  max-w-[1330px] px-[20px] py-[27px] flex items-center justify-between m-auto ">
        <div className="w-[145px]">
          <Link to="/">
            <img src={Logo} className="h-auto w-auto" />
          </Link>
        </div>
        <ul className="hidden lg:flex gap-[21px]">{renderData(NavLinks)}</ul>
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
            className="bg-[white] lg:hidden w-auto absolute top-[120px] right-[20px]  rounded-md shadow-[0_10px_15px_0_rgba(255,83,48,.35)] overflow-hidden"
            style={{
              maxHeight: isOpen ? "400px" : 0,
              transition: isOpen
                ? "max-height 0.50s ease-in"
                : "max-height 0.50s ease-out",
            }}
          >
            <ul className="flex flex-col items-center justify-center gap-[21px] py-[20px] px-[40px]">
              {renderData(NavLinks)}
              <div className="items-center gap-[25px] flex flex-col lg:hidden">
                <button className="text-[16px] font-medium text-left cursor-pointer">
                  Sign In
                </button>
                <button className="flex items-center justify-center text-[16px] font-medium text-left cursor-pointer h-[50px] w-[125px] px-[30px] py-[15px] bg-[#ff4d30] shadow-[0_10px_15px_0_rgba(255,83,48,.35)] text-[white]  rounded-sm">
                  Register
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {scrollPosition > 700 && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="flex items-center justify-center bg-[#ff4d30] text-[white] fixed p-[20px] rounded-full bottom-[25px] right-[25px] text-[23px] w-[50px] h-[50px] transition-all duration-300"
        >
          ^ {}
        </button>
      )}
    </nav>
  );
};

export default Nav;
