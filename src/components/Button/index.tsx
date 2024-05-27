import React from "react";

type buttonprops = {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => void;
};

const Button: React.FC<buttonprops> = ({ text, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` flex items-center justify-center ${className}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;