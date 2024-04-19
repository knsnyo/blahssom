'use client'

import {
  COLOR_BLACK,
  COLOR_GREY_E4E4E4,
} from 'src/app/(front-end)/____shared/style/color'
import Typography from 'src/app/(front-end)/_widget/element/typography'
import { ProfileImage } from 'src/app/(front-end)/_widget/factory/feed/styled'
import {
  Container,
  UserInfo,
} from 'src/app/(front-end)/_widget/factory/friend/styled'

const Friend = ({ nickname }: { nickname?: string }) => {
  return (
    <Container>
      <ProfileImage src='https://picsum.photos/200' alt='profile' />
      <UserInfo>
        <Typography color={COLOR_BLACK} fontSize='1.5rem'>
          {nickname ?? 'NickName'}
        </Typography>
        <Typography color={COLOR_GREY_E4E4E4} fontSize='1rem'>
          message
        </Typography>
      </UserInfo>
    </Container>
  )
}

export default Friend
