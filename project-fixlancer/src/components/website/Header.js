import React from 'react';
import ReactDOM from 'react-dom';
import { Nav , Navbar , Form , NavDropdown , Button ,FormControl ,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo.png"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Header extends React.Component{
    render(){
        return( 
          <>
          <div className="home-header">
            <Navbar  expand="lg">
              <Container>
                  <Navbar.Brand >
                    <Link to="/hometwo">
                       <img src={logo} className="img-fluid" alt="logo"/>
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="mr-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      <Nav.Link>
                        <Link className="color-chg" to="/login">Login</Link>
                      </Nav.Link>
                      <Nav.Link >
                        <Link className="color-chg" to="/Register">Register</Link>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          </>
         )
        }
    }
