import Shared from 'src/app/(front-end)/___shared'
import { ProfileImage } from 'src/app/(front-end)/_widget/user/ui/profile-image'

const Info = () => {
  return (
    <Shared.UI.Element.Stack fullWidth direction='column' paddingX={1}>
      <ProfileImage src='https://picsum.photos/200' size={8} />
      <br />
      <Shared.UI.Element.Typography fontWeight={700}>Nickname</Shared.UI.Element.Typography>
    </Shared.UI.Element.Stack>
  )
}

export default Info
