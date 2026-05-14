import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggle}>
        <h3 className="collapse__title">{title}</h3>
        <span
          className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}
        >
          ⌃
        </span>
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  )
}

export default Collapse
