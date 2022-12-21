import { useDeleteCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as DeleteIcon } from '../../../../shared/assets/icons/Trash.svg'
import { FC } from 'react'

interface RemovePackProps {
  packId: string
}

export const RemovePack: FC<RemovePackProps> = props => {
  const { packId } = props
  const [removePack, { isLoading }] = useDeleteCardPackMutation()

  const deleteCardHandler = () => {
    removePack(packId)
  }

  return (
    <>
      {isLoading ? <LinearPageLoader /> : null}
      <DeleteIcon onClick={deleteCardHandler} />
    </>
  )
}
