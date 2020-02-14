import React from 'react';
import { Link } from 'react-router-dom';




function Footer(){

  return (
    <div className="footer-body">

      <div className='footer-divs'>
        <h3>Social Media</h3>
        <h6 className='white-footer-text'>Facebook</h6>
        <h6 className='white-footer-text'>Myspace</h6>
        <h6 className='white-footer-text'>Tinder</h6>
        <h6 className='white-footer-text'>Twitter</h6>

      </div>

      <div className='footer-divs'>
        <h3>Locations</h3>
        <h6 className='white-footer-text'>SE Portland</h6>
        <h6 className='white-footer-text'>Lyons, France</h6>
        <h6 className='white-footer-text'>Sao Paulo, Brasil</h6>

      </div>

      <div className='footer-divs'>
        <h3>Get Ken's News letter</h3>
          <input
            class='news-letter-input'
            type='text'
            id='newsletter'
            placeholder='Your Email'/>
      </div>

      <style jsx>{`

            .white-footer-text{
              color: white;
            }
          .footer-divs{
            display: inline-block;
            margin: 30px 60px 0 0;
            height: 80px;
            text-align: left;
          }
          .newsletter-divs {
            display: inline-block;
            margin: 40px 60px 0 0;

          }

          .footer-body {
            text-align: center;
              width: 100%;
              height: 200px;
              background-color: black;
              color: #e88b3a;
          }

          .locations-div{

          }

          `}</style>

      </div>
    );
  }

  export default Footer;
