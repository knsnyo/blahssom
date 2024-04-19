class ServerError extends Error {
  public statusCode: number

  constructor(type: IError) {
    super(type.message)
    this.statusCode = type.statusCode
  }
}

interface IError {
  message: string
  statusCode: number
}

export default ServerError

interface IErrorMap {
  [key: string]: IError
}

export const AUTH_ERROR: IErrorMap = {
  INVALID_TOKEN: { message: 'Invalid Token', statusCode: 401 },
  DUPLICATED_ID: { message: 'Duplicated ID', statusCode: 409 },
  NO_USER: { message: 'No User', statusCode: 404 },
  UNAUTHENTICATED: { message: 'Unauthentication', statusCode: 401 },
  TOKEN_EXPIRED: { message: 'Token Expired', statusCode: 401 },
}
