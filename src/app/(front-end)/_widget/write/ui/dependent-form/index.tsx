import Shared from 'src/app/(front-end)/___shared'
import Widget from 'src/app/(front-end)/_widget'
import useLogic from 'src/app/(front-end)/_widget/write/ui/dependent-form/useLogic'

const DependentForm = (props: { id: string }) => {
  const { content, handler } = useLogic(props.id)

  return (
    <Shared.UI.Element.Stack $fullWidth $direction='column' $alignItems='end'>
      <Widget.Write.Form placeholder='댓글' value={content} onChange={handler.content} />
      <Widget.Write.Button onClick={handler.submit} disabled={content.trim().length === 0} />
    </Shared.UI.Element.Stack>
  )
}

export default DependentForm
