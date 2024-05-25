import { useRouter } from 'next/navigation'
import { IUser } from 'src/@types/user'
import Shared from 'src/app/(front-end)/___shared'
import Widget from 'src/app/(front-end)/_widget'

const ShortInfo = (props: { user: IUser; nav: boolean }) => {
  const router = useRouter()

  const navigation = () => {
    if (!props.nav) return
    router.push(`/user/${props.user._id}`)
  }

  return (
    <Shared.UI.Element.Stack
      $gap={1}
      $fullWidth
      onClick={navigation}
      style={{ cursor: props?.nav ? 'pointer' : 'auto' }}
    >
      <Widget.User.ProfileImage src='https://picsum.photos/200' alt='profile-img' />
      <Shared.UI.Element.Typography $fontSize='1.5rem' $fontWeight={700}>
        {props.user?.nickname}
      </Shared.UI.Element.Typography>
    </Shared.UI.Element.Stack>
  )
}

export default ShortInfo
