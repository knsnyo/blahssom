class ServerError extends Error {
  private statusCode: number

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
}

export default ServerError
