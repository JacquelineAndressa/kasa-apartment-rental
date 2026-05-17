import { useState } from 'react'
import './Slideshow.scss'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultiplePictures = pictures.length > 1

  function nextImage() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function previousImage() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="slideshow">
      {hasMultiplePictures && (
        <button
          className="slideshow__arrow slideshow__arrow--left"
          onClick={previousImage}
        >
          <svg
            width="20"
            height="35"
            viewBox="0 0 20 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 32.5L2.5 17.5L17.5 2.5"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      )}
      <img src={pictures[currentIndex]} alt="" className="slideshow__image" />
      {hasMultiplePictures && (
        <button
          className="slideshow__arrow slideshow__arrow--right"
          onClick={nextImage}
        >
          <svg
            width="20"
            height="35"
            viewBox="0 0 20 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 32.5L17.5 17.5L2.5 2.5"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      )}
      {hasMultiplePictures && (
        <span className="slideshow__counter">
          {currentIndex + 1}/{pictures.length}
        </span>
      )}
    </div>
  )
}

export default Slideshow
