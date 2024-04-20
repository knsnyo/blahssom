'use client'

import Shared from 'src/app/(front-end)/____shared'
import Typography from 'src/app/(front-end)/____shared/ui/element/typography'
import { ProfileImage } from 'src/app/(front-end)/_widget/feed/styled'
import { Container, UserInfo } from 'src/app/(front-end)/_widget/friend/styled'

const Friend = ({ nickname }: { nickname?: string }) => {
  return (
    <Container>
      <ProfileImage src='https://picsum.photos/200' alt='profile' />
      <UserInfo>
        <Typography color={Shared.STYLE.COLOR.black} fontSize='1.5rem'>
          {nickname ?? 'NickName'}
        </Typography>
        <Typography color={Shared.STYLE.COLOR.grey.e4e4e4} fontSize='1rem'>
          message
        </Typography>
      </UserInfo>
    </Container>
  )
}

export default Friend
