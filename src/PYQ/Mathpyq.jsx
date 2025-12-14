import React from 'react'
import { useNavigate } from 'react-router-dom'


const Mathpyq = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center mb-6">
        Mathematics Resources
      </h1>

      {/* All boxes row */}
      <div className="flex flex-wrap justify-center gap-6">

        {/* Notes */}
        <div onClick={()=> navigate("/Maths-Notes")}
         className="bg-orange-500 p-6 w-64 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Notes</h2>
          <p className="text-gray-600 mt-2">Click to view or download notes.</p>
        </div>

        {/* Assignments */}
        <div className="bg-yellow-300 p-6 w-64 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Assignments</h2>
          <p className="text-gray-600 mt-2">Click to view or download assignments.</p>
        </div>

        {/* Past Year Questions */}
        <div className="bg-green-600 p-6 w-64 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Past Year Questions</h2>
          <p className="text-gray-600 mt-2">Click to view previous year papers.</p>
        </div>
         <div className="bg-blue-500 p-6 w-64 rounded-2xl shadow-lg cursor-pointer 
                        hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-white">Video Lectures</h2>
          <p className="text-white/90 mt-2">Click to watch video lectures.</p>
        </div>

      </div>

    </div>
  )
}

export default Mathpyq
