'use client'

import Shared from 'src/app/(front-end)/____shared'

import {
  Container,
  ProfileImage,
  UserInfo,
} from 'src/app/(front-end)/_widget/friend/styled'

const Friend = ({ nickname }: { nickname?: string }) => {
  return (
    <Container>
      <ProfileImage src='https://picsum.photos/200' alt='profile' />
      <UserInfo>
        <Shared.UI.Element.Typography
          color={Shared.STYLE.COLOR.black}
          fontSize='1.5rem'
        >
          {nickname ?? 'NickName'}
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography
          color={Shared.STYLE.COLOR.grey.e4e4e4}
          fontSize='1rem'
        >
          message
        </Shared.UI.Element.Typography>
      </UserInfo>
    </Container>
  )
}

export default Friend
