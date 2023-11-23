import BookBG from "../assets/images/book-bg.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import CompleteReservationModal from "../Modals/CompleteReservationModal";

interface UserInput {
  carType: string;
  pickUp: string;
  dropOff: string;
  pickUpDate: Date | string;
  dropOffDate: Date | string;
}

const dateObject = new Date();

const day = dateObject.getDate();
const month = dateObject.getMonth() + 1; // Add 1 to get the correct month
const year = dateObject.getFullYear();

const formattedDate = `${year}-${month}-${day}`;

console.log(formattedDate);

const defaultValues: UserInput = {
  carType: "",
  pickUp: "",
  dropOff: "",
  pickUpDate: formattedDate,
  dropOffDate: formattedDate,
};

const validationSchema = yup.object({
  carType: yup.string().required("Car type is required"),
  pickUp: yup.string().required("Pick-up is required"),
  dropOff: yup.string().required("Drop-off is required"),
  pickUpDate: yup
    .date()
    .required("Pick-up Date is required")
    .min(
      formattedDate,
      "Pick-up Date must be greater than or equal to the current date"
    ),
  dropOffDate: yup
    .date()
    .required("Drop-off Date is required")
    .min(
      yup.ref("pickUpDate"),
      "Drop-off Date must be greater than or equal to Pick-up Date"
    ),
});

const Booking = () => {
  const [Modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }, // get errors
  } = useForm<UserInput>({
    defaultValues,
    resolver: yupResolver<UserInput>(validationSchema),
  });
  const onSubmitHandler = (values: UserInput) => {
    console.log(`Submitted`);
    console.table(values);
    setModal(true);
  };

  return (
    <section id="booking-section" className="relative ">
      <div className="modal-overlay hidden opacity-0 fixed h-full top-0 right-0 z-[999999] w-full bg-transparent"></div>
      <div className="m-auto max-w-[1330px] px-[25px]  ">
        <div className="mb-[100px] ">
          <div
            className="flex flex-col pl-[25px] pr-[25px] pt-[40px] pb-[50px] relative rounded-[5px] h-auto z-[4] bg-[white] text-[#010103] shadow-[0_10px_20px_0_rgba(0,0,0,.1)] "
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

            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="form grid gap-[20px] grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] "
            >
              <div>
                <label
                  htmlFor="carType"
                  className="flex items-center mb-[12px] text-[16px] font-semibold"
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
                    className="input-icon"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                  &nbsp; Select Your Car Type
                  <b className="text-[#ff4d30]">*</b>
                </label>
                <select
                  {...register("carType")}
                  id="carType"
                  className={`block w-full mt-1 rounded-md  h-[42px] px-[12px] py-[8px]  shadow-sm border-1  ring-0 text-[15px]`}
                  style={{
                    border: "1px solid",
                    borderColor: errors.carType ? "#FF0000" : "#ccd7e6",
                  }}
                >
                  <option value="" disabled>
                    Select your car type
                  </option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
                {errors.carType && (
                  <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                    {errors.carType.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="pickUp"
                  className="flex items-center mb-[12px] text-[15px] font-semibold"
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
                    className="input-icon"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  &nbsp; Pick-up <b className="text-[#ff4d30]">*</b>
                </label>
                <select
                  {...register("pickUp")}
                  id="pickUp"
                  className={`block w-full mt-1 rounded-md  h-[42px] px-[12px] py-[8px]  shadow-sm border-1  ring-0 text-[15px]`}
                  style={{
                    border: "1px solid",
                    borderColor: errors.pickUp ? "#FF0000" : "#ccd7e6",
                  }}
                >
                  <option value="" disabled>
                    Select Pick-Up Location
                  </option>
                  <option>Belgrade</option>
                  <option>Novi Sad</option>
                  <option>Nis</option>
                  <option>Kragujevac</option>
                  <option>Subotica</option>
                </select>
                {errors.pickUp && (
                  <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                    {errors.pickUp.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="dropOff"
                  className="flex items-center mb-[12px] text-[16px] font-semibold"
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
                    className="input-icon"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  &nbsp; Drop-of <b className="text-[#ff4d30]">*</b>
                </label>
                <select
                  {...register("dropOff")}
                  id="dropOff"
                  className={`block w-full mt-1 rounded-md  h-[42px] px-[12px] py-[8px]  shadow-sm border-1 ring-0  text-[15px]`}
                  style={{
                    border: "1px solid",
                    borderColor: errors.dropOff ? "#FF0000" : "#ccd7e6",
                  }}
                >
                  <option value="" disabled>
                    Select Pick-Up Location
                  </option>
                  <option>Novi Sad</option>
                  <option>Belgrade</option>
                  <option>Nis</option>
                  <option>Kragujevac</option>
                  <option>Subotica</option>
                </select>
                {errors.dropOff && (
                  <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                    {errors.dropOff.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="pickUpDate"
                  className="flex items-center mb-[12px] text-[16px] font-semibold"
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
                    className="input-icon"
                  >
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>
                  </svg>
                  &nbsp; Pick-up Date <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  type="date"
                  {...register("pickUpDate")}
                  id="pickUpDate"
                  className={`block w-full mt-1 rounded-md  h-[42px] px-[12px] py-[8px]  shadow-sm border-1 ring-0 text-[15px]`}
                  style={{
                    border: "1px solid",
                    borderColor: errors.pickUpDate ? "#FF0000" : "#ccd7e6",
                  }}
                />
                {errors.pickUpDate && (
                  <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                    {errors.pickUpDate.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="dropOffDate"
                  className="flex items-center mb-[12px] text-[16px] font-semibold"
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
                    className="input-icon"
                  >
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>
                  </svg>
                  &nbsp; Drop-off Date <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  type="date"
                  {...register("dropOffDate")}
                  id="dropOffDate"
                  className={`block w-full mt-1 rounded-md  h-[42px] px-[12px] py-[8px]  shadow-sm border-1 ring-0 text-[15px] `}
                  style={{
                    border: "1px solid",
                    borderColor: errors.dropOffDate ? "#FF0000" : "#ccd7e6",
                  }}
                />
                {errors.dropOffDate && (
                  <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                    {errors.dropOffDate.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="p-[13px] text-[18px] font-medium text-[white] bg-[#ff4d30] shadow-[0_10px_15px_rgba(255,83,48,.35)] md:h-[48px] self-end"
              >
                Reserve
              </button>
            </form>
          </div>
        </div>
      </div>
      {Modal && <CompleteReservationModal setModal={setModal} />}
    </section>
  );
};

export default Booking;
