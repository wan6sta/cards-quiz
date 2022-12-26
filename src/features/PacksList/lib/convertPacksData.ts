export const convertPacksData = <T extends { updated: string }>(
  userPacks: T[]
): T[] => {
  return userPacks.map(card => {
    const newUpdated = card.updated.slice(0, 10).split('-').reverse().join('.')
    return { ...card, updated: newUpdated }
  })
}
