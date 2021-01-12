import React from 'react';
import { Link } from 'react-router-dom';

function NavElement(props) {
  return (
    <Link to={props.url} className="nav__link active">
      <i className={`bx nav__icon ${props.icon}`}></i>
      <span className="nav__text">{props.description}</span>
    </Link>
  )
}

export default NavElement;
