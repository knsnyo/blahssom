'use client'

import Typography from 'src/app/_components/element/typography'
import { Container } from 'src/app/_components/factory/friend/styled'
import { COLOR_BLACK, COLOR_GREY_E4E4E4 } from 'src/app/_constants/color'

const FriendCard = ({ nickname }: { nickname?: string }) => {
  return (
    <Container>
      <Typography color={COLOR_BLACK} fontSize='2rem'>
        {nickname ?? 'NickName'}
      </Typography>
      <Typography color={COLOR_GREY_E4E4E4} fontSize='1.5rem'>
        message
      </Typography>
    </Container>
  )
}

export default FriendCard
