
// import React, { useState } from 'react';

// const PackageSettings = () => {
//   // Initialize packages state
//   const [packages, setPackages] = useState([
//     {
//       id: 1,
//       name: 'Basic',
//       emails: 5000,
//       quota: '10GB',
//       price: 19.99,
//       expiration: '2025-12-31',
//       restrictions: 'Max 5 MB attachments',
//     },
//     {
//       id: 2,
//       name: 'Premium',
//       emails: 20000,
//       quota: '50GB',
//       price: 49.99,
//       expiration: '2025-12-31',
//       restrictions: 'Max 25 MB attachments',
//     },
//     {
//       id: 3,
//       name: 'Enterprise',
//       emails: 100000,
//       quota: 'Unlimited',
//       price: 99.99,
//       expiration: '2026-12-31',
//       restrictions: 'Max 100 MB attachments',
//     },
//   ]);

//   const [editingPackage, setEditingPackage] = useState(null);
//   const [newPackage, setNewPackage] = useState({
//     name: '',
//     emails: 0,
//     price: 0,
//     quota: '',
//     expiration: '',
//     restrictions: '',
//   });

//   const handleEdit = (pkg) => {
//     setEditingPackage(pkg);
//     setNewPackage(pkg);
//   };

//   const handleDelete = (id) => {
//     setPackages(packages.filter((pkg) => pkg.id !== id));
//   };

//   const handleSave = () => {
//     if (editingPackage) {
//       setPackages(packages.map((pkg) => (pkg.id === editingPackage.id ? newPackage : pkg)));
//     } else {
//       setPackages([...packages, { ...newPackage, id: packages.length + 1 }]);
//     }
//     setEditingPackage(null);
//     setNewPackage({
//       name: '',
//       emails: 0,
//       price: 0,
//       quota: '',
//       expiration: '',
//       restrictions: '',
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewPackage({ ...newPackage, [name]: value });
//   };

//   return (
//     <section className="space-y-6 container p-12">
//       <h3 className="text-2xl font-semibold mb-4">Package Settings</h3>

//       {/* Form for adding or editing packages */}
//       <div className="card bg-base-100 shadow-lg p-4 mb-6">
//         <h4 className="text-xl font-semibold mb-2">{editingPackage ? 'Edit Package' : 'Add New Package'}</h4>
//         <input
//           type="text"
//           name="name"
//           placeholder="Package Name"
//           value={newPackage.name}
//           onChange={handleChange}
//           className="input input-bordered w-full mb-2"
//         />
//         <input
//           type="number"
//           name="emails"
//           placeholder="Email Limit"
//           value={newPackage.emails}
//           onChange={handleChange}
//           className="input input-bordered w-full mb-2"
//         />
//         <input
//           type="text"
//           name="quota"
//           placeholder="Quota"
//           value={newPackage.quota}
//           onChange={handleChange}
//           className="input input-bordered w-full mb-2"
//         />
//         <input
//           type="date"
//           name="expiration"
//           placeholder="Expiration Date"
//           value={newPackage.expiration}
//           onChange={handleChange}
//           className="input input-bordered w-full mb-2"
//         />
//         <textarea
//           name="restrictions"
//           placeholder="Restrictions (e.g., attachment size, recipients)"
//           value={newPackage.restrictions}
//           onChange={handleChange}
//           className="textarea textarea-bordered w-full mb-2"
//         />
//         <button onClick={handleSave} className="btn btn-primary">
//           {editingPackage ? 'Save Changes' : 'Add Package'}
//         </button>
//       </div>

//       {/* Existing Packages */}
//       <div className="card bg-base-100 shadow-lg p-4">
//         <h4 className="text-xl font-semibold mb-4">Existing Packages</h4>
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th>Package Name</th>
//               <th>Email Limit</th>
//               <th>Email Quota</th>
//               <th>Price ($)</th>
//               <th>Expiration Date</th>
//               <th>Restrictions</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(packages) && packages.length > 0 ? (
//               packages.map((pkg) => (
//                 <tr key={pkg.id}>
//                   <td>{pkg.name}</td>
//                   <td>{pkg.emails}</td>
//                   <td>{pkg.quota}</td>
//                   <td>{pkg.price}</td>
//                   <td>{pkg.expiration}</td>
//                   <td>{pkg.restrictions}</td>
//                   <td>
//                     <button onClick={() => handleEdit(pkg)} className="btn btn-info btn-sm">
//                       Edit
//                     </button>
//                     <button onClick={() => handleDelete(pkg.id)} className="btn btn-error btn-sm ml-2">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="text-center">
//                   No Packages Available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default PackageSettings;



// import React, { useState } from 'react';

// const PackageSettings = () => {
//   // Initialize packages state
//   const [packages, setPackages] = useState([
//     {
//       id: 1,
//       name: 'Basic',
//       emails: 5000,
//       quota: '10GB',
//       price: 19.99,
//       expiration: '2025-12-31',
//       restrictions: 'Max 5 MB attachments',
//     },
//     {
//       id: 2,
//       name: 'Premium',
//       emails: 20000,
//       quota: '50GB',
//       price: 49.99,
//       expiration: '2025-12-31',
//       restrictions: 'Max 25 MB attachments',
//     },
//     {
//       id: 3,
//       name: 'Enterprise',
//       emails: 100000,
//       quota: 'Unlimited',
//       price: 99.99,
//       expiration: '2026-12-31',
//       restrictions: 'Max 100 MB attachments',
//     },
//   ]);

//   const [editingPackage, setEditingPackage] = useState(null);
//   const [newPackage, setNewPackage] = useState({
//     name: '',
//     emails: 0,
//     price: 0,
//     quota: '',
//     expiration: '',
//     restrictions: '',
//   });

//   const handleEdit = (pkg) => {
//     setEditingPackage(pkg);
//     setNewPackage(pkg);
//   };

//   const handleDelete = (id) => {
//     setPackages(packages.filter((pkg) => pkg.id !== id));
//   };

//   const handleSave = () => {
//     if (editingPackage) {
//       setPackages(packages.map((pkg) => (pkg.id === editingPackage.id ? newPackage : pkg)));
//     } else {
//       setPackages([...packages, { ...newPackage, id: packages.length + 1 }]);
//     }
//     setEditingPackage(null);
//     setNewPackage({
//       name: '',
//       emails: 0,
//       price: 0,
//       quota: '',
//       expiration: '',
//       restrictions: '',
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewPackage({ ...newPackage, [name]: value });
//   };

//   return (
//     <section className="space-y-6 container p-12">
//       <h3 className="text-2xl font-semibold mb-4">Package Settings</h3>

//       {/* Form for adding or editing packages */}
//       <div className="card bg-base-100 shadow-lg p-4 mb-6">
//         <h4 className="text-xl font-semibold mb-2">{editingPackage ? 'Edit Package' : 'Add New Package'}</h4>
//         <input
//           type="text"
//           name="name"
//           placeholder="Package Name"
//           value={newPackage.name}
//           onChange={handleChange}
//           className="input input-bordered  mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <input
//           type="number"
//           name="emails"
//           placeholder="Email Limit"
//           value={newPackage.emails}
//           onChange={handleChange}
//           className="input input-bordered  mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <input
//           type="text"
//           name="quota"
//           placeholder="Quota"
//           value={newPackage.quota}
//           onChange={handleChange}
//           className="input input-bordered  mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <input
//           type="date"
//           name="expiration"
//           placeholder="Expiration Date"
//           value={newPackage.expiration}
//           onChange={handleChange}
//           className="input input-bordered  mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
//         />
//         <textarea
//           name="restrictions"
//           placeholder="Restrictions (e.g., attachment size, recipients)"
//           value={newPackage.restrictions}
//           onChange={handleChange}
//           // className=" w-full mb-2"
//           className="textarea textarea-bordered   mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"

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
//               <th>Package Name</th>
//               <th>Email Limit</th>
//               <th>Email Quota</th>
//               <th>Price ($)</th>
//               <th>Expiration Date</th>
//               <th>Restrictions</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(packages) && packages.length > 0 ? (
//               packages.map((pkg) => (
//                 <tr key={pkg.id}>
//                   <td>{pkg.name}</td>
//                   <td>{pkg.emails}</td>
//                   <td>{pkg.quota}</td>
//                   <td>{pkg.price}</td>
//                   <td>{pkg.expiration}</td>
//                   <td>{pkg.restrictions}</td>
//                   <td>
//                     <button onClick={() => handleEdit(pkg)} className="btn border-gray-800  btn-sm">
//                       <FaEdit />
//                     </button>
//                     <button onClick={() => handleDelete(pkg.id)} className="btn btn-error btn-sm ml-2">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="text-center">
//                   No Packages Available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default PackageSettings;




import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PackageSettings = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Basic',
      emails: 5000,
      quota: '10GB',
      price: 19.99,
      expiration: '2025-12-31',
      restrictions: 'Max 5 MB attachments',
    },
    {
      id: 2,
      name: 'Premium',
      emails: 20000,
      quota: '50GB',
      price: 49.99,
      expiration: '2025-12-31',
      restrictions: 'Max 25 MB attachments',
    },
    {
      id: 3,
      name: 'Enterprise',
      emails: 100000,
      quota: 'Unlimited',
      price: 99.99,
      expiration: '2026-12-31',
      restrictions: 'Max 100 MB attachments',
    },
  ]);

  const [editingPackage, setEditingPackage] = useState(null);
  const [newPackage, setNewPackage] = useState({
    name: '',
    emails: 0,
    price: 0,
    quota: '',
    expiration: '',
    restrictions: '',
  });

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
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
    }).then((result) => {
      if (result.isConfirmed) {
        setPackages(packages.filter((pkg) => pkg.id !== id));
        Swal.fire('Deleted!', 'Your package has been deleted.', 'success');
      }
    });
  };

  const handleSave = () => {
    if (!validateInput()) return;

    if (editingPackage) {
      setPackages(packages.map((pkg) => (pkg.id === editingPackage.id ? newPackage : pkg)));
    } else {
      setPackages([...packages, { ...newPackage, id: packages.length + 1 }]);
    }
    resetForm();
    toast.success(editingPackage ? 'Package updated successfully' : 'Package added successfully');
  };

  const validateInput = () => {
    if (!newPackage.name.trim()) {
      toast.error('Package name is required');
      return false;
    }
    if (newPackage.emails <= 0) {
      toast.error('Email limit must be a positive number');
      return false;
    }
    if (newPackage.price < 0) {
      toast.error('Price cannot be negative');
      return false;
    }
    if (!newPackage.quota.trim()) {
      toast.error('Quota is required');
      return false;
    }
    if (!newPackage.expiration) {
      toast.error('Expiration date is required');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPackage({ ...newPackage, [name]: value });
  };

  const resetForm = () => {
    setEditingPackage(null);
    setNewPackage({
      name: '',
      emails: 0,
      price: 0,
      quota: '',
      expiration: '',
      restrictions: '',
    });
  };

  return (
    <section className="space-y-6 container p-12">
      <h3 className="text-2xl font-semibold mb-4">Package Settings</h3>

      {/* Form for adding or editing packages */}
      <div className="card bg-base-100 shadow-lg p-4 mb-6">
        <h4 className="text-xl font-semibold mb-2">{editingPackage ? 'Edit Package' : 'Add New Package'}</h4>
        <input
          type="text"
          name="name"
          placeholder="Package Name"
          value={newPackage.name}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <input
          type="number"
          name="emails"
          placeholder="Email Limit"
          value={newPackage.emails}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <input
          type="text"
          name="quota"
          placeholder="Quota"
          value={newPackage.quota}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <input
          type="date"
          name="expiration"
          value={newPackage.expiration}
          onChange={handleChange}
          className="input input-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <textarea
          name="restrictions"
          placeholder="Restrictions (e.g., attachment size, recipients)"
          value={newPackage.restrictions}
          onChange={handleChange}
          className="textarea textarea-bordered mr-2 mb-3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <button onClick={handleSave} className="btn bg-gray-800 text-white font-bold">
          {editingPackage ? 'Save Changes' : 'Add Package'}
        </button>
      </div>

      {/* Existing Packages */}
      <div className="card bg-base-100 shadow-lg p-4">
        <h4 className="text-xl font-semibold mb-4">Packages List</h4>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Email Limit</th>
              <th>Email Quota</th>
              <th>Price ($)</th>
              <th>Expiration Date</th>
              <th>Restrictions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.length > 0 ? (
              packages.map((pkg) => (
                <tr key={pkg.id}>
                  <td>{pkg.name}</td>
                  <td>{pkg.emails}</td>
                  <td>{pkg.quota}</td>
                  <td>{pkg.price.toFixed(2)}</td>
                  <td>{pkg.expiration}</td>
                  <td>{pkg.restrictions}</td>
                  <td>
                    <button onClick={() => handleEdit(pkg)} className="btn border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white btn-sm">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(pkg.id)} className="btn border-red-600 text-red-600  hover:bg-red-600 hover:text-white btn-sm ml-2">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No Packages Available
                </td>
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

