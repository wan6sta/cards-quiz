export const errorMessageHandler = (str: string | undefined) => {
  if (str === undefined) return
  const errorMessageArr = str
    .split(' ')
    .map((word, idx) =>
      idx === 0 ? word.replace(word[0], `${word[0].toUpperCase()}`) : word
    )

  let fullStr = errorMessageArr.slice(0, errorMessageArr.length - 1).join(' ')
  // fix
  if (fullStr === 'Bad token!') {
    fullStr = 'Link is out dated, try to get new one'
  }

  return fullStr
}
