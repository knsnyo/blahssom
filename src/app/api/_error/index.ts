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

export const AUTH_ERROR: { [key: string]: IError } = {
  INVALID_TOKEN: { message: 'INVALID_TOKEN', statusCode: 401 },
  DUPLICATED_ID: { message: 'DUPLICATED_ID', statusCode: 409 },
}

export default ServerError
