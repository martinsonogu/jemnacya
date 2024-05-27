import React from 'react'

type buttonprops = {
  text: string;
  className?: string;
  classNamecolor?: string; 
  };

const Header: React.FC<buttonprops> = ({text, className, classNamecolor}) => {
  return (
    <div className='flex items-center'>
        <div className={`h-3 w-3 border border-primary_color_white bg-primary_color mr-2 ${classNamecolor}`}></div>
      <p className={`font-montserrat text-header_color_black text-lg font-medium ${className}`} >{text}</p>
    </div>
  )
}

export default Header