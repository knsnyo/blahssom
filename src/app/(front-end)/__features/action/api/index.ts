import { METHOD, TOKEN_FETCH } from 'src/app/(front-end)/__features/_hooks/fetch'

const follow = async (id: string) => {
  const response = await TOKEN_FETCH({
    url: `/api/action/follow/${id}`,
    method: METHOD.POST,
  })

  return response
}

const unfollow = async (id: string) => {
  const response = await TOKEN_FETCH({
    url: `/api/action/follow/${id}`,
    method: METHOD.DELETE,
  })

  return response
}

const Api = { follow, unfollow }

export default Api
