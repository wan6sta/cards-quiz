import { useDeleteCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as DeleteIcon } from '../../../../shared/assets/icons/Trash.svg'
import { FC } from 'react'

interface props {
  packId: string
}

export const RemovePack: FC<props> = props => {
  const { packId } = props
  const [removePack, { isLoading }] = useDeleteCardPackMutation()
  const addCardHandler = () => {
    console.log(packId);
    removePack(packId)
  }

  return (
    <>
      {isLoading ? <LinearPageLoader /> : null}
      <DeleteIcon onClick={addCardHandler} />
    </>
  )
}
