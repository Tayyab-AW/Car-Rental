import BookBanner from "../components/BookBanner";
import PagesHero from "../components/PagesHero";
import T1 from "../assets/images/t1.png";
import T2 from "../assets/images/t2.png";
import T3 from "../assets/images/t3.png";
import T4 from "../assets/images/t4.png";
import T5 from "../assets/images/t5.png";
import T6 from "../assets/images/t6.png";

const Team = () => {
  type Data = {
    id: string;
    img: string;
    name: string;
    role: string;
  };

  const data: Data[] = [
    {
      id: "1",
      img: T1,
      name: "Luke Miller",
      role: "Saleman",
    },
    {
      id: "2",
      img: T2,
      name: "Michael Diaz",
      role: "Buisness Owner",
    },
    {
      id: "3",
      img: T3,
      name: "Briana Ross",
      role: "Photographer",
    },
    {
      id: "4",
      img: T4,
      name: "Lauren Rivera",
      role: "Car Detailist",
    },
    {
      id: "5",
      img: T5,
      name: "Martin Rizz",
      role: "Mechanic",
    },
    {
      id: "6",
      img: T6,
      name: "Caitlyn Hunt",
      role: "Manager",
    },
  ];

  const renderData = (dataArray: Data[]) => {
    return dataArray.map((item) => (
      <div
        key={item.id}
        className="bg-[#fff] shadow-[0_20px_10px_0_rgba(0,0,0,.08)] text-center"
      >
        <div className="bg-[#f6f6f6] h-auto w-full">
          <img src={item.img} alt="team_img" />
        </div>
        <div className="p-[30px] ">
          <h3 className="text-[22px] font-bold">{item.name}r</h3>
          <p className="text-[16px] font-medium text-[#777]">{item.role}</p>
        </div>
      </div>
    ));
  };
  return (
    <div className="w-full bg-[white]">
      <PagesHero name="Our Team" />
      <div className="m-auto max-w-[1330px] px-[25px] ">
        <div className="flex flex-col flex-wrap gap-[40px]  py-[100px] md:max-w-[350px] lg:max-w-[740px] xl:max-w-[1130px] lg:flex-row justify-center m-auto">
          {renderData(data)}
        </div>
      </div>
      <BookBanner />
    </div>
  );
};

export default Team;
