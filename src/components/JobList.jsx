import React from 'react'
import Job from './Job';
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Spinner from './Spinner';
const JobList = ({isHome=false}) => {
    // console.log(jobs);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
        const fetchJobs = async () => {
          try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setJobs(data);
          } catch(err){
            console.error("Error fetching data: ",err);
          } finally {
            setLoading(false);
            console.log("Fetch completed.")
          }
        }
        fetchJobs();
    }, []);
    const recentJobs = isHome ? jobs.slice(0, 3): jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Jobs"}
        </h2>
          {loading ? (<Spinner loading={loading} />):
          (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map((job, index) => (
                <Job key={job.id} job={job} />
            ))}
            </div>
          )}
      </div>
    </section>
  )
}

export default JobList