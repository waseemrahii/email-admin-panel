// import React from 'react';
// import { useState } from 'react'; // Import useState if you need to manage state within this component
// import { useEffect } from 'react'; // Import useEffect if you need to use lifecycle methods
// import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components for Modal and Button
// import './CustomerBonusSetUp.css'
// const CustomerBonusSetUp = () => {
//     // State to manage modal visibility
//     const [showModal, setShowModal] = useState(false);

//     // Function to toggle modal
//     const toggleModal = () => {
//         setShowModal(!showModal);
//     };

//     // UseEffect for lifecycle handling if required
//     useEffect(() => {
//         // Additional logic or API calls can be handled here
//     }, []);

//     return (
//         <div className="content container-fluid snipcss-dPd2m">
//             <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4 pb-2">
//                 <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//                     <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png" alt="" /> Wallet bonus setup
//                 </h2>
//                 <div className="text-primary d-flex align-items-center gap-3 font-weight-bolder">
//                     How it works{' '}
//                     <div className="ripple-animation" onClick={toggleModal}>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="18"
//                             height="18"
//                             viewBox="0 0 18 18"
//                             fill="none"
//                             className="svg replaced-svg"
//                         >
//                             <path
//                                 d="M9.00033 9.83268C9.23644 9.83268 9.43449 9.75268 9.59449 9.59268C9.75449 9.43268 9.83421 9.2349 9.83366 8.99935V5.64518C9.83366 5.40907 9.75366 5.21463 9.59366 5.06185C9.43366 4.90907 9.23588 4.83268 9.00033 4.83268C8.76421 4.83268 8.56616 4.91268 8.40616 5.07268C8.24616 5.23268 8.16644 5.43046 8.16699 5.66602V9.02018C8.16699 9.25629 8.24699 9.45074 8.40699 9.60352C8.56699 9.75629 8.76477 9.83268 9.00033 9.83268ZM9.00033 13.166C9.23644 13.166 9.43449 13.086 9.59449 12.926C9.75449 12.766 9.83421 12.5682 9.83366 12.3327C9.83366 12.0966 9.75366 11.8985 9.59366 11.7385C9.43366 11.5785 9.23588 11.4988 9.00033 11.4993C8.76421 11.4993 8.56616 11.5793 8.40616 11.7393C8.24616 11.8993 8.16644 12.0971 8.16699 12.3327C8.16699 12.5688 8.24699 12.7668 8.40699 12.9268C8.56699 13.0868 8.76477 13.1666 9.00033 13.166ZM9.00033 17.3327C7.84755 17.3327 6.76421 17.1138 5.75033 16.676C4.73644 16.2382 3.85449 15.6446 3.10449 14.8952C2.35449 14.1452 1.76088 13.2632 1.32366 12.2493C0.886437 11.2355 0.667548 10.1521 0.666992 8.99935C0.666992 7.84657 0.885881 6.76324 1.32366 5.74935C1.76144 4.73546 2.35505 3.85352 3.10449 3.10352C3.85449 2.35352 4.73644 1.7599 5.75033 1.32268C6.76421 0.88546 7.84755 0.666571 9.00033 0.666016C10.1531 0.666016 11.2364 0.884905 12.2503 1.32268C13.2642 1.76046 14.1462 2.35407 14.8962 3.10352C15.6462 3.85352 16.24 4.73546 16.6778 5.74935C17.1156 6.76324 17.3342 7.84657 17.3337 8.99935C17.3337 10.1521 17.1148 11.2355 16.677 12.2493C16.2392 13.2632 15.6456 14.1452 14.8962 14.8952C14.1462 15.6452 13.2642 16.2391 12.2503 16.6768C11.2364 17.1146 10.1531 17.3332 9.00033 17.3327ZM9.00033 15.666C10.8475 15.666 12.4206 15.0168 13.7195 13.7185C15.0184 12.4202 15.6675 10.8471 15.667 8.99935C15.667 7.15213 15.0178 5.57907 13.7195 4.28018C12.4212 2.98129 10.8481 2.33213 9.00033 2.33268C7.1531 2.33268 5.58005 2.98185 4.28116 4.28018C2.98227 5.57852 2.3331 7.15157 2.33366 8.99935C2.33366 10.8466 2.98283 12.4196 4.28116 13.7185C5.57949 15.0174 7.15255 15.6666 9.00033 15.666Z"
//                                 fill="currentColor"
//                             ></path>
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//             <div className="card">
//                 <div className="card-body">
//                     {/* Form goes here */}
//                 </div>
//             </div>
//             <div className="card mt-3">
//                 <div className="px-3 py-4">
//                     {/* Table goes here */}
//                 </div>
//             </div>
//             {/* Modal for 'How it works' */}
//             <Modal show={showModal} onHide={toggleModal} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>How it Works</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className="d-flex flex-column align-items-center gap-2">
//                         <img width="80" className="mb-3" src="https://6valley.6amtech.com/public/assets/back-end/img/wallet-bonus.png" loading="lazy" alt="" />
//                         <h4 className="lh-md">Wallet bonus is only applicable when a customer wants to add fund to wallet via outside payment gateway!</h4>
//                         <p>
//                             The bonus amounts are added to the customer’s wallet balance with the amount added from outside payment gateways when admin set this bonus amount. The bonus amount will be deduct from admin wallet &amp; will consider as admin expense.
//                         </p>
//                     </div>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default CustomerBonusSetUp;

import React, { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import "./CustomerBonusSetUp.css";
const CustomerBonusSetUp = () => {
  const [bonuses, setBonuses] = useState([
    {
      id: 1,
      title: "Add fund Bonus",
      info: {
        minAmount: 1000,
        maxBonus: 5000,
      },
      amount: "35%",
      startDate: "12 Oct, 2023",
      endDate: "26 Nov, 2031",
      status: true,
    },
    {
      id: 2,
      title: "Flat Bonus",
      info: {
        minAmount: 500,
        maxBonus: null,
      },
      amount: "$150.00",
      startDate: "12 Oct, 2023",
      endDate: "22 Nov, 2030",
      status: true,
    },
  ]);

  return (
    <div className="content container-fluid">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4 pb-2">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png"
            alt="Admin Wallet"
          />
          Wallet bonus setup
        </h2>
        <div className="text-primary d-flex align-items-center gap-3 font-weight-bolder">
          How it works
          <div
            className="ripple-animation"
            data-toggle="modal"
            data-target="#howItWorksModal"
          >
            <HiInformationCircle size={18} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <form
            action="https://6valley.6amtech.com/admin/customer/wallet/bonus-setup"
            id="form-submit"
            method="post"
          >
            <input
              type="hidden"
              name="_token"
              value="Twvhv0EJYa0GUycFmHJFzLVQRODPOpx9nQxb0DbE"
              autoComplete="off"
            />
            <div className="row gap-2">
              <div className="col-sm-12 col-md-12 flex">
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label
                      htmlFor="bonus_title"
                      className="title-color text-capitalize d-flex"
                    >
                      Bonus title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      id="bonus_title"
                      placeholder="Ex:EID Dhamaka"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label
                      htmlFor="short_desc"
                      className="title-color text-capitalize d-flex"
                    >
                      Short description
                    </label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      id="short_desc"
                      placeholder="Ex:EID Dhamaka"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12  flex flex-wrap">
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="bonus-type"
                      className="title-color text-capitalize d-flex"
                    >
                      Bonus type
                    </label>
                    <select
                      name="bonus_type"
                      id="bonus-type"
                      className="form-control"
                      required
                    >
                      <option value="percentage">Percentage(%)</option>
                      <option value="fixed">Fixed amount</option>
                    </select>
                  </div>
                </div>
                <div
                  className="col-sm-4 col-md-4 col-lg-4"
                  id="bonus_amount_area"
                >
                  <div className="form-group">
                    <label
                      htmlFor="bonus_amount"
                      className="title-color text-capitalize d-flex"
                    >
                      Bonus amount (<span id="bonus-title-percent">%</span>)
                    </label>
                    <input
                      type="number"
                      name="bonus_amount"
                      min="0"
                      className="form-control"
                      value="0"
                      id="bonus_amount"
                      placeholder="Ex:5"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="min_add_money_amount"
                      className="title-color text-capitalize d-flex"
                    >
                      Minimum add amount ($)
                    </label>
                    <input
                      type="number"
                      name="min_add_money_amount"
                      min="0"
                      className="form-control"
                      id="min_add_money_amount"
                      value="0"
                      placeholder="Ex:100"
                      required
                    />
                  </div>
                </div>
                <div
                  className="col-sm-4 col-md-4 col-lg-4"
                  id="max-bonus-amount-area"
                >
                  <div className="form-group">
                    <label
                      htmlFor="max_bonus_amount"
                      className="title-color text-capitalize d-flex"
                    >
                      Maximum bonus ($)
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="max_bonus_amount"
                      value="0"
                      className="form-control"
                      id="max_bonus_amount"
                      placeholder="Ex:5000"
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="start-date-time"
                      className="title-color text-capitalize d-flex"
                    >
                      Start date
                    </label>
                    <input
                      type="date"
                      name="start_date_time"
                      id="start-date-time"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="end-date-time"
                      className="title-color text-capitalize d-flex"
                    >
                      End date
                    </label>
                    <input
                      type="date"
                      name="end_date_time"
                      id="end-date-time"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex gap-3 justify-content-end">
                  <button type="reset" className="btn btn-secondary px-5">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn  py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-5"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card mt-3">
        <div className="px-3 py-4">
          <div className="row align-items-center">
            <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
              <h5 className="mb-0 d-flex align-items-center gap-10">
                Wallet Bonus Table
                <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                  {bonuses.length}
                </span>
              </h5>
            </div>
            <div className="col-sm-8 col-md-6 col-lg-4">
              <form
                action="https://6valley.6amtech.com/admin/customer/wallet/bonus-setup"
                method="GET"
              >
                <div className="input-group input-group-merge input-group-custom">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FaSearch />
                    </div>
                  </div>
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="search"
                    className="form-control"
                    placeholder="Search by bonus title"
                    aria-label="Search orders"
                  />
                  <button
                    type="submit"
                    className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
            <thead className="thead-light thead-50 text-capitalize">
              <tr>
                <th>SL</th>
                <th>Bonus title</th>
                <th>Bonus info</th>
                <th className="text-center">Bonus amount</th>
                <th className="text-center">Started on</th>
                <th className="text-center">Expires on</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {bonuses.map((bonus, index) => (
                <tr key={bonus.id}>
                  <td>{index + 1}</td>
                  <td>{bonus.title}</td>
                  <td>
                    <ul className="list-unstyled">
                      <li>Min add amount: ${bonus.info.minAmount}</li>
                      <li>
                        Max bonus: ${bonus.info.maxBonus ?? "Not required"}
                      </li>
                    </ul>
                  </td>
                  <td className="text-center">{bonus.amount}</td>
                  <td className="text-center">{bonus.startDate}</td>
                  <td className="text-center">{bonus.endDate}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span
                        className={`badge ${
                          bonus.status
                            ? "badge-soft-success"
                            : "badge-soft-danger"
                        }`}
                      >
                        {bonus.status ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <FaEdit className="text--primary cursor-pointer" />
                      <FaTrash className="text-danger cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerBonusSetUp;
