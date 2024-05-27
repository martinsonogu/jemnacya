import React from 'react'
import Button from '../../components/Button'
import Photo from '../../assets/imgs/Photo.png'
import SmallImg from '../../assets/imgs/SmallImgCont.png'
import { Link } from "react-router-dom";
import { REGULAR_PATHS } from '../../routes/paths'
const Contact = () => {
  return (
    <div className='mt-20 w-full flex flex-col items-center justify-center'>
        <div className='w-full h-[452px]' style={{ background: 'linear-gradient(180deg, #18B8A5 0%, rgba(55, 57, 63, 0.83) 100%)' }}>
          <div className='lg:px-[170px] lg:pt-[117px] flex items-center justify-center py-10 flex-col lg:flex-row lg:justify-between'>
            <p className='lg:w-[500px] text-left font-montserrat lg:text-[32px] text-[18px] font-extrabold text-text_color_white px-4 lg:px-0'>
              Reach out with any questions or project needs - our team is ready to assist.
              <span className='block font-montserrat font-semibold text-[13px] mt-5 lg:mt-[-5px]'>We're here for you</span>
          </p>
          <Link to={REGULAR_PATHS.CONTACT}>
            <Button text='Contact Us' className='w-[148px] h-[52px] mt-10 lg:mt-0 bg-white text-base font-medium rounded-md font-montserrat text-[#2F2F2F] ' />
          </Link>
          </div>
        </div>
        <div className='lg:h-[457px] lg:w-[919px] w-full rounded-lg mt-[-150px] mx-auto '>
        <div className='hidden lg:block'>
          <img src={Photo} alt="Large Image" className='w-full h-full rounded-lg' />
        </div>
        <div className='lg:hidden flex items-center justify-center'>
          <img src={SmallImg} alt="Small Image" className='w-[338px] h-[342px] rounded-lg' />
      </div>
        
        </div>
    </div>
  )
}

export default Contact
