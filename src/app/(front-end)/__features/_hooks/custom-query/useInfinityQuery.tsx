import React from 'react'
import { I_ID } from 'src/@types/__init'
import { IQuery } from 'src/@types/_query'
import { IResponse } from 'src/app/(front-end)/__features/_hooks/custom-query'
import { useAppDispatch } from 'src/app/(front-end)/__features/_hooks/redux'
import { Action } from 'src/app/(front-end)/__features/user/model'

interface IUseInfinityQuery<T extends I_ID> {
  loading: boolean
  error: boolean
  hasNext: boolean
  data: T[]
  refetch: () => Promise<void>
}

const useInfinityQuery = <T extends I_ID>(
  api: (params: IQuery) => Promise<IResponse<T>>,
  query: IQuery,
): IUseInfinityQuery<T> => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [hasNext, setHasNext] = React.useState(true)
  const [data, setData] = React.useState<T[]>([] as T[])

  const dispatch = useAppDispatch()

  const refetch = async () => {
    setLoading(true)
    setError(false)
    if (loading) return

    const lastId = data.slice(-1)?.[0]?._id
    const QUERY = { ...query, lastId }
    const response = await api(QUERY)

    if (!response.ok) {
      setLoading(false)
      setError(true)
      setHasNext(false)
      if (response.status === 401) dispatch(Action.signOut())
      return
    }

    const { items, hasNext: _hasNext } = response

    setLoading(false)
    setError(false)
    setHasNext(_hasNext!)
    setData((prev) => {
      return prev.concat(items!)
    })
  }

  React.useEffect(() => {}, [data])

  return { loading, error, data, hasNext, refetch }
}

export default useInfinityQuery
