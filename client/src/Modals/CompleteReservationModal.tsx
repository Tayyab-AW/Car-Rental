import Audi from "../assets/images/audia1.jpg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: number;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}

const defaultValues: PersonalInfo = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  age: 18,
  email: "",
  address: "",
  city: "",
  zipCode: "",
};

const phoneRegExp = /^\+?[0-9]{10,12}$/;

const zipCodeRegExp = /^\d{5}(?:[-\s]\d{4})?$/;

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Car type is required"),
  lastName: yup.string().required("Pick-up is required"),
  phoneNumber: yup
    .string()
    .required("Pick-up is required")
    .matches(phoneRegExp, "Invalid phone number"),
  age: yup
    .number()
    .required("Drop-off is required")
    .positive("Please enter a positive value"),
  email: yup
    .string()
    .email("Invalid email address format")
    .required("Drop-off is required"),
  address: yup.string().required("Drop-off is required"),
  city: yup.string().required("Drop-off is required"),
  zipCode: yup
    .string()
    .required("Drop-off is required")
    .matches(zipCodeRegExp, "Invalid zip code"),
});

const CompleteReservationModal = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // get errors
  } = useForm<PersonalInfo>({
    defaultValues,
    resolver: yupResolver<PersonalInfo>(validationSchema),
  });
  const onSubmitHandler = (values: PersonalInfo) => {
    console.log(`Submitted`);
    console.table(values);
    props.setModal(false);
  };

  const handleClick = () => {
    props.setModal(false);
  };

  return (
    <div className="booking-modal z-[9999] bg-[white] border-[2px_solid_#fff] h-100vh left-[0px] top-[0px] right-[0px] bottom-[0px] overflow-x-hidden overflow-y-scroll pr-[2px] fixed flex flex-col shadow-lg p-[10px]">
      <div className="flex items-center justify-between bg-[#ff4d30] p-[10px_15px]  text-[white]">
        <h2 className="text-[20px] font-bold uppercase">
          Complete Reservation
        </h2>
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
          className="tabler-icon tabler-icon-x"
          onClick={handleClick}
        >
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </div>

      <div className="flex flex-col p-[20px_30px] gap-[15px] bg-[#ffeae6] w-full h-auto">
        <h4 className=" text-[#ff4d30] text-[19px] font-bold">
          Upon completing this reservation enquiry, you will receive:
        </h4>
        <p className="text-[16px] font-medium  text-[#777] font-[Poppins]">
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>

      <div className="grid bg-[white] grid-cols-[1fr] text-center p-[30px] border-b border-b-[1px_solid_gray]">
        <div className="flex flex-col gap-[32px] ">
          <div className="flex flex-col gap-[20px]">
            <h5 className="text-[#ff4d30] text-[18px] font-bold ">
              Location &amp; Date
            </h5>
            <span className="flex justify-center gap-[10px] ">
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
                className="tabler-icon tabler-icon-map-pin-filled"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <div>
                <h6 className="text-[15px] font-bold mb-[2px]  ">
                  Pick-Up Date &amp; Time
                </h6>
                <p className="text-[#777] text-[16px] ">
                  2023-11-04 / <input type="time" className="input-time" />
                </p>
              </div>
            </span>
          </div>
          <div className="booking-modal__car-info__dates">
            <span className="flex justify-center gap-[10px] ">
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
                className="tabler-icon tabler-icon-map-pin-filled"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <div>
                <h6 className="text-[15px] font-bold mb-[2px]  ">
                  Drop-Off Date &amp; Time
                </h6>
                <p className="text-[#777] text-[16px] ">
                  2023-11-04 / <input type="time" className="input-time" />
                </p>
              </div>
            </span>
          </div>
          <div className="booking-modal__car-info__dates">
            <span className="flex justify-center gap-[10px] ">
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
                className="tabler-icon tabler-icon-map-pin-filled"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <div>
                <h6 className="text-[15px] font-bold mb-[2px]  ">
                  Pick-Up Location
                </h6>
                <p className="text-[#777] text-[16px] ">Novi Sad</p>
              </div>
            </span>
          </div>
          <div className="booking-modal__car-info__dates">
            <span className="flex justify-center gap-[10px] ">
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
                className="tabler-icon tabler-icon-map-pin-filled"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <div>
                <h6 className="text-[15px] font-bold mb-[2px]  ">
                  Drop-Off Location
                </h6>
                <p className="text-[#777] text-[16px] ">Belgrade</p>
              </div>
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-[35px] gap-[30px] ">
          <h5 className="text-[#ff4d30] text-[18px] font-bold ">
            <span className="text-[#010103]">Car -</span> Audi A1 S-Line
          </h5>
          <img src={Audi} alt="car_img" />
        </div>
      </div>

      <div className="flex flex-col p-[30px] ">
        <h4 className="text-[#ff4d30] text-[18px] font-bold uppercase mb-[20px] ">
          Personal Information
        </h4>
        <form
          className="flex flex-col "
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="grid py-[10px] grid-cols-[1fr] gap-[20px]">
            <span className="gap-[4px] flex flex-col">
              <label
                htmlFor="firstName"
                className="text-[16px] font-medium text-[#777] "
              >
                First Name <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                {...register("firstName")}
                id="firstName"
                className="px-[14px] py-[15px] text-[15px] font-medium text-[#555] bg-[#dbdbdb] outline-none ring-0"
                type="text"
                placeholder="Enter your first name"
                style={{
                  border: errors.firstName ? "1px solid" : "none",
                  borderColor: errors.firstName ? "#FF0000" : "",
                }}
              />
              {errors.firstName && (
                <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                  {errors.firstName.message}
                </p>
              )}
            </span>
          </div>

          <div className="grid py-[10px] grid-cols-[1fr] gap-[20px]">
            <span className="gap-[4px] flex flex-col">
              <label
                htmlFor="lastName"
                className="text-[16px] font-medium text-[#777] "
              >
                Last Name <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                {...register("lastName")}
                id="lastName"
                className="px-[14px] py-[15px] text-[15px] font-medium text-[#555] bg-[#dbdbdb] outline-none ring-0"
                type="text"
                placeholder="Enter your last name"
                style={{
                  border: errors.lastName ? "1px solid" : "none",
                  borderColor: errors.lastName ? "#FF0000" : "",
                }}
              />
              {errors.lastName && (
                <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                  {errors.lastName.message}
                </p>
              )}
            </span>
          </div>

          <div className="grid py-[10px] grid-cols-[1fr] gap-[20px]">
            <span className="gap-[4px] flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="text-[16px] font-medium text-[#777] "
              >
                Phone Number <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                {...register("phoneNumber")}
                id="phoneNumber"
                className="px-[14px] py-[15px] text-[15px] font-medium text-[#555] bg-[#dbdbdb] outline-none ring-0"
                type="text"
                placeholder="Enter your phone number"
                style={{
                  border: errors.phoneNumber ? "1px solid" : "none",
                  borderColor: errors.phoneNumber ? "#FF0000" : "",
                }}
              />
              {errors.phoneNumber && (
                <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                  {errors.phoneNumber.message}
                </p>
              )}
            </span>
          </div>

          <div className="grid py-[10px] grid-cols-[1fr] gap-[20px]">
            <span className="gap-[4px] flex flex-col">
              <label
                htmlFor="age"
                className="text-[16px] font-medium text-[#777] "
              >
                Age <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                {...register("age")}
                id="age"
                className="px-[14px] py-[15px] text-[15px] font-medium text-[#555] bg-[#dbdbdb] outline-none ring-0"
                type="number"
                placeholder="18"
                style={{
                  border: errors.age ? "1px solid" : "none",
                  borderColor: errors.age ? "#FF0000" : "",
                }}
              />
              {errors.age && (
                <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                  {errors.age.message}
                </p>
              )}
            </span>
          </div>

          <div className="grid py-[10px] grid-cols-[1fr] gap-[20px]">
            <span className="gap-[4px] flex flex-col">
              <label
                htmlFor="email"
                className="text-[16px] font-medium text-[#777] "
              >
                Email <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                {...register("email")}
                id="email"
                className="px-[14px] py-[15px] text-[15px] font-medium text-[#555] bg-[#dbdbdb] outline-none ring-0"
                type="email"
                placeholder="Enter your email address"
                style={{
                  border: errors.email ? "1px solid" : "none",
                  borderColor: errors.email ? "#FF0000" : "",
                }}
              />
              {errors.email && (
                <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                  {errors.email.message}
                </p>
              )}
            </span>
          </div>

          <div className="grid py-[10px] grid-cols-[1fr] gap-[20px]">
            <span className="gap-[4px] flex flex-col">
              <label
                htmlFor="address"
                className="text-[16px] font-medium text-[#777] "
              >
                Address <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                {...register("address")}
                id="address"
                className="px-[14px] py-[15px] text-[15px] font-medium text-[#555] bg-[#dbdbdb] outline-none ring-0"
                type="text"
                placeholder="Enter your street address"
                style={{
                  border: errors.address ? "1px solid" : "none",
                  borderColor: errors.address ? "#FF0000" : "",
                }}
              />
              {errors.address && (
                <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                  {errors.address.message}
                </p>
              )}
            </span>
          </div>

          <div className="grid py-[10px] grid-cols-[1fr] gap-[20px]">
            <span className="gap-[4px] flex flex-col">
              <label
                htmlFor="city"
                className="text-[16px] font-medium text-[#777] "
              >
                City <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                {...register("city")}
                id="city"
                className="px-[14px] py-[15px] text-[15px] font-medium text-[#555] bg-[#dbdbdb] outline-none ring-0"
                type="text"
                placeholder="Enter your city"
                style={{
                  border: errors.city ? "1px solid" : "none",
                  borderColor: errors.city ? "#FF0000" : "",
                }}
              />
              {errors.city && (
                <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                  {errors.city.message}
                </p>
              )}
            </span>
          </div>

          <div className="grid py-[10px] grid-cols-[1fr] gap-[20px]">
            <span className="gap-[4px] flex flex-col">
              <label
                htmlFor="zipCode"
                className="text-[16px] font-medium text-[#777] "
              >
                Zip Code <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                {...register("zipCode")}
                id="zipCode"
                className="px-[14px] py-[15px] text-[15px] font-medium text-[#555] bg-[#dbdbdb] outline-none ring-0"
                type="number"
                placeholder="Enter your zip code"
                style={{
                  border: errors.zipCode ? "1px solid" : "none",
                  borderColor: errors.zipCode ? "#FF0000" : "",
                }}
              />
              {errors.zipCode && (
                <p className="error-message flex items-center m-[6px] text-[12px] text-[#FF0000]">
                  {errors.zipCode.message}
                </p>
              )}
            </span>
          </div>

          <span className="my-[20px] flex items-center gap-[10px]">
            <input type="checkbox" className="w-[16px] h-[16px] rounded-md" />
            <p className="text-[16px] text-[#565454]">
              Please send me latest news and updates
            </p>
          </span>
          <div className="mx-[-30px] p-[30px] flex bg-[#dbdbdb] items-center justify-center">
            <button
              type="submit"
              className="border-[#ff0] border px-[20px] py-[12px] text-[24px] font-bold bg-[#ff4d30] text-[white] transition-all duration-200"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteReservationModal;
