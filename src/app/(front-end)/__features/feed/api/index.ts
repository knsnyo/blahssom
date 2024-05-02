import { IQuery } from 'src/@types/_query'
import { IFeedBody } from 'src/@types/feed/body'
import { METHOD, TOKEN_FETCH } from 'src/app/(front-end)/__features/_hooks/fetch'

const writeFeed = async (body: IFeedBody) => {
  const response = await TOKEN_FETCH({
    url: `/api/feed`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

const writeDependentFeed = async (body: IFeedBody) => {
  // TODO: fix
  if (!body.feed) throw Error()

  const response = await TOKEN_FETCH({
    url: `/api/feed/dependant/${body.feed}`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

const queryFeeds = async (query?: IQuery) => {
  const response = await TOKEN_FETCH({
    url: `/api/feed`,
    method: METHOD.GET,
    query,
  })

  return response
}

const detailFeed = async (id: string) => {
  const response = await TOKEN_FETCH({
    url: `/api/feed/detail/${id}`,
    method: METHOD.GET,
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
