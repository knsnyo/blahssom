import { ISetNicknameBody } from 'src/@types/user/body/set-nickname'
import Feature from 'src/app/(front-end)/__features'

const setNickname = async (body: ISetNicknameBody) => {
  const response = await Feature.Hooks.TOKEN_FETCH({
    url: `/api/user/set-nickname`,
    method: Feature.Hooks.METHOD.PATCH,
    body: JSON.stringify(body),
  })
  const json = await response.json()
  return { ...json, status: response.status, ok: response.ok }
}

const getProfile = async () => {
  const response = await Feature.Hooks.TOKEN_FETCH({
    url: '/api/user/profile',
    method: Feature.Hooks.METHOD.GET,
  })

  return response
}

const Api = {
  setNickname,
  getProfile,
}

export default Api
