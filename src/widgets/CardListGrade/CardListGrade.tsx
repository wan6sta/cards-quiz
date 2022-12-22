import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { StyledIconsWrapper } from '../../features/PacksList/StyledPacksList'
import { EditActionIcon } from '../../features/PacksList/ui/EditAction/EditActionIcon'
import { RemovePackAction } from '../../features/PacksList/ui/RemovePackAction/RemovePackAction'
import { FC } from 'react'
import { StarRating } from '../StarRating/StarRating'

interface Props {
  packsId: string
  packCreatorId: string
}

export const CardListGrade: FC<Props> = props => {
  const { packsId, packCreatorId } = props
  const userId = useAppSelector(state => state.auth.userData?._id)

  return (
    <StyledIconsWrapper>
      {packCreatorId === userId ? (
        <StyledIconsWrapper>
          <StarRating />
          <EditActionIcon cards Id={packsId} />
          <RemovePackAction cards id={packsId} />
        </StyledIconsWrapper>
      ) : (
        <StyledIconsWrapper>
          <StarRating />
        </StyledIconsWrapper>
      )}
    </StyledIconsWrapper>
  )
}
