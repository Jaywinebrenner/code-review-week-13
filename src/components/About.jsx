import React from 'react';


function About(){

  return (
    <div className='about-div'>

      <style jsx>{`

          .about-div{

          }

          .kens-info-text{
            width: 400px;
            display: absolute;
            border: 1px solid black;
right: 300px;

          }

          .kenImage{
            width: 500px;

            right: 1030px;
            top: 235px;
          }


          `}</style>
        <img className='kenImage'src="https://i.imgur.com/ZYbTJtW.png" alt=""></img>
  <img className='kenImage'src="https://lh3.googleusercontent.com/proxy/eHCLyvMnkhaI4XDk3-V-bkLvcz0nf1_Lp-o-DcM5-vppTmWCFn4Ail47W07JmdtirL9m21MdIm-qD5KVY2LBRHRxElDtD2WX17oL9vyrrGpikEFptVtxY8pdSqsQDL88uyE1IhkeHPjiTI7Sdtz6fOeJZ5WgGqM"></img>
        <div className='kens-info-text'>
          <h5>Hi, I'm Ken. Welcome to Ken's Kegs. I weigh 189 pounds and have an infected molar. I once met Michelle Pfeiffer and have a mint condiction Optimus Prime still in the box. This is where I plan to tell you about my fantastic Brewery and potentially go track down some lorem epsom. I don't know how to use a chop saw or bake bread.</h5>
        </div>

      </div>
    );
  }

  export default About;
