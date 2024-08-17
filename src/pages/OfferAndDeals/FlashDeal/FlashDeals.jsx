// import React, { useState } from 'react';
// import './FlashDeals.css'; // Import your CSS file

// const FlashDeals = () => {
//   // State for language form visibility
//   const [activeLang, setActiveLang] = useState('en');
//   const [formData, setFormData] = useState({
//     title: { en: '', sa: '', bd: '', in: '' },
//     startDate: '',
//     endDate: '',
//     image: null,
//   });

//   // State for flash deals data
//   const [flashDeals, setFlashDeals] = useState([
//     {
//       id: 1,
//       title: 'Demo',
//       startDate: '2023-06-29',
//       endDate: '2023-06-30',
//       status: 'Active',
//       activeProducts: 1,
//       published: true,
//     },
//     {
//       id: 2,
//       title: 'Summer Sale',
//       startDate: '2023-07-01',
//       endDate: '2023-07-10',
//       status: 'Inactive',
//       activeProducts: 5,
//       published: false,
//     },
//     // Add more items as needed
//   ]);

//   const handleLangChange = (lang) => {
//     setActiveLang(lang);
//   };

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       setFormData({ ...formData, image: files[0] });
//     } else if (name.includes('title')) {
//       const lang = name.split('[')[1].slice(0, -1); // Extract the language code
//       setFormData({ ...formData, title: { ...formData.title, [lang]: value } });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Submit form logic here
//     console.log(formData);
//   };

//   const handleCheckboxChange = (id) => {
//     setFlashDeals((prevDeals) =>
//       prevDeals.map((deal) =>
//         deal.id === id ? { ...deal, published: !deal.published } : deal
//       )
//     );
//   };

//   return (
//     <div className="content container-fluid snipcss-SrYZc">
//       <div className="d-flex justify-content-between gap-2 mb-3">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/flash_deal.png" alt="" /> Flash deals
//         </h2>
//         <button className="btn btn-primary" data-toggle="modal" data-target="#prioritySetModal">
//           <span data-toggle="tooltip" title="Now you can set priority of products.">Product priority Setup</span>
//         </button>
//       </div>

//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body">
//               <form onSubmit={handleFormSubmit} className="text-start" encType="multipart/form-data">
//                 <ul className="nav nav-tabs w-fit-content mb-4">
//                   {['en', 'sa', 'bd', 'in'].map((lang) => (
//                     <li className="nav-item text-capitalize font-weight-medium" key={lang}>
//                       <button
//                         type="button"
//                         className={`nav-link lang-link ${activeLang === lang ? 'active' : ''}`}
//                         onClick={() => handleLangChange(lang)}
//                       >
//                         {`${lang === 'en' ? 'English' : lang.charAt(0).toUpperCase() + lang.slice(1)}(${lang.toUpperCase()})`}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="row">
//                   <div className="col-lg-6">
//                     {['en', 'sa', 'bd', 'in'].map((lang) => (
//                       <div key={lang} className={`lang-form ${activeLang === lang ? '' : 'd-none'}`} id={`${lang}-form`}>
//                         <input type="hidden" name="deal_type" value="flash_deal" />
//                         <div className="form-group">
//                           <label htmlFor="title" className="title-color font-weight-medium text-capitalize">{`Title (${lang.toUpperCase()})`}</label>
//                           <input
//                             type="text"
//                             name={`title[${lang}]`}
//                             className="form-control"
//                             placeholder={`Ex:LUX`}
//                             value={formData.title[lang]}
//                             onChange={handleInputChange}
//                             required={lang === 'en'} // Require only English field
//                           />
//                         </div>
//                         <input type="hidden" name="lang[]" value={lang} />
//                       </div>
//                     ))}

//                     <div className="form-group">
//                       <label htmlFor="start-date-time" className="title-color font-weight-medium text-capitalize">Start date</label>
//                       <input
//                         type="date"
//                         name="startDate"
//                         id="start-date-time"
//                         className="form-control"
//                         value={formData.startDate}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="end-date-time" className="title-color font-weight-medium text-capitalize">End date</label>
//                       <input
//                         type="date"
//                         name="endDate"
//                         id="end-date-time"
//                         className="form-control"
//                         value={formData.endDate}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="col-lg-6">
//                     <div className="form-group">
//                       <div className="text-center">
//                         <img className="border radius-10 ratio-4:1 max-w-655px w-100" id="viewer" src="https://6valley.6amtech.com/public/assets/front-end/img/placeholder.png" alt="Banner image" />
//                       </div>
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="custom-file-upload" className="title-color font-weight-medium text-capitalize">Upload image</label>
//                       <span className="text-info ml-1">( Ratio 5:1 )</span>
//                       <div className="custom-file text-left">
//                         <input
//                           type="file"
//                           name="image"
//                           id="custom-file-upload"
//                           className="custom-file-input image-input"
//                           data-image-id="viewer"
//                           accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
//                           onChange={handleInputChange}
//                         />
//                         <label className="custom-file-label text-capitalize" htmlFor="custom-file-upload">Choose file</label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="d-flex justify-content-end gap-3">
//                   <button type="reset" className="btn btn-secondary px-4">Reset</button>
//                   <button type="submit" className="btn btn--primary px-4">Submit</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row mt-20">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="px-3 py-4">
//               <div className="row align-items-center">
//                 <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
//                   <h5 className="mb-0 text-capitalize d-flex gap-2">
//                     Flash deal table <span className="badge badge-soft-dark radius-50 fz-12">{flashDeals.length}</span>
//                   </h5>
//                 </div>
//                 <div className="col-sm-8 col-md-6 col-lg-4">
//                   <form action="https://6valley.6amtech.com/admin/deal/flash" method="GET">
//                     <div className="input-group input-group-merge input-group-custom">
//                       <div className="input-group-prepend">
//                         <div className="input-group-text">
//                           <i className="tio-search"></i>
//                         </div>
//                       </div>
//                       <input
//                         id="datatableSearch_"
//                         type="search"
//                         name="searchValue"
//                         className="form-control"
//                         placeholder="Search by Title"
//                         aria-label="Search orders"
//                         required
//                       />
//                       <button type="submit" className="btn btn-primary">search</button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             <div className="table-responsive datatable-custom">
//               <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
//                 <thead className="thead-light">
//                   <tr>
//                     <th>#</th>
//                     <th>Title</th>
//                     <th>Start</th>
//                     <th>End</th>
//                     <th>Status</th>
//                     <th className="text-center">Active products</th>
//                     <th className="text-center">Published</th>
//                     <th className="text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {flashDeals.map((deal) => (
//                     <tr key={deal.id}>
//                       <td>{deal.id}</td>
//                       <td><span className="d-block font-size-sm text-body">{deal.title}</span></td>
//                       <td>{deal.startDate} - {deal.endDate}</td>
//                       <td><div className={`badge ${deal.status === 'Active' ? 'badge-success' : 'badge-secondary'}`}>{deal.status}</div></td>
//                       <td className="text-center">{deal.activeProducts}</td>
//                       <td className="text-center">
//                         <label className="switcher">
//                           <input
//                             type="checkbox"
//                             className="switcher_input"
//                             checked={deal.published}
//                             onChange={() => handleCheckboxChange(deal.id)}
//                           />
//                           <span className="switcher_control"></span>
//                         </label>
//                       </td>
//                       <td>
//                         <div className="d-flex justify-content-center gap-2">
//                           <button className="btn btn-outline--primary btn-sm edit" title="Edit">
//                             <i className="tio-edit"></i>
//                           </button>
//                           <button className="btn btn-outline-danger btn-sm delete" title="Delete">
//                             <i className="tio-delete"></i>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="page-area">
//                 <div className="d-flex justify-content-end">
//                   <nav aria-label="Page navigation">
//                     <ul className="pagination">
//                       <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
//                         <span className="page-link" aria-hidden="true">‹</span>
//                       </li>
//                       <li className="page-item active" aria-current="page">
//                         <span className="page-link">1</span>
//                       </li>
//                       <li className="page-item">
//                         <a className="page-link" href="#">2</a>
//                       </li>
//                       <li className="page-item">
//                         <a className="page-link" href="#" rel="next" aria-label="Next »">›</a>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </div>

//             {activeLang === 'modal' && (
//               <div className="modal fade" id="prioritySetModal" tabIndex="-1" role="dialog" aria-labelledby="prioritySetModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       <h5 className="modal-title" id="prioritySetModalLabel">Priority Setup</h5>
//                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                       </button>
//                     </div>
//                     <div className="modal-body">
//                       {/* Modal content goes here */}
//                     </div>
//                     <div className="modal-footer">
//                       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                       <button type="button" className="btn btn-primary">Save changes</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlashDeals;

import React, { useState } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlusCircle } from "react-icons/fa"; // Importing FontAwesome icons
import { MdFlashOn } from "react-icons/md"; // Importing Material Design icon
import "./FlashDeals.css"; // Import your CSS file

const FlashDeals = () => {
  const [activeLang, setActiveLang] = useState("en");
  const [formData, setFormData] = useState({
    title: { en: "", sa: "", bd: "", in: "" },
    startDate: "",
    endDate: "",
    image: null,
  });

  const [flashDeals, setFlashDeals] = useState([
    {
      id: 1,
      title: "Demo",
      startDate: "2023-06-29",
      endDate: "2023-06-30",
      status: "Active",
      activeProducts: 1,
      published: true,
    },
    {
      id: 2,
      title: "Summer Sale",
      startDate: "2023-07-01",
      endDate: "2023-07-10",
      status: "Inactive",
      activeProducts: 5,
      published: false,
    },
    {
      id: 2,
      title: "Summer Sale",
      startDate: "2023-07-01",
      endDate: "2023-07-10",
      status: "Inactive",
      activeProducts: 5,
      published: false,
    },
    {
      id: 2,
      title: "Summer Sale",
      startDate: "2023-07-01",
      endDate: "2023-07-10",
      status: "Inactive",
      activeProducts: 5,
      published: false,
    },
    {
      id: 2,
      title: "Summer Sale",
      startDate: "2023-07-01",
      endDate: "2023-07-10",
      status: "Inactive",
      activeProducts: 5,
      published: false,
    },
  ]);

  const handleLangChange = (lang) => {
    setActiveLang(lang);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else if (name.includes("title")) {
      const lang = name.split("[")[1].slice(0, -1);
      setFormData({ ...formData, title: { ...formData.title, [lang]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCheckboxChange = (id) => {
    setFlashDeals((prevDeals) =>
      prevDeals.map((deal) =>
        deal.id === id ? { ...deal, published: !deal.published } : deal
      )
    );
  };

  return (
    <div className="content container-fluid snipcss-SrYZc">
      <div className="d-flex justify-content-between gap-2 mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <MdFlashOn size={24} /> Flash deals
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
            {/* <FaPlusCircle size={16} /> Product priority Setup */}
            Product priority Setup
          </span>
        </button>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form
                onSubmit={handleFormSubmit}
                className="text-start"
                encType="multipart/form-data"
              >
                <ul className="nav nav-tabs w-fit-content mb-4">
                  {["en", "sa", "bd", "in"].map((lang) => (
                    <li
                      className="nav-item text-capitalize font-weight-medium"
                      key={lang}
                    >
                      <button
                        type="button"
                        className={`nav-link lang-link ${
                          activeLang === lang ? "active" : ""
                        }`}
                        onClick={() => handleLangChange(lang)}
                      >
                        {`${
                          lang === "en"
                            ? "English"
                            : lang.charAt(0).toUpperCase() + lang.slice(1)
                        }(${lang.toUpperCase()})`}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="row">
                  <div className="col-lg-6">
                    {["en", "sa", "bd", "in"].map((lang) => (
                      <div
                        key={lang}
                        className={`lang-form ${
                          activeLang === lang ? "" : "d-none"
                        }`}
                        id={`${lang}-form`}
                      >
                        <input
                          type="hidden"
                          name="deal_type"
                          value="flash_deal"
                        />
                        <div className="form-group">
                          <label
                            htmlFor="title"
                            className="title-color font-weight-medium text-capitalize"
                          >{`Title (${lang.toUpperCase()})`}</label>
                          <input
                            type="text"
                            name={`title[${lang}]`}
                            className="form-control"
                            placeholder={`Ex:LUX`}
                            value={formData.title[lang]}
                            onChange={handleInputChange}
                            required={lang === "en"}
                          />
                        </div>
                        <input type="hidden" name="lang[]" value={lang} />
                      </div>
                    ))}

                    <div className="form-group">
                      <label
                        htmlFor="start-date-time"
                        className="title-color font-weight-medium text-capitalize"
                      >
                        Start date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        id="start-date-time"
                        className="form-control"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="end-date-time"
                        className="title-color font-weight-medium text-capitalize"
                      >
                        End date
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        id="end-date-time"
                        className="form-control"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="text-center">
                        <img
                          className="border radius-10 ratio-4:1 max-w-655px w-100"
                          id="viewer"
                          src="https://6valley.6amtech.com/public/assets/front-end/img/placeholder.png"
                          alt="Banner image"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="custom-file-upload"
                        className="title-color font-weight-medium text-capitalize"
                      >
                        Upload image
                      </label>
                      <span className="text-info ml-1">( Ratio 5:1 )</span>
                      <div className="custom-file text-left">
                        <input
                          type="file"
                          name="image"
                          id="custom-file-upload"
                          className="custom-file-input image-input"
                          data-image-id="viewer"
                          accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                          onChange={handleInputChange}
                        />
                        <label
                          className="custom-file-label text-capitalize"
                          htmlFor="custom-file-upload"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-3">
                  <button type="reset" className="btn btn-secondary px-4">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                    style={{background:"green"}}
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
                  <h5 className="mb-0 text-capitalize d-flex gap-2">
                    Flash deal table{" "}
                    <span className="badge badge-soft-dark radius-50 fz-12">
                      {flashDeals.length}
                    </span>
                  </h5>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form
                    action="#"
                    method="GET"
                  >
                    <div className="input-group input-group-merge input-group-custom border-green-500">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FaSearch />
                        </div>
                      </div>
                      <input
                        type="search"
                        name="search"
                        className="form-control"
                        placeholder="Search by title"
                        required
                      />
                      <button type="submit" className="btn btn-primary"
                       style={{ background:"green" }}
                      >
                        search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="table-responsive datatable-custom">
              <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Status</th>
                    <th className="text-center">Active products</th>
                    <th className="text-center">Published</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {flashDeals.map((deal) => (
                    <tr key={deal.id}>
                      <td>{deal.id}</td>
                      <td>
                        <span className="d-block font-size-sm text-body">
                          {deal.title}
                        </span>
                      </td>
                      <td>
                        {deal.startDate} - {deal.endDate}
                      </td>
                      <td>
                        <div
                          className={`badge ${
                            deal.status === "Active"
                              ? "badge-success"
                              : "badge-secondary"
                          }`}
                        >
                          {deal.status}
                        </div>
                      </td>
                      <td className="text-center">{deal.activeProducts}</td>
                      <td className="text-center">
                        <label className="switcher">
                          <input
                            type="checkbox"
                            className="switcher_input"
                            checked={deal.published}
                            onChange={() => handleCheckboxChange(deal.id)}
                          />
                          <span className="switcher_control"></span>
                        </label>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-outline--primary btn-sm edit"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="btn btn-outline-danger btn-sm delete"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-outline--primary btn-sm edit bg-green-400"
                            title="Edit"
                          >
                            {/* <FaEdit /> */}
                            <FaPlusCircle />
                          </button>
                          <button
                            className="btn btn-outline-danger btn-sm delete"
                            title="Delete"
                          ></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="page-area">
                <div className="d-flex justify-content-end">
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li
                        className="page-item disabled"
                        aria-disabled="true"
                        aria-label="« Previous"
                      >
                        <span className="page-link" aria-hidden="true">
                          ‹
                        </span>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="#"
                          rel="next"
                          aria-label="Next »"
                        >
                          ›
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {activeLang === "modal" && (
              <div
                className="modal fade"
                id="prioritySetModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="prioritySetModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="prioritySetModalLabel">
                        Priority Setup
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* Modal content goes here */}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
