export const getToken = (name: string) => {
  const cookie = document.cookie?.split('; ')
  const token = cookie?.find((c) => {
    return c.startsWith(name)
  })
  const accessToken = token?.split('=')[1]

  return accessToken
}
