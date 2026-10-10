import React from 'react'
import WomenImage from './womens.jpeg'

const Womens = () => {
  return (
      <div className='womens'>
          <h2>Discover the Latest Women's Dresses <i class="fa-solid fa-bolt"></i></h2>
          <h4><i class="fa-brands fa-stack-overflow"></i> Trendy Styles,Beautiful Designs & Amazing Offers</h4>
      <img src={WomenImage} alt={WomenImage} />
    </div>
  )
}

export default Womens
