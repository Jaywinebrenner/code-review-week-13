import React from 'react';
import { Link } from 'react-router-dom';


function Header(){

  return (
    <div className="header-body">
      <Link to="/">Home</Link> | <Link to="/newbody">Do you wanna?</Link>

      <style jsx>{`
          .header-body {
            height: 500px;
            background-color: lightgray;
            text-align: center;
          }
            `}</style>
          <button class='btn btn-primary' type="button">Click Me!</button>
    </div>
  );
}

export default Header;
