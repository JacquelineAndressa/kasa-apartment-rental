import './Rating.scss'

function Rating({ score }) {
  const scoreNumber = parseInt(score, 10)
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((starNumber) => (
        <svg
          key={starNumber}
          className={
            starNumber <= scoreNumber
              ? 'rating__star rating__star--filled'
              : 'rating__star'
          }
          width="30"
          height="30"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

export default Rating
