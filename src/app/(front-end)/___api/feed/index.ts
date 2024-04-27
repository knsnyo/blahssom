import { IQuery } from 'src/@types/_query'
import { IFeedBody } from 'src/@types/feed/body'
import Shared from 'src/app/(front-end)/____shared'

export const apiWriteFeed = async (body: IFeedBody) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed`,
    method: Shared.METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

export const apiWriteDependentFeed = async (body: IFeedBody) => {
  // TODO: fix
  if (!body.feed) throw Error()

  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed/dependant/${body.feed}`,
    method: Shared.METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

export const apiQueryFeeds = async (query?: IQuery) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed`,
    method: Shared.METHOD.GET,
    query,
  })

  return response
}

export const apiDetailFeed = async (id: string) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed/detail/${id}`,
    method: Shared.METHOD.GET,
  })

  return response
}

export const apiQueryDependentFeeds = async (query?: IQuery) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/feed/dependant/${query?.feedId}`,
    method: Shared.METHOD.GET,
    query,
  })

  return response
}
