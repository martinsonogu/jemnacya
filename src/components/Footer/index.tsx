import FooterLogo from "../../assets/icons/FooterLogo"
import Envelope from '../../assets/icons/Envelope';
import Phone from '../../assets/icons/Phone';
import { Link } from 'react-router-dom'
import { REGULAR_PATHS } from "../../routes/paths";
import Button from '../Button';
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Youtube from '../../assets/icons/youtube.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'


const Footer = () => {
  const { CONTACT, ABOUT, SERVICES } = REGULAR_PATHS;
  return (
    <div className='w-full font-montserrat px-10 py-8 bg-primary_color'>
      <div className='hidden lg:flex flex-row items-center gap-40'>
        <div>
          <FooterLogo/>
        </div>
        <div className='flex flex-row w-full justify-between pr-40 '>
          <div className=''>
            <h3 className='font-bold text-primary_color_white text-[18px] mb-4'>Services</h3>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>IT services</p>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>Real Estate</p>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>Energy</p>
          </div>
          <div className=' flex flex-col items-center'>
            <h3 className='font-bold text-primary_color_white text-[18px] mb-5'>Contact Info</h3>
            <div className='mb-4 flex items-center'>
              <Envelope/>
              <p className='text-[16px] ml-3 text-primary_color_white '>Jemnacya@gmail.co.uk</p>
            </div>
            <div className=' flex item-center'>
              <Phone/>
              <p className='text-[16px] ml-3 text-primary_color_white '>+ 12 3456 7890</p>
            </div>
          </div>
          <div className=''>
            <h3 className='font-bold text-primary_color_white text-[18px] mb-4'>Company</h3>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>
              <Link to={ABOUT}>
                About
              </Link>
            </p>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>
              <Link to={SERVICES}>
                Services
              </Link>
            </p>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>
              <Link to={CONTACT}>
                Contact Us
              </Link>
            </p>
          </div>
           
          <div className=''>
            <h3 className='font-bold text-primary_color_white text-[18px] mb-4'>Legal</h3>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>Claim</p>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>Privacy</p>
            <p className='text-[16px] text-left text-primary_color_white mb-1'>Terms</p>
          </div>
        </div>
      </div>

        {/* For small devices */}
        <div className='lg:hidden flex flex-col items center justify-center'>
        <div className=' flex items center justify-center my-10'>
          <FooterLogo/>
        </div>
        <div className='text-primary_color_white font-montserrat'>
          <p className='text-2xl font-bold'>STAY CONNECTED</p>
          <p className='text-base font-normal'>Join our email list to recieve special offers.</p>
        </div>
        <div className='w-full mt-5 mb-3'>
          <input className='w-full h-[31px] mb-3 bg-primary_color_white' type="text" />
          <Button className='w-full h-[31px] border border-1px font-bold text-sm text-primary_color_white border-primary_color_white' text='SIGN UP'/>
        </div>
        <div className='flex items-start '>
          <input type="checkbox" />
          <p className='mt-[-4px] font-montserrat font-normal text-sm text-primary_color_white text-justify ml-3'>I agree that I would like to receive info about Jemnacya and special offers by email.
             I also accept Jemnacya privacy policy.</p>
        </div>
        <div>
          <div className=' flex flex-col items-center my-10'>
              <h3 className='font-bold text-primary_color_white text-xl mb-5'>Contact Info</h3>
              <div className='mb-4 flex items-center'>
                <Envelope/>
                <p className='text-lg ml-3 text-primary_color_white '>Jemnacya@gmail.co.uk</p>
              </div>
              <div className=' flex item-center'>
                <Phone/>
                <p className='text-lg ml-3 text-primary_color_white '>+ 12 3456 7890</p>
              </div>
            </div>
        </div>
        <div>
          <p className='font-montserrat font-semibold text-[14px] text-primary_color_white '>Follow Jemnacya Services LTD</p>
          <div className='flex items-center justify-between mt-4 mb-2'>
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Youtube} alt="Youtube" />
              <img src={Instagram} alt="Instagram" />
          </div>
        </div>

        </div>


      <div className='border border-text_color_white mt-4'></div>
      <div className=" font-montserrat font-normal text-xs text-text_color_white pt-2 lg:pt-9">
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>{" "}
        <span>Jemnacya Services LTD All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer