export interface Card {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade?: number
  shots?: number
  questionImg?: string
  answerImg?: string
  answerVideo?: string
  questionVideo?: string
  comments?: string
  type?: string
  rating?: number
  more_id?: string
  created?: Date
  updated?: Date
  __v?: number
}

export interface GetCardsResponse {
  cards: Card[]
  cardPackId?: string
  packUserId: string
  packName: string
  packPrivate: boolean
  packCreated: Date
  packUpdated: Date
  page: number
  pageCount: number
  cardsTotalCount: number
  minGrade: number
  maxGrade: number
  token: string
  tokenDeathTime: number
}

export interface GetCardsArgs {
  cardsPack_id: string
  min?: number
  max?: number
  page?: number
  pageCount?: number
  sortCards?: string
  cardQuestion?: string
  cardAnswer?: string
}

export interface NewCard {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade: number
  shots: number
  comments: string
  type: string
  rating: number
  more_id: string
  created: Date
  updated: Date
  __v: number
}

export interface CreateCardResponse {
  newCard: NewCard
  token: string
  tokenDeathTime: number
}

export interface CreateCardPayload {
  card: CreateCard
}

interface CreateCard {
  cardsPack_id: string
  question?: string
  answer?: string
  grade?: number
  shots?: number
  answerImg?: string | number
  questionVideo?: string | number
  answerVideo?: string | number
}

export interface DeletedCard {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade: number
  shots: number
  comments: string
  type: string
  rating: number
  more_id: string
  created: Date
  updated: Date
  __v: number
}

export interface DeleteCardResponse {
  deletedCard: DeletedCard
  token: string
  tokenDeathTime: number
}
