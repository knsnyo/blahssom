import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  getToken,
} from 'src/app/(front-end)/____shared/cookie'

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
}

export const TOKEN_FETCH = async (params: IParams) => {
  const response = await fetch(params.url, {
    method: params.method,
    headers: { Authorization: `Bearer ${getToken(ACCESS_TOKEN)}` },
    body: params.body,
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
    body: params.body,
  })

  return refetch
}
