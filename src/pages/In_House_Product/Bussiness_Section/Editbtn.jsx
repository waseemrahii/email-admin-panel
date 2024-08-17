import React from "react";
import { BsBank } from "react-icons/bs";
import { CiCircleAlert } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const Editbtn = () => {
  return (
    <>
      {/* <div className="w-full h-full bg-[#F9F9FB]">
        <div className="flex items-center">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
            className="h-7 w-7 mt-10 ml-10"
            alt="Bank Icon"
          />
          <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold">
            Edit Bank Info
          </p>
        </div>
        <div className="bg-white border rounded-lg border-zinc-300 shadow-lg w-[75vw] h-[55vh] ml-11 mt-5">
          <p className="text-[#334257] font-semibold mt-4 ml-5 text-lg">
            Edit bank info
          </p>
          <p className=" border-b-4 border-b-[#F9F9FB] mt-2 shadow-2xl"></p>
          <div className="flex mt-3 gap-3 items-center ">
            <div>
              <p className="ml-5">Bank name*</p>
              <input
                type="text"
                name="bank name"
                value="City Bank"
                className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800"
              />
            </div>
            <div>
              <p className="ml-5">Branch name*</p>
              <input
                type="text"
                name="branch name"
                value="Mirpur-12"
                className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800"
              />
            </div>
          </div>
          <div className="flex mt-3 gap-3 items-center ">
            <div>
              <p className="ml-5">Holder name*</p>
              <input
                type="text"
                name="holder name"
                value="Fatema"
                className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 hover:border-sky-800"
              />
            </div>
            <div>
              <p className="ml-5">Account no*</p>
              <input
                type="text"
                name="account no"
                value="12345678"
                className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800 "
              />
            </div>
          </div>
          <div className="flex items-end ">
            <button className="border border-[#ED4C78] w-20 h-10 rounded mr-2  mt-3 ml-[80%] hover:bg-rose-500 bg-[#ED4C78]">
              Cancel
            </button>
            <button className="border border-blue-500 w-20 h-10 rounded hover:bg-[#7da12f] bg-[#A1CB46]">
              Update
            </button>
          </div>
        </div>
      </div> */}
      <div className="w-full h-full bg-[#F9F9FB] px-4 py-8 md:px-12">
        <div className="flex items-center">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
            className="h-7 w-7 mt-4 md:mt-10 md:ml-10"
            alt="Bank Icon"
          />
          <p className="ml-3 mt-4 md:mt-10 text-[#334257] text-xl font-semibold">
            Edit Bank Info
          </p>
        </div>
        <div className="bg-white border rounded-lg border-zinc-300 shadow-lg w-full md:w-[75vw] h-auto md:h-[55vh] mx-4 md:ml-11 mt-5 p-4">
          <p className="text-[#334257] font-semibold mt-4 text-lg">
            Edit bank info
          </p>
          <p className="border-b-4 border-b-[#F9F9FB] mt-2 shadow-2xl"></p>
          <div className="flex flex-col md:flex-row mt-3 gap-3 items-center">
            <div className="w-full md:w-[35vw]">
              <p className="ml-5">Bank name*</p>
              <input
                type="text"
                name="bank name"
                value="City Bank"
                className="ml-5 mt-3 pl-3 border w-full h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800"
              />
            </div>
            <div className="w-full md:w-[35vw]">
              <p className="ml-5">Branch name*</p>
              <input
                type="text"
                name="branch name"
                value="Mirpur-12"
                className="ml-5 mt-3 pl-3 border w-full h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-3 gap-3 items-center">
            <div className="w-full md:w-[35vw]">
              <p className="ml-5">Holder name*</p>
              <input
                type="text"
                name="holder name"
                value="Fatema"
                className="ml-5 mt-3 pl-3 border w-full h-11 rounded border-gray-500 hover:border-sky-800"
              />
            </div>
            <div className="w-full md:w-[35vw]">
              <p className="ml-5">Account no*</p>
              <input
                type="text"
                name="account no"
                value="12345678"
                className="ml-5 mt-3 pl-3 border w-full h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button className="border border-[#ED4C78] w-20 h-10 rounded hover:bg-rose-500 bg-[#ED4C78]">
              Cancel
            </button>
            <button className="border border-blue-500 w-20 h-10 rounded hover:bg-[#7da12f] bg-[#A1CB46]">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editbtn;
