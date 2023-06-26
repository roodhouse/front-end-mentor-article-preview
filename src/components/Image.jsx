import React from 'react'
import Drawers from '../images/drawers.jpg'

function Image() {
  return (
    <>
    <div id='imageContainer' className='relative overflow-hidden h-[215px] xl:w-[285px] xl:h-[280px]'>
        <img src={Drawers} alt='Drawers' className='rounded-[10px_10px_0px_0px] xl:h-full xl:rounded-[10px_0px_0px_10px]'/>
    </div>
    </>
  )
}

export default Image