import React, { useState } from 'react';

import { useAuth } from '../contexts/AuthProvider';

const Login = () => {
  const { setAuthToken } = useAuth();

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return alert('Please write the membership password.');
    }

    if (value !== import.meta.env.VITE_SECRET_PASSWORD) {
      return alert('Password is wrong, please contact app owner.');
    }

    setAuthToken(value);
  };
    
  return (
    <div className="flex align-center justify-center">
      <form
        className="border border-gray-300 text-gray-900 rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] w-full p-3 flex flex-col align-center justify-start max-w-[375px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg mb-3">Membership passowrd</h2>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 mb-2"
          type="password"
          value={value}
          onChange={handleChange}
        />
        <button
          className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;