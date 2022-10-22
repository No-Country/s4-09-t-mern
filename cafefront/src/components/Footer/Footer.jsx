import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import './Footer.css'

const Footer = ({children}) => {
  return (
    <div className="container-flex m-2" style={{position: 'relative'}}>
      <div className="col-12 footer_icon">
        <Logo style={{ borderRadius: '5%'}}/>
        <SocialMedia />        
      </div>
      {children}
    </div>
  );
};

export default Footer;
