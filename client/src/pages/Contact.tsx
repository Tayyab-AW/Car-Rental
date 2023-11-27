import { Link } from "react-router-dom";
import BookBanner from "../components/BookBanner";
import PagesHero from "../components/PagesHero";
import ContactBG from "../assets/images/bg-contact.png";

const Contact = () => {
  return (
    <div className="bg-[white]">
      <PagesHero name="Contact" />
      <div className="m-auto max-w-[1330px] px-[25px]">
        <div
          className="flex flex-col px-[20px] py-[100px] gap-[30px] w-full items-center lg:flex-row lg:text-left lg:items-start justify-between"
          style={{
            backgroundImage: `url(${ContactBG})`,
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
          }}
        >
          <div className="flex flex-col items-center text-center mb-[20px] gap-[10px] md:max-w-[410px] lg:text-left lg:items-start">
            <h2 className="text-[42px] font-bold mb-[20px]">
              Need additional information?
            </h2>
            <p className="text-[16px] mb-[20px] text-[#706f7b]">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <Link
              to="/"
              className="flex items-center  text-[16px] mb-[20px] font-medium"
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
                className="tabler-icon tabler-icon-phone"
              >
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>
              &nbsp; (123) 456-7869
            </Link>
            <Link
              to="/"
              className="flex items-center text-[16px] mb-[20px] font-medium"
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
              &nbsp; carrental@carmail.com
            </Link>
            <Link
              to="/"
              className="flex items-center text-[16px] mb-[20px] font-medium"
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
                className="tabler-icon tabler-icon-location"
              >
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
              </svg>
              &nbsp; Belgrade, Serbia
            </Link>
          </div>
          <div className="flex flex-col items-center text-center w-full lg:text-left lg:items-start lg:max-w-[447px] xl:max-w-[605px]">
            <form className="w-full">
              <div className="flex flex-col items-center w-full lg:items-start">
                <label className="text-[16px] font-semibold mb-[10px]">
                  Full Name <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  type="text"
                  placeholder='E.g: "Joe Shmoe"'
                  className="px-[30px] py-[19px] mb-[23px] border-none bg-[#f2f2f2] w-full text-[16px] "
                />
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <label className="text-[16px] font-semibold mb-[10px]">
                  Email <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="px-[30px] py-[19px] mb-[23px] border-none bg-[#f2f2f2] w-full text-[16px] "
                />
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <label className="text-[16px] font-semibold mb-[10px]">
                  Tell us about it <b className="text-[#ff4d30] ">*</b>
                </label>
                <textarea
                  placeholder="Write Here.."
                  className="px-[30px] py-[19px] mb-[23px] border-none bg-[#f2f2f2] w-full text-[16px] h-[180px]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#ff4d30] border-2 border-[#ff4d30] shadow-[0_10px_15px_0_rgba(255,83,48,.35)] text-[#fff] cursor-pointer transition-all duration-300 text-[18px] flex items-center w-full px-[30px] py-[18px] rounded-md justify-center"
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
                  className="tabler-icon tabler-icon-mail-opened"
                >
                  <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
                  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
                  <path d="M3 19l6 -6"></path>
                  <path d="M15 13l6 6"></path>
                </svg>
                &nbsp; Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <BookBanner />
    </div>
  );
};

export default Contact;
