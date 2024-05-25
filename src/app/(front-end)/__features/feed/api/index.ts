import { IQuery } from 'src/@types/_query'
import { IFeed } from 'src/@types/feed'
import { IFeedBody } from 'src/@types/feed/body'
import { METHOD, TOKEN_FETCH } from 'src/app/(front-end)/__features/_hooks/fetch'
import { generateData } from 'src/app/(front-end)/__features/_utils'

const writeFeed = async (body: IFeedBody) => {
  const response = await TOKEN_FETCH({
    url: `/api/feed`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  })

  return response
}

const writeDependentFeed = async (body: IFeedBody) => {
  if (!body.feed) throw Error()

  const response = await TOKEN_FETCH({
    url: `/api/feed`,
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

  const json = await generateData<IFeed>(response)
  return json
}

const detailFeed = async (id: string) => {
  const response = await TOKEN_FETCH({
    url: `/api/feed/detail/${id}`,
    method: METHOD.GET,
  })
  const json = await generateData<IFeed>(response)
  return json
}

const Api = {
  writeDependentFeed,
  writeFeed,
  queryFeeds,
  detailFeed,
}

export default Api
