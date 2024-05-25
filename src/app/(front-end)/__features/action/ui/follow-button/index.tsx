import { IUser } from 'src/@types/user'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const FollowButton = (props: { user: IUser }) => {
  const my = Feature.Hooks.useAppSelector((state) => {
    return state.user.user
  })

  return props.user?._id !== my?._id ? (
    <Shared.UI.Element.Button {...props} theme={Shared.UI.Element.Button.TYPE.SMALL}>
      팔로우
    </Shared.UI.Element.Button>
  ) : (
    <></>
  )
}

export default FollowButton
