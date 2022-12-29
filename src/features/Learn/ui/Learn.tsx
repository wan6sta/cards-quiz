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

export const Learn = () => {
  const { packId } = useParams()

  const getCardsQueryParams = {
    cardsPack_id: String(packId),
    pageCount: 99999
  }

  const { data: cardsData, isFetching: questionIsLoading } =
    useGetCardQuery(getCardsQueryParams)

  const [setGrade] = useGradeMutation()

  const rate = [
    { id: 1, name: 'Did not know' },
    { id: 2, name: 'Did Forgot know' },
    { id: 3, name: 'A lot of thought' },
    { id: 4, name: 'Confused' },
    { id: 5, name: 'Knew the answer' }
  ]

  const [radioValue, setRadioValue] = useState(rate[0])
  const [selectedCard, setSelectedCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const gradeRequestBody = {
    grade: radioValue.id,
    card_id: cardsData?.cards[selectedCard]._id as string
  }

  const onNextBtnClick = async () => {
    await setGrade(gradeRequestBody)
    setSelectedCard(prev => prev + 1)
    setShowAnswer(false)
    setRadioValue(rate[0])
  }

  useEffect(() => {
    if (cardsData) {
      selectedCard === cardsData.cards.length - 1 && setSelectedCard(0)
    }
  }, [selectedCard])

  if (questionIsLoading) {
    return <LinearPageLoader />
  }

  return (
    <>
      <Title marginBottom='30px' fontSize='22px'>
        {cardsData?.packName}
      </Title>
      <BoxCard width={'439px'} rowGap='24px'>
        <Span fontSize={'16px'} bold>
          <b>Question: </b>
          <Span fontSize={'16px'} bold>
            {cardsData?.cards[selectedCard].question}
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
                {cardsData?.cards[selectedCard].answer}
              </Span>
            </Span>
            <Flex>
              <LearnRadioGroup
                optionsValue={rate}
                radioValue={radioValue}
                setRadioValue={setRadioValue}
              />
            </Flex>
            <Button onClick={onNextBtnClick}>Next</Button>
          </>
        )}
      </BoxCard>
    </>
  )
}
