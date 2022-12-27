import { FC } from 'react'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import {
  StyledIconPackWrapper,
  StyledIconsWrapper
} from '../../StyledPacksList'
import { RemovePackAction } from '../RemovePackAction/RemovePackAction'
import { ReactComponent as LearnIcon } from '../../../../shared/assets/icons/TeacherIcon.svg'
import { EditActionIcon } from '../EditAction/EditActionIcon'

interface Props {
  packCreatorId: string
  packsId: string
}

export const PackListActions: FC<Props> = props => {
  const userId = useAppSelector(state => state.auth.userData?._id)

  const { packsId, packCreatorId } = props
  return (
    <StyledIconsWrapper>
      {packCreatorId === userId ? (
        <>
          <StyledIconPackWrapper>
            <LearnIcon />
          </StyledIconPackWrapper>
          <StyledIconPackWrapper>
            <EditActionIcon Id={packsId} />
          </StyledIconPackWrapper>
          <StyledIconPackWrapper>
            <RemovePackAction id={packsId} />
          </StyledIconPackWrapper>
        </>
      ) : (
        <StyledIconPackWrapper>
          <LearnIcon />
        </StyledIconPackWrapper>
      )}
    </StyledIconsWrapper>
  )
}
