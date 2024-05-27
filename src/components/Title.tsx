import React from 'react'

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
const Title: React.FC<TitleProps> =({ children, className }) => {
    return (
      <header className={`text-left text-header_color_black text-3xl lg:text-5xl font-montserrat font-bold leading-0 ${className}`}>
        {children}
      </header>
    );
  };

export default Title