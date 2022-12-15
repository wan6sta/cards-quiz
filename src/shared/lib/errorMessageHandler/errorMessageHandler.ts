export const errorMessageHandler = (str: string | undefined) => {
  if (str === undefined) return
  const errorMessageArr = str
    .split(' ')
    .map((word, idx) =>
      idx === 0 ? word.replace(word[0], `${word[0].toUpperCase()}`) : word
    )
  return errorMessageArr.slice(0, errorMessageArr.length - 1).join(' ')
}
