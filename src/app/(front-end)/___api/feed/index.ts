import { IFeedBody } from 'src/@types/feed/body'
import Shared from 'src/app/(front-end)/____shared'

export const writeFeed = async (body: IFeedBody) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed`,
    method: Shared.METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

export const queryFeed = async () => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed`,
    method: Shared.METHOD.GET,
  })

  return response
}
