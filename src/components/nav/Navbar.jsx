import React from 'react';
import NavbarList from './NavbarList'
import NavElement from './NavElement'
import NavbarButton from './NavbarButton'

function Navbar() {
  return (
    <div className="l-navbar" id="navbar">
      <nav className="nav__custom">
        <div>
          <div className="nav__logo"></div>

          <NavbarButton />

          <ul className="nav__list">
            {NavbarList.map(props =>
              <NavElement
                key={props.id}
                url={props.url}
                icon={props.icon}
                description={props.description}
              />
            )}
          </ul>
        </div>
        <NavElement
          url="/"
          icon="bx-home"
          description="Home"
        />
      </nav>
    </div>
  )
};

export default Navbar;
