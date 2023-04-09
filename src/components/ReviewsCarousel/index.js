// Write your code here
import {useState} from 'react'
import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props
  const [activeReview, setActiveReview] = useState(0)

  const onClickLeftArrow = () => {
    if (activeReview > 0) {
      setActiveReview(activeReview - 1)
    }
  }

  const onClickRightArrow = () => {
    if (activeReview < reviewsList.length - 1) {
      setActiveReview(activeReview + 1)
    }
  }

  const getCurrentReview = () => {
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReview
    ]
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  return (
    <div className="app-container">
      <h1 className="heading">Reviews</h1>
      <div className="carousel-container">
        <button
          className="arrow-button"
          data-testid="leftArrow"
          type="button"
          onClick={onClickLeftArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {getCurrentReview()}

        <button
          className="arrow-button"
          data-testid="rightArrow"
          type="button"
          onClick={onClickRightArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
