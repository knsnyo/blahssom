import ServerError from 'src/app/api/_error'

const handleError = (error: unknown) => {
  console.log(error)
  if (error instanceof ServerError) {
    return Response.json(
      { message: error.message },
      { status: error.statusCode },
    )
  }
  return Response.json({ message: error })
}

export default handleError
