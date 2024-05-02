import React from 'react'
import type { IResponse } from 'src/app/(front-end)/__features/_hooks/custom-query'
import { useAppDispatch } from 'src/app/(front-end)/__features/_hooks/redux'
import { Action } from 'src/app/(front-end)/__features/user/model'

interface IUseQuery<T> {
  loading: boolean
  error: boolean
  data: T
}

const useQuery = <T extends object>(api: () => Promise<IResponse<T>>): IUseQuery<T> => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [data, setData] = React.useState<T>({} as T)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    ;(async () => {
      setLoading(true)
      setError(false)

      const response: IResponse<T> = (await api()) as IResponse<T>

      if (!response.ok) {
        setLoading(false)
        setError(true)
        if (response.status === 401) dispatch(Action.signOut())
        return
      }

      const { item } = response

      setLoading(false)
      setError(false)
      setData(item ?? ({} as T))
    })()
  }, [])

  return { loading, error, data }
}

export default useQuery
