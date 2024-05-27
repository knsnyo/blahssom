import { User } from '@prisma/client'
import { INickname } from 'src/@types/user/body'
import { METHOD, TOKEN_FETCH } from 'src/app/(front-end)/__features/_hooks/fetch'
import { generateData } from 'src/app/(front-end)/__features/_utils'

const setNickname = async (body: INickname) => {
  const response = await TOKEN_FETCH({
    url: `/api/user/set-nickname`,
    method: METHOD.PATCH,
    body: JSON.stringify(body),
  })
  const json = await response.json()
  return { ...json, status: response.status, ok: response.ok }
}

const getProfile = async () => {
  const response = await TOKEN_FETCH({
    url: '/api/user/profile',
    method: METHOD.GET,
  })
  const json = await generateData<User>(response)
  return json
}

const getUser = async (id: string) => {
  const response = await TOKEN_FETCH({
    url: `/api/user/detail/${id}`,
    method: METHOD.GET,
  })

  const json = await generateData<User>(response)

  return json
}

const Api = { setNickname, getProfile, getUser }

export default Api
