import React, { useState } from "react";
import Select from "react-select"; // Use react-select for custom select components
import "./AddProductInhouse.css"; // Add your own CSS file to manage styles
// import ProductEdit from './ProductEdit/ProductEdit';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for react-quill
const AddInHouseNewProduct = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subSubCategory, setSubSubCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [productType, setProductType] = useState("physical");
  const [digitalProductType, setDigitalProductType] = useState("");
  // const [productName, setProductName] = useState("");
  // const [productDescription, setProductDescription] = useState("");
  const [file, setFile] = useState(null);
  const [sku, setSku] = useState("");
  const [unit, setUnit] = useState("");
  const [tags, setTags] = useState([]);

  const handleFileChange = (e) => setFile(e.target.files[0]);
  // Handle changes for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "productName") {
      setProductName(value);
    }
  };
  const handleTagChange = (e) => setTags(e.target.value.split(","));

  const generateSku = () => {
    const generatedSku = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    setSku(generatedSku);
  };

  const categoryOptions = [
    { value: "11", label: "Home Improvement & Tools" },
    { value: "12", label: "Toys, Kids & Babies" },
    // Add other options...
  ];

  const brandOptions = [
    { value: "1", label: "i Bird" },
    { value: "4", label: "Agron" },
    // Add other options...
  ];

  const unitOptions = [
    { value: "kg", label: "kg" },
    { value: "pc", label: "pc" },
    // Add other options...
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  // ------------------------------------------
  //   const [selectedLanguage, setSelectedLanguage] = useState("EN");
  //   const [productName, setProductName] = useState("");
  //   const [productDescription, setProductDescription] = useState("");

  //   const handleLanguageChange = (language) => {
  //     setSelectedLanguage(language);
  //     // Optionally, reset inputs when language changes
  //     setProductName("");
  //     setProductDescription("");
  //   };

  return (
    <div className="content container-fluid ">
      <div className="mb-4">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <i className="tio-plus-outline"></i> Add new In-House Product
        </h2>
      </div>
      <div className="row flex-col gap-3 mb-8 bg-white p-8">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={handleChange}
            className="input border border-gray-300 w-full px-3 py-2 rounded"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <ReactQuill
            value={productDescription}
            onChange={setProductDescription}
            className="quill-editor"
            theme="snow"
            placeholder="Write the product description here..."
          />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="d-flex gap-2">
            <i className="tio-user-big"></i>
            <h4 className="mb-0">General setup</h4>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <label htmlFor="category" className="title-color">
                  Category
                </label>
                <Select
                  options={categoryOptions}
                  className="select-custom"
                  name="category"
                  value={categoryOptions.find(
                    (option) => option.value === category
                  )}
                  onChange={(selectedOption) =>
                    setCategory(selectedOption.value)
                  }
                  placeholder="Select category"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <label htmlFor="sub-category" className="title-color">
                  Sub Category
                </label>
                <Select
                  className="select-custom"
                  name="subCategory"
                  value={subCategory}
                  onChange={(selectedOption) =>
                    setSubCategory(selectedOption.value)
                  }
                  placeholder="Select Sub Category"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <label htmlFor="sub-sub-category" className="title-color">
                  Sub Sub Category
                </label>
                <Select
                  className="select-custom"
                  name="subSubCategory"
                  value={subSubCategory}
                  onChange={(selectedOption) =>
                    setSubSubCategory(selectedOption.value)
                  }
                  placeholder="Select Sub Sub Category"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <label htmlFor="brand" className="title-color">
                  Brand
                </label>
                <Select
                  options={brandOptions}
                  className="select-custom"
                  name="brand"
                  value={brandOptions.find((option) => option.value === brand)}
                  onChange={(selectedOption) => setBrand(selectedOption.value)}
                  placeholder="Select Brand"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <label htmlFor="product_type" className="title-color">
                  Product type
                </label>
                <select
                  name="product_type"
                  id="product_type"
                  className="form-control"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  required
                >
                  <option value="physical">Physical</option>
                  <option value="digital">Digital</option>
                </select>
              </div>
            </div>
            {productType === "digital" && (
              <div
                className="col-md-6 col-lg-4 col-xl-3"
                id="digital_product_type_show"
              >
                <div className="form-group">
                  <label htmlFor="digital_product_type" className="title-color">
                    Delivery type
                  </label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    title="For “Ready Product” deliveries customers can pay & instantly download pre-uploaded digital products. For “Ready After Sale” deliveries customers pay first then admin uploads the digital products that become available to customers for download"
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt="info"
                    />
                  </span>
                  <select
                    name="digital_product_type"
                    id="digital_product_type"
                    className="form-control"
                    value={digitalProductType}
                    onChange={(e) => setDigitalProductType(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      ---Select---
                    </option>
                    <option value="ready_after_sell">Ready After Sell</option>
                    <option value="ready_product">Ready Product</option>
                  </select>
                </div>
              </div>
            )}
            {productType === "digital" && (
              <div
                className="col-md-6 col-lg-4 col-xl-3"
                id="digital_file_ready_show"
              >
                <div className="form-group">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <label
                      htmlFor="digital_file_ready"
                      className="title-color mb-0"
                    >
                      Upload file
                    </label>
                    <span
                      className="input-label-secondary cursor-pointer"
                      title="Upload the digital products from here"
                    >
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                        alt="info"
                      />
                    </span>
                  </div>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        name="digital_file_ready"
                        id="digital_file_ready"
                        onChange={handleFileChange}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="digital_file_ready"
                      >
                        Choose file
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    File type: jpg, jpeg, png, gif, zip, pdf
                  </div>
                </div>
              </div>
            )}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <label className="title-color d-flex justify-content-between gap-2">
                  <span className="d-flex align-items-center gap-2">
                    Product SKU
                    <span
                      className="input-label-secondary cursor-pointer"
                      title="Create a unique product code by clicking on the Generate Code button"
                    >
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                        alt="info"
                      />
                    </span>
                  </span>
                  <span
                    className="cursor-pointer text-primary"
                    onClick={generateSku}
                  >
                    Generate code
                  </span>
                </label>
                <input
                  type="text"
                  minlength="6"
                  id="generate_number"
                  name="code"
                  className="form-control"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  placeholder="Ex: 161183"
                  required
                />
              </div>
            </div>
            {productType === "physical" && (
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color">Unit</label>
                  <Select
                    options={unitOptions}
                    className="select-custom"
                    name="unit"
                    value={unitOptions.find((option) => option.value === unit)}
                    onChange={(selectedOption) => setUnit(selectedOption.value)}
                    placeholder="Select unit"
                  />
                </div>
              </div>
            )}
            <div className="col-md-9">
              <div className="form-group">
                <label className="title-color d-flex align-items-center gap-2">
                  Search tags
                  <span
                    className="input-label-secondary cursor-pointer"
                    title="Add the product search tags separated by a comma"
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt="info"
                    />
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tags"
                  value={tags.join(",")}
                  onChange={handleTagChange}
                  placeholder="Search tags"
                  data-role="tagsinput"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="p-6 bg-white rounded-lg shadow-lg">
    //   <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
    //   <div className="border-b border-gray-200 mb-4">
    //     <nav className="-mb-px flex space-x-4">
    //       {["EN", "SA", "BD", "IN"].map((lang) => (
    //         <button
    //           key={lang}
    //           onClick={() => handleLanguageChange(lang)}
    //           className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
    //             selectedLanguage === lang
    //               ? "text-blue-600 border-blue-600"
    //               : "text-gray-500 border-transparent"
    //           }`}
    //         >
    //           {lang === "EN" && "English(EN)"}
    //           {lang === "SA" && "Arabic(SA)"}
    //           {lang === "BD" && "Bangla(BD)"}
    //           {lang === "IN" && "Hindi(IN)"}
    //         </button>
    //       ))}
    //     </nav>
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-sm font-medium text-gray-700">
    //       Product Name ({selectedLanguage})
    //     </label>
    //     <input
    //       type="text"
    //       value={productName}
    //       onChange={(e) => setProductName(e.target.value)}
    //       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    //       placeholder={`New Product (${selectedLanguage})`}
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-sm font-medium text-gray-700">
    //       Description ({selectedLanguage})
    //     </label>
    //     <textarea
    //       value={productDescription}
    //       onChange={(e) => setProductDescription(e.target.value)}
    //       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    //       rows="5"
    //       placeholder={`Description (${selectedLanguage})`}
    //     ></textarea>
    //   </div>
    //   <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
    //     Add Info From Gallery
    //   </button>
    // </div>
  );
};

export default AddInHouseNewProduct;
