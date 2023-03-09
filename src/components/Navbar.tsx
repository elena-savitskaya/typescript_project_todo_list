import React from 'react'
import { NavLink } from 'react-router-dom'
import office from "../images/office.jpg";
import avatar from "../images/avatar.jpg";

export const Navbar: React.FC = () => (
<>
  <nav>
    <div className="nav-wrapper teal lighten-2 px1">
      <a href="/" className="brand-logo">
        Todo list
      </a>
      <a href="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Todo list</NavLink>
        </li>
        <li>
          <NavLink to="/about">Information</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src={office} alt="image" />
      </div>
      <a href="/"><img className="circle" src={avatar} alt="image" /></a>
      <a href="/"><span className="white-text name">John Doe</span></a>
      <a href="/"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><h5 className='nav-text px1'>Navigation</h5></li>
    <li className='nav-link'><NavLink to="/">Todo list</NavLink></li>
    <li className='nav-link'><NavLink to="/about">Information</NavLink></li>
  </ul>
  </>
)
