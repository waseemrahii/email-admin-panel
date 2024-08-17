import React, { useState } from "react";
// import { AiOutlineSearch, AiOutlineEdit, AiOutlineDelete, AiOutlineToggleOn, AiOutlineToggleOff } from 'react-icons/ai'; // Import necessary icons from react-icons

import {
  AiOutlineSearch,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai"; // Correct icons import
const DealOfTheDay = () => {
  // Example array of deals (you can replace this with your actual data)
  const [deals, setDeals] = useState([
    {
      id: 2,
      title: "Buy One Get One",
      productInfo:
        "Stone Crystal Unique Design Necklace Woman Exquisite Wild Short Clavicle Chain",
      status: true, // Example status
    },
    {
      id: 3,
      title: "Buy One Get One",
      productInfo:
        "Stone Crystal Unique Design Necklace Woman Exquisite Wild Short Clavicle Chain",
      status: true, // Example status
    },
    {
      id: 4,
      title: "Buy One Get One",
      productInfo:
        "Stone Crystal Unique Design Necklace Woman Exquisite Wild Short Clavicle Chain",
      status: true, // Example status
    },
    {
      id: 5,
      title: "Buy One Get One",
      productInfo:
        "Stone Crystal Unique Design Necklace Woman Exquisite Wild Short Clavicle Chain",
      status: true, // Example status
    },
    // Add more deals as needed
  ]);

  // Function to toggle status (example implementation)
  const toggleStatus = (id) => {
    const updatedDeals = deals.map((deal) =>
      deal.id === id ? { ...deal, status: !deal.status } : deal
    );
    setDeals(updatedDeals);
  };

  return (
    <div className="content container-fluid snipcss-nGIeP">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/deal_of_the_day.png"
            alt=""
          />{" "}
          Deal of the day
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              {/* Your form and product selection section */}

              <form
                action="https://6valley.6amtech.com/admin/deal/day"
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
                      href="javascript:"
                      id="en-link"
                    >
                      english(EN){" "}
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:"
                      id="sa-link"
                    >
                      Arabic(SA){" "}
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:"
                      id="bd-link"
                    >
                      Bangla(BD){" "}
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:"
                      id="in-link"
                    >
                      Hindi(IN){" "}
                    </a>
                  </li>
                </ul>
                <div className="form-group">
                  <div className="row lang-form" id="en-form">
                    <div className="col-md-12">
                      <label htmlFor="name">Title (EN)</label>
                      <input
                        type="text"
                        name="title[]"
                        className="form-control"
                        id="title"
                        placeholder="Ex : LUX"
                        required
                      />
                    </div>
                  </div>
                  <input type="hidden" name="lang[]" value="en" id="lang" />
                  <div className="row d-none lang-form" id="sa-form">
                    <div className="col-md-12">
                      <label htmlFor="name">Title (SA)</label>
                      <input
                        type="text"
                        name="title[]"
                        className="form-control"
                        id="title"
                        placeholder="Ex : LUX"
                      />
                    </div>
                  </div>
                  <input type="hidden" name="lang[]" value="sa" id="lang" />
                  <div className="row d-none lang-form" id="bd-form">
                    <div className="col-md-12">
                      <label htmlFor="name">Title (BD)</label>
                      <input
                        type="text"
                        name="title[]"
                        className="form-control"
                        id="title"
                        placeholder="Ex : LUX"
                      />
                    </div>
                  </div>
                  <input type="hidden" name="lang[]" value="bd" id="lang" />
                  <div className="row d-none lang-form" id="in-form">
                    <div className="col-md-12">
                      <label htmlFor="name">Title (IN)</label>
                      <input
                        type="text"
                        name="title[]"
                        className="form-control"
                        id="title"
                        placeholder="Ex : LUX"
                      />
                    </div>
                  </div>
                  <input type="hidden" name="lang[]" value="in" id="lang" />
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <label htmlFor="name" className="title-color">
                        Products
                      </label>
                      <input
                        type="text"
                        className="product_id"
                        name="product_id"
                        hidden
                      />
                      <div className="dropdown select-product-search w-100">
                        <button
                          className="form-control text-start dropdown-toggle text-capitalize select-product-button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Select product{" "}
                        </button>
                        <div className="dropdown-menu w-100 px-2">
                          <div className="search-form mb-3">
                            <button type="button" className="btn">
                              <AiOutlineSearch />
                            </button>
                            <input
                              type="text"
                              className="js-form-search form-control search-bar-input search-product"
                              placeholder="Search menu..."
                            />
                          </div>
                          <div className="d-flex flex-column gap-3 max-h-40vh overflow-y-auto overflow-x-hidden search-result-box">
                            <div
                              className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                              data-id="1"
                            >
                              <img
                                className="avatar avatar-xl border"
                                width="75"
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe69f72cce.png"
                                alt=""
                              />
                              <div className="media-body d-flex flex-column gap-1">
                                <h6 className="product-id" hidden>
                                  1
                                </h6>
                                <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                  Women's long-sleeve lightweight french terry
                                  fleece quarter-zip top
                                </h6>
                                <div className="fz-10">
                                  Category : Women's fashion
                                </div>
                                <div className="fz-10">Brand : i Bird</div>
                                <div className="fz-10">Shop : 6valley CMS</div>
                              </div>
                            </div>
                            <div
                              className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                              data-id="3"
                            >
                              <img
                                className="avatar avatar-xl border"
                                width="75"
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-62636369a0855.png"
                                alt=""
                              />
                              <div className="media-body d-flex flex-column gap-1">
                                <h6 className="product-id" hidden>
                                  3
                                </h6>
                                <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                  Ladies Winter Long Sleeve Sweater
                                </h6>
                                <div className="fz-10">
                                  Category : Women's fashion
                                </div>
                                <div className="fz-10">Brand : i Bird</div>
                                <div className="fz-10">
                                  Shop : Deluxe Online
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-3">
                  <button
                    type="reset"
                    id="reset"
                    className="btn btn-secondary px-5 reset-button"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] "
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* end of form */}
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
                  <h5 className="d-flex align-items-center gap-2">
                    {" "}
                    Deal of the day{" "}
                    <span className="badge badge-soft-dark radius-50 fz-12">
                      {deals.length}
                    </span>
                  </h5>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form
                    action="https://6valley.6amtech.com/admin/deal/day"
                    method="GET"
                  >
                    <div className="input-group input-group-merge input-group-custom">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <AiOutlineSearch />
                        </div>
                      </div>
                      <input
                        id="datatableSearch_"
                        type="search"
                        name="searchValue"
                        className="form-control"
                        placeholder="Search by Title"
                        aria-label="Search orders"
                        value=""
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
              <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>SL</th>
                    <th>Title</th>
                    <th>Product info</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {deals.map((deal, index) => (
                    <tr key={deal.id}>
                      <th>{index + 1}</th>
                      <td>
                        <a
                          href="javascript:"
                          target="_blank"
                          className="font-weight-semibold title-color hover-c1"
                        >
                          {deal.title}
                        </a>
                      </td>
                      <td>{deal.productInfo}</td>
                      <td>
                        <label className="switcher">
                          <input
                            type="checkbox"
                            className="switcher_input toggle-switch-message"
                            checked={deal.status}
                            onChange={() => toggleStatus(deal.id)}
                          />
                          <span className="switcher_control">
                            {deal.status ? (
                              <AiOutlineCheckCircle />
                            ) : (
                              <AiOutlineCloseCircle />
                            )}
                          </span>
                        </label>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-10">
                          <a
                            title="edit"
                            href={`https://6valley.6amtech.com/admin/deal/day-update/${deal.id}`}
                            className="btn btn-outline--primary btn-sm edit"
                          >
                            <AiOutlineEdit />
                          </a>
                          <button
                            title="delete"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() =>
                              console.log(`Delete deal with ID ${deal.id}`)
                            } // Implement delete functionality
                          >
                            <AiOutlineDelete />
                          </button>
                        </div>
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
      </div>
    </div>
  );
};

export default DealOfTheDay;
