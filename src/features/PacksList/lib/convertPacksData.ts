export const convertPacksData = <T>(userPacks: T[]): T[] => {
  return userPacks.map(card => {
    // @ts-expect-error
    const newUpdated = card.updated.slice(0, 10).split('-').reverse().join('.')
    return { ...card, updated: newUpdated }
  })
}
