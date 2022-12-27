import { useSearchParams } from 'react-router-dom'
import { identity, pickBy } from 'lodash-es'

export const useUlrParams = () => {
  const [searchParams, _] = useSearchParams()

  const currentSearchParams = [...searchParams.entries()].reduce(
    (acc, [param, value]) => ({
      ...acc,
      [param]: value
    }),
    {}
  )

  return pickBy(currentSearchParams, identity)
}
