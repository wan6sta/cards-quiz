export interface GetCardsResponse {
  cards: Card[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: 1
  pageCount: 4
  packUserId: string
}

export interface Card {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}
