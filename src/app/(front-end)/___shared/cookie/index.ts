export const ACCESS_TOKEN = 'accessToken'
export const REFRESH_TOKEN = 'refreshToken'

export const getToken = (name: string) => {
  const cookie = document.cookie?.split('; ')
  let token = cookie?.find((c) => {
    return c.startsWith(name)
  })
  token = token?.split('=')[1]

  return token
}
