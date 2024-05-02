import { ISetNicknameBody } from 'src/@types/user/body/set-nickname'
import { METHOD, TOKEN_FETCH } from 'src/app/(front-end)/__features/_hooks/fetch'

const setNickname = async (body: ISetNicknameBody) => {
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

  return response
}

const Api = {
  setNickname,
  getProfile,
}

export default Api
