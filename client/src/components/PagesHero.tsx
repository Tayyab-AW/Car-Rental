import { Link } from "react-router-dom";
import HerosBG from "../assets/images/heroes-bg..png";

const PagesHero = (props: { name: string }) => {
  return (
    <section
      className="relative h-[410px] "
      style={{
        backgroundImage: `url(${HerosBG})`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full w-full absolute right-0 top-0 bg-[hsla(0,0%,100%,.92)]"></div>
      <div className="max-w-[1330px] m-auto px-[25px] flex  h-full">
        <div className="flex flex-col justify-center relative z-[3] w-full h-full">
          <h3 className="text-[36px] font-bold mb-[5px]">{props.name}</h3>
          <p className="text-[16px] font-medium">
            <Link to="/">Home</Link> / {props.name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PagesHero;
