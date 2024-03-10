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
  INVALID_TOKEN: { message: 'INVALID_TOKEN', statusCode: 401 },
  DUPLICATED_ID: { message: 'DUPLICATED_ID', statusCode: 409 },
  NO_USER: { message: 'NO_USER', statusCode: 404 },
  UNAUTHENTICATED: { message: 'UNAUTHENTICATED', statusCode: 401 },
  SET_NICKNAME: { message: 'SET_NICKNAME', statusCode: 403 },
}

export const USER_ERROR: IErrorMap = {
  DUPLICATED_NICKNAME: { message: 'DUPLICATED_NICKNAME', statusCode: 409 },
}
