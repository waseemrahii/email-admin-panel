// import React from "react";
// import CategoriesList from "./CategoriesList/CategoriesList";

// const Categories = () => {
//   return (
//     <>
//       <div className="bg-[#F9F9FB]  px-5 py-5 w-[100%]">
//         <div className="font-bold text-[1.3rem] flex gap-2 items-center">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
//             alt=""
//           />
//           <h1>Category Setup</h1>
//         </div>
//         <div className="h-[80vh] w-full bg-white grid grid-cols-2 rounded-lg mt-3 px-10 py-8">
//           <div className=" ">
//             <div className=" flex gap-8 border-b-2 border-gray-300 pb-5 items-center ">
//               <h1 className="text-blue-500 text-[1rem] font-semibold">
//                 English(EN)
//               </h1>
//               <h1 className="text-[1rem] font-semibold">Arabic(SA)</h1>
//               <h1 className="text-[1rem] font-semibold">Bangla(BD)</h1>
//               <h1 className="text-[1rem] font-semibold">Hindi(IN)</h1>
//             </div>
//             <form action="/" className="flex flex-col gap-5">
//               <div className="flex flex-col gap-3 pt-5">
//                 <label htmlFor="category-name">Category Name* (EN)</label>
//                 <input
//                   type="text"
//                   id="category-name"
//                   placeholder="Category Name*"
//                   className="px-5 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex flex-col gap-3  ">
//                 <label htmlFor="priority">Priority</label>
//                 <select
//                   name="priority"
//                   id="priority"
//                   className="px-5 py-3 border pe-5 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//                 >
//                   <option value="" disabled selected>
//                     Set Priority
//                   </option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                   <option value="6">6</option>
//                   <option value="7">7</option>
//                   <option value="8">8</option>
//                   <option value="9">9</option>
//                   <option value="10">10</option>
//                 </select>
//                 <div className="flex flex-col gap-3 mt-3">
//                   <label htmlFor="">
//                     Category Logo *{" "}
//                     <span className="text-[#03B0C0]">
//                       Ratio 1:1 (500 x 500 px)
//                     </span>
//                   </label>
//                   <div className="border flex items-center rounded-md border-blue-300">
//                     <input
//                       type="file"
//                       id="image-upload"
//                       className="px-5 py-2 border   outline-none border-e border-blue-300"
//                     />
//                     <button className=" px-2 py-3  ">Browser</button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="flex flex-col gap-5 ">
//             <div className="flex justify-center items-center p-16 ">
//               <img
//                 src="https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png"
//                 alt=""
//                 className="h-48 w-48 border rounded-sm border-gray-900"
//               />
//             </div>
//             <div className="flex justify-end items-end gap-3 pt-8">
//               <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
//                 Rest{" "}
//               </button>
//               <button className="rounded-md bg-[#A1CB46]  hover:bg-[#7e9f37] px-4 py-2 text-white  border border-gray-300">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//         <CategoriesList />
//       </div>
//       {/* categories - List */}
//     </>
//   );
// };

// export default Categories;



import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineDownload, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import './Categories.css'
import { Link } from 'react-router-dom';
// Sample Data
const categories = [
  {
    id: 39,
    image: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881969b0222.png",
    name: "Bags & Shoes",
    priority: 0,
    homeStatus: true,
    productCount: 3,
  }
  // Add more categories as needed
];

const Categories = () => {
  const [selectedLang, setSelectedLang] = useState('en');

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <div className="content container-fluid snipcss-YKd8G">
      <div className="mb-3">
        <h2 className="h1 mb-0 d-flex gap-10">
          <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt="" /> 
          Category Setup
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-start">
              <form>
                <ul className="nav nav-tabs w-fit-content mb-4">
                  {['en', 'sa', 'bd', 'in'].map((lang) => (
                    <li className="nav-item text-capitalize" key={lang}>
                      <span 
                        className={`nav-link form-system-language-tab cursor-pointer ${selectedLang === lang ? 'active' : ''}`} 
                        onClick={() => handleLangChange(lang)}
                      >
                        {lang === 'en' && 'English(EN)'}
                        {lang === 'sa' && 'Arabic(SA)'}
                        {lang === 'bd' && 'Bangla(BD)'}
                        {lang === 'in' && 'Hindi(IN)'}
                      </span>
                    </li>
                  ))}
                </ul>
                <CategoryForm selectedLang={selectedLang} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <CategoryList categories={categories} />
    </div>
  );
};

const CategoryForm = ({ selectedLang }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        {['en', 'sa', 'bd', 'in'].map((lang) => (
          <div className={`form-group ${selectedLang === lang ? '' : 'd-none'} form-system-language-form`} key={lang} id={`${lang}-form`}>
            <label className="title-color">Category Name<span className="text-danger">*</span> ({lang.toUpperCase()})</label>
            <input type="text" name={`name_${lang}`} className="form-control" placeholder="New Category" required={lang === 'en'} />
          </div>
        ))}
        <div className="form-group ">
          <label className="title-color " htmlFor="priority"
          >Priority 
          {/* <span>
            <FaInfoCircle data-toggle="tooltip" data-placement="top" title="The lowest number will get the highest priority" />
          </span>
          */}
          </label>
          <select className="form-control" name="priority" required>
            <option disabled selected>Set Priority</option>
            {[...Array(11).keys()].map(num => (
              <option value={num} key={num}>{num}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="title-color">Category Logo</label>
          <span className="text-info"><span className="text-danger">*</span> Ratio 1:1 (500 x 500 px)</span>
          <div className="custom-file text-left">
            <input type="file" name="image" id="category-image" className="custom-file-input" accept="image/*" required />
            <label className="custom-file-label" htmlFor="category-image">Choose File</label>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0 from_part_2">
        <div className="form-group">
          <div className="text-center mx-auto">
            <img className="upload-img-view" id="viewer" alt="" src="https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-2 justify-content-end">
        <button type="reset" id="reset" className="btn btn-success">Reset</button>
        <button type="submit" className="btn btn-t-green-400">Submit</button>
      </div>
    </div>
  );
};

const CategoryList = ({ categories }) => {
  return (
    <div className="row mt-20" id="cate-table">
      <div className="col-md-12">
        <div className="card">
          <div className="px-3 py-4">
            <div className="d-flex flex-wrap justify-content-between gap-3 align-items-center">
              <h5 className="text-capitalize d-flex gap-1"> Category list <span className="badge badge-soft-dark radius-50 fz-12">{categories.length}</span></h5>
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <form>
                  <div className="input-group input-group-custom input-group-merge">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <AiOutlineSearch />
                      </div>
                    </div>
                    <input type="search" name="searchValue" className="form-control" placeholder="Search by category name" />
                    <button type="submit" className="btn border-t-green-500 bg-green-500">Search</button>
                  </div>
                </form>
                <button type="button" className="btn flex gap-2 " style={{display:"flex", justifyContent:"center", alignItems:"center", background:"green"}}>
                 Export <AiOutlineDownload />
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
              <thead className="thead-light thead-50 text-capitalize">
                <tr>
                  <th>ID</th>
                  <th className="text-center">Category Image</th>
                  <th>Name</th>
                  <th className="text-center">Priority</th>
                  <th className="text-center">Home category status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(category => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td className="d-flex justify-content-center">
                      <div className="avatar-60 d-flex align-items-center rounded">
                        <img className="img-fluid" alt={category.name} src={category.image} />
                      </div>
                    </td>
                    <td>{category.name}</td>
                    <td className="text-center">{category.priority}</td>
                    <td className="text-center">
                      <input type="checkbox" checked={category.homeStatus} readOnly />
                    </td>
                    <td>
                      <div className="d-flex justify-content-center gap-10">
                        <Link to='/categoryedit' className="btn btn-outline-info btn-sm square-btn" title="Edit" style={{background:"lightgreen"}}>
                          <AiOutlineEdit />
                        </Link>
                        <button className="btn btn-outline-danger btn-sm square-btn" title="Delete">
                          <AiOutlineDelete />
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
  );
};

export default Categories;
