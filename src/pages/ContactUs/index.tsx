import React, { useState } from 'react'
import AboutBg from '../../assets/imgs/aboutBg.png'
import Header from '../../components/SmallHeader'
import Title from '../../components/Title'
import ContactImg from '../../assets/imgs/ContactImg.svg'
import Button from '../../components/Button'

const ContactUs = () => {
  const innerDivStyle = {
    backgroundImage: `url(${AboutBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value.slice(0, 1000);

    setInputValue(newValue);
  };
  return (
    <div className='w-full bg-primary_color_white px-10 mt-8'>
       <div className='mt-20'>
        <div style={innerDivStyle} className='h-[372px] flex flex-col items-center justify-center'>
          <Header text='Services' className='font-semibold font-inter text-white' classNamecolor='border-[#4D4D4D] bg-[#4D4D4D]' />
          <Title className=' mx-auto md:text-[55px] text-[30px] font-semibold text-center text-text_color_white'>Contact Us</Title>
          {/* <p className='text-center text-text_color_white text-[55px] font-semibold'>Contact Us</p> */}
        </div>
       </div>
      <div className='md:my-[113px] my-50px flex items-center w-full'>
        <div className='lg:w-1/2 w-full lg:bg-[#F8F9FA] lg:h-[934px] md:p-10 py-3 px-2'>
          <h1 className='md:text-left text-center md:text-[48px] text-[30px] font-[700] md:mt-[16px] mt-[10px]'>Get in Touch</h1>
          <p className='text-[#999999] md:text-[16px] text-[14px] font-normal mt-[16px] mb-[40px] md:text-left md:w-3/4 w-full text-justify'>Have a project in mind that you think we’d be a great fit for it? We’d love to know what you’re thinking</p>
          <div className='flex md:flex-row flex-col items-center gap-4'>
            <div className='flex flex-col items-start w-full'>
              <label htmlFor="" className='text-[#283646] md:text-[16px] text-[14px] font-[700]'>Full Name</label>
              <input type="text"
                className='bg-[#FEFFFF] border border-1 border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2'
                placeholder="Input your full name in here"
              />
            </div>
            <div className='flex flex-col items-start w-full'>
              <label htmlFor="" className='text-[#283646] md:text-[16px] text-[14px] font-[700]'>Email address</label>
              <input type="email" className='bg-[#FEFFFF] border border-1 border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2'
              placeholder="Input your email address in here"
              />
            </div>
          </div>
          <div className='flex flex-col items-start w-full'>
              <label htmlFor="" className='text-[#283646] md:text-[16px] text-[14px] md:mt-5 mt-3 font-[700]'>Subject</label>
              <input type="text"
                className='bg-[#FEFFFF] border border-1 border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2'
              />
            </div>
          <p className='text-left text-[#283646] md:text-[16px] text-[14px] font-[700] md:mt-5 mt-3'>Messages</p>
          <textarea
            value={inputValue}
            onChange={handleChange}
            className='border border-[#B8BCCA] rounded px-2 py-2 h-[100px] md:h:[150px] w-full md:mt-5 mt-3'
            placeholder='Write your message in here'
            style={{ resize: 'none' }}
          />
          
          <div className='mt-10'>
          <Button text='Send message' className='bg-[#3A86FF] text-white md:h-[53px] h-[45px] md:w-[200px] w-[150px] rounded-lg font-[500]'/>
          </div>
        </div>
        <div className='lg:w-1/2 lg:block hidden'>
          <img src={ContactImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContactUs