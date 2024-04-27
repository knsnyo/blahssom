import Shared from 'src/app/(front-end)/____shared'
import { apiWriteDependentFeed } from 'src/app/(front-end)/___api/feed'

const useLogic = (feed: string) => {
  const { content, setContent } = Shared.Hooks.useTextArea()

  const submit = async () => {
    const response = await apiWriteDependentFeed({ content, feed })
    if (!response.ok) return
  }

  const handler = {
    content: setContent,
    submit,
  }

  return { content, handler }
}

export default useLogic
