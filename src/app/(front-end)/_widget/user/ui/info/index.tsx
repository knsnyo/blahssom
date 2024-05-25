import { IUser } from 'src/@types/user'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const Info = (props: { user: IUser }) => {
  const { user } = props

  return (
    <Shared.UI.Element.Stack $fullWidth $direction='column' $paddingX={1}>
      <Shared.UI.Element.Stack $fullWidth $direction='row' $justifyContent='end'>
        <Feature.Action.UI.FollowButton user={user} />
      </Shared.UI.Element.Stack>
      <br />
      <Shared.UI.Element.Typography $fontWeight={700} $fontSize='1.5rem'>
        {user?.nickname}
      </Shared.UI.Element.Typography>
      <br />
      {user?.createdAt && (
        <Shared.UI.Element.Typography $fontSize='1.5rem'>
          가입일자: {new Date(user.createdAt).toLocaleDateString()}
        </Shared.UI.Element.Typography>
      )}
    </Shared.UI.Element.Stack>
  )
}

export default Info
