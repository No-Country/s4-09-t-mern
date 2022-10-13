import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../../assets/images/instagram.png";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div>
      <Link>
        <img src={Instagram} className='Icon_redes'/>
      </Link>
      <Link>
        <img src={Linkedin} className='Icon_redes'/>
      </Link>
      <Link>
        <img src={Github} className='Icon_redes'/>
      </Link>
    </div>
  );
};

export default SocialMedia;
