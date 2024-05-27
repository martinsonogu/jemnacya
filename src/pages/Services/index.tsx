import React from 'react'
import AboutBg from '../../assets/imgs/aboutBg.png'
import Header from '../../components/SmallHeader'
import Title from '../../components/Title'
import ItImg from '../../assets/imgs/It.png'
import EnergyImg from '../../assets/imgs/Energy.png'
import EstateImg from '../../assets/imgs/Estate.png'
import Button from '../../components/Button'
import BlackWomanImg from '../../assets/imgs/BlackWoman.png'
import ColouredBg from '../../assets/icons/coloured.svg'
import { Link } from 'react-router-dom'
import { REGULAR_PATHS } from "../../routes/paths";
import ServicesSmallImg from '../../assets/imgs/ServicesSmallImg.svg'
import SmallItImg from '../../assets/imgs/SmallItImg.svg'
// import SmallRealEsImg from '../../assets/imgs/SmallRealEsImg.svg'
// import SmallEnegyImg from '../..//assets/imgs/SmallEnergyImg.svg'

const Services = () => {
  const { IT_CONSULTATION, REAL_ESTATE, ENERGY, CONTACT } = REGULAR_PATHS;
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
      <div className='mt-20'>
        <div className='hidden lg:block'>
          <div style={innerDivStyle} className='h-[372px] flex flex-col items-center justify-center'>
            <Header text='Our Services' className='font-semibold font-inter text-white' classNamecolor='border-[#4D4D4D] bg-[#4D4D4D]' />
            <Title className='w-[872px] mx-auto text-[55px] font-semibold text-center text-text_color_white'>Discover Our Comprehensive Range of Expert Services</Title>
          </div>
        </div>
        <img src={ServicesSmallImg} alt="image" className='lg:hidden'/>
      </div>
      <div className='w-full lg:mt-[160px] mt-[70px]'>
          <div className='flex flex-col items-center'>
          <Title className='text-header_color_black font-montserrat lg:text-[40px] text-2xl text-center'>We Provide  Professional <br/>
            Business Solutions.
            </Title>
          <p className='mt-[45px] lg:w-[1000px] w-full text-justify lg:text-center lg:mx-auto font-montserrat text-header_color_black font-medium lg:text-2xl text-lg'>
          At JEMNACYA Services Limited, we offer a comprehensive range of tailored solutions to meet
           your needs. From IT consultation and real estate services to energy management and beyond,
            we're committed to delivering excellence in every aspect of our work. Explore our services
             to discover how we can empower your business to thrive.
          </p>
          </div> 
      </div>
      {/* {item version1} */}
      <div className='hidden lg:block'>
        <div className='w-full mt-[70px] h-[403px] flex items-start justify-center'>
          <div className='w-1/2 rounded-lg h-full'>
            <img src={ItImg} alt="" className='rounded-lg' />
          </div>
          <div className='w-1/2 ml-16'>
            <h2 className='text-left font-montserrat font-semibold text-[22px] mb-6'>1. IT Consultancy</h2>
            <p className='text-left font-montserrat font-normal text-lg text-[#424242] mb-2'>Data is your most valuable asset.But only if you make the most of it.</p>
            <p className='text-left font-montserrat font-normal text-lg text-[#424242] leading-loose'>AFQ Tech data scientists and analysts are skilled at mining, modeling, and
              extracting value from data. Sourced from a range of sectors and with hands-on
              experience, they put you in charge and draw on the best knowledge and expertise
              to help you navigate your way forward.
            </p>
            <Link to={IT_CONSULTATION}>
              <Button text='Read more' className='w-[139px] h-[55px] text-text_color_white font-montserrat bg-primary_color rounded-sm mt-[35px]' />
            </Link>
          </div>
        </div>
      </div>
        {/* for Mobile View */}
      <div className='lg:hidden'>
        <div className='flex flex-col items-center justify-center w-full mt-[70px]'>
          <img src={SmallItImg} alt="" className='rounded-lg z-10' />
          <div className='bg-[#F5F5F5] mt-[-15px] pb-16 rounded-lg'>
            <h3 className='mt-[50px] text-lg font-montserrat font-bold'>IT Consultancy</h3>
            <p className='px-3 text-justify mt-[20px] font-montserrat font-normal text-sm text-[#424242]'>AFQ Tech data scientists and analysts are skilled at mining, modeling, and
                extracting value from data. Sourced from a range of sectors and with hands-on
                experience, they put you in charge and draw on the best knowledge and expertise
                to help you navigate your way forward.
            </p>
          </div>
          <Link to={IT_CONSULTATION}>
              <Button text='Read more' className='w-[139px] h-[55px] text-text_color_white font-montserrat bg-primary_color rounded-sm mt-[-25%]' />
          </Link>

        </div>

      </div>

      {/* {item version2} */}
      <div className='hidden lg:block'>
      <div className='w-full mt-[160px]  h-[403px] flex items-start justify-center'>
        <div className='w-1/2 mr-16'>
          <h2 className='text-left font-montserrat font-semibold text-[22px] mb-6'>2. Real Estate</h2>
          <p className='text-left font-montserrat font-normal text-lg text-[#424242] leading-loose py-2 mb-2'>
            From automation to advanced analytics and seamless experiences, we can embed AI in business.
            We'll deliver new operating models and strategic intelligence for smart processes and data-driven
            decisions.
          </p>
          <p className='text-left font-montserrat font-normal text-lg text-[#424242] '>What, Why and How?</p>
          <Link to={REAL_ESTATE}>
            <Button text='Read more' className='w-[139px] h-[55px] text-text_color_white font-montserrat bg-primary_color rounded-sm mt-[80px]' />
          </Link>
        </div>
        <div className='w-1/2 rounded-lg h-full'>
          <img src={EstateImg} alt="" className='rounded-lg' />
        </div>
        </div>
        </div>
      {/* for Mobile View */}
      <div className='lg:hidden'>
        <div className='flex flex-col items-center justify-center w-full mt-[80px]'>
          <img src={SmallItImg} alt="" className='rounded-lg z-10' />
          <div className='bg-[#F5F5F5] mt-[-15px] pb-16 rounded-lg'>
            <h3 className='mt-[50px] text-lg font-montserrat font-bold'>Real Estate</h3>
            <p className='px-3 text-justify mt-[20px] font-montserrat font-normal text-sm text-[#424242]'>AFQ Tech data scientists and analysts are skilled at mining, modeling, and
                extracting value from data. Sourced from a range of sectors and with hands-on
                experience, they put you in charge and draw on the best knowledge and expertise
                to help you navigate your way forward.
            </p>
          </div>
          <Link to={REAL_ESTATE}>
              <Button text='Read more' className='w-[139px] h-[55px] text-text_color_white font-montserrat bg-primary_color rounded-sm mt-[-25%]' />
          </Link>

        </div>
      </div>

      {/* {item version3} */}
      <div className='hidden lg:block'>
      <div className='w-full mt-[160px]  h-[403px] flex items-start justify-center'>
        <div className='w-1/2 rounded-lg h-full'>
          <img src={EnergyImg} alt="" className='rounded-lg' />
        </div>
        <div className='w-1/2 ml-16'>
          <h2 className='text-left font-montserrat font-semibold text-[22px] mb-6'>3. Energy Services</h2>
          <p className='text-left font-montserrat font-normal text-lg text-[#424242] leading-loose mb-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
           has been the industry's standard dummy text ever since the 1500s, when an
          </p>
          <p className='text-left font-montserrat font-normal text-lg text-[#424242] leading-loose'>
          Type and scrambled it to make a type specimen book. It has survived not only five centu
          </p>
          <Link to={ENERGY}>
            <Button text='Read more' className='w-[139px] h-[55px] bg-primary_color text-text_color_white font-montserrat rounded-sm mt-[85px]' />
          </Link>
        </div>
        </div>
        </div>
      {/* for Mobile View */}
      <div className='lg:hidden'>
        <div className='flex flex-col items-center justify-center w-full my-[80px]'>
          <img src={SmallItImg} alt="" className='rounded-lg z-10' />
          <div className='bg-[#F5F5F5] mt-[-15px] pb-16 rounded-lg'>
            <h3 className='mt-[50px] text-lg font-montserrat font-bold'>Energy Services</h3>
            <p className='px-3 text-justify mt-[20px] font-montserrat font-normal text-sm text-[#424242]'>AFQ Tech data scientists and analysts are skilled at mining, modeling, and
                extracting value from data. Sourced from a range of sectors and with hands-on
                experience, they put you in charge and draw on the best knowledge and expertise
                to help you navigate your way forward.
            </p>
          </div>
          <Link to={ENERGY}>
              <Button text='Read more' className='w-[139px] h-[55px] text-text_color_white font-montserrat bg-primary_color rounded-sm mt-[-25%]' />
          </Link>

        </div>

      </div>
      {/* {Contact Us} */}
      <div className='hidden lg:block'>
        <div className='my-[148px] flex items-center justify-center w-full h-[419px] bg-[#C4C4C4]'>
        <div className='w-1/2 bg-[#C4C4C4] pt-[52px] pl-[90px]'>
          <p className='mb-3 font-montserrat text-[40px] font-semibold text-black text-left'>Join a global team of change makers</p>
          <p className='mb-[28px] w-[488px] text-left text-[18px] font-medium text-text_color'>Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam
            posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.
            </p>
            <Link to={CONTACT}>
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

export default Services