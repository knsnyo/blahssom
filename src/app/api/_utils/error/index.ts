import ServerError from 'src/app/api/_error'

const handleError = (error: unknown) => {
  if (error instanceof ServerError) {
    return Response.json(
      { message: error?.message, statusCode: error?.statusCode },
      { status: error?.statusCode },
    )
  }
  return Response.json({ message: 'BAD REQUEST' }, { status: 400 })
}

export default handleError
