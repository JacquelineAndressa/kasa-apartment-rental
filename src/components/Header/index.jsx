import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
