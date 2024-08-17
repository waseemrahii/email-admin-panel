// import React from "react";
// import CategoriesList from "./CategoriesList/CategoriesList";

// const SubCateggories = () => {
//   return (
//     <div className="bg-[#F9F9FB]  px-5 py-5 w-[100%]">
//       <div className="font-bold text-[1.3rem] flex gap-2 items-center">
//         <img
//           src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
//           alt=""
//         />
//         <h1>Sub Category Setup</h1>
//       </div>
//       <div className="h-[50vh]  bg-white rounded-lg mt-3 px-10 py-8">
//         <div className=" ">
//           <div className=" flex gap-8 w-96 border-b-2 border-gray-300 pb-5 items-center ">
//             <h1 className="text-blue-500 text-[1rem] font-semibold">
//               English(EN)
//             </h1>
//             <h1 className="text-[1rem] font-semibold">Arabic(SA)</h1>
//             <h1 className="text-[1rem] font-semibold">Bangla(BD)</h1>
//             <h1 className="text-[1rem] font-semibold">Hindi(IN)</h1>
//           </div>
//           <form action="/" className="grid grid-cols-3 gap-5">
//             <div className="flex flex-col gap-3 pt-5">
//               <label htmlFor="category-name">Category Name* (EN)</label>
//               <input
//                 type="text"
//                 id="category-name"
//                 placeholder="Category Name*"
//                 className="px-5 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="flex flex-col gap-3 pt-5 ">
//               <label htmlFor="priority">Main Category *</label>
//               <select
//                 name="priority"
//                 id="priority"
//                 className="px-5 py-3 border pe-5 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="" disabled selected>
//                   Select Main Category *
//                 </option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>{" "}
//             </div>
//             <div className="flex flex-col gap-3  pt-5 ">
//               <label htmlFor="priority">Priority</label>
//               <select
//                 name="priority"
//                 id="priority"
//                 className="px-5 py-3 border pe-5 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="" disabled selected>
//                   Set Priority
//                 </option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//               <div className="flex justify-end items-end gap-3 pt-8">
//                 <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
//                   Rest{" "}
//                 </button>
//                 <button className="rounded-md px-4 bg-blue-500 text-white py-1 border border-gray-300">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <CategoriesList />
//     </div>
//   );
// };

// export default SubCateggories;

import React, { useState } from 'react';
import { FaInfoCircle, FaSearch, FaEdit, FaTrash, FaDownload, FaChevronDown } from 'react-icons/fa'; // Importing necessary icons from React Icons
import './subcategories.css'
import { Link } from 'react-router-dom';
const SubCateggories = () => {
  // Initial state for subcategories
  const [subCategories, setSubCategories] = useState([
    { id: 41, name: 'Home Tools', categoryName: 'Home Improvement & Tools', priority: 0 },
    { id: 42, name: 'Toys', categoryName: 'Toys, Kids & Babies', priority: 1 },
    { id: 43, name: 'Clothing', categoryName: "Men's fashion", priority: 1 },
    // Add more subcategory data as needed
  ]);

  const [activeTab, setActiveTab] = useState('en'); // State to manage active language tab

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form handling logic here
    console.log('Form submitted');
  };

  // Function to handle language tab clicks
  const handleTabClick = (lang) => {
    setActiveTab(lang);
  };

  return (
    <div className="content container-fluid snipcss-TxIci">
      <div className="mb-3">
        <h2 className="h1 mb-0 d-flex gap-2">
          <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt="Sub Category Setup" />
          Sub Category Setup
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-start">
              <form onSubmit={handleSubmit}>
                <ul className="nav nav-tabs w-fit-content mb-4">
                  {['en', 'sa', 'bd', 'in'].map((lang) => (
                    <li className="nav-item" key={lang}>
                      <span
                        className={`nav-link form-system-language-tab cursor-pointer ${activeTab === lang ? 'active' : ''}`}
                        onClick={() => handleTabClick(lang)}
                      >
                        {lang === 'en' ? 'English' : lang === 'sa' ? 'Arabic' : lang === 'bd' ? 'Bangla' : 'Hindi'}({lang.toUpperCase()})
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-6 col-lg-4">
                        {['en', 'sa', 'bd', 'in'].map((lang) => (
                          <div key={lang} className={`form-group form-system-language-form ${activeTab === lang ? '' : 'd-none'}`}>
                            <label className="title-color" htmlFor={`subCategoryName-${lang}`}>
                              Sub category name <span className="text-danger">*</span> ({lang.toUpperCase()})
                            </label>
                            <input type="text" name="name[]" className="form-control" id={`subCategoryName-${lang}`} placeholder="New Sub Category" />
                            <input type="hidden" name="lang[]" value={lang} />
                          </div>
                        ))}
                        <input name="position" value="1" className="d-none" />
                      </div>
                      <div className="form-group col-md-6 col-lg-4">
                        <label className="title-color" htmlFor="mainCategory">
                          Main Category <span className="text-danger">*</span>
                        </label>
                        <select id="mainCategory" name="parent_id" className="form-control" required>
                          <option value="" disabled>Select main category</option>
                          {[
                            'Home Improvement & Tools',
                            'Toys, Kids & Babies',
                            "Men's fashion",
                            'Outdoor Fun & Sports',
                            "Women's fashion",
                            'ebook',
                            'Jewelry & Watches',
                            'Beauty, Health & Hair',
                            'Mobile Accessories',
                            'Computer, Office & Security',
                            'Phones & Telecom',
                            'Home, Pet & Appliances',
                            'Bags & Shoes',
                          ].map((category, index) => (
                            <option key={index} value={index + 11}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-lg-4">
                        <label className="title-color flex" htmlFor="priority">
                          Priority
                          {/* <span>
                            <FaInfoCircle data-toggle="tooltip" data-placement="top" title="The lowest number will get the highest priority" />
                          </span> */}
                        </label>
                        <select className="form-control" name="priority" id="priority" required>
                          <option disabled selected>Set Priority</option>
                          {Array.from({ length: 11 }, (_, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2 justify-content-end">
                  <button type="reset" className="btn btn-secondary">Reset</button>
                  <button type="submit" className="btn btn--primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-20" id="cate-table">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="d-flex flex-wrap justify-content-between gap-3 align-items-center">
                <div>
                  <h5 className="text-capitalize d-flex gap-1">
                    Sub category list
                    <span className="badge badge-soft-dark radius-50 fz-12">{subCategories.length}</span>
                  </h5>
                </div>
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <form>
                    <div className="input-group input-group-custom input-group-merge" style={{border:"1px solid lightgreen"}}>
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FaSearch />
                        </div>
                      </div>
                      <input type="search" name="searchValue" className="form-control" placeholder="Search by sub category name" />
                      <button type="submit" className="btn " style={{background:"lightgreen"}}>Search</button>
                    </div>
                  </form>
                  <div>
                    <button type="button" className="btn btn-outline--success flex text-nowrap btn-block" style={{display:"flex", justifyContent:"center",alignItems:"center", background:"lightgreen",gap:"4px"}}>
                      <FaDownload /> Export <FaChevronDown />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a className="dropdown-item" href="#">
                          <img width="14" src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="Excel" /> Excel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>ID</th>
                    <th>Sub category name</th>
                    <th>Category name</th>
                    <th className="text-center">Priority</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subCategories.map((subCategory) => (
                    <tr key={subCategory.id}>
                      <td>{subCategory.id}</td>
                      <td>
                        <span className="d-block font-size-sm text-body">{subCategory.name}</span>
                      </td>
                      <td>{subCategory.categoryName}</td>
                      <td className="text-center">{subCategory.priority}</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link  to="/subedit" className="btn btn-outline-info btn-sm">
                            <FaEdit /> 
                          </Link>
                          <button className="btn btn-outline-danger btn-sm">
                            <FaTrash />
                          </button>
                        </div>
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

export default SubCateggories;
