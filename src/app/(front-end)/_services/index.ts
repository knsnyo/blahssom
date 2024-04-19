import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from 'src/app/(front-end)/_constants/token'
import { getToken } from 'src/app/(front-end)/_utils/cookie'

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
}

export const CUSTOM_FETCH = async (params: IParams) => {
  const response = await fetch(params.url, {
    method: params.method,
    headers: { Authorization: `Bearer ${getToken(ACCESS_TOKEN)}` },
  })
  if (response.ok) return response

  const rotate = await fetch(`/api/auth/refresh`, {
    method: METHOD.GET,
    headers: { Authorization: `Bearer ${getToken(REFRESH_TOKEN)}` },
  })
  if (!rotate.ok) return response

  const refetch = await fetch(params.url, {
    method: params.method,
    headers: { Authorization: `Bearer ${getToken(ACCESS_TOKEN)}` },
  })

  return refetch
}
