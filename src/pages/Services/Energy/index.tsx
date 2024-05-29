
import AboutBg from '../../../assets/imgs/aboutBg.png'
import Header from '../../../components/SmallHeader'
import Title from '../../../components/Title'
import EnergyImg1 from '../../../assets/imgs/EnergyImg(1).svg'
import EnergyImg2 from '../../../assets/imgs/EnergyImg(2).svg'
import Marker from '../../../components/Marker'
import RealEstMobile from '../../../assets/imgs/RealEstMobile.svg'
import EnergyMobile from '../../../assets/imgs/EnergyMobile.svg'
import OilImg from '../../../assets/imgs/OilImg.svg'
import BulbImg from '../../../assets/imgs/bulb.svg'

const Energy = () => {
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
          <Title className='w-[872px] mx-auto text-[55px] font-semibold text-center text-text_color_white'>Energy</Title>
          </div>
        </div>
        <img src={RealEstMobile} alt="image" className='lg:hidden'/>
       </div>
      <div className='lg:mt-[113px] mt-[50px] lg:w-[900px] w-full mx-auto'>
        <div className=' h-[599px] hidden lg:block'>
          <img src={BulbImg} alt="" className='rounded-lg' />
        </div>
        <img src={EnergyMobile} alt="image" className='lg:hidden'/>
        <div className='mt-[66px]'>
          <Title className='font-montserrat font-extrabold lg:text-[32px] text-lg text-[#2F2F2F]'>
          Sustainable Energy Solutions for a Better Future
          </Title>
          <p className='mt-[22px] font-montserrat font-normal lg:text-xl text-base text-[#808080] text-justify'>
            At JEMNACYA, we are committed to providing sustainable energy solutions that meet the needs of today without
            compromising the needs of tomorrow. Our comprehensive range of services is designed to help you reduce your
            carbon footprint, lower your energy costs, and build a more resilient and sustainable future.
          </p>
          <p className='mt-[30px] font-montserrat lg:text-xl text-base text-[#808080] text-justify'>
            Whether you're looking to harness the power of renewable energy sources, optimize your energy usage, or streamline
            your energy management processes, our experienced team is here to guide you every step of the way..
          </p>
        </div>
        <div className='flex lg:flex-row flex-col items-center md:my-[50px] my-[20px] w-full'>
          <div className='md:w-1/2 w-full'>
            <Marker text='Energy Management' />
            <Marker text='Renewable Energy Solutions' />
            <Marker text='Energy Consulting'/>
          </div>
          <div className='md:w-1/2 w-full'>
            <Marker text='Energy Efficiency Solutions' />
            <Marker text='Solar Power Systems' />
            <Marker text='Wind Energy Solutions'/>
          </div>
        </div>

        <div className=''>
          <p className='font-montserrat font-normal md:text-xl text-base text-[#808080] text-justify'>
          Our energy solutions are aimed at promoting sustainability and efficiency in all aspects of your operations.
          Whether you're a small business or a large corporation, we offer tailored solutions to help you reduce costs,
          increase efficiency, and minimize environmental impact.
          </p>
          <div className='lg:mt-[60px] mt-[30px] flex items-center justify-center w-full lg:justify-between'>
            <img src={EnergyImg1} alt="" className='rounded-lg hidden lg:block' />
            <img src={OilImg} alt="" className='rounded-lg lg:hidden' />
            <img src={EnergyImg2} alt="" className='rounded-lg hidden lg:block'/>
          </div>
        </div>

        <div className='lg:mt-[60px] lg:mb-[100px] mt-[40px] mb-[50px]'>
          <h2 className='font-montserrat font-extrabold md:text-[40px] text-lg text-[#2F2F2F] text-left'>
          Our Working Proccess
          </h2>
          <p className='font-montserrat mt-[10px] font-normal md:text-xl text-base text-[#808080] text-justify'>
          Our working process is centered around collaboration, innovation, and sustainability. We start by understanding
            your unique needs and challenges, then develop customized solutions to address them. Throughout the process,
            we prioritize transparency, communication, and accountability to ensure the best possible outcomes for your organization.
          </p>
          <p className='md:mt-[40px] mt-[10px] font-montserrat font-normal md:text-xl text-base text-[#808080] text-justify'>
          Contact us today to learn more about how we can help you achieve your energy goals and build a brighter, more sustainable future.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Energy