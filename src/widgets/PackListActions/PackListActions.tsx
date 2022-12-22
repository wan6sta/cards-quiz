import { FC } from 'react'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { StyledIconsWrapper } from '../../features/PacksList/StyledPacksList'
import { RemovePackAction } from '../../features/PacksList/ui/RemovePackAction/RemovePackAction'
import { ReactComponent as LearnIcon } from '../../shared/assets/icons/TeacherIcon.svg'
import { EditActionIcon } from '../../features/PacksList/ui/EditAction/EditActionIcon'

interface PropsType {
  packCreatorId: string
  packsId: string
}

export const PackListActions: FC<PropsType> = props => {
  const userId = useAppSelector(state => state.auth.userData?._id)

  const { packsId, packCreatorId } = props
  return (
    <StyledIconsWrapper>
      {packCreatorId === userId ? (
        <>
          <LearnIcon />
          <EditActionIcon Id={packsId} />
          <RemovePackAction id={packsId} />
        </>
      ) : (
        <LearnIcon />
      )}
    </StyledIconsWrapper>
  )
}
