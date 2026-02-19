import React from 'react'

const Job = ({job}) => {
    const {logo}=job;
  return (
    <div>
        <img src={logo} alt="Company Logo" />
    </div>
  )
}

export default Job