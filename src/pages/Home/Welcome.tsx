import React from 'react'
import CheckIcon from '../../assets/icons/checkIcon.svg'
import Icon1 from '../../assets/icons/icon1.svg'
import Icon2 from '../../assets/icons/icon2.svg'
import Image1 from '../../assets/imgs/Image1.svg'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Header from '../../components/SmallHeader'
import { Link } from "react-router-dom";
import { REGULAR_PATHS } from '../../routes/paths'
const Welcome = () => {
  return (
      <div className='w-full  lg:mt-20 mt-10'>
        <div className='flex flex-col-reverse lg:flex-row lg:items-end'>
            <div className='lg:w-[523px] flex flex-col  lg:mr-[94px] items-center bg-[#F4F4F4] p-8 lg:bg-transparent lg:p-0'>
              <img src={Image1} alt="" className='lg:w-[408px] lg:h-[446px]' />
              <h6 className='text-header_color_black font-medium lg:text-3xl text-2xl my-2 lg:text-left font-poppins md:px-12 text-center'>
              Experience the Difference: Tailored Solutions, Maximum Results
              </h6>
              <p className='font-normal text-lg text-text_color text-left lg:w-[424px] font-inter'>
              Discover how our forward-thinking approach and cutting-edge solutions
              set us apart in delivering exceptional results for your needs.
              </p>
            </div>
        <div className=''>
          <div className='w-full flex items-center justify-center lg:justify-start'>
          <Header text="Welcome Jemnacya"/>
          </div>
            <Title className='lg:text-4xl text-[2xl]  font-semibold font-montserrat lg:w-[505px] text-center lg:text-left mt-4 mb-7'>Who We Are: Crafting Success through Innovation and Integrity</Title>
            <p className='lg:w-[573px] text-justify lg:text-left text-text_color text-lg font-montserrat mb-7'>At Jemnacya, we're your go-to experts for IT, real estate, and energy solutions. With years of experience and a passion
               for innovation, we're dedicated to delivering top-notch service tailored to your needs. From tech optimization to property
                acquisition and sustainable energy initiatives, we've got the expertise to drive your success. Learn more about our 
                journey and the passionate team behind it all."</p>
            <div className='lg:mb-6 mb-10 flex items-start flex-col'>
              <div className='flex items-center gap-3 lg:mb-6 mb-2'>
              <img src={CheckIcon} alt="CheckIcon" />
              <p className='lg:text-xl text-lg font-montserrat font-normal text-header_color_black lg:ml-2'>IT Consultation</p>
              </div>
              <div className='flex items-center gap-3 lg:mb-6 mb-2'>
              <img src={CheckIcon} alt="CheckIcon" />
              <p className='lg:text-xl text-lg font-montserrat font-normal text-header_color_black lg:ml-2'>Real Estate Expertise</p>
              </div>
              <div className='flex items-center gap-3'>
              <img src={CheckIcon} alt="CheckIcon" />
              <p className='lg:text-xl text-lg font-montserrat font-normal text-header_color_black lg:ml-2'>Energy</p>
              </div>
          </div>
          <div className='hidden lg:block'>
          <div className='flex items-center'>
              <div className='border border-[#E3E3E3] w-[302px] h-[134px] flex items-center justify-center px-5 mr-5'>
                <img src={Icon1} alt="icon1" />
                <div className='ml-5 flex flex-col items-start'>
                  <h5 className='font-montserrat font-medium text-xl text-header_color_black'>6 Years Experience</h5>
                  <p className='font-montserrat font-normal text-lg text-text_color text-left'>We bring seasoned expertise to every project.</p>
                </div>
              </div>
              <div className='border border-[#E3E3E3] w-[302px] h-[134px] flex items-center justify-center px-5'>
                <img src={Icon2} alt="icon2" />
                <div className='ml-5 flex flex-col items-start'>
                  <h5 className='font-montserrat font-medium text-xl text-header_color_black'>Awards Winner</h5>
                  <p className='font-montserrat font-normal text-lg text-text_color text-left'>Celebrating Excellence and Recognition.</p>
                </div>
              </div>
          </div>

          </div>
            
          <div className='hidden lg:block '>
          <Link to={REGULAR_PATHS.ABOUT}> 
              <Button text='More About Us' className='font-montserrat mt-[25px] w-[193px] h-[65px] py-3 px-7 text-white bg-primary_color lg:flex items-center justify-center font-medium text-lg leading-6 rounded-sm' />
          </Link>
          </div>
            </div>
        </div>
      </div>
  )
}

export default Welcome