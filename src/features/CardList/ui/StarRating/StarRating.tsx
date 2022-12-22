import { useState } from 'react'
import { ReactComponent as StarIcon } from '../../../../shared/assets/icons/Star.svg'
import { ReactComponent as StarCheckedIcon } from '../../../../shared/assets/icons/StarChecked.svg'
import {StyledStarRating, StyledStarWrapper} from './StyledStarRating'

export const StarRating = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  return (
    <StyledStarWrapper>
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <span
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {index <= (hover || rating) ? (
              <StyledStarRating>
                <StarCheckedIcon />
              </StyledStarRating>
            ) : (
              <StyledStarRating>
                <StarIcon />
              </StyledStarRating>
            )}
          </span>
        )
      })}
    </StyledStarWrapper>
  )
}