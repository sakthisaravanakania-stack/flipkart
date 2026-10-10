import React from 'react'
import WatchImg from './watch.jpeg'


const Watch = () => {
  return (
      <div className='watch'>
          <h2>Discover Premium Smartwatches at Exclusive Prices <i class="fa-solid fa-web-awesome"></i></h2>
          <h4>Smart Watches for Everyone  <i class="fa-solid fa-hand-peace"></i><i class="fa-solid fa-face-laugh-wink"></i></h4>
          <img src={WatchImg} alt={WatchImg} />
         
    </div>
  )
}

export default Watch