import React from 'react'
import jobs from '../jobs.json'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Job = ({job}) => {
    const [showFullDesc, setShowFullDesc] = useState(false);
    let desc = job.description;
    if (!showFullDesc) {
        desc = desc.substring(0, 100)+"...";
    }
  return (

        <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
            <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
            </div>

            <div className="mb-5">
            {desc}
            </div>

            <button onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-indigo-500 font-semibold mb-5 hover:text-indigo-700">
                {showFullDesc? "Less":"More"}
            </button>

            <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
                <FaMapMarker className="inline-block mb-1.5 mr-1" />
                {job.location}
            </div>
            <Link
                to={`/jobs/${job.id}`}
                className="h-[36px] bg-blue-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
            Read More
            </Link>
            </div>
        </div>
        </div>
)}

export default Job