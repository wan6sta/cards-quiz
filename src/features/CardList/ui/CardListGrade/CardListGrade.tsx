import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import { EditActionIcon } from '../../../PacksList/ui/EditAction/EditActionIcon'
import { RemovePackAction } from '../../../PacksList/ui/RemovePackAction/RemovePackAction'
import { FC } from 'react'
import { StarRating } from '../StarRating/StarRating'
import { getAuthIdSelector } from '../../../../app/api/authSlice/selectors/getAuthIdSelector'
import {
  StyledCardIconsWrapper,
  StyledIconsWrapperWrapper,
  StyledWrapper
} from './StyledCardListGrade'

interface Props {
  grade: number
  packsId: string
  packCreatorId: string
}

export const CardListGrade: FC<Props> = props => {
  const { packsId, packCreatorId, grade } = props
  const userId = useAppSelector(getAuthIdSelector)

  return (
    <>
      {packCreatorId === userId ? (
        <StyledWrapper>
          <StarRating grade={grade} />
          <StyledIconsWrapperWrapper>
            <StyledCardIconsWrapper>
              <EditActionIcon cards Id={packsId} />
            </StyledCardIconsWrapper>
            <StyledCardIconsWrapper>
              <RemovePackAction cards id={packsId} />
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
