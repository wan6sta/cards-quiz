import { useAppSelector } from '../../../../app/providers/StoreProvider/hooks/useAppSelector'
import { StyledIconsWrapper } from '../../../PacksList/StyledPacksList'
import { EditActionIcon } from '../../../PacksList/ui/EditAction/EditActionIcon'
import { RemovePackAction } from '../../../PacksList/ui/RemovePackAction/RemovePackAction'
import { FC } from 'react'
import { StarRating } from '../StarRating/StarRating'
import { getAuthIdSelector } from '../../../../app/providers/StoreProvider/authSlice/selectors/getAuthIdSelector'
import {
  StyledCardIconsWrapper,
  StyledIconsWrapperWrapper,
  StyledWrapper
} from './StyledCardListGrade'

interface Props {
  packsId: string
  packCreatorId: string
}

export const CardListGrade: FC<Props> = props => {
  const { packsId, packCreatorId } = props
  const userId = useAppSelector(getAuthIdSelector)

  return (
    <>
      {packCreatorId === userId ? (
        <StyledWrapper>
          <StarRating />
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
          <StarRating />
        </StyledWrapper>
      )}
    </>
  )
}
