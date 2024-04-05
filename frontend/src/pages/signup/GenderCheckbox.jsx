import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='genderbox'>
      <div className="form-control">
        <label>
          <span>Male</span>
        </label>
        <input type="checkbox"/>
      </div>
      <div className="form-control">
        <label>
          <span>Female</span>
        </label>
        <input type="checkbox"/>
      </div>
    </div>
  )
}

export default GenderCheckbox