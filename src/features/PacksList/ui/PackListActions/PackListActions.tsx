import { FC } from 'react'
import {
  StyledIconPackWrapper,
  StyledIconsWrapper
} from '../PacksList/StyledPacksList'
import { RemovePackAction } from '../RemovePackAction/RemovePackAction'
import { ReactComponent as LearnIcon } from '@/shared/assets/icons/TeacherIcon.svg'
import { EditActionIcon } from '../EditAction/EditActionIcon'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { getAuthId } from '@/app/api/authSlice'

interface Props {
  packCreatorId: string
  packsId: string
  packsName: string
}

export const PackListActions: FC<Props> = props => {
  const userId = useAppSelector(getAuthId)

  const { packsId, packCreatorId, packsName } = props
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
            <RemovePackAction id={packsId} packsName={packsName} />
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
