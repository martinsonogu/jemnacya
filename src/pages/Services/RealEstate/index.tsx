
import AboutBg from '../../../assets/imgs/aboutBg.png'
import Header from '../../../components/SmallHeader'
import Title from '../../../components/Title'
import Marker from '../../../components/Marker'
import RealEsBg from '../../../assets/imgs/RealEsBg.svg'
import RealEsImg1 from '../../../assets/imgs/RealEs(1).svg'
import RealEsImg2 from '../../../assets/imgs/RealEs(2).svg'
import RealEstMobile from '../../../assets/imgs/RealEstMobile.svg'
import RealEstImgMob from '../../../assets/imgs/RealEstImgMob.svg' 
import RealEstImg1 from '../../../assets/imgs/RealEstImg1.svg'

const RealEstate = () => {
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
            <Title className='w-[872px] mx-auto text-[55px] font-semibold text-center text-text_color_white'>Real Estate</Title>
            </div>
          </div>
        <img src={RealEstMobile} alt="image" className='lg:hidden'/>
       </div>
      <div className='lg:mt-[113px] mt-[50px] lg:w-[900px] w-full mx-auto'>
        <div className=' h-[599px] hidden lg:block '>
          <img src={RealEsBg} alt="" className='rounded-lg' />
        </div>
        <img src={RealEstImgMob} alt="image" className='lg:hidden'/>
        <div className='mt-[66px]'>
          <Title className='font-montserrat font-extrabold lg:text-[32px] text-lg text-[#2F2F2F]'>
          Tailored Real Estate Solutions for Every Need
          </Title>
          <p className='mt-[22px] font-montserrat font-normal lg:text-xl text-base text-[#808080] text-justify'>
            At Jemnacya, we understand that real estate decisions are among the most important you will make. Our comprehensive
            services are designed to support you through every phase of the real estate process, ensuring you achieve your goals
            with confidence. Whether you're buying your first home, expanding your investment portfolio, or seeking strategic
            property management solutions, we are dedicated to providing expert guidance and personalized service tailored to
            your unique needs.
          </p>
          <p className='mt-[30px] font-montserrat font-normal lg:text-xl text-base text-[#808080] text-justify'>
            Whether you are looking to buy your dream home, invest in commercial properties, or manage your existing assets, our
            experienced team is here to provide expert guidance and personalized service every step of the way.
          </p>
        </div>
        <div className='flex lg:flex-row flex-col items-center md:my-[50px] my-[20px] w-full'>
          <div className='md:w-1/2 w-full'>
            <Marker text='Residential Sales' />
            <Marker text='Commercial Properties' />
            <Marker text='Real Estate Investment'/>
          </div>
          <div className='md:w-1/2 w-full'>
            <Marker text='Property Management' />
            <Marker text='Real Estate Development' />
            <Marker text='Real Estate Consulting'/>
          </div>
        </div>

        <div className=''>
          <p className='font-montserrat font-normal md:text-xl text-base text-[#808080]  text-justify'>
            Our real estate services are backed by a deep understanding of the market and a commitment to excellence.
            We pride ourselves on delivering results that exceed expectations, ensuring that your investments are both
            profitable and sustainable
          </p>
          <div className='lg:mt-[60px] mt-[30px] flex items-center justify-center w-full lg:justify-between'>
            <img src={RealEsImg1} alt="" className='rounded-lg hidden lg:block' />
            <img src={RealEstImg1} alt="" className='rounded-lg lg:hidden' />
            <img src={RealEsImg2} alt="" className='rounded-lg hidden lg:block'/>
          </div>

        </div>

        <div className='lg:mt-[60px] lg:mb-[100px] mt-[40px] mb-[50px]'>
          <h2 className='font-montserrat font-extrabold md:text-[40px] text-lg text-[#2F2F2F] text-left'>
          Our Working Proccess
          </h2>
          <p className='font-montserrat mt-[10px] font-normal md:text-xl text-base text-[#808080] text-justify'>
            Our approach to real estate is comprehensive and client-focused. From the initial consultation to the final
            transaction, we ensure every detail is meticulously handled. We start by understanding your unique needs and
            objectives, followed by thorough market research and strategic planning.
          </p>
          <p className='md:mt-[40px] mt-[10px] font-montserrat font-normal md:text-xl text-base text-[#808080] text-justify'>
            With our extensive network and market expertise, we navigate the complexities of real estate transactions seamlessly.
            Our goal is to provide you with peace of mind and optimal results, whether you are buying, selling, investing, or
            managing properties.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RealEstate