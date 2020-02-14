import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div className='keg-card-body'>

      <style jsx>{`
          keg-card-body{
            text-align: center;
          }

          .keg-card {
            text-align: center;
            border: 1px solid black;
            width: 400px;
            height: auto;
            margin: 25px auto;
            padding: 10px;
            position: relative;
            padding: 0px;
            border-radius: 5px;
      
            background-image: url("https://lh3.googleusercontent.com/proxy/n9lZQcGluim7rQrx1ScPDMtFdcnxIS6tL-ai9LZix53VT9ytloI4JxaTp1aB4vEtuBkMl9CQ1jRLqc7Z1dfHoLHdgMRsLuZZ1l3BQ-E9zmx5laol");
          }

          .keg-card-top{
            color: white;
            background-color: black;
            height: 45px;

          }

          .keg-card-bottom{
            color: white;
          }

          .keg-card-image{
            width: 30px;
            position: absolute;
            top: 5px;
            left: 30px;
          }

          .employee-edit-button{
            border-radius: 5px;
            margin-bottom: 5px;
          }



          `}</style>



        <div className='keg-card'>
          <div className='keg-card-top'>
            <h2>{props.name}</h2>
            <img className='keg-card-image'src="https://i.imgur.com/ZYbTJtW.png" alt=""></img>
          </div>
          <div className='keg-card-bottom'>
            <h3>{props.brand}</h3>
            <h6>Price: {props.price}</h6>
            <h6>Alcohol Content: {props.alcoholContent}</h6>
            <h6> Pints Left: {props.pintsLeft}</h6>
            <button className='employee-edit-button'>Employee Edit</button>
          </div>
        </div>
      </div>
    );
  }

  Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    alcoholContent: PropTypes.number.isRequired,
    pintsLeft: PropTypes.number.isRequired
  };

  export default Keg;
