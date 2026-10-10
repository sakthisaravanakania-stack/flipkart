import React from 'react'

const Input = () => {
  return (
      <div className='input'>
          <input type="text" placeholder='Search for products,Brands and More' />
          <div className='input-content'>
          <h5><i class="fa-regular fa-circle-user"></i>   Login  <i class="fa-solid fa-angle-down"></i></h5>
          <h5>More  <i class="fa-solid fa-angle-down"></i></h5>
          <h5><i class="fa-solid fa-cart-shopping"></i>  Cart</h5>
          </div>
    </div>
  )
}

export default Input