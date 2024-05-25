import { IQuery } from 'src/@types/_query'
import { ACCESS_TOKEN, REFRESH_TOKEN, getToken } from 'src/app/(front-end)/___shared/cookie'

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

interface IParams {
  url: string
  method: string
  body?: BodyInit | null | undefined
  query?: IQuery
}

export const TOKEN_FETCH = async (params: IParams) => {
  const query = generateQueryString(params.query)
  const response = await fetch(`${params.url}?${query}`, {
    method: params.method,
    headers: { Authorization: `Bearer ${getToken(ACCESS_TOKEN)}` },
    body: params.body,
  })
  if (response.ok) return response

  const rotate = await fetch(`/api/auth/refresh`, {
    method: METHOD.GET,
    headers: { Authorization: `Bearer ${getToken(REFRESH_TOKEN)}` },
  })
  if (!rotate.ok) return rotate

  const refetch = await fetch(`${params.url}?${query}`, {
    method: params.method,
    headers: { Authorization: `Bearer ${getToken(ACCESS_TOKEN)}` },
    body: params.body,
  })

  return refetch
}

const generateQueryString = (query?: IQuery) => {
  const QUERY = new URLSearchParams()
  if (query?.lastId) QUERY.append('lastId', query.lastId)
  if (query?.feedId) QUERY.append('feedId', query.feedId)
  if (query?.author) QUERY.append('author', query.author)

  return QUERY
}
