import React from 'react'
import Header from '../../components/SmallHeader'
import Testimonials from './Testimonial'
import Hero from './Hero'
import Welcome from './Welcome'
import Services from './Services'
import Contact from './Contact'
const Home = () => {
  return (
    <div className='w-full bg-primary_color_white px-10 mt-8 '>
      <Hero/>
      <Welcome/>
      <Services/>
      <Contact/>
      <div className='lg:my-[80px] my-[40px] flex flex-col items-center justify-center'>
        <Header text="Testimonials" />
        <h3 className='lg:w-[459px] text-center font-montserrat font-bold text-3xl lg:text-5xl text-primary_color  '>
        What Our Clients Say About Us
        </h3>
        <div className='lg:w-[80px] w-[50px] border-primary_color border-4 rounded-lg lg:mt-3 lg:mb-70px mt-2 mb-50px'></div>
        <div className='flex items-center justify-center w-full my-10'>
        <Testimonials/>
        </div>
      </div>
    </div>
  )
}

export default Home

