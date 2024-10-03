import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/new/Header';
import Sidebar from './components/new/Sidebar';
import LoginPage from './components/LoginPage/LoginPage';
import { RiMenuUnfold3Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './components/redux/auth/authSlice';
import { checkAuth } from './utils/auth';
import AllRoutes from './Routes.jsx';

function App() {
  const { isLoggedIn, user, error } = useSelector((state) => state.auth); // Access error state
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth(dispatch);
  }, [dispatch]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {isLoggedIn ? (
          <>
            <Header />
            <div className="row">
              <div
                className={`fixed inset-0 z-30 ${
                  isSidebarOpen ? 'block' : 'hidden'
                } lg:block lg:relative lg:w-2/12`}
              >
                <div
                  className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
                  onClick={toggleSidebar}
                ></div>
                <Sidebar />
                <h1 onClick={() => dispatch(logout())}>logout</h1>
              </div>
              <main className="flex-1 lg:w-10/12 ml-4 overflow-auto">
                <button className="p-4 lg:hidden" onClick={toggleSidebar}>
                  {isSidebarOpen ? 'Close' : <RiMenuUnfold3Fill className="text-[1rem] font-semibold" />}
                </button>
                <AllRoutes />
              </main>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
        {error && <div className="text-red-500 p-4">{error}</div>} {/* Display error if login fails */}
      </div>
    </Router>
  );
}

export default App;
