import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    const {id,logo,job_title,company_name,location,remote_or_onsite,salary,job_type}=job;
  return (
    <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className="text-sm">{company_name}</p>
    <div  className=''>
        <button className="px-5 py-2 font-extrabold border-[1px] rounded-[4px] border-[#7E90FE] mr-4 text-[1rem] text-[#7E90FE]">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border-[1px] rounded-[4px] border-[#7E90FE]  text-[#7E90FE] text-[1rem]">{job_type}</button>
    </div>
    <div className='mt-4 flex'>
      <h2 className='flex'><IoLocationOutline className='text-[1.5rem] mr-2'></IoLocationOutline>{location}</h2>
      <h2 className='flex ml-6'><HiOutlineCurrencyDollar className='text-[1.5rem] mr-2'></HiOutlineCurrencyDollar>Salary : {salary}</h2>
    </div>
    
    <div className="card-actions">
      <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
      
    </div>
  </div>
</div>
  )
}

export default Job