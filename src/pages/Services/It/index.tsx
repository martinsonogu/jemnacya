import React from 'react'
import AboutBg from '../../../assets/imgs/aboutBg.png'
import Header from '../../../components/SmallHeader'
import Title from '../../../components/Title'
import ITBigImg from '../../../assets/imgs/ItBigImg.png'
import Marker from '../../../components/Marker'
import ItSmImg1 from '../../../assets/imgs/ItSmImg(1).svg'
import ItSmImg2 from '../../../assets/imgs/ItSmImg(2).svg'
import ItMobileBanner from '../../../assets/imgs/ItMobile.svg'
import SmallItImg from '../../../assets/imgs/SmallItImg.svg'
import ItSmallImg1 from '../../../assets/imgs/ItSmallImg1.svg'
//import ItSmallImg2 from '../../../assets/imgs/ItSmallImg2.svg'
const It = () => {
  const innerDivStyle = {
    backgroundImage: `url(${AboutBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='w-full bg-primary_color_white px-10 mt-8'>
      <div className='mt-20'>
        <div className='hidden lg:block'>
        <div style={innerDivStyle} className='h-[372px] flex flex-col items-center justify-center'>
          <Header text='Services' className='font-semibold font-inter text-white' classNamecolor='border-[#4D4D4D] bg-[#4D4D4D]' />
          <Title className='w-[872px] mx-auto text-[55px] font-semibold text-center text-text_color_white'>IT Consultation</Title>
          </div>
        </div> 
        <img src={ItMobileBanner} alt="image" className='lg:hidden'/>
      </div>
      <div className='lg:mt-[113px] mt-[50px] lg:w-[900px] w-full mx-auto'>
        <div className=' h-[599px] hidden lg:block '>
          <img src={ITBigImg} alt="" className='rounded-lg' />
        </div>
        <img src={SmallItImg} alt="image" className='lg:hidden'/>
        <div className='mt-[66px]'>
          <Title className='font-montserrat font-extrabold lg:text-[32px] text-lg text-[#2F2F2F]'>
          Empowering Your Business with IT Solutions
          </Title>
          <p className='mt-[22px] font-montserrat font-normal lg:text-xl text-base text-[#808080] text-justify'>
          At JEMNACYA, we understand the critical role that IT plays in modern business operations. Our IT consultation services
            are designed to empower your business with cutting-edge technology solutions that drive efficiency, productivity, and growth
          </p>
          <p className='mt-[30px] font-montserrat font-normal lg:text-xl text-base text-[#808080]  text-justify'>
          Whether you need strategic guidance on IT infrastructure, assistance with web and mobile development, or expert advice
            on cybersecurity measures, our experienced consultants are here to help you navigate the complex world of technology.
          </p>
        </div>
        <div className='flex lg:flex-row flex-col items-center md:my-[50px] my-[20px] w-full'>
          <div className='md:w-1/2 w-full'>
            <Marker text='IT consulting & advisory' />
            <Marker text='Web development' />
            <Marker text='Mobile development' />
            <Marker text='Software testing and QA' />
          </div>
          <div className='md:w-1/2 w-full'>
            <Marker text='Database administration' />
            <Marker text='Data analytics' />
            <Marker text='Artificial intelligence' />
            <Marker text='Cybersecurity' />
          </div>
        </div>

        <div className=''>
          <p className='font-montserrat font-normal md:text-xl text-base text-[#808080] text-justify'>
          Our IT solutions are tailored to meet the specific needs and challenges of your business. From custom software development
          to cloud migration and IT infrastructure management, we offer comprehensive solutions that drive innovation and
            deliver tangible results.
          </p>
          <div className='lg:mt-[60px] mt-[30px] flex items-center justify-center w-full lg:justify-between'>
            <img src={ItSmImg1} alt="" className='rounded-lg hidden lg:block' />
            <img src={ItSmallImg1} alt="" className='rounded-lg lg:hidden' />
            <img src={ItSmImg2} alt="" className='rounded-lg  hidden lg:block' />
            {/* <img src={ItSmallImg2} alt="" className='rounded-lg lg:hidden' /> */}
          </div>

        </div>

        <div className='lg:mt-[60px] lg:mb-[100px] mt-[40px] mb-[50px]'>
          <h2 className='font-montserrat font-extrabold md:text-[40px] text-lg text-[#2F2F2F] text-left'>
          Our Working Proccess
          </h2>
          <p className='font-montserrat mt-[10px] font-normal md:text-xl text-base text-[#808080]  text-justify'>
          Our working process is collaborative, transparent, and results-driven. We start by gaining a deep understanding of
            your business goals and IT requirements, then develop tailored solutions that address your unique needs.
          </p>
          <p className='md:mt-[40px] mt-[10px] font-montserrat font-normal md:text-xl text-base text-[#808080] text-justify'>
          Throughout the process, we maintain open communication and provide regular updates to ensure that your project stays
            on track and delivers the desired outcomes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default It