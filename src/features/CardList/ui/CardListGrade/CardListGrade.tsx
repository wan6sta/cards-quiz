import { FC } from 'react'
import { StarRating } from '../StarRating/StarRating'
import {
  StyledCardIconsWrapper,
  StyledIconsWrapperWrapper,
  StyledWrapper
} from './StyledCardListGrade'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { getAuthId } from '@/app/api/authSlice'

import { EditActionIcon } from '@/features/PacksList/ui/EditAction/EditActionIcon'
import { RemovePackAction } from '@/features/PacksList/ui/RemovePackAction/RemovePackAction'

interface Props {
  grade: number
  packsId: string
  packCreatorId: string
  cardName?: string
  initAnswer?: string
}

export const CardListGrade: FC<Props> = props => {
  const { packsId, packCreatorId, grade, cardName, initAnswer } = props
  const userId = useAppSelector(getAuthId)

  return (
    <>
      {packCreatorId === userId ? (
        <StyledWrapper>
          <StarRating grade={grade} />
          <StyledIconsWrapperWrapper>
            <StyledCardIconsWrapper>
              <EditActionIcon
                cards
                Id={packsId}
                initQuestion={cardName}
                initAnswer={initAnswer}
              />
            </StyledCardIconsWrapper>
            <StyledCardIconsWrapper>
              <RemovePackAction cards id={packsId} cardName={cardName} />
            </StyledCardIconsWrapper>
          </StyledIconsWrapperWrapper>
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          <StarRating grade={grade} />
        </StyledWrapper>
      )}
    </>
  )
}
