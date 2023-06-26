import React from 'react'
import Oval from '../images/avatar-michelle.jpg'
import Icon from '../images/icon-share.svg'

// standard view
// clicked view

function Share() {
  return (
    <>
        <div id="oval" className='w-[40px] h-[40px] rounded-[40px] mr-4'>
            <img src={Oval} alt="Oval" className='rounded-[40px]'/>
        </div>
        <div id="details" className='text-left mr-[59px]'>
            <div id="name" className='text-[13px] leading-[20px] font-bold font-["Manrope"] tracking-[0.122px] text-darkBlue'>
                <p>Michelle Appleton</p>
            </div>
            <div id="date" className='text-[13px] leading-[20px] font-medium font-["Manrope"] tracking-[0.122px] text-lightBlue'>
                <p>28 Jun 2020</p>
            </div>
        </div>
        <div id='icon'>
            <img src={Icon} alt="Icon" />
        </div>
    </>
  )
}

export default Share