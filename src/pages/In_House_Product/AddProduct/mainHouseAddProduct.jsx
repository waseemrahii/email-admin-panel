


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddNewProduct = () => {

//   console.log("result========",user)
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     subCategorySlug: '',
//     subSubCategorySlug: '',
//     brand: '',
//     productType: '',
//     digitalProductType: '',
//     sku: '',
//     unit: '',
//     tags: '',
//     price: '',
//     discount: '',
//     discountType: '',
//     discountAmount: '',
//     taxAmount: '',
//     taxIncluded: false,
//     minimumOrderQty: '',
//     quantity: '',
//     stock: '',
//     isFeatured: false,
//     color: '',
//     attributeType: '',
//     size: '',
//     videoLink: '',
//   });

//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [subSubCategories, setSubSubCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colors, setColors] = useState([]);

//   useEffect(() => {
//     // Fetch categories on mount
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/categories');
//         setCategories(response.data.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Fetch brands on mount
//     const fetchBrands = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/brands/');
//         setBrands(response.data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };
//     fetchBrands();
//   }, []);

//   useEffect(() => {
//     // Fetch colors on mount
//     const fetchColors = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/colors/');
//         setColors(response.data);
//       } catch (error) {
//         console.error('Error fetching colors:', error);
//       }
//     };
//     fetchColors();
//   }, []);

//   useEffect(() => {
//     if (formData.category) {
//       // Fetch sub-categories when a category is selected
//       const fetchSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-categories/main-category/${formData.category}`);
//           setSubCategories(response.data);
//         } catch (error) {
//           console.error('Error fetching sub-categories:', error);
//         }
//       };
//       fetchSubCategories();
//     }
//   }, [formData.category]);

//   useEffect(() => {
//     if (formData.subCategorySlug) {
//       // Fetch sub-sub-categories when a sub-category is selected
//       const fetchSubSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${formData.subCategorySlug}`);
//           setSubSubCategories(response.data.data);
//         } catch (error) {
//           console.error('Error fetching sub-sub-categories:', error);
//         }
//       };
//       fetchSubSubCategories();
//     }
//   }, [formData.subCategorySlug]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     setThumbnail(file);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productFormData = new FormData();

//     for (const key in formData) {
//       productFormData.append(key, formData[key]);
//     }

//     if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//     }

//     images.forEach((image) => {
//       productFormData.append('images', image);
//     });
//     console.log("user id and user type", user.role)
//     console.log("user id and user type", user._id)
//     productFormData.append( "userId", user._id );
//     productFormData.append("userType", user.role, );
//     // Log the FormData object to the console
//     for (let [key, value] of productFormData.entries()) {
//       console.log(`${key}: ${value}`);
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/api/products/', productFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         }
//       });
//       alert('Product added successfully!');
//       // Clear the form
//       // setFormData({
//       //   name: '',
//       //   description: '',
//       //   category: '',
//       //   subCategorySlug: '',
//       //   subSubCategorySlug: '',
//       //   brand: '',
//       //   productType: '',
//       //   digitalProductType: '',
//       //   sku: '',
//       //   unit: '',
//       //   tags: '',
//       //   price: '',
//       //   discount: '',
//       //   discountType: '',
//       //   discountAmount: '',
//       //   taxAmount: '',
//       //   taxIncluded: false,
//       //   minimumOrderQty: '',
//       //   quantity: '',
//       //   stock: '',
//       //   isFeatured: false,
//       //   color: '',
//       //   attributeType: '',
//       //   size: '',
//       //   videoLink: '',
//       // });
//       // setThumbnail(null);
//       // setImages([]);
//       // setSubCategories([]);
//       // setSubSubCategories([]);
//     } catch (error) {
//       setErrorMessage(`Error adding product: ${error.response?.data?.message || error.message}`);
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container p-5">
//       {/* <h1 cl>Add Product</h1> */}
    
//     <form onSubmit={handleSubmit} className='p-10 flex flex-col gap-2'>
//       {/* Form inputs for each field */}
//       <div className='w-100 flex flex-col justify-center gap-[1rem] shadow-xl shadow-slate-200 rounded bg-white p-[1rem] border-[1rem]' >
//       <div className='flex flex-col'>
        
//        <label htmlFor="name">Product Name</label>
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required className='border-2 border-slate-200 rounded w-full h-[6vh]' />
//       </div>

//         <div>

//        <label htmlFor="desciption">Product Description</label>
//       <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required className='border-2 border-slate-200 rounded w-full h-[6vh]' />
//         </div>
//       </div>

//       <div className='w-full grid grid-cols-4 gap-4 rounded shadow-xl  shadow-slate-200 bg-white p-4 border'>
        
//       <select name="category" value={formData.category} onChange={handleChange} required className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//         <option value="">Select Category</option>
//         {categories.map(category => (
//           <option key={category._id} value={category.slug}>{category.name}</option>
//         ))}
//       </select>
      
      
      
//       <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange} className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//         <option value="">Select Sub-Category</option>
//         {subCategories.map(subCategory => (
//           <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
//         ))}
//       </select>
      
      
//       <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//         <option value="">Select Sub-Sub-Category</option>
//         {subSubCategories.map(subSubCategory => (
//           <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="brand" value={formData.brand} onChange={handleChange} required className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//         <option value="">Select Brand</option>
//         {brands.map(brand => (
//           <option key={brand._id} value={brand._id}>{brand.name}</option>
//         ))}
//       </select>
      
      
      
//       <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//       <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//       </div>
//       <div className='w-full grid grid-cols-4 gap-4 rounded shadow-xl shadow-slate-200 bg-white p-4 border'>


//       <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//       <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       <input type="text" name="discountType" value={formData.discountType} onChange={handleChange} placeholder="Discount Type" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//       <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       </div>



//       <div className='w-full grid grid-cols-4 gap-4 rounded shadow-xl shadow-slate-200 bg-white p-4 border'>
//       <div className='flex items-center gap-1 border-2 border-slate-200 rounded w-[12vw] h-[6vh] p-2'>
//   <p>TextIncluded</p>
//   <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} />
// </div>


//       <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//       <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>

//       {/* <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured */}
//       <div className='flex items-center gap-1 border-2 border-slate-200 rounded w-[12vw] h-[6vh] p-2'>
//   <p>Featured</p>
//  <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> 
// </div>
      
//       <select name="color" value={formData.color} onChange={handleChange} className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//         <option value="">Select Color</option>
//         {colors.map(color => (
//           <option key={color._id} value={color._id}>{color.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="attributeType" value={formData.attributeType} onChange={handleChange} placeholder="Attribute Type" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Size" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//       <input type="url" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'/>
//       </div>


//       {/* <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured
      
//       <select name="color" value={formData.color} onChange={handleChange}>
//         <option value="">Select Color</option>
//         {colors.map(color => (
//           <option key={color._id} value={color._id}>{color.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="attributeType" value={formData.attributeType} onChange={handleChange} placeholder="Attribute Type" />
//       <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Size" />
//       <input type="url" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" /> */}
//        <div className='w-full grid grid-cols-4 gap-4 rounded shadow-xl shadow-slate-200 bg-white p-4 '>
//       <input type="file" onChange={handleThumbnailChange} required  className='border-2 border-slate-200 rounded w-[15vw] h-[8vh] pt-2 pl-1'/>
//       {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" />}
      
//       <input type="file" multiple onChange={handleImageChange} className='border-2 border-slate-200 rounded w-[15vw]  pt-2 pl-1 h-[8vh]' />
      
//       <button type="submit" className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'>Add Product</button>
      
//       {errorMessage && <p className="error">{errorMessage}</p>}
//       </div>
//     </form>
//     </div>
//   );
// };

// export default AddNewProduct;

/////////// before redis

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFormData, setThumbnail, setImages, setErrorMessage, setCategories, setSubCategories, setSubSubCategories, setBrands, setColors } from '../../../components/redux/product/productSlice';
// import { setAuthToken } from '../../../components/redux/auth/authSlice'; // Import auth actions if needed

// const AddNewProduct = () => {
//   const dispatch = useDispatch();
//   const {
//     formData,
//     thumbnail,
//     images,
//     errorMessage,
//     categories,
//     subCategories,
//     subSubCategories,
//     brands,
//     colors
//   } = useSelector(state => state.product);

//   const { userId, userType , user} = useSelector(state => state.auth); // Retrieve userId and userType from auth slice
//   useEffect(() => {
//     console.log('User ID:', userId);
//     console.log('User Type:', userType);
//     console.log('User:', user);
//   }, [userId, userType, user]);
//   const [imagePreview, setImagePreview] = useState('');

//   useEffect(() => {
//     // Fetch categories on mount
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/categories');
//         dispatch(setCategories(response.data.data));
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, [dispatch]);

//   useEffect(() => {
//     // Fetch brands on mount
//     const fetchBrands = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/brands/');
//         dispatch(setBrands(response.data));
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };
//     fetchBrands();
//   }, [dispatch]);

//   useEffect(() => {
//     // Fetch colors on mount
//     const fetchColors = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/colors/');
//         dispatch(setColors(response.data));
//       } catch (error) {
//         console.error('Error fetching colors:', error);
//       }
//     };
//     fetchColors();
//   }, [dispatch]);

//   useEffect(() => {
//     if (formData.category) {
//       // Fetch sub-categories when a category is selected
//       const fetchSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-categories/main-category/${formData.category}`);
//           dispatch(setSubCategories(response.data));
//         } catch (error) {
//           console.error('Error fetching sub-categories:', error);
//         }
//       };
//       fetchSubCategories();
//     }
//   }, [formData.category, dispatch]);

//   useEffect(() => {
//     if (formData.subCategorySlug) {
//       // Fetch sub-sub-categories when a sub-category is selected
//       const fetchSubSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${formData.subCategorySlug}`);
//           dispatch(setSubSubCategories(response.data.data));
//         } catch (error) {
//           console.error('Error fetching sub-sub-categories:', error);
//         }
//       };
//       fetchSubSubCategories();
//     }
//   }, [formData.subCategorySlug, dispatch]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     dispatch(setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     dispatch(setThumbnail(file));
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     dispatch(setImages(files));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productFormData = new FormData();

//     for (const key in formData) {
//       productFormData.append(key, formData[key]);
//     }

//     // Append userId and userType to the form data
//     productFormData.append('userId', user._id);
//     productFormData.append('userType', user.role);

//     if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//     }

//     images.forEach((image) => {
//       productFormData.append('images', image);
//     });

//     try {
//       const response = await axios.post('http://localhost:3000/api/products/', productFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${localStorage.getItem('token')}` // Include auth token if needed
//         }
//       });
//       alert('Product added successfully!');
//       // Optionally clear form and state
//       dispatch(setFormData({
//         name: '',
//         description: '',
//         category: '',
//         subCategorySlug: '',
//         subSubCategorySlug: '',
//         brand: '',
//         productType: '',
//         digitalProductType: '',
//         sku: '',
//         unit: '',
//         tags: '',
//         price: '',
//         discount: '',
//         discountType: '',
//         discountAmount: '',
//         taxAmount: '',
//         taxIncluded: false,
//         minimumOrderQty: '',
//         quantity: '',
//         stock: '',
//         isFeatured: false,
//         color: '',
//         attributeType: '',
//         size: '',
//         videoLink: '',
//       }));
//       dispatch(setThumbnail(null));
//       dispatch(setImages([]));
//       dispatch(setSubCategories([]));
//       dispatch(setSubSubCategories([]));
//     } catch (error) {
//       dispatch(setErrorMessage(`Error adding product: ${error.response?.data?.message || error.message}`));
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container p-5">
//       <form onSubmit={handleSubmit} className='p-10 flex flex-col gap-2'>
//         {/* Form inputs for each field */}
//         <div className='w-100 flex flex-col justify-center gap-[1rem] shadow-xl shadow-slate-200 rounded bg-white p-[1rem] border-[1rem]'>
//           <div className='flex flex-col'>
//             <label htmlFor="name">Product Name</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required className='border-2 border-slate-200 rounded w-full h-[6vh]' />
//           </div>
//           <div>
//             <label htmlFor="description">Product Description</label>
//             <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required className='border-2 border-slate-200 rounded w-full h-[6vh]' />
//           </div>
//         </div>

//         <div className='w-full grid grid-cols-4 gap-4 rounded shadow-xl shadow-slate-200 bg-white p-4 border'>
//           <select name="category" value={formData.category} onChange={handleChange} required className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//             <option value="">Select Category</option>
//             {categories.map(category => (
//               <option key={category._id} value={category.slug}>{category.name}</option>
//             ))}
//           </select>

//           <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange} className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//             <option value="">Select Sub-Category</option>
//             {subCategories.map(subCategory => (
//               <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
//             ))}
//           </select>

//           <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange} className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//             <option value="">Select Sub-Sub-Category</option>
//             {subSubCategories.map(subSubCategory => (
//               <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
//             ))}
//           </select>

//           <select name="brand" value={formData.brand} onChange={handleChange} required className='border-2 bg-white border-slate-200 rounded w-[12vw] h-[6vh]'>
//             <option value="">Select Brand</option>
//             {brands.map(brand => (
//               <option key={brand._id} value={brand._id}>{brand.name}</option>
//             ))}
//           </select>

//           <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="discountType" value={formData.discountType} onChange={handleChange} placeholder="Discount Type" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <div className='flex items-center'>
//             <label htmlFor="taxIncluded">Tax Included</label>
//             <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} className='border-2 border-slate-200 rounded w-[2vw] h-[2vh]' />
//           </div>
//           <input type="text" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Qty" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <div className='flex items-center'>
//             <label htmlFor="isFeatured">Is Featured</label>
//             <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className='border-2 border-slate-200 rounded w-[2vw] h-[2vh]' />
//           </div>
          
//           <input type="text" name="color" value={formData.color} 
//           onChange={handleChange} placeholder="Color" required 
//           className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]'
//            />
//           {/* <div className="mb-4">
//           <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
//           <select
//             id="color"
//             name="color"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             {colors.map(color => (
//               <option key={color._id} value={color._id}>{color.name}</option>
//             ))}
//           </select>
//         </div> */}
//           <input type="text" name="attributeType" value={formData.attributeType} onChange={handleChange} placeholder="Attribute Type" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Size" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//           <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" required className='border-2 border-slate-200 rounded w-[12vw] h-[6vh]' />
//         </div>

//         <div className='w-full flex flex-col gap-2 rounded shadow-xl shadow-slate-200 bg-white p-4 border'>
//           <div>
//             <label htmlFor="thumbnail">Product Thumbnail</label>
//             <input type="file" name="thumbnail" onChange={handleThumbnailChange} required className='border-2 border-slate-200 rounded w-full h-[6vh]' />
//             {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" className='mt-2' />}
//           </div>

//           <div>
//             <label htmlFor="images">Product Images</label>
//             <input type="file" name="images" multiple onChange={handleImageChange} className='border-2 border-slate-200 rounded w-full h-[6vh]' />
//           </div>
//         </div>

//         <button type="submit" className='w-[12vw] h-[6vh] rounded bg-green-500 text-white'>Add Product</button>
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       </form>
//     </div>
//   );
// };

// export default AddNewProduct;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

// const AddNewProduct = () => {

//   const { user } = useSelector(state => state.auth);
//  const userId = user._id
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     subCategorySlug: '',
//     subSubCategorySlug: '',
//     brand: '',
//     productType: '',
//     digitalProductType: '',
//     sku: '',
//     unit: '',
//     tags: '',
//     price: '',
//     discount: '',
//     discountType: '',
//     discountAmount: '',
//     taxAmount: '',
//     taxIncluded: false,
//     minimumOrderQty: '',
//     shippingCost: '',
//     stock: '',
//     isFeatured: false,
//     videoLink: '',
//   });

//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [subSubCategories, setSubSubCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [attributes, setAttributes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [attributeValue, setAttributeValue] = useState('');
//   const [productAttributes, setProductAttributes] = useState([]);

//   useEffect(() => {
//     // Fetch categories
//     axios.get('http://localhost:3000/api/categories').then(response => setCategories(response.data.data)).catch(error => console.error('Error fetching categories:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch brands
//     axios.get('http://localhost:3000/api/brands/').then(response => setBrands(response.data)).catch(error => console.error('Error fetching brands:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch colors
//     axios.get('http://localhost:3000/api/colors/').then(response => setColors(response.data)).catch(error => console.error('Error fetching colors:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch attributes
//     axios.get('http://localhost:3000/api/attributes/').then(response => setAttributes(response.data)).catch(error => console.error('Error fetching attributes:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch sub-categories based on selected category
//     if (formData.category) {
//       axios.get(`http://localhost:3000/api/sub-categories/main-category/${formData.category}`)
//         .then(response => setSubCategories(response.data))
//         .catch(error => console.error('Error fetching sub-categories:', error));
//     }
//   }, [formData.category]);

//   useEffect(() => {
//     // Fetch sub-sub-categories based on selected sub-category
//     if (formData.subCategorySlug) {
//       axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${formData.subCategorySlug}`)
//         .then(response => setSubSubCategories(response.data.data))
//         .catch(error => console.error('Error fetching sub-sub-categories:', error));
//     }
//   }, [formData.subCategorySlug]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     setThumbnail(file);
//     const reader = new FileReader();
//     reader.onloadend = () => setImagePreview(reader.result);
//     reader.readAsDataURL(file);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleColorChange = (color) => {
//     setSelectedColors(prevColors => 
//       prevColors.includes(color)
//         ? prevColors.filter(c => c !== color)
//         : [...prevColors, color]
//     );
//   };

//   const handleAttributeChange = (e) => {
//     setSelectedAttribute(e.target.value);
//   };

//   const addAttribute = () => {
//     if (selectedAttribute) {
//       const selectedAttr = attributes.find(attr => attr._id === selectedAttribute);
//       if (selectedAttr) {
//         setProductAttributes(prevAttrs => [
//           ...prevAttrs,
//           { _id: selectedAttr._id, name: selectedAttr.name }
//         ]);
//         setSelectedAttribute('');
//       }
//     }
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const productFormData = new FormData();

//   // Convert and append form data with appropriate types
//   for (const key in formData) {
//       let value = formData[key];

//       if (key === 'tags') {
//           // Convert tags to an array and append them
//           const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag);
//           tagsArray.forEach(tag => productFormData.append('tags[]', tag));
//       } else {
//           switch (key) {
//               case 'price':
//               case 'discount':
//               case 'discountAmount':
//               case 'taxAmount':
//               case 'shippingCost':
//               case 'minimumOrderQty':
//               case 'stock':
//                   value = parseFloat(value) || 0; // Convert to number
//                   break;
//               case 'taxIncluded':
//               case 'isFeatured':
//                   value = value === 'true'; // Convert to boolean
//                   break;
//               default:
//                   value = String(value); // Convert to string
//                   break;
//           }
//           productFormData.append(key, value);
//       }
//   }

//   // Append additional data
//   if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//   }

//   images.forEach((image) => {
//       productFormData.append('images', image);
//   });

//   selectedColors.forEach((color) => {
//       productFormData.append('colors[]', color);
//   });

//   productAttributes.forEach((attribute) => {
//       productFormData.append('attributes[]', attribute._id);
//   });

//   productFormData.append('userId', userId);
//   productFormData.append('userType', 'vendor');

//   try {
//       await axios.post('http://localhost:3000/api/products/', productFormData, {
//           headers: {
//               'Content-Type': 'multipart/form-data',
//           }
//       });
//       alert('Product added successfully!');
//   } catch (error) {
//       setErrorMessage(`Error adding product: ${error.response?.data?.message || error.message}`);
//       console.log(error);
//   }
// };

// return (
//     <form onSubmit={handleSubmit} className='p-20 flex flex-col gap-2'>
//       {/* Form inputs for each field */}
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
//       <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required />
      
//       <select name="category" value={formData.category} onChange={handleChange} required>
//         <option value="">Select Category</option>
//         {categories.map(category => (
//           <option key={category._id} value={category.slug}>{category.name}</option>
//         ))}
//       </select>
      
//       <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Category</option>
//         {subCategories.map(subCategory => (
//           <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Sub-Category</option>
//         {subSubCategories.map(subSubCategory => (
//           <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="brand" value={formData.brand} onChange={handleChange} required>
//         <option value="">Select Brand</option>
//         {brands.map(brand => (
//           <option key={brand._id} value={brand._id}>{brand.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required />
//       <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" />
//       <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required />
//       <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" />
//       <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" />
//       <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//       <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" />
//       <select name="discountType" value={formData.discountType} onChange={handleChange}>
//         <option value="">Select Discount Type</option>
//         <option value="percent">Percentage</option>
//         <option value="fixed">Fixed Amount</option>
//       </select>
//       <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" />
//       <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" />
//       <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} /> Tax Included
//       <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" />
//       {/* <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" /> */}
//       <input type="number" name="shippingCost" value={formData.shippingCost} onChange={handleChange} placeholder="ShippingCost" />
//       <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
//       <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured
//       <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" />

//       <input type="file" accept="image/*" onChange={handleThumbnailChange} />
//       {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" width="100" />}
      
//       <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      
//       <div>
//         <h3>Colors</h3>
//         {colors.map(color => (
//           <label key={color._id}>
//             <input
//               type="checkbox"
//               checked={selectedColors.includes(color._id)}
//               onChange={() => handleColorChange(color._id)}
//             />
//             {color.name}
//           </label>
//         ))}
//       </div>

//       <div>
//         <h3>Attributes</h3>
//         <select onChange={handleAttributeChange} value={selectedAttribute}>
//           <option value="">Select Attribute</option>
//           {attributes.map(attribute => (
//             <option key={attribute._id} value={attribute._id}>{attribute.name}</option>
//           ))}
//         </select>
//         <button type="button" onClick={addAttribute}>Add Attribute</button>
//         <ul>
//           {productAttributes.map(attr => (
//             <li key={attr._id}>{attr.name}</li>
//           ))}
//         </ul>
//       </div>
      
//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default AddNewProduct;





import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchBrands, fetchColors, fetchAttributes,
   fetchSubCategories, fetchSubSubCategories } from
    '../../../components/redux/categorybrandSlice';

import { createProduct } from 
'../../../components/redux/product/productSlice';

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
   const userId = user._id
  const { categories, subCategories, subSubCategories, brands, colors, attributes } = useSelector((state) => state.category);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    subCategorySlug: '',
    subSubCategorySlug: '',
    brand: '',
    productType: '',
    digitalProductType: '',
    sku: '',
    unit: '',
    tags: '',
    price: '',
    discount: '',
    discountType: '',
    discountAmount: '',
    taxAmount: '',
    taxIncluded: false,
    minimumOrderQty: '',
    shippingCost: '',
    stock: '',
    isFeatured: false,
    videoLink: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [productAttributes, setProductAttributes] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchAttributes());
  }, [dispatch]);

  useEffect(() => {
    if (formData.category) {
      dispatch(fetchSubCategories(formData.category));
    }
  }, [dispatch, formData.category]);

  useEffect(() => {
    if (formData.subCategorySlug) {
      dispatch(fetchSubSubCategories(formData.subCategorySlug));
    }
  }, [dispatch, formData.subCategorySlug]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleColorChange = (color) => {
    setSelectedColors(prevColors =>
      prevColors.includes(color)
        ? prevColors.filter(c => c !== color)
        : [...prevColors, color]
    );
  };

  const handleAttributeChange = (e) => {
    setSelectedAttribute(e.target.value);
  };

  const addAttribute = () => {
    if (selectedAttribute) {
      const selectedAttr = attributes.find(attr => attr._id === selectedAttribute);
      if (selectedAttr) {
        setProductAttributes(prevAttrs => [
          ...prevAttrs,
          { _id: selectedAttr._id, name: selectedAttr.name }
        ]);
        setSelectedAttribute('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productFormData = new FormData();

    for (const key in formData) {
      let value = formData[key];

      if (key === 'tags') {
        const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag);
        tagsArray.forEach(tag => productFormData.append('tags[]', tag));
      } else {
        switch (key) {
          case 'price':
          case 'discount':
          case 'discountAmount':
          case 'taxAmount':
          case 'shippingCost':
          case 'minimumOrderQty':
          case 'stock':
            value = parseFloat(value) || 0;
            break;
          case 'taxIncluded':
          case 'isFeatured':
            value = value === 'true';
            break;
          default:
            value = String(value);
            break;
        }
        productFormData.append(key, value);
      }
    }

    if (thumbnail) {
      productFormData.append('thumbnail', thumbnail);
    }

    images.forEach((image) => {
      productFormData.append('images', image);
    });

    selectedColors.forEach((color) => {
      productFormData.append('colors[]', color);
    });

    productAttributes.forEach((attribute) => {
      productFormData.append('attributes[]', attribute._id);
    });
    productFormData.append('userId', userId);
      productFormData.append('userType', 'vendor');
    try {
      console.log("form data====", productFormData)
      await dispatch(createProduct(productFormData));
      alert('Product added successfully!');
    } catch (error) {
      setErrorMessage(`Error adding product: ${error.message}`);
      console.log(error);
    }
  };

  
return (
    <form onSubmit={handleSubmit} className='p-20 flex flex-col gap-2'>
      {/* Form inputs for each field */}
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required />
      
      <select name="category" value={formData.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category._id} value={category.slug}>{category.name}</option>
        ))}
      </select>
      
      <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange}>
        <option value="">Select Sub-Category</option>
        {subCategories.map(subCategory => (
          <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
        ))}
      </select>
      
      <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}>
        <option value="">Select Sub-Sub-Category</option>
        {subSubCategories.map(subSubCategory => (
          <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
        ))}
      </select>
      
      <select name="brand" value={formData.brand} onChange={handleChange} required>
        <option value="">Select Brand</option>
        {brands.map(brand => (
          <option key={brand._id} value={brand._id}>{brand.name}</option>
        ))}
      </select>
      
      <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required />
      <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" />
      <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required />
      <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" />
      <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" />
      <select name="discountType" value={formData.discountType} onChange={handleChange}>
        <option value="">Select Discount Type</option>
        <option value="percent">Percentage</option>
        <option value="fixed">Fixed Amount</option>
      </select>
      <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" />
      <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" />
      <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} /> Tax Included
      <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" />
      {/* <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" /> */}
      <input type="number" name="shippingCost" value={formData.shippingCost} onChange={handleChange} placeholder="ShippingCost" />
      <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
      <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured
      <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" />

      <input type="file" accept="image/*" onChange={handleThumbnailChange} />
      {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" width="100" />}
      
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      
      <div>
        <h3>Colors</h3>
        {colors.map(color => (
          <label key={color._id}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color._id)}
              onChange={() => handleColorChange(color._id)}
            />
            {color.name}
          </label>
        ))}
      </div>

      <div>
        <h3>Attributes</h3>
        <select onChange={handleAttributeChange} value={selectedAttribute}>
          <option value="">Select Attribute</option>
          {attributes.map(attribute => (
            <option key={attribute._id} value={attribute._id}>{attribute.name}</option>
          ))}
        </select>
        <button type="button" onClick={addAttribute}>Add Attribute</button>
        <ul>
          {productAttributes.map(attr => (
            <li key={attr._id}>{attr.name}</li>
          ))}
        </ul>
      </div>
      
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddNewProduct;