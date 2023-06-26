import React from 'react'
import Oval from '../images/avatar-michelle.jpg'
import Icon from '../images/icon-share.svg'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'
import ClickedIcon from '../images/icon-share-clicked.svg'

function Share() {

    // click on normal view
    function handleClick(e) {
        // grab the div containing all the info
        const hideDiv = e.target.parentElement.parentElement.parentElement
        // grab the hidden div
        const showDiv = hideDiv.nextSibling
        // change the div with all info to display none
        hideDiv.style.display = 'none';
        // change the hidden div to display flex
        showDiv.style.display = 'flex';
    }

    // click on share view
    function handleClickClicked(e) {
        // grab the clicked div
        const hideDiv = e.target.parentElement.parentElement.parentElement
        // grab the hidden div
        const showDiv = hideDiv.previousSibling;
        // change the shown div to display none
        hideDiv.style.display = 'none';
        // change the hidden div to display flex
        showDiv.style.display = 'flex';
    }

  return (
    <>
        <div id='normal' className='flex items-center justify-between px-8 py-4'>
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
            <div id='icon' onClick={handleClick} className='w-[32px] h-[32px] flex justify-center items-center rounded-[50%] bg-offWhite'>
                <div id='iconContainer'>
                    <img src={Icon} alt="Icon" />
                </div>
            </div>
        </div>
        <div id='clicked' className='hidden flex items-center justify-between bg-darkBlue rounded-[0px_0px_10px_10px] px-8 py-4'>
            <div id="shareDiv" className='text-[13px] leading-[20px] font-medium font-["Manrope"] tracking-[5px] text-lightBlue'>
                <p>SHARE</p>
            </div>
            <div id="social" className='flex w-[92px] justify-between ml-[21px] mr-[56px]'>
                <div id="facebook" className=''>
                    <img src={Facebook} alt="Facebook" />
                </div>
                <div id="twitter" className=''>
                    <img src={Twitter} alt="Twitter" />
                </div>
                <div id="pinterest" className=''>
                    <img src={Pinterest} alt="Pinterest" />
                </div>
            </div>
            <div id='iconClicked' onClick={handleClickClicked} className='w-[32px] h-[32px] flex justify-center items-center rounded-[50%] bg-medBlue'>
                <div id='iconClickedContainer'>
                    <img src={ClickedIcon} alt="Clicked Icon" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Share