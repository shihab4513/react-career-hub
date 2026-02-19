import React from 'react'

const Job = ({job}) => {
    const {logo,job_title,company_name,location,remote_or_onsite,salary,job_type}=job;
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
        <button className="px-5 py-2 font-extrabold border-[1px] rounded-[4px] border-[#7E90FE]  text-[#7E90FE]">{job_type}</button>
    </div>
    <p className="text-sm">{location}</p>
    <p className="text-sm">{remote_or_onsite}</p>
    <p className="text-sm">{salary}</p>
    <p className="text-sm">{job_type}</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
  )
}

export default Job