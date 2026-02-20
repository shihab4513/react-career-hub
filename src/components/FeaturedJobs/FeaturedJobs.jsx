import React, { useEffect, useState } from 'react'
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);

    // This is not the best way to show all data. We will learn the best way later. For now, we will show all data in this way.
    const [dataLength,setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
  return (
    <div>
        <div className='text-center'>
            <h2 className='text-[3rem] font-extrabold'>Featured Jobs : {jobs.length}</h2>
            <p className='text-[1rem] font-medium ' >Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='grid grid-cols-2 gap-6'>
            {jobs.slice(0, dataLength).map(job=> <Job key={job.id} job={job}></Job>)
            }
        </div>
        <div className={`text-center mt-6 ${dataLength === jobs.length ? 'hidden' : ''}`}>
            <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
        </div>
    </div>
  )
}

export default FeaturedJobs