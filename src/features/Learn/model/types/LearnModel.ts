import { Card } from '@/features/CardList/model/types/CardsModel'

export interface SetGradePayload {
  grade: number
  card_id: string
}

export interface GradeResponse {
  updatedGrade: Card
  token: string
  tokenDeathTime: number
}
