import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'

const Write = () => {
  return (
    <Shared.UI.Element.Stack direction='column' gap={1}>
      <Shared.UI.Element.Stack
        gap={1}
        alignItems='center'
        fullWidth
        paddingX={1}
      >
        <Widget.User.ProfileImage src='https://picsum.photos/200' />
        <input
          type='text'
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            boxSizing: 'border-box',
            padding: '1rem',
            outline: 'none',
          }}
          placeholder='reply'
        />
      </Shared.UI.Element.Stack>
      <Shared.UI.Element.Stack justifyContent='space-between' fullWidth>
        <div />
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

export default Write
