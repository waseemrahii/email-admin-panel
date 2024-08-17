import React, { useState } from "react";

const Shop_Setting = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="w-full h-[120vh] bg-[#F9F9FB]">
    //   <div className="flex items-center">
    //     <img
    //       src="https://6valley.6amtech.com/public/assets/back-end/img/shop-info.png"
    //       className="h-7 w-7 mt-10 ml-10"
    //       alt="Shop Icon"
    //     />
    //     <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold">
    //       Shop Info
    //     </p>
    //   </div>
    //   <p className="ml-10 mt-5 border-b-2 border-blue-600 w-12 font-semibold text-blue-500">
    //     General
    //   </p>
    //   <div className="bg-white shadow-lg w-[76vw] h-[25vh] ml-10 rounded-lg mt-5 p-6">
    //     <div className="border border-blue-800 rounded-lg w-[73vw] h-[8vh] flex items-center justify-between">
    //       <p className="text-indigo-700 ml-4">Temporary close</p>
    //       <button
    //         className={`w-12 h-6 mr-3 rounded-full ${
    //           isOpen ? "bg-blue-500" : "bg-gray-300"
    //         }`}
    //         onClick={toggleHandler}
    //       >
    //         <span
    //           className={`block w-5 h-5 mr-3 rounded-full ${
    //             isOpen ? "transform translate-x-7" : ""
    //           } bg-white shadow-md`}
    //         />
    //       </button>
    //     </div>
    //     <p className="mt-2">
    //       By turning on temporary close mode, your shop will be shown as
    //       temporarily off on the website and app for customers. They cannot
    //       purchase or place orders from your shop during this time.
    //     </p>
    //   </div>
    //   <div className="bg-white shadow-lg w-[76vw] h-[50vh] ml-10 hover:shadow-lg rounded-lg mt-5 p-6">
    //     <div className="flex items-center">
    //       <p className="ml-2 text-xl text-[#334257] font-semibold whitespace-nowrap">
    //         My Shop Info
    //       </p>
    //       <button className="rounded-full ml-auto min-w-36 text-sm h-11 border border-blue-700">
    //         Go to Vacation Mode
    //       </button>
    //       <button className="rounded-full ml-3 w-20 bg-indigo-500 text-white h-12 border-2 border-blue-700">
    //         Edit
    //       </button>
    //     </div>
    //     <div className="border-b-4 border-[#F9F9FB] w-full mt-2"></div>
    //     <div className="flex gap-2 mt-4">
    //       <img
    //         src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f6e190f4c.png"
    //         className="rounded-full h-[30vh] w-[15vw]"
    //       />
    //       <div className="flex flex-col">
    //         <div className="flex items-center mt-4">
    //           <p className="text-black text-lg ml-4 font-semibold">Name</p>
    //           <p className="text-black text-lg ml-1">:</p>
    //           <p className="text-black text-lg ml-1">Mart Morning</p>
    //         </div>
    //         <div className="flex items-center mt-2">
    //           <p className="text-sm ml-4 font-semibold">Phone</p>
    //           <p className="text-sm ml-1">:</p>
    //           <p className="text-sm ml-1">****000</p>
    //         </div>
    //         <div className="flex items-center mt-2">
    //           <p className="text-sm ml-4 font-semibold">Address</p>
    //           <p className="text-sm ml-1">:</p>
    //           <p className="text-sm ml-1">House no 60, Street no 9...</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full min-h-screen bg-[#F9F9FB] p-6 md:p-10">
      <div className="flex items-center">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/shop-info.png"
          className="h-7 w-7 md:h-10 md:w-10 mt-2 md:mt-10 ml-2 md:ml-10"
          alt="Shop Icon"
        />
        <p className="ml-2 md:ml-3 mt-2 md:mt-10 text-[#334257] text-xl md:text-2xl font-semibold">
          Shop Info
        </p>
      </div>
      <p className="ml-2 md:ml-10 mt-5 border-b-2 border-blue-600 w-12 md:w-auto font-semibold text-blue-500">
        General
      </p>
      <div className="bg-white shadow-lg md:w-[70%] mx-auto mt-5 rounded-lg p-4 md:p-6">
        <div className="border border-blue-800 rounded-lg w-full flex items-center justify-between p-4">
          <p className="text-indigo-700">Temporary close</p>
          <button
            className={`w-10 h-5 md:w-12 md:h-6 rounded-full ${
              isOpen ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={toggleHandler}
          >
            <span
              className={`block w-4 h-4 md:w-5 md:h-5 rounded-full ${
                isOpen ? "transform translate-x-7" : ""
              } bg-white shadow-md`}
            />
          </button>
        </div>
        <p className="mt-2">
          By turning on temporary close mode, your shop will be shown as
          temporarily off on the website and app for customers. They cannot
          purchase or place orders from your shop during this time.
        </p>
      </div>
      <div className="bg-white shadow-lg md:w-[70%] mx-auto mt-5 rounded-lg p-4 md:p-6">
        <div className="flex items-center justify-between">
          <p className="text-xl md:text-2xl text-[#334257] font-semibold">
            My Shop Info
          </p>
          <div className="flex gap-2">
            <button className="rounded-full min-w-[9rem] md:min-w-36 text-sm h-11 border border-blue-700">
              Go to Vacation Mode
            </button>
            <button className="rounded-full ml-3 md:w-20 bg-indigo-500 text-white h-12 border-2 border-blue-700">
              Edit
            </button>
          </div>
        </div>
        <div className="border-b-4 border-[#F9F9FB] w-full mt-2"></div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 mt-4">
          <img
            src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f6e190f4c.png"
            className="rounded-full h-24 md:h-[30vh] md:w-[15vw]"
          />
          <div className="flex flex-col ml-2 md:ml-4">
            <div className="flex items-center mt-2 md:mt-4">
              <p className="text-lg md:text-xl text-black font-semibold">
                Name:
              </p>
              <p className="text-lg md:text-xl ml-1 md:ml-2">Mart Morning</p>
            </div>
            <div className="flex items-center mt-2 md:mt-3">
              <p className="text-sm md:text-base font-semibold">Phone:</p>
              <p className="text-sm md:text-base ml-1 md:ml-2">****000</p>
            </div>
            <div className="flex items-center mt-2 md:mt-3">
              <p className="text-sm md:text-base font-semibold">Address:</p>
              <p className="text-sm md:text-base ml-1 md:ml-2">
                House no 60, Street no 9...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_Setting;

//********************Shop EDit Button */

// import React from 'react';

// const Shop_Setting = () => {
//   return (
//     <div className="w-full h-full bg-[#F9F9FB]">
//       <div className="flex items-center">
//         <img
//           src="https://6valley.6amtech.com/public/assets/back-end/img/shop-info.png"
//           className="h-7 w-7 mt-10 ml-10"
//           alt="Shop Icon"
//         />
//         <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold">
//           Shop Info
//         </p>
//       </div>
//       <div className="bg-white w-[75vw] h-[145vh] border-r border-t border-b border-l border-slate-200 rounded-lg mt-10 ml-12">
//         <div className="flex items-center">
//           <p className="text-slate-700 mt-3 ml-7 text-sm font-semibold">
//             Edit Shop Info
//           </p>
//           <button className="rounded-full ml-auto mr-3 mt-3 w-20 bg-indigo-500 h-12 ">
//             Back
//           </button>
//         </div>
//         <div className="border-b-4 border-slate-200 w-[75vw] mt-3 "></div>
//         <div className='flex gap-2 items-center'>
//         <div className='mt-4'>
//                 <p className='ml-5'>Shop Name*</p>
//                 <input
//                     type="text"
//                     name="shop name"
//                     value="Mart Morning"
//                     className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 hover:border-sky-800"

//                   />
//               </div>

//               <div className='mt-4'>
//                 <p className='ml-5'>Upload Photo*</p>
//                 <input
//                     type="text"
//                     name="upload photo"
//                     value="Choose File"
//                     className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 hover:border-sky-800"

//                   />
//               </div>

//         </div>
//         <div className='flex gap-2 items-center'>
//         <div className=''>
//                 <p className='ml-5'>Contact*</p>
//                 <input
//                     type="text"
//                     name="phone number"
//                     value="0000000"
//                     className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 hover:border-sky-800"

//                   />

//               </div>
//               <div className='mt-4 border-b border-l ml-16 border-r border-t border-gray-500'>
//                 <img src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f6e190f4c.png"className='w-[12vw] h-[25vh]'/>
//               </div>
//               </div>
//               <div className='mt-2'>
//               <p className='ml-5'>Address*</p>

//                 <input
//                     type="text"
//                     name="Adress"
//                     value="house no 49 street no 10 "
//                     className="ml-5 mt-3  border w-[35vw]   h-28 rounded border-gray-500 hover:border-sky-800"

//                   />
//                   </div>
//                   <div className='flex mt-5 '>

//                   <p className='text-black ml-5'>Uplod Banner</p>
//                   <p className='text-sky-300 ml-2'>
//                   Ratio 4:1 (2000 x 500 px)</p>

//                   </div>
//                   <div className='border ml-3 w-[35vw] rounded-lg h-11 mt-2 border-gray-500 flex '>
//                   <input
//                     type="text"
//                     name="uplod file"
//                     value="Choose File"
//                     className='mt-2 ml-2'

//                   />
//                   <button className='border-l ml-auto mr-5 px-3 text-gray-300 border-gray-300 '>Browse</button>

//                   </div>
//                   <div className="border mt-5 border-gray-600 h-[30vh] w-[40vw] ml-5 rounded overflow-hidden">
//         <img
//           src="https://6valley.6amtech.com/storage/app/public/shop/banner/2023-06-14-6488758b807b1.png"
//           className="h-full w-full object-cover"
//         />
//       </div>
//       <div className='flex items-end '>

//     <button className='border border-[#ED4C78] w-20 h-10 rounded mr-2  mt-3 ml-[80%] hover:bg-rose-500 bg-[#ED4C78]'>Cancel</button>
//     <button className='border border-blue-500 w-20 h-10 rounded hover:bg-[#0177CD] bg-indigo-500'>Update</button>

//     </div>
//               </div>

//       </div>

//   );
// };

// export default Shop_Setting;
