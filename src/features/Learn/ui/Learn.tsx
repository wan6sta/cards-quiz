import { BoxCard } from '@/shared/ui/BoxCard/BoxCard'
import { Title } from '@/shared/ui/Title/Title'
import { useGetCardQuery } from '@/features/CardList'
import { useParams } from 'react-router-dom'
import { Span } from '@/shared/ui/Span/Span'
import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { LearnRadioGroup } from '@/widgets/LearnRadioGroup/ui/LearnRadioGroup'
import { Flex } from '@/shared/ui/Flex/Flex'
import { LinearPageLoader } from '@/widgets/LinearPageLoader'
import { useGradeMutation } from '../api/learnApiSlice'
import { Card } from '@/features/CardList/model/types/CardsModel'
import { randomFunc } from '@/features/Learn/model/lib/randomFunc'
import { PuffLoader } from 'react-spinners'

export const Learn = () => {
  const { packId } = useParams()

  const getCardsQueryParams = {
    cardsPack_id: String(packId),
    pageCount: 99999
  }

  const {
    data: cardsData,
    isFetching: questionIsLoading,
    isSuccess
  } = useGetCardQuery(getCardsQueryParams)

  const [setGrade, { isLoading: gradeIsLoading }] = useGradeMutation()

  const rate = [
    { id: 1, name: 'Did not know' },
    { id: 2, name: 'Did Forgot know' },
    { id: 3, name: 'A lot of thought' },
    { id: 4, name: 'Confused' },
    { id: 5, name: 'Knew the answer' }
  ]

  const initValue = {
    _id: '',
    cardsPack_id: '',
    user_id: '',
    answer: '',
    question: '',
    grade: 0,
    updated: ''
  }

  const [radioValue, setRadioValue] = useState(rate[0])
  const [selectedCard, setSelectedCard] = useState<Card>(initValue)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (cardsData?.cards) setSelectedCard(randomFunc(cardsData.cards))
  }, [isSuccess])

  const gradeRequestBody = {
    grade: radioValue.id,
    card_id: selectedCard._id
  }

  const onNextBtnClick = async () => {
    await setGrade(gradeRequestBody)
    if (cardsData) setSelectedCard(randomFunc(cardsData.cards))
    setShowAnswer(false)
    setRadioValue(rate[0])
  }

  if (questionIsLoading) {
    return <LinearPageLoader />
  }
  const gradeLoading = gradeIsLoading ? (
    <PuffLoader color='#ffffff' size={31} />
  ) : (
    'Next'
  )
  return (
    <>
      <Title marginBottom='30px' fontSize='22px'>
        {cardsData?.packName}
      </Title>
      <BoxCard width={'439px'} rowGap='24px'>
        <Span fontSize={'16px'} bold>
          <b>Question: </b>
          <Span fontSize={'16px'} bold>
            {selectedCard.question}
          </Span>
        </Span>
        {!showAnswer && (
          <Button onClick={() => setShowAnswer(true)}>Show answer</Button>
        )}
        {showAnswer && (
          <>
            <Span fontSize={'16px'} bold>
              <b>Answer: </b>
              <Span fontSize={'16px'} bold>
                {selectedCard.answer}
              </Span>
            </Span>
            <Flex>
              <LearnRadioGroup
                optionsValue={rate}
                radioValue={radioValue}
                setRadioValue={setRadioValue}
              />
            </Flex>
            <Button disabled={gradeIsLoading} onClick={onNextBtnClick}>
              {gradeLoading}
            </Button>
          </>
        )}
      </BoxCard>
    </>
  )
}
