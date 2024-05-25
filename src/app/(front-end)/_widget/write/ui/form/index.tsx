import Shared from 'src/app/(front-end)/___shared'

interface IForm extends React.HTMLProps<HTMLTextAreaElement> {}

const Form = (props: IForm) => {
  return (
    <Shared.UI.Element.Stack $direction='column' $gap={1} $fullWidth>
      <Shared.UI.Element.Stack $gap={1} $alignItems='start' $fullWidth>
        <Shared.UI.Element.TextArea {...props} />
      </Shared.UI.Element.Stack>
    </Shared.UI.Element.Stack>
  )
}

export default Form
