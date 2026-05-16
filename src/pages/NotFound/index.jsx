import { Link } from 'react-router-dom'
import './NotFound.scss'

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="not-found__link">
        Return to homepage
      </Link>
    </div>
  )
}

export default NotFound
