import { useState } from "react";
import Audi from "../assets/images/audia1.jpg";
import VW from "../assets/images/golf6.jpg";
import Camry from "../assets/images/toyotacamry.jpg";
import BMW from "../assets/images/bmw320.jpg";
import GLK from "../assets/images/benz.jpg";
import CC from "../assets/images/passatcc.jpg";

const PickSection = () => {
  const [isSelected, setisSelected] = useState<string>("1");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.id);
    setisSelected(e.currentTarget.id);
  };

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
      img: Audi,
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
      img: VW,
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
      img: Camry,
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
      img: BMW,
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
      img: GLK,
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
      img: CC,
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
      <button
        className={`text-[20px] font-semibold bg-[${
          isSelected === item.id ? "#ff4d30" : "#e9e9e9"
        }] text-[${
          isSelected === item.id ? "white" : "black"
        }] px-[25px] py-[15px] w-full text-left`}
        onClick={handleClick}
        id={item.id}
        key={item.id}
      >
        {item.carname}
      </button>
    ));
  };

  const renderSelectedData = () => {
    const selectedObject = data.find((item) => item.id === isSelected);
    console.log(selectedObject);

    if (!selectedObject) {
      return <p>No matching object found</p>;
    }

    // Filter out 'id' and 'img' properties and generate JSX for each remaining property
    const propertyRows = Object.entries(selectedObject)
      .filter(
        ([key]) =>
          key !== "id" && key !== "img" && key !== "carname" && key !== "rent"
      )
      .map(([key, value]) => (
        <div
          key={key}
          className="flex items-center justify-around px-[5px] py-[9px] border-2 border-[#706f7b] border-t-0 text-[14px] text-center"
        >
          <span className="w-full border-r-2 border-[#706f7b] capitalize">
            {key}
          </span>
          <span className="w-full">{value}</span>
        </div>
      ));

    return (
      <div className="flex flex-col gap-[50px] items-center justify-center md:flex-row md:justify-between xl:gap-[110px]">
        <div className="flex items-start justify-center w-[340px] md:w-[458px] lg:w-[500px] h-auto">
          <img
            src={selectedObject.img}
            alt=""
            className="overflow-clip mt-[60px] w-full"
          />
        </div>
        <div className="w-[250px]">
          <div className="flex items-center px-[19px] py-[3px] w-full text-[18px] bg-[#ff4d30] text-[white] gap-[15px]">
            <span className="text-[28px] font-bold">
              ${selectedObject.rent}
            </span>{" "}
            / rent per day
          </div>
          <div className="grid grid-rows-[auto] grid-cols-[1fr]">
            {propertyRows}
          </div>
          <a
            className="mt-[14px] p-[10px] flex justify-center w-[250px] text-[white] bg-[#ff4d30] shadow-[6px_6px_0_#efe9e9] text-[20px] font-semibold uppercase cursor-pointer"
            href="#booking-section"
          >
            Reserve Now
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="pick-section" className="py-[100px] bg-[white]">
      <div className="m-auto max-w-[1330px] px-[25px]">
        <div className="flex flex-col items-center text-center">
          <div className="m-auto flex flex-col w-full items-center max-w-[500px] mb-[50px]">
            <h3 className="text-[24px] font-medium mb-[7px] w-full">
              Vehicle Models
            </h3>
            <h2 className="text-[42px] font-bold leading-[1.2] mb-[10px] mt-[5px]">
              Our rental fleet
            </h2>
            <p className="text-[16px] leading-[24px] text-[rgb(112,111,123)]">
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>

          <div className="flex flex-col justify-between gap-[50px] w-full xl:flex-row xl:gap-[10px]">
            <div className="flex flex-col gap-[7px]">{renderData(data)}</div>

            <div>{renderSelectedData()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickSection;
