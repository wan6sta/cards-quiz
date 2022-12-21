import { CardPack } from '../models/packModel'

export const convertData = (userPacks: CardPack[]): CardPack[] => {
  return userPacks.map(card => {
    const newUpdated = card.updated.slice(0, 10).split('-').reverse().join('.')
    return { ...card, updated: newUpdated }
  })
}
