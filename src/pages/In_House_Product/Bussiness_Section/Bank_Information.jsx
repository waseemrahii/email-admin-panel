import React from "react";
import { BsBank } from "react-icons/bs";
import { CiCircleAlert } from "react-icons/ci";
import "./Tooltip.css"; // Import your CSS file
import { IoMdPerson } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const BankInformation = () => {
  return (
    <div className="bg-[#F9F9FB] p-4 md:p-8">
      <div className="flex items-center">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
          className="h-7 w-7 mt-2 md:mt-10 ml-2 md:ml-10"
          alt="Bank Icon"
        />
        <p className="ml-3 mt-2 md:mt-10 text-[#334257] text-lg md:text-xl font-semibold">
          My Bank Info
        </p>
      </div>
      <div className="bg-white border border-slate-400 shadow-xl rounded-lg mx-2 md:mx-12 h-auto md:h-[50vh] mt-4 w-full md:w-[75vw] p-4">
        <div className="flex items-center">
          <BsBank className="mt-3 ml-2 md:ml-6 w-6 md:w-7 h-6 md:h-8" />
          <p className="mt-3 ml-2 font-semibold text-base md:text-lg text-[#334257]">
            Accounts Details
          </p>
          <div className="tooltip ml-2 mt-3">
            <CiCircleAlert className="w-5 h-5 md:w-5 md:h-10" />
            <span className="tooltiptext">
              Update your bank details with current information. It will be used
              for your withdrawal request transactions by admin.
            </span>
          </div>
        </div>
        <div className="border border-stone-700 mx-auto mt-6 md:mt-9 rounded-lg bg-[#F2F7FF] p-4 w-full md:w-[30vw] h-auto md:h-[30vh]">
          <div className="flex items-center">
            <IoMdPerson className="mt-3 ml-2 md:ml-4" />
            <p className="mt-3 ml-2">Holder Name</p>
            <p className="mt-3 ml-2 text-slate-950">: fatima</p>
            <div className="flex items-center ml-auto md:ml-32 h-10 w-20 mt-3 rounded bg-blue-500 hover:bg-blue-300">
              <Link
                to="/bankinfoedit"
                className="w-full flex justify-center items-center"
              >
                <button className="text-gray-50">Edit</button>
                <FaRegEdit className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-6">
            <p className="ml-2 md:ml-5">Bank Name</p>
            <p className="text-black ml-2">:</p>
            <p className="text-black ml-2">City Bank</p>
          </div>
          <div className="flex items-center mt-4">
            <p className="ml-2 md:ml-5">Branch Name</p>
            <p className="text-black ml-2">:</p>
            <p className="text-black ml-2">Mirpur-A</p>
          </div>
          <div className="flex items-center mt-4">
            <p className="ml-2 md:ml-4">Account Number</p>
            <p className="text-black ml-2">:</p>
            <p className="text-black ml-2">12345678</p>
          </div>
        </div>
      </div>
    </div>

    // <div className=" bg-[#F9F9FB]">
    //   <div className="flex items-center">
    //     <img
    //       src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
    //       className="h-7 w-7 mt-10 ml-10"
    //       alt="Bank Icon"
    //     />
    //     <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold">
    //       My Bank Info
    //     </p>
    //   </div>
    //   <div className="bg-white border border-slate-400 shadow-xl rounded-lg ml-12 mr-12 h-[50vh] mt-4 w-[75vw]">
    //     <div className="flex items-center">
    //       <BsBank className="mt-3 ml-6 w-7 h-8" />
    //       <p className="mt-3 ml-2 font-semibold text-lg text-[#334257]">
    //         Accounts Details
    //       </p>
    //       <div className="tooltip">
    //         <CiCircleAlert className="mt-3 ml-2 w-5 h-10" />
    //         <span className="tooltiptext">
    //           Update your bank details with current information. It will be used
    //           for your withdrawa request transcations by admin.
    //         </span>
    //       </div>
    //     </div>
    //     <div className="w-[30vw] h-[30vh] border border-stone-700 ml-[30%] mt-9 rounded-lg  bg-[#F2F7FF]">
    //       <div className="flex items-center">
    //         <IoMdPerson className="mt-3 ml-4" />

    //         <p className="mt-3 ml-2">Holder Name</p>
    //         <p className="mt-3 text-slate-950">: fatima</p>
    //         <div className="flex items-center ml-32 h-10 w-20 mt-3 rounded hover:bg-blue-300  bg-blue-500">
    //           <Link to="/bankinfoedit">
    //             <button className="text-gray-50 ml-3">Edit</button>
    //           </Link>
    //           <FaRegEdit className="ml-5" />
    //           {/* <Link to="/editbtn" className='flex items-center ml-32 h-10 w-20 mt-3 rounded hover:bg-blue-300 bg-blue-500'>
    //           <button className='text-gray-50 ml-3'>Edit</button>
    //           <FaRegEdit className='ml-5' />
    //         </Link> */}
    //         </div>
    //       </div>
    //       <div className="flex items-center ">
    //         <p className="ml-5 mt-6 ">Bank Name</p>
    //         <p className="text-black ml-8 mt-6">:</p>
    //         <p className="text-black ml-5 mt-6">City Bank</p>
    //       </div>
    //       <div className="flex items-center ">
    //         <p className="ml-5  ">Branch Name</p>
    //         <p className="text-black ml-5">:</p>
    //         <p className="text-black ml-5 ">Mirpur-A</p>
    //       </div>
    //       <div className="flex items-center ">
    //         <p className="ml-4  ">Account Number</p>
    //         <p className="text-black ml-1">:</p>
    //         <p className="text-black ml-4 ">12345678</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BankInformation;
//***************************************edit button code**************************** */

// import React from 'react'

// const Bank_Information = () => {
//   return (
//     <>
//     <div className="w-full h-full bg-[#F9F9FB]">
//        <div className="flex items-center">
//          <img
//            src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
//            className="h-7 w-7 mt-10 ml-10"
//            alt="Bank Icon"
//          />
//          <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold">
//            Edit Bank Info
//          </p>
//        </div>
//        <div className='bg-white border rounded-lg border-zinc-300 shadow-lg w-[75vw] h-[50vh] ml-11 mt-5'>
//         <p className='text-[#334257] font-semibold mt-4 ml-5 text-lg'>Edit bank info</p>
//         <p className=' border-b-4 border-b-[#F9F9FB] mt-2 shadow-2xl'></p>
//         <div className='flex mt-3 gap-3 items-center '>
//           <div>
//             <p className='ml-5'>Bank name*</p>
//             <input
//                 type="text"
//                 name="bank name"
//                 value="City Bank"
//                 className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800"
//               />
//           </div>
//           <div>
//             <p className='ml-5'>Branch name*</p>
//             <input
//                 type="text"
//                 name="branch name"
//                 value="Mirpur-12"
//                 className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800"
//               />
//           </div>

//         </div>
//         <div className='flex mt-3 gap-3 items-center '>
//           <div>
//             <p className='ml-5'>Holder name*</p>
//             <input
//                 type="text"
//                 name="holder name"
//                 value="Fatema"
//                 className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 hover:border-sky-800"

//               />
//           </div>
//           <div>
//             <p className='ml-5'>Account no*</p>
//             <input
//                 type="text"
//                 name="account no"
//                 value="12345678"
//                 className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 focus:outline-none focus:border-sky-800 hover:border-sky-800 "
//               />

//           </div>

//         </div>
// <div className='flex items-end '>

// <button className='border border-[#ED4C78] w-20 h-10 rounded mr-2  mt-3 ml-[80%] hover:bg-rose-500 bg-[#ED4C78]'>Cancel</button>
// <button className='border border-blue-500 w-20 h-10 rounded hover:bg-[#0177CD] bg-indigo-500'>Update</button>

// </div>
//        </div>

//     </div>
//     </>
//   )
// }

// export default Bank_Information
