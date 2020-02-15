import React from 'react';
import { Link } from 'react-router-dom';




function Welcome(){

  return (
    <div className="welcome-text-div">
      <h2 className='welcome-text'>Welcome to</h2>
      <h1 className='kens-kegs-header'>Ken's Kegs</h1>
      <style jsx>{`
          .welcome-text-div{
            text-align: center;
          }
          .welcome-text{

          }

          .kens-kegs-header{
            font-size: 8rem;
          }

          `}</style>

      </div>
    );
  }

  export default Welcome;
