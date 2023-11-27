import BookBanner from "../components/BookBanner";
import PagesHero from "../components/PagesHero";
import AudiBox from "../assets/images/audi-box.png";
import GolfBox from "../assets/images/golf6-box.png";
import ToyotaBox from "../assets/images/toyota-box.png";
import BMWBox from "../assets/images/bmw-box.png";
import MercedesBox from "../assets/images/benz-box.png";
import VWBox from "../assets/images/passat-box.png";

import { Link } from "react-router-dom";

const Models = () => {
  type Data = {
    id: string;
    img: string;
    carname: string;
    rent: number;
    model: string;
    mark: string;
    year: number;
    doors: string;
    ac: string;
    transmission: string;
    fuel: string;
  };

  const data: Data[] = [
    {
      id: "1",
      img: AudiBox,
      carname: "Audi A1 S-Line",
      rent: 45,
      model: "Audi",
      mark: "A1",
      year: 2012,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Gasoline",
    },
    {
      id: "2",
      img: GolfBox,
      carname: "VW Golf 6",
      rent: 37,
      model: "Golf 6",
      mark: "Volkswagen",
      year: 2008,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      id: "3",
      img: ToyotaBox,
      carname: "Toyota Camry",
      rent: 30,
      model: "Camry",
      mark: "Toyota",
      year: 2006,
      doors: "4/5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Hybrid",
    },
    {
      id: "4",
      img: BMWBox,
      carname: "BMW 320 ModernLine",
      rent: 35,
      model: "320",
      mark: "BMW",
      year: 2012,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      id: "5",
      img: MercedesBox,
      carname: "Mercedes-Benz GLK",
      rent: 50,
      model: "Benz GLK",
      mark: "Mercedes",
      year: 2006,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      id: "6",
      img: VWBox,
      carname: "VW Passat CC",
      rent: 25,
      model: "Passat CC",
      mark: "Volkswagen",
      year: 2008,
      doors: "4/5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  ];

  const renderData = (dataArray: Data[]) => {
    return dataArray.map((item) => (
      <div className="flex flex-col border border-[#d5d5d5] rounded-sm w-[340px] md:w-[340px] gap-[30px]">
        <div className="">
          <img
            src={item.img}
            alt="car_img"
            className=" overflow-clip h-[270px] "
          />
          <div className="flex flex-col px-[30px] py-[20px] ">
            <div className="flex items-center justify-between ">
              <div className="flex flex-col">
                <p className="text-[24px] font-bold ">{item.carname}</p>
                <span className="flex gap-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-star"
                  >
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-star"
                  >
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-star"
                  >
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-star"
                  >
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-star"
                  >
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[28px] font-bold ">${item.rent}</h4>
                <p className="text-[16px] ">per day</p>
              </div>
            </div>
            <div className="flex items-center justify-between  pb-[25px] my-[20px] border-b border-[#c6c6c6]">
              <div className="flex flex-col gap-y-[20px] ">
                <span className="flex items-center text-[18px] font-medium text-[#777]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-car"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                  &nbsp; {item.model}
                </span>
                <span className="flex items-center text-[18px] font-medium text-[#777]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-car"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                  &nbsp; {item.transmission}
                </span>
              </div>

              <div className="flex flex-col gap-y-[20px]  items-end">
                <span className="flex items-center text-[18px] font-medium text-[#777]">
                  {item.doors} &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-car"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                </span>

                <span className="flex items-center text-[18px] font-medium text-[#777]">
                  {item.fuel} &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-car"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="border-2 border-[#ff4d30] rounded-sm shadow-[0_10px_15px_0_rgba(255,83,48,.35)] px-[30px] py-[20px] bg-[#ff4d30] cursor-pointer transition-all duration-300 flex items-center justify-center">
              <Link to="/" className="text-[18px] text-[white] font-bold">
                Book Ride
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <PagesHero name="Vehicle Modles" />
      <div className="m-auto max-w-[1330px] px-[25px] ">
        <div className="flex flex-col flex-wrap gap-[30px]  py-[100px] md:max-w-[350px] lg:max-w-[730px] xl:max-w-[1080px] lg:flex-row justify-center m-auto">
          {renderData(data)}
        </div>
      </div>
      <BookBanner />
    </div>
  );
};

export default Models;
