export interface CardPack {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  deckCover: string
  cardsCount: number
  type: string
  rating: number
  created: Date
  updated: Date
  more_id: string
  __v: number
}

export interface PacksResponse {
  cardPacks: CardPack[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}

export interface ArgsForGetCards {
  min?: number
  max?: number
  userId?: string
  page?: number
  pageCount?: number
  sortPacks?: string
  packName: string
  block?: boolean
}

export interface CreatePack {
  name: string
  deckCover?: string
  private?: boolean
}
