import type { IResponse } from 'src/app/(front-end)/__features/_hooks/custom-query'

export const generateData = async <T>(response: Response): Promise<IResponse<T>> => {
  const json = await response.json()

  return {
    status: response.status,
    ok: response.ok,
    item: json?.item as T,
    items: json?.items as T[],
  }
}
