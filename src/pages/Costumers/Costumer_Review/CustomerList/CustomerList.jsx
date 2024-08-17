import React from "react";
import { FiSearch, FiDownload } from "react-icons/fi"; // Importing icons from react-icons library
import "./CustomerList.css";
const CustomerList = () => {
  // Sample customer data array (replace with your own data)
  const customers = [
    {
      id: 1,
      name: "Walking Customer",
      email: "walking@customer.com",
      phone: "000000000000",
      totalOrders: 19,
      blockStatus: "Default",
      viewLink: "https://6valley.6amtech.com/admin/customer/view/0",
      deleteAction: "https://6valley.6amtech.com/admin/customer/delete/0",
    },
    {
      id: 10,
      name: "Another Customer",
      email: "another@customer.com",
      phone: "111111111111",
      totalOrders: 10,
      blockStatus: "Default",
      viewLink: "https://6valley.6amtech.com/admin/customer/view/10",
      deleteAction: "https://6valley.6amtech.com/admin/customer/delete/10",
    },
  ];

  return (
    <div className="content container-fluid snipcss-yBZjF">
      <div className="mb-4">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png"
            alt=""
          />{" "}
          Customer list{" "}
          <span className="badge badge-soft-dark radius-50">9</span>
        </h2>
      </div>
      <div className="card">
        <div className="px-3 py-4">
          <div className="row gy-2 align-items-center">
            <div className="col-sm-8 col-md-6 col-lg-4">
              <form
                action="https://6valley.6amtech.com/admin/customer/list"
                method="GET"
              >
                <div className="input-group input-group-merge input-group-custom">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FiSearch />
                    </div>
                  </div>
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="searchValue"
                    className="form-control"
                    placeholder="Search by Name or Email or Phone"
                    aria-label="Search orders"
                    value=""
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
            <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
              <div className="d-flex justify-content-sm-end">
                <button
                  type="button"
                  className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] flex gap-1"
                  style={{
                    display: "flex ",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  data-toggle="dropdown"
                >
                  <FiDownload /> Export
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://6valley.6amtech.com/admin/customer/export"
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
            </div>
          </div>
        </div>
        <div className="table-responsive datatable-custom">
          <table
            className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-1OgBd"
            id="style-1OgBd"
          >
            <thead className="thead-light thead-50 text-capitalize">
              <tr>
                <th>SL</th>
                <th>Customer name</th>
                <th>Contact info</th>
                <th>Total Order </th>
                <th className="text-center">Block / Unblock</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>
                    <a
                      href={customer.viewLink}
                      className="title-color hover-c1 d-flex align-items-center gap-10"
                    >
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/placeholder/user.png"
                        className="avatar rounded-circle"
                        alt=""
                        width="40"
                      />{" "}
                      {customer.name}
                    </a>
                  </td>
                  <td>
                    <div className="mb-1">
                      <strong>
                        <a
                          className="title-color hover-c1"
                          href={`mailto:${customer.email}`}
                        >
                          {customer.email}
                        </a>
                      </strong>
                    </div>
                    <a
                      className="title-color hover-c1"
                      href={`tel:${customer.phone}`}
                    >
                      {customer.phone}
                    </a>
                  </td>
                  <td>
                    <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                      {customer.totalOrders}
                    </label>
                  </td>
                  <td>
                    <div className="text-center">
                      <div className="badge badge-soft-version">
                        {customer.blockStatus}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <a
                        title="View"
                        className="btn btn-outline-info btn-sm square-btn"
                        href={customer.viewLink}
                      >
                        <i className="tio-invisible"></i>
                      </a>
                      <a
                        title="Delete"
                        className="btn btn-outline-danger btn-sm delete square-btn delete-data"
                        href={`javascript:`}
                        data-id={`customer-${customer.id}`}
                      >
                        <i className="tio-delete"></i>
                      </a>
                    </div>
                    <form
                      action={customer.deleteAction}
                      method="post"
                      id={`customer-${customer.id}`}
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
                        autoComplete="off"
                      />{" "}
                      <input type="hidden" name="_method" value="delete" />
                    </form>
                  </td>
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
  );
};

export default CustomerList;
