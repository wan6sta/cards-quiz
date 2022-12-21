import { useUpdateCardsPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as EditIcon } from '../../../../shared/assets/icons/EditIcon.svg'
import { FC } from 'react'

interface EditPackProps {
  packsId: string
}
// Add error
export const EditPack: FC<EditPackProps> = props => {
  const [updateCard, { isLoading }] = useUpdateCardsPackMutation()
  const { packsId } = props

  const editCardHandler = () => {
    if (isLoading) return
    updateCard({ cardsPack: { name: 'edit packName', _id: packsId } })
  }

  return (
    <>
      {isLoading ? <LinearPageLoader /> : null}
      <EditIcon onClick={editCardHandler} />
    </>
  )
}
