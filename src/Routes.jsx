import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import AttributeSetup from "./pages/ProductAttributeSetUp/ProductAttributeSetUp";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CustomerList from "./pages/Costumers/Costumer_Review/CustomerList/CustomerList";
import BulkEmail from "./pages/Bulk_Email/bulk_email";
import Templates from "./pages/Bulk_Email/Templates";
import PackageSettings from "./pages/Bulk_Email/PackageSettings";
function AllRoutes() {

  return (
   <>

<Routes>
                  
               
                
                  <Route path="/" element={<WelcomePage />} />
                 
                  <Route
                    path="/productattributesetup"
                    element={<AttributeSetup />}
                  />
                
                 
                  <Route path="/bulkemail" element={<BulkEmail />} />
                  <Route path="/template" element={<Templates />} />
                  {/* <Route path="/brandupdate" element={<BrandUpdate />} /> */}
                
                  {/* <Route path="/customerlist" element={<CustomerList />} /> */}
                
                  <Route path="/users" element={<CustomerList  />} />
                  <Route path="/packagesettings" element={<PackageSettings  />} />
                 
                  {/* Add other routes here as needed */}
                </Routes>
                </>
  );
}

export default AllRoutes;

