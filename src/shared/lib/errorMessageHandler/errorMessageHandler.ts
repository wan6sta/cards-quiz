export const errorMessageHandler = (str: string | undefined) => {
  if (str === undefined) return
  const errorMessageArr = str.split(' ')
  return errorMessageArr.slice(0, errorMessageArr.length - 1).join(' ')
}
