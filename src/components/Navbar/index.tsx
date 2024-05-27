import React, { useState } from "react";
import Logo from "../../assets/icons/Logo"
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";
import { REGULAR_PATHS } from "../../routes/paths";
import SmallLogo from '../../assets/imgs/SmallLogo.svg'

const Navbar = () => {
  const { HOME, CONTACT } = REGULAR_PATHS;
  const [open, setOpen] = useState(true);
  let location = useLocation();

  return (
    <div className="bg-primary_color_white w-full h-24 md:h-[120px] py-0 md:py-1 lg:py-1 px-2 md:px-5 lg:px-9 flex items-center justify-between">
      <Link to={HOME}>
         <div className="w-12 h-12 max-h-full hidden lg:block ">
          <Logo/>
        </div>
        <img src={SmallLogo} alt="" className="lg:hidden" />
      </Link>
      <ul className="hidden lg:flex items-center justify-center gap-8">
        {navLinks.map((link) => {
          return (
            <li key={link.name}>
              <Link
                to={link.url}
                className={`flex font-normal text-lg leading-6 cursor-pointer font-barlow ${
                  location.pathname === link.url
                    ? "text-primary_color"
                    : "text-[#292C30]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <Link to={CONTACT}>
        <Button
          text="Contact Us"
          className=" hidden lg:w-42 lg:h-12 py-3 px-7 text-white bg-primary_color lg:flex items-center justify-center font-barlow font-medium text-lg leading-6  rounded-lg"
        />
      </Link>
      </ul>

      

      {/* Toggle menu icon */}
      {open ? (
        <div className=" lg:hidden">
          <FontAwesomeIcon icon={faBars} style={{ fontSize: '20px' }} onClick={() => setOpen(false)} />
        </div>
      ) : (
        <div className=" lg:hidden">
          <FontAwesomeIcon icon={faTimes} style={{ fontSize: '20px' }} onClick={() => setOpen(true)} />
        </div>
      )}
      {/* mobile mobile */}
      {!open && (
        <ul className=" w-full h-[calc(100vh-6rem)] bg-primary_color_white flex flex-col gap-5 items-center justify-center absolute top-24 left-0 right-0 transition-transform transform ease-in-out duration-5000">
          {navLinks.map((link) => {
            return (
              <li
                key={link.name}
                className=" flex flex-col items-center justify-center"
              >
                <Link
                  to={link.url}
                  onClick={() => setOpen(true)}
                  className=" hover:border-b-4 border-primary_color flex flex-col font-outfit font-normal text-xl text-text_color_blackII leading-6 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <Link to={CONTACT}>
            <Button
              onClick={() => setOpen(true)}
              text="Contact Us"
              className=" w-52 h-14 lg:hidden text-text_color_white bg-primary_color flex items-center justify-center font-outfit font-medium text-lg leading-6 rounded-lg"
            />
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;