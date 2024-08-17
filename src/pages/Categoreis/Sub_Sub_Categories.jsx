// import React from "react";

// import CategoriesList from "./CategoriesList/CategoriesList";

// const Sub_Sub_Categories = () => {
//   return (
//     <>
//       <div className="bg-[#F9F9FB]  px-5 py-5 w-[100%]">
//         <div className="font-bold text-[1.3rem] flex gap-2 items-center">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
//             alt=""
//           />
//           <h1>Sub Sub Category Setup</h1>
//         </div>
//         <div className="h-[70vh]  bg-white rounded-lg mt-3 px-10 py-8">
//           <div className=" ">
//             <div className=" flex gap-8 w-96 border-b-2 border-gray-300 pb-5 items-center ">
//               <h1 className="text-blue-500 text-[1rem] font-semibold">
//                 English(EN)
//               </h1>
//               <h1 className="text-[1rem] font-semibold">Arabic(SA)</h1>
//               <h1 className="text-[1rem] font-semibold">Bangla(BD)</h1>
//               <h1 className="text-[1rem] font-semibold">Hindi(IN)</h1>
//             </div>
//             <form action="/" className="">
//               <div className="flex flex-col pt-5 gap-3">
//                 <label htmlFor="category-name">Category Name* (EN)</label>
//                 <input
//                   type="text"
//                   id="category-name"
//                   placeholder="Category Name*"
//                   className="px-5 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div className="grid grid-cols-3 gap-5">
//                 <div className="flex flex-col gap-3 pt-5">
//                   <label htmlFor="category-name">Category Name* (EN)</label>
//                   <input
//                     type="text"
//                     id="category-name"
//                     placeholder="Category Name*"
//                     className="px-5 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3 pt-5 ">
//                   <label htmlFor="priority">Sub Category Name*</label>
//                   <select
//                     name="priority"
//                     id="priority"
//                     className="px-5 py-3 border pe-5 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//                   >
//                     <option value="" disabled selected>
//                       Select Sub Category First
//                     </option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                     <option value="7">7</option>
//                     <option value="8">8</option>
//                     <option value="9">9</option>
//                     <option value="10">10</option>
//                   </select>{" "}
//                 </div>
//                 <div className="flex flex-col gap-3  pt-5 ">
//                   <label htmlFor="priority">Priority</label>
//                   <select
//                     name="priority"
//                     id="priority"
//                     className="px-5 py-3 border pe-5 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//                   >
//                     <option value="" disabled selected>
//                       Set Priority
//                     </option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                     <option value="7">7</option>
//                     <option value="8">8</option>
//                     <option value="9">9</option>
//                     <option value="10">10</option>
//                   </select>
//                   <div className="flex justify-end items-end gap-3 pt-8">
//                     <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
//                       Rest{" "}
//                     </button>
//                     <button className="rounded-md  bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-4 py-2 border border-gray-300">
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <CategoriesList />
//       </div>
//     </>
//   );
// };

// export default Sub_Sub_Categories;




import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import {  RiDownload2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sub_Sub_Categories = () => {
    const [searchValue, setSearchValue] = useState('');

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    // Placeholder for category data (to be fetched or managed)
    const categoryData = [
        { id: 57, subSubCategoryName: "Men's Shoes", subCategoryName: 'Shoes', categoryName: 'Bags & Shoes', priority: 2 },
        { id: 58, subSubCategoryName: "Women's Shoes", subCategoryName: 'Shoes', categoryName: 'Bags & Shoes', priority: 3 },
        { id: 59, subSubCategoryName: 'Dog Food', subCategoryName: 'Pet Appliances', categoryName: 'Home, Pet & Appliances', priority: 1 },
        { id: 60, subSubCategoryName: 'Cat Food', subCategoryName: 'Pet Appliances', categoryName: 'Home, Pet & Appliances', priority: 6 },
        { id: 61, subSubCategoryName: 'Hand Bag', subCategoryName: 'Bags & Shoes', categoryName: "Women's fashion", priority: 3 }
    ];

    // Filtered categories based on search input
    const filteredCategories = categoryData.filter(category =>
        category.subSubCategoryName.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="content container-fluid snipcss-P5XJb">
            <div className="mb-3">
                <h2 className="h1 mb-0 d-flex gap-2">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt="" /> Sub Sub Category Setup
                </h2>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body text-start">
                            <form action="https://6valley.6amtech.com/admin/sub-sub-category/store" method="POST">
                                <input type="hidden" name="_token" value="PwtXfCOB4jJW4r7EFP7tbQ85VIeh6Q28sCgcjoVB" autoComplete="off" />
                                <ul className="nav nav-tabs w-fit-content mb-4">
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer active" id="en-link">English(EN)</span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer" id="sa-link">Arabic(SA)</span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer" id="bd-link">Bangla(BD)</span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer" id="in-link">Hindi(IN)</span>
                                    </li>
                                </ul>
                                <div className="row">
                                    <div className="col-12 form-group form-system-language-form" id="en-form">
                                        <label className="title-color" htmlFor="exampleFormControlInput1">Sub sub category name <span className="text-danger">*</span> (EN)</label>
                                        <input type="text" name="name[]" className="form-control" placeholder="New Sub Sub Category" required />
                                    </div>
                                    <input type="hidden" name="lang[]" value="en" />
                                    <div className="col-12 form-group d-none form-system-language-form" id="sa-form">
                                        <label className="title-color" htmlFor="exampleFormControlInput1">Sub sub category name <span className="text-danger">*</span> (SA)</label>
                                        <input type="text" name="name[]" className="form-control" placeholder="New Sub Sub Category" />
                                    </div>
                                    <input type="hidden" name="lang[]" value="sa" />
                                    <div className="col-12 form-group d-none form-system-language-form" id="bd-form">
                                        <label className="title-color" htmlFor="exampleFormControlInput1">Sub sub category name <span className="text-danger">*</span> (BD)</label>
                                        <input type="text" name="name[]" className="form-control" placeholder="New Sub Sub Category" />
                                    </div>
                                    <input type="hidden" name="lang[]" value="bd" />
                                    <div className="col-12 form-group d-none form-system-language-form" id="in-form">
                                        <label className="title-color" htmlFor="exampleFormControlInput1">Sub sub category name <span className="text-danger">*</span> (IN)</label>
                                        <input type="text" name="name[]" className="form-control" placeholder="New Sub Sub Category" />
                                    </div>
                                    <input type="hidden" name="lang[]" value="in" />
                                    <input name="position" defaultValue="2" className="d-none" />
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="title-color">Main Category <span className="text-danger">*</span></label>
                                            <select className="form-control action-get-sub-category-onchange" id="main-category" required="" data-route="https://6valley.6amtech.com/admin/sub-sub-category/get-sub-category">
                                                <option value="" disabled="" selected="">Select main category</option>
                                                <option value="11">Home Improvement & Tools</option>
                                                <option value="12">Toys , Kids & Babies</option>
                                                <option value="13">Men's fashion</option>
                                                <option value="14">Outdoor Fun & Sports</option>
                                                <option value="15">Women's fashion</option>
                                                <option value="16">ebook</option>
                                                <option value="24">Jewelry & Watches</option>
                                                <option value="25">Beauty, Health & Hair</option>
                                                <option value="26">Mobile Accessories</option>
                                                <option value="27">Computer, Office & Security</option>
                                                <option value="28">Phones & Telecom</option>
                                                <option value="34">Home, Pet & Appliances</option>
                                                <option value="39">Bags & Shoes</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="title-color text-capitalize" htmlFor="name"> Sub category Name<span className="text-danger">*</span>
                                            </label>
                                            <select name="parent_id" id="parent_id" className="form-control">
                                                <option value="" disabled="" selected=""> Select sub category first </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="title-color text-capitalize" htmlFor="priority"> Priority <span>
                                                    <i className="tio-info-outined" data-toggle="tooltip" data-placement="top" title="" data-original-title="The lowest number will get the highest priority"></i>
                                                </span>
                                            </label>
                                            <select className="form-control" name="priority" id="" required="">
                                                <option disabled="" selected="">Set Priority</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex flex-wrap gap-2 justify-content-end">
                                            <button type="reset" className="btn btn-secondary"> Reset </button>
                                            <button type="submit" className="btn btn-secondary"> Submit </button>
                                        </div>
                                    </div>
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
                                <div className="">
                                    <h5 className="text-capitalize d-flex gap-1"> Sub sub category list <span className="badge badge-soft-dark radius-xs bg-white px-2">
                                            <span id="to-cate-count">5</span>
                                        </span>
                                    </h5>
                                </div>
                                <div className="d-flex gap-3">
                                    <div className="position-relative">
                                        <input type="text" className="form-control" placeholder="Search Sub Sub Category..." onChange={handleSearchChange} />
                                        {/* <RiSearchLine className="position-absolute text-muted search-icon" /> */}
                                    </div>
                                    <Link className="btn btn-xs  py-2 px-3 m-0 flex align-items-center gap-2 border-green-300"   id="sub_cate_export">
                                        <RiDownload2Line className="mr-1" /> Export
                                    </Link>
                                </div>
                            </div>
                            <div className="table-responsive mt-4" id="subcate_table">
                                <table className="table table-sm table--base">
                                    <thead className="bg-soft-dark">
                                        <tr className="text-uppercase">
                                            <th className="text-start text-muted">Sub Sub Category Name</th>
                                            <th className="text-center text-muted">Sub Category</th>
                                            <th className="text-center text-muted">Main Category</th>
                                            <th className="text-center text-muted">Priority</th>
                                            <th className="text-center text-muted">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCategories.map(category => (
                                            <tr key={category.id}>
                                                <td className="text-start">{category.subSubCategoryName}</td>
                                                <td className="text-center">{category.subCategoryName}</td>
                                                <td className="text-center">{category.categoryName}</td>
                                                <td className="text-center">{category.priority}</td>
                                                <td className="text-center flex gap-2">
                                                    <Link to='/subedit' className="mr-2">
                                                        <FaEdit />
                                                    </Link>
                                                    <Link to='' className="text-danger">
                                                        <FaDeleteLeft />
                                                    </Link>
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
        </div>
    );
};

export default Sub_Sub_Categories;
