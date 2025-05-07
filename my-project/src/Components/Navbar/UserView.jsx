import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Ips from '../API.js';

const UserView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const verification = async () => {
    const token = localStorage.getItem('userToken'); 
    console.log(token);
    
    if (!token) { 
      alert("Please login");
      navigate('/login'); 
      return;
    }

    try {
      const domain=Ips();
      const res = await axios.post(
        `${domain}home`, 
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      setUser(res.data); 
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data."); 
    } finally {
      setLoading(false);
    }
  };

  
  const userLogout = () => {
    localStorage.removeItem("userToken"); 
    navigate('/login');
  };

  useEffect(() => {
    verification(); 
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; 
  }

  if (!user) {
    return <div>No user data available.</div>; 
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome, {user.username}!
      </h1>
      <div className="mt-4">
        {/* <p className="text-gray-600">Username: {user.username}</p> Display username */}
        {/* <p className="text-gray-600">Email: {user.email}</p> Display email */}
        {/* Add more user details as needed */}
      </div>

      {/* Logout button */}
      <button 
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={userLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserView;
