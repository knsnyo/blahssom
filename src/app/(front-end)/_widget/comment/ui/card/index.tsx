import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'

const Comment = () => {
  return (
    <Shared.UI.Element.Stack direction='column' fullWidth>
      <Shared.UI.Element.Stack fullWidth gap={1}>
        <Widget.User.ProfileImage src='https://picsum.photos/200' />
        <Shared.UI.Element.Stack fullWidth direction='column'>
          <Shared.UI.Element.Stack direction='column' fullWidth style={{ height: '3rem' }}>
            <Shared.UI.Element.Stack fullWidth direction='row' justifyContent='space-between'>
              <Shared.UI.Element.Stack gap={0.5}>
                <Shared.UI.Element.Typography fontWeight={700}>
                  nickname
                </Shared.UI.Element.Typography>
                <Shared.UI.Element.Typography color={Shared.STYLE.COLOR.grey[707070]}>
                  1 hour
                </Shared.UI.Element.Typography>
              </Shared.UI.Element.Stack>
              <Shared.UI.Element.Icon.More />
            </Shared.UI.Element.Stack>
            <Shared.UI.Element.Typography>content</Shared.UI.Element.Typography>
          </Shared.UI.Element.Stack>
          <br />
          <Shared.UI.Element.Stack fullWidth justifyContent='space-between'>
            <Shared.UI.Element.Icon.Chat />
            <Shared.UI.Element.Icon.HeartOutline />
            <Shared.UI.Element.Icon.BookmarkOutline />
            <Shared.UI.Element.Icon.Share />
          </Shared.UI.Element.Stack>
        </Shared.UI.Element.Stack>
      </Shared.UI.Element.Stack>
    </Shared.UI.Element.Stack>
  )
}

export default Comment
