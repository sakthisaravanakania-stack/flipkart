import React from 'react'
import PhoneImg from './phone.jpeg'

const Phone = () => {
  return (
      <div className='phone'>
          <h2>Smartphones for Everyone <i class="fa-solid fa-tag"></i></h2>
          <h4>Explore the Latest Smartphones at Best Prices <i class="fa-solid fa-wand-sparkles"></i></h4>
          <img src={PhoneImg} alt={PhoneImg} />
      
    </div>
  )
}

export default Phone
