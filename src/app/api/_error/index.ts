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
  INVALID_TOKEN: { message: 'INVALID TOKEN', statusCode: 401 },
  DUPLICATED_ID: { message: 'DUPLICATED ID', statusCode: 409 },
  NO_USER: { message: 'NO USER', statusCode: 404 },
  UNAUTHENTICATED: { message: 'UN AUTHENTICATED', statusCode: 401 },
}
