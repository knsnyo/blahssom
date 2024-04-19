import { SetNicknameBody } from 'src/@types/user'
import { ACCESS_TOKEN } from 'src/app/(front-end)/_constants/token'
import { METHOD } from 'src/app/(front-end)/_services'
import { getToken } from 'src/app/(front-end)/_utils/cookie'

export const apiSetNickname = async (body: SetNicknameBody) => {
  const URL = `/api/user/set-nickname`
  const token = getToken(ACCESS_TOKEN)
  const response = await fetch(URL, {
    method: METHOD.PATCH,
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const json = await response.json()
  return { ...json, status: response.status, ok: response.ok }
}
