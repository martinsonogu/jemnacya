import React, { useState } from 'react';
import PrevButton from '../../assets/icons/prev.svg'
import NextButton from '../../assets/icons/next.svg'
import DummyImg from '../../assets/icons/dummy_image.svg'

interface Testimonial {
  testimony: string;
  name: string;
  title: string;
  image: string;
}

const testimonialData: Testimonial[] = [
  {
    testimony: "I'm very impressed with the service!Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    name: "John Doe",
    title: "CEO, Company XYZ",
    image: DummyImg,
    },
    {
        testimony: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. I'm very impressed with the service!",
        name: "Mary Jane",
        title: "CEO, Capital One",
        image: DummyImg,
    },
    {
        testimony: "I'm very impressed with Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. the service!",
        name: "Benjamin Carter",
        title: "CEO, Oando",
        image: DummyImg,
    },
    {
        testimony: "I'm Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.very impressed with the service!",
        name: "Jayden Smith",
        title: "CEO, The Place",
        image: DummyImg,
    },
  // Add more testimonials here
];

const Testimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  const currentTestimonial = testimonialData[currentTestimonialIndex];

  return (
    <div className='w-full flex items center justify-center '>
        <button onClick={handlePrevious}>
            <img src={PrevButton} alt="Previous Button" className='lg:w-[27px] lg:h-[27px] w-[27px] h-[27px]' />  
        </button>
          <div className="lg:w-[701px] lg:h-[370px] w-[350.5px] h-[158.68px] bg-primary_color lg:mx-10 mx-1 rounded-lg lg:px-[66px] lg:pt-[61px] px-[10px] pt-[6px]"
              style={{ boxShadow: '0px 7px 8px 0px #00000040' }}>
        <p className="text-left lg:mb-[45px] mb-[5px] font-montserrat font-normal lg:text-2xl text-sm  text-header_color_black">{currentTestimonial.testimony}</p>
        <div className="flex items-center justify-start">
          <img src={currentTestimonial.image} alt={currentTestimonial.name}  className='lg:w-[80px] lg:h-[80px] w-[32px] h-[32px]rounded-full'/>
          <div className='lg:ml-2 ml-1 flex flex-col items-start'>
            <p className="font-montserrat font-medium lg:text-xl text-sm text-black">{currentTestimonial.name}</p>
            <p className="text-[#656565] font-montserrat font-light lg:text-[18px] text-[12px]">{currentTestimonial.title}</p>
          </div>
        </div>
      </div>
          <button onClick={handleNext}>
          <img src={NextButton} alt="Next Button" className='lg:w-[27px] lg:h-[27px] w-[27px] h-[27px]' /> 
      </button>
    </div>
  );
};

export default Testimonials;
