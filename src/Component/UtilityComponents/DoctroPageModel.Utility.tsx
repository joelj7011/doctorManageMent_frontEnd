import React from "react";
import { globalResizeFunction } from "../../Utility/resizer.Utils";
import { IoArrowBackCircle } from "react-icons/io5";
import BookApointment from "../Patient/BookApintment/BookApointment.patient";
import BookeAppointManually from "../Patient/BookApintment/BookeAppointManually";
import { FaUserDoctor } from "react-icons/fa6";
interface data {
  name?: string;
  role?: string;
  profileImage?: string;
  availability?: object[];
  show?: boolean;
  tabletBool?: boolean;
  handleToggleShow?: (doctorId: any) => void;
  address?: string;
  history?: string[];
  show2?: boolean;
  show3?: boolean;
  handleToggleShow3?: () => void;
  handleToggleShow4?: () => void;
  show4?: boolean;
  id?: any;
  key?: any;
}
const DoctroPageModel = (props: data) => {
  const {
    name,
    role,
    profileImage,
    show,
    tabletBool,
    handleToggleShow,
    address,
    history,
    show2,
    show3,
    handleToggleShow3,
    handleToggleShow4,
    show4,
    id,
    availability,
  } = props;
  globalResizeFunction();

  return (
    <div className="fixed inset-0 flex items-center justify-evenly bg-black bg-opacity-80 ">
      <div className="bg-primaryGrey p-8 rounded-[2rem] shadow-lg w-full max-w-[70%] h-[60vh] flex justify-between laptop:w-[50%] relative">
        <div className="flex justify-evenly flex-col items-start w-[45%]  h-[50vh] ">
          <div className="flex justify-center w-full items-center h-[20vh] ">
            <div className=" border-2 w-[50%] h-[16vh] rounded-[7rem] flex justify-center items-center shadow-2xl]">
              <img
                src={`http://localhost:5000/images/${profileImage}`}
                alt="Profile"
                className="w-full h-auto object-cover rounded-full"
              />
            </div>
          </div>

          <div className="flex justify-center items-start flex-col h-[23vh] border-2 shadow-2xl w-full rounded-[3rem]">
            <div className="space-y-4 p-3">
              <div>
                <p className="text-lg font-medium">Speciality:</p>
              </div>
              <div>
                <p className="text-lg font-medium">Rating:</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around py-3  w-[45%] h-[50vh] ">
          <div className="flex h-[20vh] justify-center items-center shadow-lg w-full rounded-[3rem] border-2">
            <p className="text-primaryBlack text-4xl font-medium">NUMBER</p>
          </div>

          <div className=" flex items-center justify-around w-full h-[23vh] border-2 rounded-[3rem] shadow-lg  flex-col">
            <div className="flex w-full justify-around">
              <div className="bg-primaryGrey w-[40%] h-[5vh] rounded-lg flex justify-center items-center border-2">
                <p className="text-primaryBlack text-xl font-bold">NEXT</p>
              </div>
              <div className="bg-primaryRed w-[40%] h-[5vh] rounded-lg flex justify-center items-center">
                <p className="text-white text-xl font-bold  ">FULL</p>
              </div>
            </div>

            <div className="flex w-full justify-around">
              <div className="bg-primaryGrey w-[40%] h-[5vh] rounded-lg flex justify-center items-center border-2">
                <p className="text-primaryBlack text-xl font-bold ">
                  <BookApointment />
                </p>
              </div>

              <div className="bg-primaryRed w-[40%] h-[5vh] rounded-lg flex justify-center items-center">
                {!show4 ? (
                  <button onClick={handleToggleShow4}>
                    <FaUserDoctor size={30} />
                  </button>
                ) : (
                  <BookeAppointManually />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          <button onClick={handleToggleShow}>
            <IoArrowBackCircle size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctroPageModel;
