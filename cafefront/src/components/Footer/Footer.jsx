import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import './Footer.css'

const Footer = () => {
  return (
    <div className="container-flex m-2">
      <div className="col-12 footer_icon">
        <Logo style={{ borderRadius: '5%'}}/>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
