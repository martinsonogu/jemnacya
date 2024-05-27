
import BGImage from '../../assets/imgs/Bitmap.svg'
import Title from '../../components/Title'
import Button from '../../components/Button'
import HeroSmImg from '../../assets/imgs/HeroSmImg.svg'
import { Link } from "react-router-dom";
import { REGULAR_PATHS } from '../../routes/paths'
const Hero = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 0.5) 45%, rgba(255, 255, 255, 0) 70%)',
    width: '100%',
    height: '100%'
  };
  return (
    <div className='w-full mt-[64px]'>
      <div className='hidden lg:block'>
        <div className='parent w-[100%] flex justify-between h-screen bg-white relative ml-8'>
          <div className='left w-[25%] bg-slate-300  '>
            
          </div>
          <div className='right flex items-start justify-end w-[75%]'>
          <img src={BGImage} alt="backgroundImage" className='w-full h-screen' />
          </div>
          <div className='absolute h-full w-full'>
            <div style={gradientStyle}>
           </div>
          </div>
          <div className='absolute w-[740px] left-2 top-[22%]  z-10 '  >
              <Title >
              Innovate. Invest. Energize: Your Trusted Partner for IT, Real Estate, and <span className='py-[0px] px-5 bg-primary_color rounded-md text-primary_color_white font-normal font-bellefair'>Energy solutions</span>
              </Title>
              <div className='mt-[85px] font-medium text-[#37393F] text-xl text-left font-montserrat '>
                <p className=''>
                Discover expert solutions for IT, real estate, and energy needs. From optimizing tech infrastructure
                to finding dream properties and sustainable energy initiatives, we're here for you. Our dedicated team 
                delivers tailored solutions driving efficiency and maximizing value, empowering your success. Explore 
                how we can elevate your business today.
                </p>
              </div>
              <Link to={REGULAR_PATHS.ABOUT}>
              <Button className=" font-montserrat mt-[45px] w-42 h-12 py-3 px-7 text-white bg-primary_color lg:flex items-center justify-center font-medium text-lg leading-6 rounded-sm"
                  text='Learn More' />
              </Link>
          </div>
        </div>
      </div>
      {/* for small devices */}
      <div className='lg:hidden'>
        <div className='flex calc(100vh-6rem) flex-col pt-5'>
          <img src={HeroSmImg} alt="" />
          <div className='bg-white mt-[-60px] w-[90%] px-[10px] py-[15px] flex items-center justify-center mx-auto'>
            <Title className='text-[18px] font-700 text-justify leading-6'>
              Innovate. Invest. Energize: Your Trusted Partner for IT, Real Estate, and <span className='py-[0px] px-5 bg-primary_color rounded-md text-primary_color_white font-normal font-bellefair'>Energy solutions</span>
            </Title>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero