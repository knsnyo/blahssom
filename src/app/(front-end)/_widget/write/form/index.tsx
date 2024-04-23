import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'

const Form = () => {
  return (
    <Shared.UI.Element.Stack direction='column' gap={1} fullWidth>
      <Shared.UI.Element.Stack
        gap={1}
        alignItems='center'
        fullWidth
        paddingX={1}
      >
        <Widget.User.ProfileImage src='https://picsum.photos/200' />
        <Shared.UI.Element.TextArea placeholder='reply' />
      </Shared.UI.Element.Stack>
      <Shared.UI.Element.Stack justifyContent='end' fullWidth>
        <Shared.UI.Element.Button
          theme={Shared.UI.Element.Button.TYPE.WRITE}
          disabled
        >
          Reply
        </Shared.UI.Element.Button>
      </Shared.UI.Element.Stack>
    </Shared.UI.Element.Stack>
  )
}

export default Form
