import React from "react";
import { HiEyeDropper } from "react-icons/hi2";
import { IoIosLock } from "react-icons/io";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { MdSettingsApplications } from "react-icons/md";
import { Link } from "react-router-dom";

const ProfileInformation = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-16 my-10 ">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <IoPerson className="text-2xl font-semibold" />
          <h1 className="font-bold text-xl">Profile Information</h1>
        </div>
        <div className="px-3 py-2 rounded bg-green-400 hover:bg-green-600 text-white">
          <Link to={"/dashboard"} className="flex gap-2 md:gap-4 items-center">
            <IoHomeSharp className="font-semibold hover:text-green-500" />
            <h1 className="text-white font-semibold">Dashboard</h1>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-4 md:mx-16 gap-1">
        <div className="w-full lg:h-[40vh] md:w-1/4 bg-white shadow-md p-4 rounded mb-4 md:mb-0">
          <div className="mb-4">
            <div className="flex items-center mb-2 gap-3">
              <MdSettingsApplications className="text-2xl font-semibold" />
              <span className="font-semibold text-blue-500">
                <a href="/">Basic Information</a>
              </span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2 gap-3">
              <IoIosLock className="text-2xl font-semibold" />
              <a href="#password" style={{ scrollBehavior: "smooth" }}>
                <span className="font-semibold text-gray-500">Password</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 rounded">
          <div className="bg-white px-5 py-3 border border-gray-300 shadow rounded">
            <img
              src="https://img.freepik.com/premium-photo/light-madonna-blue-abstract-creative-background-design_851755-186890.jpg?w=1380"
              className="w-full h-44 rounded"
              alt=""
            />
            <div className="">
              <div className="flex items-center gap-3 px-4 py-3">
                <IoPerson className="font-bold text-xl" />
                <h1 className="font-bold text-md">Basic Information</h1>
              </div>
              <form
                action=""
                className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5"
              >
                <div className="">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="Admin"
                    className="px-3 py-2 rounded border-gray-400 border w-full"
                  />
                </div>
                <div className="">
                  <label htmlFor="">
                    Phone Number <span>(Optional)</span>
                  </label>
                  <input
                    type="number"
                    placeholder="+00xxxxxxxxxxxxx"
                    className="px-3 py-2 rounded border-gray-400 border w-full"
                  />
                </div>
                <div className="">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="admin@admin.com"
                    className="px-3 py-2 rounded border-gray-400 border w-full"
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-end items-center px-5 py-3">
              <button className="px-3 py-2 border bg-green-500 hover:bg-green-700 text-white rounded">
                Save Changes
              </button>
            </div>
          </div>

          <a href="/setting">
            <div
              className="bg-white px-5 py-3 border border-gray-300 shadow rounded my-5"
              id="password"
            >
              <div className="flex items-center gap-3">
                <IoIosLock className="font-bold text-xl" />
                <h1 className="text-md font-semibold">Change Password</h1>
              </div>
              <br />
              <form action="" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="">
                  <label htmlFor="">New Password *</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter New Password"
                    className="border border-gray-300 px-3 py-2 rounded w-full"
                  />
                </div>
                <div className="">
                  <label htmlFor="">Confirm Password *</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-300 px-3 py-2 rounded w-full"
                  />
                </div>
              </form>
              <div className="flex justify-end items-center px-2 py-3">
                <button className="px-3 py-2 border bg-green-500 hover:bg-green-700 text-white rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
