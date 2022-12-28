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
import { LearnActionIcon } from '@/features/PacksList/ui/LearnAction/LearnActionIcon'

interface Props {
  packCreatorId: string
  packsId: string
  packsName: string
  cardsCount?: number
}

export const PackListActions: FC<Props> = props => {
  const userId = useAppSelector(getAuthId)

  const { packsId, packCreatorId, packsName, cardsCount } = props
  return (
    <StyledIconsWrapper>
      {packCreatorId === userId ? (
        <>
          <StyledIconPackWrapper>
            <LearnActionIcon
              cardsCount={cardsCount as number}
              packsId={packsId}
            />
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
          <LearnActionIcon
            cardsCount={cardsCount as number}
            packsId={packsId}
          />
        </StyledIconPackWrapper>
      )}
    </StyledIconsWrapper>
  )
}
