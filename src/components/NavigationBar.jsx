import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

function NavigationBar(){

  return (
    <div className="navbarDiv">

    <style jsx>{`
      .navbarDiv{
        background-color: black;
      }

      .navbar-brand {
        font-size: 30px;
        margin-left: 80px;
      }

      .dropdown-toggle {
        margin-left: 70px;
      }
      .nav-link {
        margin-right: 50px;
      }
      .navbar {
        font-weight: bold;
        height: 60px;
        background-color: rgba(0, 0, 0, 0);
        box-shadow: 1px 1px 3px #000000;
      }
      .postJob {
        margin-top: 8px;
      }

      .signInBox{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 20px;
        margin-right: 0;
        height: 30px;
        border-radius: 7%;
        padding: 5px;
        padding-bottom: 30px;
        background-color: rgba(0, 0, 0, .3);
      }

      .kensKegsText{
        background-color: black;
      }
    `}</style>




    <Navbar collapseOnSelect expand="lg" variant="dark">

    <Navbar.Brand className="kensKegsText" href="#home">Ken's Kegs</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    <Nav>
    <Nav.Link className='signInBox' href="/kegs">Explore Kegs</Nav.Link>
    </Nav>

    </Nav>
    <Nav>
    <Nav.Link className='signInBox' href="#deets">Sign In</Nav.Link>
    <Nav.Link className='postJob' eventKey={2} href="#memes">
    About Ken
    </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>

    </div>
  );
}

export default NavigationBar;
