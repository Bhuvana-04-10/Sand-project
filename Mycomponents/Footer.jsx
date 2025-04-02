import React from 'react';
import { FaArrowRight } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="up">
      <div>
          <div style={{color:"grey"}}>get in touch </div>
          <p>Lorem ipsum dolor sit <br/>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
      <div style={{color:"grey"}}>get in touch </div>
      <p>Lorem ipsum dolor sit <br/>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
      <div style={{color:"grey",marginBottom:"10px"}}>get in touch </div>
      <p className='para'>Email &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; <p style={{display:"inline-block",color:"grey"}}> bhuvana@gmail.com</p></p>
      <p className='para'>Address &nbsp; <p style={{display:"inline-block",color:"grey"}}> Hdgdhgdhgjksjhuysfjbsbfu</p></p>
      <p className='para'>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p style={{display:"inline-block",color:"grey"}}> 327677488848</p></p>
      </div>
      </div>
      <div className="down">
       <div className='lefty' style={{color:"grey"}}>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div>@2025  &nbsp; &nbsp;   Data Privacy &nbsp; &nbsp;  Imprint</div>
       </div>
      </div>
    </div>
  )
}

export default Footer;