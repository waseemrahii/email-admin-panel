import React from "react";
import { FaSearch, FaEdit, FaPlus, FaTrash, FaPen } from "react-icons/fa";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import "./FeatureDeal.css"; // Assume this file contains your custom styles
import { Link } from "react-router-dom";

const FeatureDeal = () => {
  return (
    <div className="content container-fluid">
      <div className="d-flex justify-content-between gap-2 mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/featured_deal.png"
            alt="Feature deal"
          />
          Feature deal
        </h2>
        <button
          className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
          data-toggle="modal"
          data-target="#prioritySetModal"
        >
          <span
            data-toggle="tooltip"
            title="Now you can set priority of products."
          >
            Product priority Setup
          </span>
        </button>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form
                action="https://6valley.6amtech.com/admin/deal/flash"
                className="text-start onsubmit-disable-action-button"
                method="post"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
                  autoComplete="off"
                />
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link active"
                      href="javascript:void(0);"
                      id="en-link"
                    >
                      english(EN)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:void(0);"
                      id="sa-link"
                    >
                      Arabic(SA)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:void(0);"
                      id="bd-link"
                    >
                      Bangla(BD)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:void(0);"
                      id="in-link"
                    >
                      Hindi(IN)
                    </a>
                  </li>
                </ul>
                <div className="form-group">
                  <div className="row">
                    <input
                      type="text"
                      name="deal_type"
                      value="feature_deal"
                      className="d-none"
                    />
                    <div className="col-md-12 lang-form" id="en-form">
                      <label
                        htmlFor="title"
                        className="title-color text-capitalize"
                      >
                        Title (EN)
                      </label>
                      <input
                        type="text"
                        name="title[]"
                        className="form-control"
                        id="title"
                        placeholder="Ex:LUX"
                        required
                      />
                    </div>
                    <input type="hidden" name="lang[]" value="en" id="lang" />
                    <div className="col-md-12 d-none lang-form" id="sa-form">
                      <label
                        htmlFor="title"
                        className="title-color text-capitalize"
                      >
                        Title (SA)
                      </label>
                      <input
                        type="text"
                        name="title[]"
                        className="form-control"
                        id="title"
                        placeholder="Ex:LUX"
                      />
                    </div>
                    <input type="hidden" name="lang[]" value="sa" id="lang" />
                    <div className="col-md-12 d-none lang-form" id="bd-form">
                      <label
                        htmlFor="title"
                        className="title-color text-capitalize"
                      >
                        Title (BD)
                      </label>
                      <input
                        type="text"
                        name="title[]"
                        className="form-control"
                        id="title"
                        placeholder="Ex:LUX"
                      />
                    </div>
                    <input type="hidden" name="lang[]" value="bd" id="lang" />
                    <div className="col-md-12 d-none lang-form" id="in-form">
                      <label
                        htmlFor="title"
                        className="title-color text-capitalize"
                      >
                        Title (IN)
                      </label>
                      <input
                        type="text"
                        name="title[]"
                        className="form-control"
                        id="title"
                        placeholder="Ex:LUX"
                      />
                    </div>
                    <input type="hidden" name="lang[]" value="in" id="lang" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <label
                        htmlFor="start-date-time"
                        className="title-color text-capitalize"
                      >
                        Start date
                      </label>
                      <input
                        type="date"
                        name="start_date"
                        id="start-date-time"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label
                        htmlFor="end-date-time"
                        className="title-color text-capitalize"
                      >
                        End date
                      </label>
                      <input
                        type="date"
                        name="end_date"
                        id="end-date-time"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-3">
                  <button type="reset" id="reset" className="btn btn-secondary">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-20">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="row align-items-center">
                <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                  <h5 className="mb-0 text-capitalize align-items-center d-flex gap-2">
                    Feature deal table
                    <span className="badge badge-soft-dark radius-50 fz-12">
                      2
                    </span>
                  </h5>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form
                    action="https://6valley.6amtech.com/admin/deal/feature"
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
                        placeholder="Search by title"
                        aria-label="Search orders"
                        required
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
              <table
                id="datatable"
                className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
              >
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>SL</th>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Active / Expired</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Featured deal</td>
                    <td>13-Apr-22</td>
                    <td>16-Aug-23</td>
                    <td>
                      <span className="badge badge-soft-danger">Expired</span>
                    </td>
                    <td>
                      <form
                        action="https://6valley.6amtech.com/admin/deal/feature-status"
                        method="post"
                        id="feature-status5-form"
                        data-from="deal"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
                        />
                        <input type="hidden" name="id" value="5" />
                        <input type="hidden" name="status" value="0" />
                        <div
                          className="d-flex justify-content-center cursor-pointer"
                          onClick={() =>
                            document
                              .getElementById("feature-status5-form")
                              .submit()
                          }
                        >
                          <BsToggleOff size={30} />
                        </div>
                      </form>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link to='/addfeaturedproduct' className="h-30 d-flex gap-2 align-items-center btn btn-soft-info btn-sm border-info">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" className="svg replaced-svg">
                                                            <path d="M9 3.9375H5.0625V0H3.9375V3.9375H0V5.0625H3.9375V9H5.0625V5.0625H9V3.9375Z" fill="#00A3AD" />
                                                        </svg> Add product
                                                    </Link>
                        <button>
                          <p className="btn btn-outline-danger btn-sm delete" title="Delete">
                            <FaPen />
                          </p>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Featured deal</td>
                    <td>17-Apr-22</td>
                    <td>16-Aug-23</td>
                    <td>
                      <span className="badge badge-soft-success">Active</span>
                    </td>
                    <td>
                      <form
                        action="https://6valley.6amtech.com/admin/deal/feature-status"
                        method="post"
                        id="feature-status4-form"
                        data-from="deal"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
                        />
                        <input type="hidden" name="id" value="4" />
                        <input type="hidden" name="status" value="1" />
                        <div
                          className="d-flex justify-content-center cursor-pointer"
                          onClick={() =>
                            document
                              .getElementById("feature-status4-form")
                              .submit()
                          }
                        >
                          <BsToggleOn size={30} />
                        </div>
                      </form>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link to='/addfeaturedproduct' className="h-30 d-flex gap-2 align-items-center btn btn-soft-info btn-sm border-info">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" className="svg replaced-svg">
                                                            <path d="M9 3.9375H5.0625V0H3.9375V3.9375H0V5.0625H3.9375V9H5.0625V5.0625H9V3.9375Z" fill="#00A3AD" />
                                                        </svg> Add product
                                                    </Link>
                        <button>
                          <p className="btn btn-outline-danger btn-sm delete" title="Delete">
                            <FaPen />
                          </p>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDeal;
