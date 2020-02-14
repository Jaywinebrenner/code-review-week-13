import React from 'react';
import { Link } from 'react-router-dom';




function Footer(){

  return (
    <div className="footer-body">

      <div className='footer-divs'>
        <h3>Locations</h3>
      </div>

      <div className='footer-divs'><h3>Social Media</h3></div>
      <div className='footer-divs'><h3>Get Ken's News letter</h3></div>

      <style jsx>{`
          .footer-divs{
            display: inline-block;
            margin: 40px 60px 0 0;

          }

          .footer-body {
            text-align: center;
              width: 100%;
              height: 200px;
              background-color: black;
              color: white;
          }

          .locations-div{

          }

          `}</style>

      </div>
    );
  }

  export default Footer;
