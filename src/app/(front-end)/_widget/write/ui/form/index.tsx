import Shared from 'src/app/(front-end)/___shared'
import Widget from 'src/app/(front-end)/_widget'

interface IForm extends React.HTMLProps<HTMLTextAreaElement> {}

const Form = (props: IForm) => {
  return (
    <Shared.UI.Element.Stack $direction='column' $gap={1} $fullWidth>
      <Shared.UI.Element.Stack $gap={1} $alignItems='start' $fullWidth>
        <Widget.User.ProfileImage src='https://picsum.photos/200' />
        <Shared.UI.Element.TextArea {...props} />
      </Shared.UI.Element.Stack>
    </Shared.UI.Element.Stack>
  )
}

export default Form
