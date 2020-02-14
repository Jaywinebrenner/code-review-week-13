import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';



function Header(){

  return (
    <div className="header-body">
      <NavigationBar/>

      <Link to="/">Home</Link> | <Link to="/newbody">Do you wanna?</Link>
      <img className='kenImage'src="https://i.imgur.com/ZYbTJtW.png" alt=""></img>


      <style jsx>{`
          .header-body {
            height: 500px;
            background-image: url("https://i0.wp.com/www.maxim.com/.image/t_share/MTQ2MjY3MDk3Njg3NjYzNjMz/beer.png?resize=914%2C471&ssl=1");
            text-align: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-size: 100% 100%;
          }

          .kenImage{
            width: 200px;
            position: absolute;
            right: 1030px;
            top: 235px;
          }


          `}</style>
        <button class='btn btn-primary' type="button">Click Me!</button>
      </div>
    );
  }

  export default Header;
