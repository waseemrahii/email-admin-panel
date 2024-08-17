import React from "react";
import { FaSearch, FaDownload, FaChevronDown } from "react-icons/fa";

const SubscriberList = () => {
  // Dummy data array (replace with your actual data)
  const subscribers = [
    {
      id: 1,
      email: "f**********@gmail.com",
      subscriptionDate: "21 Apr 2022, 04:12 AM",
    },
    {
      id: 2,
      email: "s**********@gmail.com",
      subscriptionDate: "20 Apr 2022, 05:09 AM",
    },
    {
      id: 3,
      email: "s**********@gmail.com",
      subscriptionDate: "20 Apr 2022, 05:05 AM",
    },
    {
      id: 4,
      email: "s**********@gmail.com",
      subscriptionDate: "20 Apr 2022, 05:05 AM",
    },
    {
      id: 5,
      email: "a**********@gmail.com",
      subscriptionDate: "11 Apr 2022, 11:22 AM",
    },
  ];

  return (
    <div className="content container-fluid snipcss-bShdM">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/subscribers.png"
            width="20"
            alt=""
          />{" "}
          Subscriber list{" "}
          <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
            {subscribers.length}
          </span>
        </h2>
      </div>
      <div className="row mt-20">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <form
                action="https://6valley.6amtech.com/admin/customer/subscriber-list"
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
                    name="searchValue"
                    className="form-control"
                    placeholder="Search by email"
                    aria-label="Search orders"
                    value=""
                  />
                  <button
                    type="submit"
                    className="btn bg-[#A1CB46] hover:bg-[#94ba42]"
                  >
                    Search
                  </button>
                </div>
              </form>
              <button
                type="button"
                className="btn rounded text-white  bg-[#A1CB46] hover:bg-[#94ba42] text-nowrap flex justify-center align-items-center gap-2"
                data-toggle="dropdown"
              >
                <FaDownload /> Export <FaChevronDown />
              </button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://6valley.6amtech.com/admin/customer/subscriber-list/export"
                  >
                    <img
                      width="14"
                      src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
                      alt=""
                    />{" "}
                    Excel{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="table-responsive">
              <table
                className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-CSLoI"
                id="style-CSLoI"
              >
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>SL</th>
                    <th scope="col"> Email </th>
                    <th>Subscription date</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber, index) => (
                    <tr key={subscriber.id}>
                      <td>{index + 1}</td>
                      <td>{subscriber.email}</td>
                      <td>{subscriber.subscriptionDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-responsive mt-4">
              <div className="px-4 d-flex justify-content-lg-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberList;
