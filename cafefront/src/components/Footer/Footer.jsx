import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import './Footer.css'

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 footer_icon">
        <Logo />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
