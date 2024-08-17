
// import React from "react";
// import {
//   FaSearch,
//   FaDownload,
//   FaChevronDown,
//   FaEye,
//   FaEdit,
//   FaTrashAlt,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// // import './Coupon.css'
// const Coupon = () => {
//     // Function to handle the SweetAlert2 modal
//     const handleViewCoupon = (coupon) => {
//       Swal.fire({
//         html: `
//           <div class="modal-content snipcss-l8o1R" id="quick-view-modal">
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="Swal.close()">
//              <i class="tio-clear"></i>
            
//             </button>
//             <div class="coupon__details">
//               <div class="coupon__details-left">
//                 <div class="text-center">
//                   <h6 class="title">${coupon.title}</h6>
//                   <h6 class="subtitle">Code : <span>${coupon.code}</span></h6>
//                   <div class="text-capitalize">
//                     <span>Discount on purchase</span>
//                   </div>
//                 </div>
//                 <div class="coupon-info">
//                   <div class="coupon-info-item">
//                     <span>Minimum purchase :</span>
//                     <strong>${coupon.minPurchase}</strong>
//                   </div>
//                   <div class="coupon-info-item" id="max_discount_modal_div">
//                     <span>Maximum discount :</span>
//                     <strong>${coupon.maxDiscount}</strong>
//                   </div>
//                   <div class="coupon-info-item">
//                     <span>Start date :</span>
//                     <span>${coupon.startDate}</span>
//                   </div>
//                   <div class="coupon-info-item">
//                     <span>Expire date :</span>
//                     <span>${coupon.expireDate}</span>
//                   </div>
//                   <div class="coupon-info-item">
//                     <span>Discount bearer :</span>
//                     <span>${coupon.discountBearer}</span>
//                   </div>
//                 </div>
//               </div>
//               <div class="coupon__details-right">
//                 <div class="coupon">
//                   <div class="d-flex">
//                     <h4>${coupon.discount}</h4>
//                   </div>
//                   <span>Off</span>
//                 </div>
//               </div>
//             </div>
//           </div>`,
//         showConfirmButton: false,
//         customClass: {
//           container: 'swal2-container-custom',
//           popup: 'swal2-popup-custom'
//         }
//       });};

//        // Function to handle the SweetAlert2 modal for deletion
//   const handleDeleteCoupon = (couponId) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Filter out the deleted coupon based on couponId
//         const updatedCoupons = couponData.filter(coupon => coupon.id !== couponId);
//         setCouponData(updatedCoupons);

//         // Show success message using Swal
//         Swal.fire(
//           'Deleted!',
//           'Your coupon has been deleted.',
//           'success'
//         );
//       }
//     });
//   };
//   const couponData = [
//     {
//       id: 1,
//       title: "Get 20% discount on ",
//       code: "rtzxx8n8lr",
//       type: "Discount on Purchase",
//       duration: "10 Jan, 23 - 10 Jun, 25",
//       userLimit: {
//         limit: 20,
//         used: 0,
//       },
//       discountBearer: "Admin",
//       status: 1, // Example status, adjust as per your needs
//     },
//     {
//       id: 1,
//       title: "Get 20% discount on ",
//       code: "rtzxx8n8lr",
//       type: "Discount on Purchase",
//       duration: "10 Jan, 23 - 10 Jun, 25",
//       userLimit: {
//         limit: 20,
//         used: 0,
//       },
//       discountBearer: "Admin",
//       status: 1, // Example status, adjust as per your needs
//     },
//     {
//       id: 1,
//       title: "Get 20% discount on ",
//       code: "rtzxx8n8lr",
//       type: "Discount on Purchase",
//       duration: "10 Jan, 23 - 10 Jun, 25",
//       userLimit: {
//         limit: 20,
//         used: 0,
//       },
//       discountBearer: "Admin",
//       status: 1, // Example status, adjust as per your needs
//     },
//     {
//       id: 1,
//       title: "Get 20% discount on ",
//       code: "rtzxx8n8lr",
//       type: "Discount on Purchase",
//       duration: "10 Jan, 23 - 10 Jun, 25",
//       userLimit: {
//         limit: 20,
//         used: 0,
//       },
//       discountBearer: "Admin",
//       status: 1, // Example status, adjust as per your needs
//     },
//     {
//       id: 1,
//       title: "Get 20% discount on ",
//       code: "rtzxx8n8lr",
//       type: "Discount on Purchase",
//       duration: "10 Jan, 23 - 10 Jun, 25",
//       userLimit: {
//         limit: 20,
//         used: 0,
//       },
//       discountBearer: "Admin",
//       status: 1, // Example status, adjust as per your needs
//     },
//     {
//       id: 1,
//       title: "Get 20% discount on ",
//       code: "rtzxx8n8lr",
//       type: "Discount on Purchase",
//       duration: "10 Jan, 23 - 10 Jun, 25",
//       userLimit: {
//         limit: 20,
//         used: 0,
//       },
//       discountBearer: "Admin",
//       status: 1, // Example status, adjust as per your needs
//     },
//     // Add more coupon objects as needed
//   ];
//   return (
//     <div className="p-10">
//       <div className="mb-3">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/coupon_setup.png"
//             alt=""
//           />{" "}
//           Coupon setup
//         </h2>
//       </div>
//       <div className="row">
//         <div className="col-sm-12 col-lg-12 mb-3 mb-lg-2">
//           <div className="card">
//             <div className="card-body">
//               <form
//                 action="https://6valley.6amtech.com/admin/coupon/add"
//                 method="POST"
//               >
//                 <input
//                   type="hidden"
//                   name="_token"
//                   value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
//                   autoComplete="off"
//                 />
//                 <div className="row">
//                   <div className="col-md-6 col-lg-4 form-group">
//                     <label
//                       htmlFor="coupon_type"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Coupon type
//                     </label>
//                     <select
//                       className="form-control"
//                       id="coupon_type"
//                       name="coupon_type"
//                       required
//                     >
//                       <option disabled selected>
//                         Select coupon type
//                       </option>
//                       <option value="discount_on_purchase">
//                         Discount on Purchase
//                       </option>
//                       <option value="free_delivery">Free Delivery</option>
//                       <option value="first_order">First Order</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group">
//                     <label
//                       htmlFor="title"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Coupon title
//                     </label>
//                     <input
//                       type="text"
//                       name="title"
//                       className="form-control"
//                       value=""
//                       id="title"
//                       placeholder="Title"
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group">
//                     <div className="d-flex justify-content-between">
//                       <label
//                         htmlFor="code"
//                         className="title-color font-weight-medium text-capitalize"
//                       >
//                         Coupon code
//                       </label>
//                       <a
//                         href="javascript:void(0)"
//                         className="float-right c1 fz-12"
//                         id="generateCode"
//                       >
//                         Generate code
//                       </a>
//                     </div>
//                     <input
//                       type="text"
//                       name="code"
//                       value=""
//                       className="form-control"
//                       id="code"
//                       placeholder="Ex: EID100"
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group first_order">
//                     <label
//                       htmlFor="coupon_bearer"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Coupon bearer
//                     </label>
//                     <select
//                       className="form-control"
//                       name="coupon_bearer"
//                       id="coupon_bearer"
//                     >
//                       <option disabled selected>
//                         Select coupon bearer
//                       </option>
//                       <option value="seller">Vendor</option>
//                       <option value="inhouse">Admin</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group coupon_by first_order">
//                     <label
//                       htmlFor="vendor_wise_coupon"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Vendor
//                     </label>
//                     <select
//                       className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible"
//                       name="seller_id"
//                       id="vendor_wise_coupon"
//                       tabIndex="-1"
//                       aria-hidden="true"
//                     >
//                       <option disabled selected>
//                         Select vendor
//                       </option>
//                     </select>
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group coupon_type first_order">
//                     <label
//                       htmlFor="customer_id"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Customer
//                     </label>
//                     <select
//                       className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible"
//                       name="customer_id"
//                       tabIndex="-1"
//                       aria-hidden="true"
//                     >
//                       <option disabled selected>
//                         Select customer
//                       </option>
//                       <option value="0">All customer</option>
//                       <option value="2">fatema subarna</option>
//                       <option value="4">Md.Safayet Hossain</option>
//                       <option value="5">Jocky Lop</option>
//                       <option value="6">Demo user</option>
//                       <option value="7">Bsgsh Nsbdv</option>
//                       <option value="8">Joy Joy</option>
//                       <option value="9">Devid Jack</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group first_order">
//                     <label
//                       htmlFor="coupon_limit"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Limit for same user
//                     </label>
//                     <input
//                       type="number"
//                       name="limit"
//                       value=""
//                       min="0"
//                       id="coupon_limit"
//                       className="form-control"
//                       placeholder="Ex: 10"
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group free_delivery">
//                     <label
//                       htmlFor="discount_type"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Discount type
//                     </label>
//                     <select
//                       id="discount_type"
//                       className="form-control w-100"
//                       name="discount_type"
//                     >
//                       <option value="amount">Amount</option>
//                       <option value="percentage">Percentage (%)</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group free_delivery">
//                     <label
//                       htmlFor="discount"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Discount Amount{" "}
//                       <span id="discount_percent" className="style-1qYsf">
//                         {" "}
//                         (%)
//                       </span>
//                     </label>
//                     <input
//                       type="number"
//                       min="1"
//                       max="1000000"
//                       name="discount"
//                       value=""
//                       className="form-control"
//                       id="discount"
//                       placeholder="Ex : 500"
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group">
//                     <label
//                       htmlFor="minimum_purchase"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Minimum purchase ($)
//                     </label>
//                     <input
//                       type="number"
//                       min="1"
//                       max="1000000"
//                       name="min_purchase"
//                       value=""
//                       className="form-control"
//                       id="minimum_purchase"
//                       placeholder="Ex : 100"
//                     />
//                   </div>
//                   <div
//                     className="col-md-6 col-lg-4 form-group free_delivery style-azv7T"
//                     id="max-discount"
//                   >
//                     <label
//                       htmlFor="maximum_discount"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Maximum discount ($)
//                     </label>
//                     <input
//                       type="number"
//                       min="1"
//                       max="1000000"
//                       name="max_discount"
//                       value=""
//                       className="form-control"
//                       id="maximum_discount"
//                       placeholder="Ex : 5000"
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group">
//                     <label
//                       htmlFor="start_date"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Start date
//                     </label>
//                     <input
//                       id="start_date"
//                       type="date"
//                       name="start_date"
//                       value=""
//                       className="form-control"
//                       placeholder="Start date"
//                       required
//                       min="2024-06-30"
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-4 form-group">
//                     <label
//                       htmlFor="expire_date"
//                       className="title-color font-weight-medium d-flex"
//                     >
//                       Expire date
//                     </label>
//                     <input
//                       id="expire_date"
//                       type="date"
//                       name="expire_date"
//                       value=""
//                       className="form-control"
//                       placeholder="Expire date"
//                       required
//                       min="2024-06-30"
//                     />
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-end flex-wrap gap-10">
//                   <button type="reset" className="btn btn-secondary px-4">
//                     Reset
//                   </button>
//                   <button
//                     type="submit"
//                     className="btn  py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-4"
//                     style={{ display: "flex" , background:"green" }}
//                  >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* manage code  */}

//       <div className="container mt-3">
//         <div className="row mt-20">
//           <div className="col-md-12">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h5 className="text-capitalize">Coupon Management</h5>
//               <button
//                 type="button"
//                 className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                 style={{ display: "flex" , background:"green" }}
//               >
//                 Add Coupon
//               </button>
//             </div>
//             <div className="card">
//               <div className="px-3 py-4">
//                 <div className="d-flex flex-wrap gap-3 align-items-center">
//                   <h5 className="mb-0 text-capitalize d-flex gap-2 mr-auto">
//                     Coupon List{" "}
//                     <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
//                       {couponData.length}
//                     </span>
//                   </h5>
//                   <form
//                     action="https://6valley.6amtech.com/admin/coupon/add"
//                     method="GET"
//                   >
//                     <div className="input-group input-group-merge input-group-custom" style={{ border:"1px solid green" }}>
//                       <div className="input-group-prepend">
//                         <div className="input-group-text">
//                           <FaSearch />
                        
//                         </div>
//                       </div>
//                       <input
//                         id="datatableSearch_"
//                         type="search"
//                         name="searchValue"
//                         className="form-control"
//                         placeholder="Search by Title or Code or Discount Type"
//                         required
//                       />
//                       <button
//                         type="submit"
//                         className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                         style={{ display: "flex" , background:"green" }}
//                       >
//                         Search
//                       </button>
//                     </div>
//                   </form>
//                   <div>
//                     <button
//                       type="button"
//                       className="btn px-4 py-2 justify-center align-items-center bg-[#A1CB46] text-white hover:bg-[#7e9f37] text-nowrap btn-block flex gap-2 "
//                       style={{ display: "flex" , background:"green" }}
//                       data-toggle="dropdown"
//                     >
//                       <FaDownload /> Export
//                     </button>
//                     <ul className="dropdown-menu dropdown-menu-right">
//                       <li>
//                         <a
//                           className="dropdown-item"
//                           href="#"
//                         >
//                           <img
//                             width="14"
//                             src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
//                             alt=""
//                           />{" "}
//                           Excel
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="table-responsive">
//                 <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
//                   <thead className="thead-light thead-50 text-capitalize">
//                     <tr>
//                       <th>SL</th>
//                       <th>Coupon</th>
//                       <th>Coupon Type</th>
//                       <th>Duration</th>
//                       <th>User Limit</th>
//                       <th className="text-center">Discount Bearer</th>
//                       <th>Status</th>
//                       <th className="text-center">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {couponData.map((coupon, index) => (
//                       <tr key={coupon.id}>
//                         <td>{index + 1}</td>
//                         <td>
//                           <div>{coupon.title}</div>
//                           <strong>Code: {coupon.code}</strong>
//                         </td>
//                         <td className="text-capitalize">{coupon.type}</td>
//                         <td>
//                           <div className="d-flex flex-wrap gap-1">
//                             <span>{coupon.duration}</span>
//                           </div>
//                         </td>
//                         <td>
//                           <span>
//                             Limit: <strong>{coupon.userLimit.limit},</strong>
//                           </span>
//                           <span className="ml-1">
//                             Used: <strong>{coupon.userLimit.used}</strong>
//                           </span>
//                         </td>
//                         <td className="text-center">{coupon.discountBearer}</td>
//                         <td>
//                           <form
//                             action='#'
//                             method="GET"
//                             className="coupon_status_form"
//                           >
//                             <label className="switcher">
//                               <input
//                                 type="checkbox"
//                                 className="switcher_input toggle-switch-message"
//                                 style={{background:"green"}}
//                                 id={`coupon_status${coupon.id}`}
//                                 name="status"
//                                 value={coupon.status}
//                                 checked={coupon.status === 1}
//                                 data-modal-id="toggle-status-modal"
//                                 data-toggle-id={`coupon_status${coupon.id}`}
//                                 data-on-image="coupon-status-on.png"
//                                 data-off-image="coupon-status-off.png"
//                                 data-on-title="Want to Turn ON Coupon Status?"
//                                 data-off-title="Want to Turn OFF Coupon Status?"
//                                 data-on-message="<p>If enabled, this coupon will be available on the website and customer app.</p>"
//                                 data-off-message="<p>If disabled, this coupon will be hidden from the website and customer app.</p>"
//                               />
//                               <span className="switcher_control"></span>
//                             </label>
//                           </form>
//                         </td>
//                         <td>
//                           <div className="d-flex gap-10 justify-content-center">
//                           <button className="btn btn-outline-info btn-sm" onClick={() => handleViewCoupon(coupon)}>
//                             <FaEye />
//                           </button>
//                             <Link to='/couponupdate'
//                               className="btn btn-outline--primary btn-sm edit"
                            
//                                 title="Edit"
//                             >
//                               <FaEdit />
//                             </Link>
//                             <form
//                               action=''
//                               method="POST"
//                             >
//                               <input
//                                 type="hidden"
//                                 name="_token"
//                                 value="MOADQqmoOqqfyTCN6Hgh99K4J7sfBGLWVV3QGiyg"
//                               />
//                                <button
//                             type="button"
//                             className="btn btn-sm btn-outline-danger"
//                             onClick={() => handleDeleteCoupon(coupon.id)}
//                           >
//                             <FaTrashAlt />
//                           </button>
//                             </form>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="card-footer d-flex justify-content-center align-items-center">
//                 <p className="m-0">
//                   Showing 1 to {couponData.length} of {couponData.length}{" "}
//                   entries
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Coupon;






import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { FaSearch, FaDownload, FaChevronDown, FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Coupon.css'
const CouponManagement = () => {
  const [couponData, setCouponData] = useState([]);
  const [form, setForm] = useState({
    title: '',
    code: '',
    type: 'Discount on Purchase',
   
    userLimit: {
      limit: '',
      used: '0'
    },
    discountBearer: 'Admin',
    discountType: 'Percentage',
    discountAmount: '',
    minPurchase: '',
    maxDiscount: '',
    startDate: '',
    expireDate: '',
    status: 'Active',
    applicableProducts: [],
    allVendors: false,
    applicableVendors: [],
    allCustomers: true,
    applicableCustomers: []
  });
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/coupons/');
        setCouponData(response.data);
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    };

    fetchCoupons();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, dataset } = e.target;

    if (type === 'checkbox') {
      setForm(prevForm => ({ ...prevForm, [name]: checked }));
    } else if (name === 'userLimit') {
      setForm(prevForm => ({
        ...prevForm,
        userLimit: {
          ...prevForm.userLimit,
          [dataset.field]: value
        }
      }));
    } else {
      setForm(prevForm => ({ ...prevForm, [name]: value }));
    }
  };

  const handleStatusChange = async (couponId, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';

    try {
      await axios.put(`http://localhost:3000/api/coupons/${couponId}`, { status: newStatus });
      setCouponData(prevData => prevData.map(coupon =>
        coupon.id === couponId ? { ...coupon, status: newStatus } : coupon
      ));
    } catch (error) {
      console.error("Error updating coupon status:", error);
      Swal.fire('Error!', 'There was an issue updating the coupon status.', 'error');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("form data =======", form)
      await axios.post('http://localhost:3000/api/coupons/', form);
      Swal.fire('Success!', 'Coupon added successfully.', 'success');

      setForm({
        title: '',
        code: '',
        type: 'Discount on Purchase',
       
        userLimit: { limit: '', used: '' },
        discountBearer: 'Vendor',
        discountType: 'Percentage',
        discountAmount: '',
        minPurchase: '',
        maxDiscount: '',
        startDate: '',
        expireDate: '',
        status: 'Active',
        applicableProducts: [],
        allVendors: false,
        applicableVendors: [],
        allCustomers: true,
        applicableCustomers: []
      });

      const response = await axios.get('http://localhost:3000/api/coupons/');
      setCouponData(response.data);

    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire('Error!', 'There was an issue adding the coupon.', 'error');
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleViewCoupon = (coupon) => {
    Swal.fire({
      html: `
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="Swal.close()">
            <i class="tio-clear"></i>
          </button>
          <div class="coupon__details">
            <div class="coupon__details-left">
              <div class="text-center">
                <h6 class="title">${coupon.title}</h6>
                <h6 class="subtitle">Code: <span>${coupon.code}</span></h6>
                <div class="text-capitalize">
                  <span>Discount ${coupon.discountType.toLowerCase()} on purchase</span>
                </div>
              </div>
              <div class="coupon-info">
                <div class="coupon-info-item">
                  <span>Discount amount:</span>
                  <strong>${coupon.discountAmount}${coupon.discountType === 'Percentage' ? '%' : ''}</strong>
                </div>
                <div class="coupon-info-item">
                  <span>Minimum purchase:</span>
                  <strong>${coupon.minPurchase}</strong>
                </div>
                <div class="coupon-info-item">
                  <span>Maximum discount:</span>
                  <strong>${coupon.maxDiscount}</strong>
                </div>
                <div class="coupon-info-item">
                  <span>Start date:</span>
                  <span>${new Date(coupon.startDate).toLocaleDateString()}</span>
                </div>
                <div class="coupon-info-item">
                  <span>Expire date:</span>
                  <span>${new Date(coupon.expireDate).toLocaleDateString()}</span>
                </div>
                <div class="coupon-info-item">
                  <span>Status:</span>
                  <span>${coupon.status}</span>
                </div>
                <div class="coupon-info-item">
                  <span>Applicable Products:</span>
                  <span>${coupon.applicableProducts.join(', ')}</span>
                </div>
                <div class="coupon-info-item">
                  <span>Applicable Vendors:</span>
                  <span>${coupon.applicableVendors.join(', ')}</span>
                </div>
                <div class="coupon-info-item">
                  <span>Applicable Customers:</span>
                  <span>${coupon.applicableCustomers.join(', ')}</span>
                </div>
              </div>
            </div>
            <div class="coupon__details-right">
              <div class="coupon">
                <div class="d-flex">
                  <h4>${coupon.discountAmount}${coupon.discountType === 'Percentage' ? '%' : ''}</h4>
                </div>
                <span>Off</span>
              </div>
            </div>
          </div>
        </div>`,
      showConfirmButton: false,
      customClass: {
        container: 'swal2-container-custom',
        popup: 'swal2-popup-custom'
      }
    });
  };

  const handleDeleteCoupon = (couponId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setCouponData(prevData => prevData.filter(coupon => coupon.id !== couponId));

        Swal.fire(
          'Deleted!',
          'Your coupon has been deleted.',
          'success'
        );

        axios.delete(`http://localhost:3000/api/coupons/${couponId}`);
      }
    });
  };

  const filteredCoupons = couponData.filter(coupon =>
    coupon.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    coupon.code.toLowerCase().includes(searchValue.toLowerCase()) ||
    coupon.discountType.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="p-10">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/coupon_setup.png"
            alt=""
          />{" "}
          Coupon setup
        </h2>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-12 mb-3 mb-lg-2">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                 <div className="row">
                   <div className="col-md-6 col-lg-4 form-group">
                     <label htmlFor="type" className="title-color font-weight-medium d-flex">
                      Coupon type
                     </label>
                    <select
                      className="form-control"
                      name="type"
                      id="type"
                      value={form.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Discount on Purchase">Discount on Purchase</option>
                      <option value="Free Delivery">Free Delivery</option>
                      <option value="On First Order">On First Order</option>
                      {/* Add more options as necessary */}
                    </select>
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="title" className="title-color font-weight-medium d-flex">
                      Coupon title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={form.title}
                      onChange={handleInputChange}
                      id="title"
                      placeholder="Title"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="code" className="title-color font-weight-medium d-flex">
                      Coupon code
                    </label>
                    <input
                      type="text"
                      name="code"
                      className="form-control"
                      value={form.code}
                      onChange={handleInputChange}
                      id="code"
                      placeholder="Ex: SUMMER2024"
                      required
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="userLimitLimit" className="title-color font-weight-medium d-flex">
                      User Limit
                    </label>
                    <input
                      type="number"
                      data-field="limit"
                      name="userLimit"
                      className="form-control"
                      value={form.userLimit.limit}
                      onChange={handleInputChange}
                      id="userLimitLimit"
                      placeholder="Limit"
                      required
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="discountBearer" className="title-color font-weight-medium d-flex">
                      Discount Bearer
                    </label>
                    <select
                      className="form-control"
                      name="discountBearer"
                      id="discountBearer"
                      value={form.discountBearer}
                      onChange={handleInputChange}
                      required
                    >
                     
                      <option value="Vendor">Vendor</option>
                      {/* Add more options as necessary */}
                    </select>
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="discountType" className="title-color font-weight-medium d-flex">
                      Discount Type
                    </label>
                    <select
                      className="form-control"
                      name="discountType"
                      id="discountType"
                      value={form.discountType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Percentage">Percentage</option>
                      <option value="Amount">Amount</option>
                    </select>
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="discountAmount" className="title-color font-weight-medium d-flex">
                      Discount Amount
                    </label>
                    <input
                      type="number"
                      name="discountAmount"
                      className="form-control"
                      value={form.discountAmount}
                      onChange={handleInputChange}
                      id="discountAmount"
                      placeholder="Amount"
                      required
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="minPurchase" className="title-color font-weight-medium d-flex">
                      Minimum Purchase
                    </label>
                    <input
                      type="number"
                      name="minPurchase"
                      className="form-control"
                      value={form.minPurchase}
                      onChange={handleInputChange}
                      id="minPurchase"
                      placeholder="Minimum Purchase"
                      required
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="maxDiscount" className="title-color font-weight-medium d-flex">
                      Maximum Discount
                    </label>
                    <input
                      type="number"
                      name="maxDiscount"
                      className="form-control"
                      value={form.maxDiscount}
                      onChange={handleInputChange}
                      id="maxDiscount"
                      placeholder="Maximum Discount"
                      required
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="startDate" className="title-color font-weight-medium d-flex">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      className="form-control"
                      value={form.startDate}
                      onChange={handleInputChange}
                      id="startDate"
                      required
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="expireDate" className="title-color font-weight-medium d-flex">
                      Expire Date
                    </label>
                    <input
                      type="date"
                      name="expireDate"
                      className="form-control"
                      value={form.expireDate}
                      onChange={handleInputChange}
                      id="expireDate"
                      required
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 form-group">
                    <label htmlFor="status" className="title-color font-weight-medium d-flex">
                      Status
                    </label>
                    <select
                      className="form-control"
                      name="status"
                      id="status"
                      value={form.status}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                 
                  {/* Form fields here... */}
                  <div className="col-12 form-group">
                    <button type="submit" className="btn bg-green-400 text-white hover:bg-green-600">Submit</button>
                  </div>
         
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <h5 className="mb-0 text-capitalize d-flex gap-2 mr-auto"> 
                  Coupon list 
                  <span className="badge badge-soft-dark radius-50 fz-12 ml-1">{filteredCoupons.length}</span>
                </h5>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="input-group input-group-merge input-group-custom">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <FaSearch />
                      </div>
                    </div>
                    <input 
                      id="datatableSearch_" 
                      type="search" 
                      name="searchValue" 
                      className="form-control" 
                      placeholder="Search by Title or Code or Discount Type" 
                      value={searchValue} 
                      onChange={handleSearchChange} 
                      aria-label="Search orders" 
                    />
                  </div>
                </form>
                <button className="btn btn-secondary">
                  <FaDownload />
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-bordered mb-0">
                <thead >
                  <tr className="bg-gray-100">
                    <th>SL</th>
                    <th>Coupon</th>
                    <th>Coupon Type</th>
                   
                    <th>Duration</th>
                    <th>User Limit</th>
                    <th>Discount Bearer</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoupons.map((coupon, index) => (
                    <tr key={coupon.id} >
                      <td>{index + 1}</td>
                      <td className="flex flex-col">
                       <span>
                         {coupon.title}
                        </span>
                        <span className="font-bold">Code:{coupon.code}</span>
                        </td>
                      <td>{coupon.type}</td>
                      <td className="flex flex-col ">
                     <span>
                      {new Date(coupon.startDate).toLocaleDateString()}
                      </span> 
                      <span>

                      {new Date(coupon.expireDate).toLocaleDateString()}
                      </span>
                      </td>
                      <td>
                       Limit : {coupon.userLimit.limit}, Used : {coupon.userLimit.used}
  
                      </td>
                      <td>{coupon.discountBearer}</td>
                     
                      <td>
                          <label className="switcher">
                            <input
                              type="checkbox"
                              className="switcher_input toggle-switch-message"
                              id={`coupon_status_${coupon.id}`}
                              name="status"
                              value={coupon.status === 'Active' ? '1' : '0'}
                              checked={coupon.status === 'Active'}
                              onChange={() => handleStatusChange(coupon._id, coupon.status)}
                              data-modal-id="toggle-status-modal"
                              data-toggle-id={`coupon_status_${coupon._id}`}
                              data-on-image="coupon-status-on.png"
                              data-off-image="coupon-status-off.png"
                              data-on-title="Want to Turn ON Coupon Status?"
                              data-off-title="Want to Turn OFF Coupon Status?"
                              data-on-message="<p>If enabled this coupon will be available on the website and customer app</p>"
                              data-off-message="<p>If disabled this coupon will be hidden from the website and customer app</p>"
                            />
                            <span className="switcher_control"></span>
                          </label>
                        </td>
                      <td className="text-center flex justify-center align-items-center gap-0">
                        <button className="btn btn-primary " onClick={() => handleViewCoupon(coupon)}>
                          <FaEye />
                        </button>
                        <Link to={`/coupons/edit/${coupon.id}`} className="btn btn-info btn-sm mx-2">
                          <FaEdit />
                        </Link>
                        <button className="btn btn-danger " onClick={() => handleDeleteCoupon(coupon._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponManagement;


 