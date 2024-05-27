import React from 'react'
import AboutBg from '../../assets/imgs/aboutBg.png'
import Header from '../../components/SmallHeader'
import Title from '../../components/Title'
import AboutImg from '../../assets/imgs/about1.jpg'
import AboutImg2 from '../../assets/imgs/about2.jpg'
import Button from '../../components/Button'
import Services from '../Home/Services'
import ColouredBg from '../../assets/icons/coloured.svg'
import BlackWomanImg from '../../assets/imgs/BlackWoman.png'
import AboutUsSmallImg from '../../assets/imgs/AboutUsSmallImg.svg'
import { Link } from 'react-router-dom'
import { REGULAR_PATHS } from "../../routes/paths";
const AboutUs = () => {

  const innerDivStyle = {
    backgroundImage: `url(${AboutBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const colouredDivStyle = {
    backgroundImage: `url(${ColouredBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div className='w-full bg-primary_color_white px-10 mt-8'>
      <div className=' mt-20'>
        <div className='hidden lg:block'>
        <div style={innerDivStyle} className=' h-[372px] flex flex-col items-center justify-center'>
          <Header text='About Us' className='font-semibold font-inter text-white' classNamecolor='border-[#4D4D4D] bg-[#4D4D4D]' />
          <Title className='w-[872px] mx-auto text-[55px] font-semibold text-center text-text_color_white'>Get to Know Us: Your Trusted Partner in IT, Real Estate, and Energy Solutions</Title>
          </div>
        </div>
        <div className='lg:hidden flex items-center justify-center'>
          <img src={AboutUsSmallImg} alt="image" />
          </div>  
      </div>
      <div className='lg:mt-[148px] flex lg:flex-row items-start lg:justify-between flex-col-reverse '>
        <div className='lg:w-[51%] '>
          <img src={AboutImg} alt="" className='rounded-xl' />
          <div className='mt-[27px] flex items-center justify-between '>
            <div className='hidden lg:block'>
            <div className='h-[170px] w-[258px] bg-primary_color rounded-xl flex flex-col items-center justify-center '>
              <p className='text-text_color_white font-extrabold text-[50px] font-montserrat '>100K</p>
              <p className='text-text_color_white text-[20px] font-montserrat font-bold'>Daily Active Users</p>
              </div>
              </div>
            <img src={AboutImg2} alt="" className='rounded-xl h-[170px]'/>
          </div>
        </div>
        <div className='lg:w-[41%] mb-8 lg:mb-0'>
          <Title className='hidden lg:block text-[50px] font-montserrat font-semibold '>We're on a mission to bring ideas to life.</Title>
          <div className='lg:mt-[45px] mt-[20px] flex flex-col items-center justify-center lg:items-start lg:justify-start'>
            <Header text='Our Vision' className='text-primary_color text-xl font-montserrat'/>
            <p className='font-montserrat lg:text-xl text-lg text-text_color lg:text-left text-justify mt-2'>To pioneer innovative solutions in IT, real estate, and energy sectors, driving sustainable growth and
              prosperity for our clients and communities.
            </p>
          </div>
          <div className='lg:mt-[63px] mt-[25px] flex flex-col items-center justify-center lg:items-start lg:justify-start'>
            <Header text='Our Mission' className='text-primary_color text-xl font-montserrat'/>
            <p className='font-montserrat lg:text-xl text-lg text-text_color lg:text-left text-justify mt-2'>To deliver exceptional services
              tailored to our clients' needs, leveraging expertise and technology to achieve tangible results and
              foster lasting partnerships.
            </p>
          </div>
          <Link to={REGULAR_PATHS.SERVICES}>
            <Button text='View Our Services' className='bg-primary_color hidden lg:block text-white w-[200px] lg:mt-16 h-[55px] rounded-sm font-semibold text-[18px]' />
            </Link>
        </div>
      </div>
      <div className='lg:mt-[148px] mt-5'>
        <Services/>
      </div>
      {/* For large screen screens */}
      <div className='hidden lg:block'>
      <div className='my-[148px] flex items-center justify-center w-full h-[419px] bg-[#C4C4C4]'>
        <div className='w-1/2 bg-[#C4C4C4] pt-[52px] pl-[90px]'>
          <p className='mb-3 font-montserrat text-[40px] font-semibold text-black text-left'>Join a global team of change makers</p>
          <p className='mb-[28px] w-[488px] text-left text-[18px] font-medium text-text_color'>Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam
            posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.
            </p>
            <Link to={REGULAR_PATHS.SERVICES}>
              <Button text="Contact Us" className='bg-primary_color h-[55px] w-[150px] text-text_color_white font-montserrat text-[18px] font-semibold mt-[30px] rounded-sm' />
            </Link>
        </div>
        <div className='w-1/2 rounded-lg h-full flex items-center justify-center' style={colouredDivStyle}>
          <img src={BlackWomanImg} alt="" />
        </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs