import { ISetNicknameBody } from 'src/@types/user/body/set-nickname'
import Shared from 'src/app/(front-end)/____shared/'

const setNickname = async (body: ISetNicknameBody) => {
  const response = await Shared.TOKEN_FETCH({
    url: `/api/user/set-nickname`,
    method: Shared.METHOD.PATCH,
    body: JSON.stringify(body),
  })
  const json = await response.json()
  return { ...json, status: response.status, ok: response.ok }
}

const getProfile = async () => {
  const response = await Shared.TOKEN_FETCH({
    url: '/api/user/profile',
    method: Shared.METHOD.GET,
  })

  return response
}

const User = {
  setNickname,
  getProfile,
}

export default User
