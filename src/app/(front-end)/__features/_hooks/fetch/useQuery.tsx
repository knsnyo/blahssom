import React from 'react'
import { useAppDispatch } from 'src/app/(front-end)/__features/_hooks/redux'
import { Action } from 'src/app/(front-end)/__features/user/model'

interface IUseQuery<T> {
  loading: boolean
  error: boolean
  data: T
}

const useQuery = <T extends object>(api: () => Promise<Response>): IUseQuery<T> => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [data, setData] = React.useState<T>({} as T)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    ;(async () => {
      setLoading(true)
      setError(false)

      const response = await api()
      if (!response.ok) {
        setLoading(false)
        setError(true)
        dispatch(Action.signOut())
        return
      }

      const { item } = await response.json()

      setLoading(false)
      setError(false)
      setData(item)
    })()
  }, [])

  return { loading, error, data }
}

export default useQuery
