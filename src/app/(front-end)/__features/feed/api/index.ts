import { IQuery } from 'src/@types/_query'
import { IFeedBody } from 'src/@types/feed/body'
import Shared from 'src/app/(front-end)/___shared'

const writeFeed = async (body: IFeedBody) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed`,
    method: Shared.METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

const writeDependentFeed = async (body: IFeedBody) => {
  // TODO: fix
  if (!body.feed) throw Error()

  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed/dependant/${body.feed}`,
    method: Shared.METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

const queryFeeds = async (query?: IQuery) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed`,
    method: Shared.METHOD.GET,
    query,
  })

  return response
}

const detailFeed = async (id: string) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed/detail/${id}`,
    method: Shared.METHOD.GET,
  })

  return response
}

const Api = {
  writeDependentFeed,
  writeFeed,
  queryFeeds,
  detailFeed,
}

export default Api
