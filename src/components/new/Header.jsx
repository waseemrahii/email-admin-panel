
import React, { useState } from "react";
import { FaGlobe, FaCommentDots, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useAuth } from '../context/AuthContext.jsx';
import { toast,ToastContainer  } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMessageTooltipVisible, setIsMessageTooltipVisible] = useState(false);
  const [isGlobeTooltipVisible, setIsGlobeTooltipVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("English");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const showMessageTooltip = () => {
    setIsMessageTooltipVisible(true);
  };

  const hideMessageTooltip = () => {
    setIsMessageTooltipVisible(false);
  };

  const showGlobeTooltip = () => {
    setIsGlobeTooltipVisible(true);
  };

  const hideGlobeTooltip = () => {
    setIsGlobeTooltipVisible(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from the context
    toast.success('Logged out successfully!');
    console.log('Logging out...');
  };
  return (
   <>
    <ToastContainer />
  <div>
      {/* Header Component */}
      <div className="header flex items-center justify-between bg-gray-800 text-white flex-shrink-0 py-4 px-6 shadow fixed top-0 left-0 right-0 z-50">
        {/* Left Section: Logo */}
        <div className="left px-7">
          {/* <img
            src="E-bazar.png"
            alt="Logo"
            width="40"
            style={{ height: "4rem" }}
          /> */}
         <h1 className="font-bold ">

         Bulk_Email
         </h1>
        </div>

     
      </div>

      {/* Spacer for Header */}
      <div className="header-spacer"></div>
    </div>
    </>
  );
};

export default Header;
