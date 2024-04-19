'use client'

import Typography from 'src/app/_components/element/typography'
import { ProfileImage } from 'src/app/_components/factory/feed/styled'
import { Container, UserInfo } from 'src/app/_components/factory/friend/styled'
import { COLOR_BLACK, COLOR_GREY_E4E4E4 } from 'src/app/_constants/color'

const FriendCard = ({ nickname }: { nickname?: string }) => {
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

export default FriendCard
