import Appstore from "../assets/svgs/appstore.svg";
import Google from "../assets/svgs/googleapp.svg";
import BG from "../assets/images/bg02.png";

const DownloadSection = () => {
  return (
    <section
      id="download-secction"
      className="py-[100px] h-auto w-full"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="m-auto max-w-[1330px] px-[25px] ">
        <div className="download-text flex flex-col max-w-[550px] gap-[20px] text-center md:text-left">
          <h2 className="text-[42px] font-bold">
            Download our app to get most out of it
          </h2>
          <p className="text-[16px] leading-[24px] text-[#706f7b]">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex flex-col items-center justify-center mt-[20px] gap-[30px] md:flex-row md:justify-start ">
            <img
              alt="download_img"
              src={Google}
              className="w-[220px] overflow-clip cursor-pointer"
            />
            <img
              alt="download_img"
              src={Appstore}
              className="w-[220px] overflow-clip cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
