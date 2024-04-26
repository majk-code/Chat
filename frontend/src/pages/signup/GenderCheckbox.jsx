import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='genderbox'>
      <div className="form-control">
        <label>
          <span>Mężczyzna</span>
        </label>
        <input type="checkbox"
          checked = {selectedGender === 'male'}
          onChange={()=> onCheckboxChange("male")}  
        />
      </div>
      <div className="form-control">
        <label>
          <span>Kobieta</span>
        </label>
        <input type="checkbox"
          checked = {selectedGender === 'female'}
          onChange={()=> onCheckboxChange("female")}  
        />
      </div>
    </div>
  )
}

export default GenderCheckbox