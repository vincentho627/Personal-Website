import navbarList from './navbarList';

function Navbar() {
  return (
    <nav className="nav-bar">
      <h1 id="logo">Vincent Ho</h1>
      <ul className="nav-links">
        {navbarList.map(item => {
          return (
            <li className="nav-item-animate" key={item.id}><a class="nav-items" href={item.link}>{item.name}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;
