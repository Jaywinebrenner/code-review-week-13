import React from 'react';


function About(){

  return (
    <div className='about-div'>

      <style jsx>{`

          .about-div{

          }

          .kens-info-text{
            width: 400px;
            display: inline-block;
      border: 1px solid black;
      margin: 0 0 0 100px;
      padding-left: 50px;

          }

          .kenImage{
            width: 400px;

            right: 1030px;
            top: 235px;
          }


          `}</style>
        <img className='kenImage'src="https://i.imgur.com/ZYbTJtW.png" alt=""></img>
        <div className='kens-info-text'>
          <h5>Hi, I'm Ken. Welcome to Ken's Kegs. I weigh 189 pounds and have an infected molar. I once met Michelle Pfeiffer and have a mint condiction Optimus Prime still in the box. This is where I plan to tell you about my fantastic Brewery and potentially go track down some lorem epsom. I don't know how to use a chop saw or bake bread.</h5>
        </div>

      </div>
    );
  }

  export default About;
