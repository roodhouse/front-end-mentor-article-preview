import React from 'react'
import Drawers from '../images/drawers.jpg'

function Image() {
  return (
    <>
    <div id='imageContainer' className='relative overflow-hidden h-[215px]'>
        <img src={Drawers} alt='Drawers' className='rounded-[10px_10px_0px_0px]'/>
    </div>
    </>
  )
}

export default Image