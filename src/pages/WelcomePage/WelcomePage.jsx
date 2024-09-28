// import React from "react";
// import BussniesWallet from "./BussniesWallet";

// import Adminwallet from "./AdminWallet/Adminwallet";
// import OrderStatic from "./AdminWallet/OrderStatic/OrderStatic";
// import OrderStatistic from "./AdminWallet/OrderStatic/OrderStatistic/OrderStatistic";
// import TopCustomersSection from "./AdminWallet/adminCard/TopCustomerCard";
// import TopProductSection from "./ProductAdmin/ProductAdmin";
// import { IoDiamond } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const WelcomePage = () => {
//   return (
//     <div className="grid p-6 grid-cols-12 bg-[#F9F9FB]">
//       <div className="col-span-12">
//         <div className="bg-[#F9F9FB]  flex justify-between items-center  px-5 py-5 w-[100%]">
//           <div>
//             <h1 className="text-[1.3rem] font-bold">Welcome Kamrujjaman Joy</h1>
//             <p className="text-[.9rem] text-gray-400">
//               Monitor your business analytics and statistics.
//             </p>
//           </div>
//           <Link to={"/inhouseproductlist"}>
//             <button className="btn px-3 py-2 bg-[#A1CB46] text-white font-semibold flex items-center gap-2 hover:bg-[#7e9f37]">
//               <IoDiamond className="text-white" />{" "}
//               <h2 className="text-white">Products</h2>
//             </button>
//           </Link>
//         </div>
//         <BussniesWallet />
//         <Adminwallet />
//         <OrderStatistic />

//         {/* <TopCustomersSection /> */}

//         <TopProductSection />
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;


import React from 'react';

const Overview = () => {
  // Sample data
  const totalEmailsSent = 12345;
  const topUsers = [
    { id: 1, name: 'John Doe', emailCount: 5000, image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', emailCount: 4000, image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Alice Johnson', emailCount: 3000, image: 'https://randomuser.me/api/portraits/women/3.jpg' },
  ];
  const campaigns = {
    basic: 5,
    primary: 10,
    advanced: 7,
    premium: 3
  };

  const emailPackages = [
    { type: 'Basic', description: 'Basic email package for small scale operations.', price: '$50/month' },
    { type: 'Primary', description: 'Primary package with additional features.', price: '$100/month' },
    { type: 'Advanced', description: 'Advanced package with advanced analytics.', price: '$200/month' },
    { type: 'Premium', description: 'Premium package with all features included.', price: '$500/month' }
  ];

  return (
    <section className="space-y-6 container p-12">
      {/* Total Emails Sent */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h4 className="card-title text-xl font-bold">Total Emails Sent</h4>
          <p className="text-3xl font-semibold">{totalEmailsSent}</p>
        </div>
      </div>

      {/* Top Users */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h4 className="card-title text-xl font-bold">Top Users</h4>
          <ul className="space-y-4">
            {topUsers.map(user => (
              <li key={user.id} className="flex items-center space-x-4">
                <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-gray-600">Emails Sent: {user.emailCount}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Campaigns */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h4 className="card-title text-xl font-bold">Campaigns</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.keys(campaigns).map(campaign => (
              <div key={campaign} className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h5 className="card-title text-lg font-semibold capitalize">{campaign}</h5>
                  <p className="text-2xl font-bold">{campaigns[campaign]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email Packages */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h4 className="card-title text-xl font-bold">Email Packages</h4>
          <ul className="space-y-4">
            {emailPackages.map(pkg => (
              <li key={pkg.type} className="bg-base-200 p-4 rounded-lg shadow-md">
                <h5 className="text-lg font-semibold">{pkg.type}</h5>
                <p className="text-gray-700">{pkg.description}</p>
                <p className="text-xl font-bold mt-2">{pkg.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Overview;
