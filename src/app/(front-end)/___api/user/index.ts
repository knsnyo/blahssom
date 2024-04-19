import { SetNicknameBody } from 'src/@types/user'
import Shared from 'src/app/(front-end)/____shared/'

const setNickname = async (body: SetNicknameBody) => {
  const response = await Shared.CUSTOM_FETCH({
    url: `/api/user/set-nickname`,
    method: Shared.METHOD.PATCH,
    body: JSON.stringify(body),
  })
  const json = await response.json()
  return { ...json, status: response.status, ok: response.ok }
}

const User = {
  setNickname,
}

export default User
