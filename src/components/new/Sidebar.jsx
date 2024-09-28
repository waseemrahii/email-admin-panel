// // end
import React, { useState } from "react";
import { IoHome, IoPersonOutline } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import {
  MdGroups2,
  MdNotificationsActive,
  MdOutlineDiamond,
  MdOutlineFolderZip,
  MdShoppingBag,
} from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { FaAngleDown, FaAngleUp, FaKey, FaRegStar } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi"; // Importing icons
import { FaStar } from "react-icons/fa";
import { AiFillDatabase, AiFillPicture, AiOutlineHdd } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineSpotify } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import {
  BsCardImage,
  BsFillPersonFill,
  BsReverseLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { PiNotification } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import { CiInboxOut } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import {
  IoIosNotifications,
  IoMdPerson,
  IoMdStarOutline,
} from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { Link } from "react-router-dom";

// --------------------------------------------

const Sidebar = ({ setComponent }) => {
  const [showOrderList, setShowOrderList] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [showInHouseProductList, setShowInHouseProductList] = useState(false);
  const [showVenderProductList, setShowVenderProductList] = useState(false);
  const [showRefoundList, setShowRefoundList] = useState(false);
  const [showBrandList, setShowBrandList] = useState(false);
  const [showOfferList, setShowOfferList] = useState(false);
  const [showCustomerList, setShowCustomerList] = useState(false);
  const [showHealthList, setShowHealthList] = useState(false);
  const [showEmployeeList, setShowEmployeethList] = useState(false);
  const [showSystemList, setShowSystemList] = useState(false);
  const [showPageList, setShowPageList] = useState(false);
  const [showBusinessList, setShowBusinessList] = useState(false);
  const [showNotiList, setShowNotiList] = useState(false);

  // for bussness set showing dropdown

  const [showBussnessList, SetShowBussnessList] = useState(false); // write this for each drop down list like for setting order category extra
  // now copy the the above state

  const toggleOrderList = () => {
    setShowOrderList(!showOrderList);
    setShowProductList(false); // Close Product list when Orders list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Orders list is toggled
    setShowRefoundList(false); // Close Refound List when Orders list is toggled
  };

  const toggleProductList = () => {
    setShowProductList(!showProductList);
    setShowOrderList(false); // Close Orders list when Product list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Product list is toggled
    setShowRefoundList(false); // Close Refound List when Product list is toggled
  };

  const toggleInHouseProductList = () => {
    setShowInHouseProductList(!showInHouseProductList);
    setShowOrderList(false); // Close Orders list when In House Product list is toggled
    setShowProductList(false); // Close Product list when In House Product list is toggled
    setShowRefoundList(false); // Close Refound List when In House Product list is toggled
  };

  const toggleVenderProductList = () => {
    setShowVenderProductList(!showVenderProductList);
    setShowInHouseProductList(false);
    setShowOrderList(false); // Close Orders list when In House Product list is toggled
    setShowProductList(false); // Close Product list when In House Product list is toggled
    setShowRefoundList(false); // Close Refound List when In House Product list is toggled
  };

  const toggleRefoundList = () => {
    setShowRefoundList(!showRefoundList);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleBrandList = () => {
    setShowBrandList(!showBrandList);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleOfferList = () => {
    setShowOfferList(!showOfferList);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleCustomerList = () => {
    setShowCustomerList(!showCustomerList);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleHealthList = () => {
    setShowHealthList(!showHealthList);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleEmployeeList = () => {
    setShowEmployeethList(!showEmployeeList);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleSystemList = () => {
    setShowSystemList(!showSystemList);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleBusinessList = () => {
    setShowBusinessList(!showBusinessList);
    setShowPageList(false);
    setShowSystemList(false);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const togglePageList = () => {
    setShowPageList(!showPageList);
    setShowSystemList(false);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleNotiList = () => {
    setShowNotiList(!showNotiList);

    setShowSystemList(false);
    setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  //now copy the togglefunciton

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    // <aside className="bg-[#077422] text-white  min-h-screen p-4 flex flex-col fixed left-0  overflow-y-auto">

    <aside className="bg-[#171b18] text-white w-64 min-h-screen p-4 flex flex-col fixed left-0  h-full overflow-y-scroll">
      <div className="pb-3 pt-4">
        <div className="flex items-center">
          {/* <button type="button" className="btn">
             <i className="tio-search"></i>
          </button> */}

          <input
            type="text"
            className="ml-2 p-2 bg-[#3d443f] rounded-md focus:outline-none w-full"
            placeholder="Search menu..."
          />
        </div>
      </div>
      {/* Dashboard and POS buttons */}
      <Link
        to="/"
        className=" flex   w-full   align-items-center text-left p-2 rounded hover:bg-[#3d443f] text-white hover:text-white mb-3 "
        style={{ color: "white" }}
      >
        <IoHome className=" mr-2  " />
        <span className="">Overview</span>
      </Link>
      {/* //POS------------------------- */}
      <Link
        to="/bulkemail"
        className="block w-full text-left p-2 rounded hover:bg-[#3d443f] text-white hover:text-white mb-3 "
        style={{ color: "white" }}
      >
        <MdShoppingBag className="inline-block mr-2" /> BulK Email
      </Link>
      <Link
        to="/template"
        className="block w-full text-left p-2 rounded hover:bg-[#3d443f] text-white hover:text-white mb-3 "
        style={{ color: "white" }}
      >
        <MdShoppingBag className="inline-block mr-2" /> Template
      </Link>
      <Link
        to="/packagesettings"
        className="block w-full text-left p-2 rounded hover:bg-[#3d443f] text-white hover:text-white mb-3 "
        style={{ color: "white" }}
      >
        <MdShoppingBag className="inline-block mr-2" /> Package Settings
      </Link>
      <Link
        to="/users"
        className="block w-full text-left p-2 rounded hover:bg-[#3d443f] text-white hover:text-white mb-3 "
        style={{ color: "white" }}
      >
        <MdShoppingBag className="inline-block mr-2" /> Users
      </Link>
  
    </aside>
  );
};

export default Sidebar;
