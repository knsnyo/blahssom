import { IUser } from 'src/@types/user'
import Shared from 'src/app/(front-end)/___shared'
import useLogic from 'src/app/(front-end)/__features/action/ui/follow-button/logic'

const FollowButton = (props: { user: IUser }) => {
  const { value, handler } = useLogic(props.user)

  return !value.isMe ? (
    <Shared.UI.Element.Button
      {...props}
      theme={Shared.UI.Element.Button.TYPE.SMALL}
      $opacity={value.isFollow}
      onClick={value.isFollow ? handler.unfollow : handler.follow}
    >
      {value.isFollow ? '언팔로우' : '팔로우'}
    </Shared.UI.Element.Button>
  ) : (
    <></>
  )
}

export default FollowButton
