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
            float:right;
            top: 400px;
            margin: 70px 200px 0 0;
            padding: 40px;
          }

          .kenImage{
            width: 300px;
            right: 1030px;
            top: 235px;
          }

          .about-subheader{
            text-align: center;
            background-color: darkgray;
            color: white;
          }
          .signiture{
            font-family: 'Mr Dafoe', cursive;
            font-size: 30px;

          }

          @import url('https://fonts.googleapis.com/css?family=Modak&display=swap');

          `}</style>

        <div className='about-subheader'>
          <h4 className='.about-ken-text'>About Ken</h4>
        </div>


          <img className='kenImage'src="https://i.imgur.com/ZYbTJtW.png" alt=""></img>
  

        <div class='kens-info-text'>
          <h6>Hi, I'm Ken. Welcome to Ken's Kegs. I weigh 189 pounds and have an infected molar. I once met Michelle Pfeiffer and have a mint condiction Optimus Prime still in the box. This is where I plan to tell you about my fantastic Brewery and potentially go track down some lorem epsom. I don't know how to use a chop saw or bake bread.</h6>
          <h6>Much Love,</h6>
          <h6 className='signiture'>Ken</h6>

        </div>

      </div>
    );
  }

  export default About;
