import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  icon: string;
  title: string;
  paragraph: string;
  link: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, paragraph, link, className }) => {
  return (
    <div className={`lg:w-[386px] h-[337px] flex flex-col items-center justify-center bg-[#F4F4F499] mb-8 lg:mb-0 px-2 lg:px-0 lg:bg-transparent ${className}`}>
      <div className='bg-primary_color h-[72px] w-[72px] rounded-full flex items-center justify-center'>
        <img src={icon} alt="icon" className='' />
      </div>
      <div className="mt-[22px]">
        <h2 className="font-montserrat font-semibold text-2xl text-header_color_black mb-4">{title}</h2>
        <p className="font-inter text-normal text-lg text-text_color mb-6 w-[300px] mx-auto text-center px-2 lg:px-0">{paragraph}</p>
        <Link to={link} className="text-xl font-semibold text-link"> Learn more</Link>
      </div>
    </div>
  );
};

export default Card;