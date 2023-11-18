import BookBG from "../assets/images/book-bg.png";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const departments = [
  { value: "Computer-Science", label: "Computer Science" },
  { value: "Physics", label: "Physics" },
  { value: "Chemistry", label: "Chemistry" },
  { value: "Mathematics", label: "Mathematics" },
];

const Booking = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section id="booking-section" className="relative ">
      <div className="modal-overlay hidden opacity-0 fixed h-full top-0 right-0 z-[999999] w-full bg-transparent"></div>
      <div className="m-aut0 max-w-[1330px] px-[25px]  ">
        <div className="mb-[100px] ">
          <div
            className="flex flex-col pl-[25px] pr-[25px] pt-[40px] pb-[50px] relative rounded-[5px] h-[725px] z-[4] bg-[white] text-[#010103] shadow-[0_10px_20px_0_rgba(0,0,0,.1)]"
            style={{
              backgroundImage: `url(${BookBG})`,
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h2 className="text-[24px] font-bold mb-[27px]">Book a car</h2>
            <p className="hidden">
              All fields required!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-x"
              >
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </p>
            <p className="hidden">
              Check your email to confirm an order.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-x"
              >
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="flex items-center mb-[12px] text-[16px] font-semibold">
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
                    className="input-icon"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                  &nbsp; Select Your Car Type{" "}
                  <b className="text-[#ff4d30]">*</b>
                </label>
                <Controller
                  name="Select your car type"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select placeholder="Select your car type" {...field} options={departments} />
                  )}
                />
                {errors.department && (
                  <p className="errorMsg">This is a required field.</p>
                )}
              </div>
              <div className="form-control">
                <label></label>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
