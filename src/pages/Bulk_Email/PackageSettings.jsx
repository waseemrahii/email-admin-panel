
// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'; // Add axios for API calls
// import ApiUrl from '../../ApiUrl';

// const PackageSettings = () => {
//   const [packages, setPackages] = useState([]);
//   const [editingPackage, setEditingPackage] = useState(null);
//   const [newPackage, setNewPackage] = useState({
//     type: '',
//     maxEmailsPerMonth: 0,
//     maxEmailsSentPerMonth: 0, // New field
//     packageDuration: 0, // Duration in days
//     price: 0,
//   });

//   useEffect(() => {
//     fetchPackages(); // Fetch packages when component mounts
//   }, []);

//   const fetchPackages = async () => {
//     try {
//       const response = await axios.get(`${ApiUrl}/api/packages`);
//       setPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching packages', error);
//     }
//   };

//   const handleEdit = (pkg) => {
//     setEditingPackage(pkg);
//     setNewPackage(pkg);
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'This package will be deleted!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         await axios.delete(`/api/packages/${id}`);
//         setPackages(packages.filter((pkg) => pkg._id !== id));
//         Swal.fire('Deleted!', 'Your package has been deleted.', 'success');
//       }
//     });
//   };

//   const handleSave = async () => {
//     if (!validateInput()) return;

//     try {
//       if (editingPackage) {
//         const response = await axios.put(`/api/packages/${editingPackage._id}`, newPackage);
//         setPackages(packages.map((pkg) => (pkg._id === editingPackage._id ? response.data : pkg)));
//       } else {
//         const response = await axios.post('/api/packages', newPackage);
//         setPackages([...packages, response.data]);
//       }
//       resetForm();
//       toast.success(editingPackage ? 'Package updated successfully' : 'Package added successfully');
//     } catch (error) {
//       console.error('Error saving package', error);
//       toast.error('Error saving package');
//     }
//   };

//   const validateInput = () => {
//     // Same validation logic as before
//     if (!newPackage.type.trim()) {
//       toast.error('Package type is required');
//       return false;
//     }
//     if (newPackage.maxEmailsPerMonth <= 0) {
//       toast.error('Max emails per month must be a positive number');
//       return false;
//     }
//     if (newPackage.maxEmailsSentPerMonth <= 0) {
//       toast.error('Max emails sent per month must be a positive number');
//       return false;
//     }
//     if (newPackage.packageDuration <= 0) {
//       toast.error('Package duration must be a positive number');
//       return false;
//     }
//     if (newPackage.price < 0) {
//       toast.error('Price cannot be negative');
//       return false;
//     }
//     return true;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewPackage({ ...newPackage, [name]: value });
//   };

//   const resetForm = () => {
//     setEditingPackage(null);
//     setNewPackage({
//       type: '',
//       maxEmailsPerMonth: 0,
//       maxEmailsSentPerMonth: 0,
//       packageDuration: 0,
//       price: 0,
//     });
//   };

//   return (
//     <section className="space-y-6 container p-12">
//       <h3 className="text-2xl font-semibold mb-4">Package Settings</h3>

//       {/* Form for adding or editing packages */}
//       <div className="card bg-base-100 shadow-lg p-4 mb-6">
//         <h4 className="text-xl font-semibold mb-2">{editingPackage ? 'Edit Package' : 'Add New Package'}</h4>
//         <input
//           type="text"
//           name="type"
//           placeholder="Package Type (basic, standard, premium)"
//           value={newPackage.type}
//           onChange={handleChange}
//           className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <input
//           type="number"
//           name="maxEmailsPerMonth"
//           placeholder="Max Emails Per Month"
//           value={newPackage.maxEmailsPerMonth}
//           onChange={handleChange}
//           className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <input
//           type="number"
//           name="maxEmailsSentPerMonth"
//           placeholder="Max Emails Sent Per Month"
//           value={newPackage.maxEmailsSentPerMonth}
//           onChange={handleChange}
//           className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <input
//           type="number"
//           name="packageDuration"
//           placeholder="Package Duration (in days)"
//           value={newPackage.packageDuration}
//           onChange={handleChange}
//           className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price ($)"
//           value={newPackage.price}
//           onChange={handleChange}
//           className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <button onClick={handleSave} className="btn bg-gray-800 text-white font-bold">
//           {editingPackage ? 'Save Changes' : 'Add Package'}
//         </button>
//       </div>

//       {/* Existing Packages */}
//       <div className="card bg-base-100 shadow-lg p-4">
//         <h4 className="text-xl font-semibold mb-4">Packages List</h4>
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th>Package Type</th>
//               <th>Max Emails Per Month</th>
//               <th>Max Emails Sent Per Month</th>
//               <th>Package Duration (days)</th>
//               <th>Price ($)</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {packages.length > 0 ? (
//               packages.map((pkg) => (
//                 <tr key={pkg._id}>
//                   <td>{pkg.type}</td>
//                   <td>{pkg.maxEmailsPerMonth}</td>
//                   <td>{pkg.maxEmailsSentPerMonth}</td>
//                   <td>{pkg.packageDuration}</td>
//                   <td>{pkg.price.toFixed(2)}</td>
//                   <td>
//                     <button onClick={() => handleEdit(pkg)} className="btn border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white btn-sm">
//                       <FaEdit />
//                     </button>
//                     <button onClick={() => handleDelete(pkg._id)} className="btn border-red-600 text-red-600 hover:bg-red-600 hover:text-white btn-sm ml-2">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center">No packages available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// };

// export default PackageSettings;



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  createPackage, 
  getAllPackages, 
  updatePackage, 
  deletePackage 
} from '../../components/redux/auth/packageSlice'; // Adjust the import path as necessary

const PackageSettings = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.package.packages);
  const editingPackage = useSelector((state) => state.package.package);
  const [newPackage, setNewPackage] = React.useState({
    type: '',
    maxEmailsPerMonth: 0,
    maxEmailsSentPerMonth: 0,
    packageDuration: 0,
    price: 0,
  });

  useEffect(() => {
    dispatch(getAllPackages()); // Fetch packages when component mounts
  }, [dispatch]);

  const handleEdit = (pkg) => {
    setNewPackage(pkg);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This package will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deletePackage(id));
        Swal.fire('Deleted!', 'Your package has been deleted.', 'success');
      }
    });
  };

  const handleSave = async () => {
    if (!validateInput()) return;

    try {
      if (editingPackage) {
        await dispatch(updatePackage({ packageId: editingPackage._id, packageData: newPackage }));
        toast.success('Package updated successfully');
      } else {
        await dispatch(createPackage(newPackage));
        toast.success('Package added successfully');
      }
      resetForm();
    } catch (error) {
      console.error('Error saving package', error);
      toast.error('Error saving package');
    }
  };

  const validateInput = () => {
    if (!newPackage.type.trim()) {
      toast.error('Package type is required');
      return false;
    }
    if (newPackage.maxEmailsPerMonth <= 0) {
      toast.error('Max emails per month must be a positive number');
      return false;
    }
    if (newPackage.maxEmailsSentPerMonth <= 0) {
      toast.error('Max emails sent per month must be a positive number');
      return false;
    }
    if (newPackage.packageDuration <= 0) {
      toast.error('Package duration must be a positive number');
      return false;
    }
    if (newPackage.price < 0) {
      toast.error('Price cannot be negative');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPackage({ ...newPackage, [name]: value });
  };

  const resetForm = () => {
    setNewPackage({
      type: '',
      maxEmailsPerMonth: 0,
      maxEmailsSentPerMonth: 0,
      packageDuration: 0,
      price: 0,
    });
  };

  return (
    <section className="space-y-6 container p-12">
      <h3 className="text-2xl font-semibold mb-4">Package Settings</h3>

      <div className="card bg-base-100 shadow-lg p-4 mb-6">
        <h4 className="text-xl font-semibold mb-2">{editingPackage ? 'Edit Package' : 'Add New Package'}</h4>
        <input
          type="text"
          name="type"
          placeholder="Package Type (basic, standard, premium)"
          value={newPackage.type}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <input
          type="number"
          name="maxEmailsPerMonth"
          placeholder="Max Emails Per Month"
          value={newPackage.maxEmailsPerMonth}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <input
          type="number"
          name="maxEmailsSentPerMonth"
          placeholder="Max Emails Sent Per Month"
          value={newPackage.maxEmailsSentPerMonth}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <input
          type="number"
          name="packageDuration"
          placeholder="Package Duration (in days)"
          value={newPackage.packageDuration}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={newPackage.price}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <button onClick={handleSave} className="btn bg-gray-800 text-white font-bold">
          {editingPackage ? 'Save Changes' : 'Add Package'}
        </button>
      </div>

      <div className="card bg-base-100 shadow-lg p-4">
        <h4 className="text-xl font-semibold mb-4">Packages List</h4>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Package Type</th>
              <th>Max Emails Per Month</th>
              <th>Max Emails Sent Per Month</th>
              <th>Package Duration (days)</th>
              <th>Price ($)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.length > 0 ? (
              packages.map((pkg) => (
                <tr key={pkg._id}>
                  <td>{pkg.type}</td>
                  <td>{pkg.maxEmailsPerMonth}</td>
                  <td>{pkg.maxEmailsSentPerMonth}</td>
                  <td>{pkg.packageDuration}</td>
                  <td>{pkg.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleEdit(pkg)} className="btn border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white btn-sm">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(pkg._id)} className="btn border-red-600 text-red-600 hover:bg-red-600 hover:text-white btn-sm ml-2">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No packages available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </section>
  );
};

export default PackageSettings;
