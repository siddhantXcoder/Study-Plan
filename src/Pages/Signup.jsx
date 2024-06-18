import React, { useState } from 'react';
import Tab from '../Components/core/Auth/Tab';
import ACCOUNT_TYPE from '../Constants/accountType';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });

  const [otpSent, setOtpSent] = useState(false);
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendOtp = async () => {
    try {
      const url = 'http://localhost:4000/api/v1/auth/sendotp';
      await axios.post(url, { email: formData.email });
      setOtpSent(true);
      toast.success('OTP sent to your email');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, otp } = formData;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!otpSent) {
      await handleSendOtp();
      return;
    }

    try {
      const url = 'http://localhost:4000/api/v1/auth/signup';
      await axios.post(url, { ...formData, accountType });
      toast.success('Signup successful');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  const tabData = [
    {
      id: 1,
      tabName: 'Student',
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: 'Instructor',
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  return (
    <div className="min-h-screen bg-[#012D4D] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Create Account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 font-inter" onSubmit={handleOnSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm
                  sm:text-sm"
                />
              </div>
            </div>

            {otpSent && (
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  OTP
                </label>
                <div className="mt-1">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    value={formData.otp}
                    required
                    onChange={handleOnChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={otpSent ? handleOnSubmit : handleSendOtp}
              >
                {otpSent ? 'Verify OTP & Sign up' : 'Send OTP'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
