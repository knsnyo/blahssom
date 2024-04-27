import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const useLogic = (feed: string) => {
  const { content, setContent } = Shared.Hooks.useTextArea()

  const submit = async () => {
    const response = await Feature.Feed.Api.writeDependentFeed({ content, feed })
    if (!response.ok) return
  }

  const handler = {
    content: setContent,
    submit,
  }

  return { content, handler }
}

export default useLogic
