

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateSMTP } from '../../../components/redux/auth/userSlice'; // Import the updateSMTP action
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const SMTPUpdate = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdateSMTP = async (e) => {
    e.preventDefault();
    try {
      // Get the token from local storage
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found, please log in again.');
        return;
      }

      // Prepare user data to update SMTP settings
      const smtpData = {
        userId: '66f94f4a2adf161104fef3c7', // Replace this with the actual user ID
        smtpUser: email,
        smtpPass: password,
      };

      console.log("user data====", smtpData);
      const resultAction = await dispatch(updateSMTP(smtpData));
      if (updateSMTP.fulfilled.match(resultAction)) {
        // Save updated SMTP settings in local storage
        localStorage.setItem('smtpUser', email);
        localStorage.setItem('smtpPass', password);

        toast.success('SMTP settings updated successfully.');
        navigate('/'); // Redirect after successful update
      } else {
        toast.error(resultAction.payload || 'Failed to update SMTP settings.');
      }
    } catch (error) {
      toast.error('An error occurred while updating SMTP settings.');
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md lg:max-w-lg">
        <ToastContainer />
        <form onSubmit={handleUpdateSMTP} className="space-y-4">
          <div className="text-center mb-5">
            <h1 className="text-3xl font-bold">Update SMTP</h1>
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="email">Your SMTP User</label>
            <input
              type="email"
              className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
              id="email"
              placeholder="usersmptemail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
                id="password"
                placeholder="123456"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="form-group mb-4">
            <div className="custom-control custom-checkbox flex items-center gap-1">
              <input type="checkbox" className="custom-control-input" id="rememberMe" name="remember" />
              <label className="custom-control-label text-gray-500" htmlFor="rememberMe">Remember me</label>
            </div>
          </div>
          <div id="recaptcha_element" className="w-full mb-0" style={{ height: '100px' }}></div>
          <button type="submit" className="btn btn-block p-3 rounded bg-green-300 hover:bg-green-200 hover:text-black text-white font-semibold mt-0">
            Update
          </button>
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SMTPUpdate;
