import React from 'react'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();


  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Mathematics */}
        <div onClick={() => navigate("/math-resources")}
         
          className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Mathematics</h2>
          <p className="text-gray-600 mt-2">Click to open notes, assignments, etc.</p>
        </div>

        {/* Physics */}
        <div onClick={() => navigate("/physics-resources")}

          className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Physics</h2>
          <p className="text-gray-600 mt-2">Click to open notes, assignments, etc.</p>
        </div>

        {/* Chemistry */}
        <div 
         
          className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Chemistry</h2>
          <p className="text-gray-600 mt-2">Click to open notes, assignments, etc.</p>
        </div>

        {/* English */}
        <div 
          
          className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">English</h2>
          <p className="text-gray-600 mt-2">Click to open notes, assignments, etc.</p>
        </div>

        {/* Computer Science */}
        <div 
          
          className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Computer Science</h2>
          <p className="text-gray-600 mt-2">Click to open notes, assignments, etc.</p>
        </div>

        {/* Biology */}
        <div 
          
          className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Biology</h2>
          <p className="text-gray-600 mt-2">Click to open notes, assignments, etc.</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
