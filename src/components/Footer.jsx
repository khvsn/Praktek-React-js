import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024 | Kairulll_</p>
        <p className="hidden sm:block">FrontEnd Developer</p>
        <p className="hidden sm:block">Designed by @Kairulll_</p>
      </div>
    </div>
  );
};

export default Footer;
