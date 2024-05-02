import { IQuery } from 'src/@types/_query'
import { IFeedBody } from 'src/@types/feed/body'
import Feature from 'src/app/(front-end)/__features'

const writeFeed = async (body: IFeedBody) => {
  const response = await Feature.Hooks.TOKEN_FETCH({
    url: `/api/feed`,
    method: Feature.Hooks.METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

const writeDependentFeed = async (body: IFeedBody) => {
  // TODO: fix
  if (!body.feed) throw Error()

  const response = await Feature.Hooks.TOKEN_FETCH({
    url: `/api/feed/dependant/${body.feed}`,
    method: Feature.Hooks.METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

const queryFeeds = async (query?: IQuery) => {
  const response = await Feature.Hooks.TOKEN_FETCH({
    url: `/api/feed`,
    method: Feature.Hooks.METHOD.GET,
    query,
  })

  return response
}

const detailFeed = async (id: string) => {
  const response = await Feature.Hooks.TOKEN_FETCH({
    url: `/api/feed/detail/${id}`,
    method: Feature.Hooks.METHOD.GET,
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
