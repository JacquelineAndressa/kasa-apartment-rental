import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="/">KASA</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
