import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as LearnIcon } from '@/shared/assets/icons/TeacherIcon.svg'

interface propsType {
  packsId: string
  cardsCount: number
}

export const LearnActionIcon: FC<propsType> = props => {
  const { packsId, cardsCount } = props
  const navigate = useNavigate()
  const onClickNameHandler = () => {
    if (cardsCount !== 0) navigate(`/learn/${packsId}`)
  }

  return (
    <LearnIcon
      cursor={cardsCount ? '' : 'auto'}
      opacity={cardsCount ? 1 : 0.4}
      onClick={onClickNameHandler}
    />
  )
}
