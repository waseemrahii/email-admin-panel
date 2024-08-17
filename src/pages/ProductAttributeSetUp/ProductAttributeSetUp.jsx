import React, { useState } from "react";
import "./AttributeSetup.css";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const AttributeSetup = () => {
  // State for handling language tabs
  const [activeTab, setActiveTab] = useState("en");

  // Handler for tab click
  const handleTabClick = (lang) => {
    setActiveTab(lang);
  };

  return (
    <div className="content container-fluid p-15 snipcss-oDPVp ">
      <div className="mb-3">
        <h2 className="h1 mb-0 d-flex gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/attribute.png"
            alt="Attribute Icon"
          />{" "}
          Attribute Setup
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card">
            <div className="card-body">
              <form
                action="https://6valley.6amtech.com/admin/attribute/store"
                method="post"
                className="text-start"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="ze0GWUJdOFTygsn8ecBJ5eLPHaw8OO6oqUnD3tx4"
                  autoComplete="off"
                />
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item text-capitalize">
                    <a
                      className={`nav-link form-system-language-tab  cursor-pointer ${
                        activeTab === "en" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("en")}
                    >
                      English (EN)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className={`nav-link form-system-language-tab cursor-pointer ${
                        activeTab === "sa" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("sa")}
                    >
                      Arabic (SA)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className={`nav-link form-system-language-tab cursor-pointer ${
                        activeTab === "bd" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("bd")}
                    >
                      Bangla (BD)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className={`nav-link form-system-language-tab cursor-pointer ${
                        activeTab === "in" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("in")}
                    >
                      Hindi (IN)
                    </a>
                  </li>
                </ul>
                {["en", "sa", "bd", "in"].map((lang) => (
                  <div
                    key={lang}
                    className={`form-group form-system-language-form ${
                      activeTab === lang ? "" : "d-none"
                    }`}
                  >
                    <input type="hidden" id="id" />
                    <label className="title-color" htmlFor={`name-${lang}`}>
                      Attribute Name <span className="text-danger">*</span> (
                      {lang.toUpperCase()})
                    </label>
                    <input
                      type="text"
                      name="name[]"
                      className="form-control"
                      id={`name-${lang}`}
                      placeholder="Enter Attribute Name"
                      required={lang === "en"}
                    />
                    <input type="hidden" name="lang[]" value={lang} id="lang" />
                  </div>
                ))}
                <div className="d-flex flex-wrap gap-2 justify-content-end">
                  <button
                    type="reset"
                    className="btn btn-secondary rounded px-3 py-2"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="row align-items-center">
                <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                  <h5 className="mb-0 d-flex align-items-center gap-2">
                    Attribute list{" "}
                    <span className="badge badge-soft-dark radius-50 fz-12">
                      2
                    </span>
                  </h5>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form
                    action="https://6valley.6amtech.com/admin/attribute/view"
                    method="GET"
                  >
                    <div className="input-group input-group-custom input-group-merge">
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
                        placeholder="Search by Attribute Name"
                        aria-label="Search orders"
                        required
                      />
                      <button
                        type="submit"
                        className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-start">
              <div className="table-responsive">
                <table
                  id="datatable"
                  className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                >
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th className="text-center">Attribute Name</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr>
                      <td>2</td>
                      <td className="text-center">Type</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/productattributeupdate'
                            className="btn btn-outline-info btn-sm square-btn"
                            title="Edit"
                          
                          >
                           <FaEdit />
                          </Link>
                          <Link
                            className="btn btn-outline-danger btn-sm attribute-delete-button square-btn"
                            title="Delete"
                            id="2"
                          >
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="table-responsive mt-4">
              <div className="d-flex justify-content-lg-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributeSetup;
