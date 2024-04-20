'use client'

import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'
import { Image } from 'src/app/(front-end)/_widget/feed/ui/image'
import { Center, Container, PostInfo, Side } from './styled'

const Card = () => {
  return (
    <Container>
      <Side>
        <Widget.User.ProfileImage
          src='https://picsum.photos/200'
          alt='profile-img'
        />
      </Side>
      <Center>
        <Shared.UI.Element.Stack justifyContent='space-between'>
          <Shared.UI.Element.Stack gap={1} justifyContent='start'>
            <Shared.UI.Element.Typography fontWeight={700}>
              Nickname
            </Shared.UI.Element.Typography>
            <Shared.UI.Element.Typography
              color={Shared.STYLE.COLOR.grey.e4e4e4}
            >
              3월 24일
            </Shared.UI.Element.Typography>
          </Shared.UI.Element.Stack>
          <Shared.UI.Element.Icon.More fontSize='1.5rem' />
        </Shared.UI.Element.Stack>
        <Shared.UI.Element.Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          quaerat delectus reiciendis dolore officia similique hic sit omnis,
          aliquam, nostrum numquam ipsam iure incidunt ullam in ducimus optio
          adipisci harum?
        </Shared.UI.Element.Typography>
        <br />
        <Image src='https://picsum.photos/200' alt='post1-image' />
        <br />
        <Shared.UI.Element.Stack
          alignItems='center'
          justifyContent='space-between'
        >
          <PostInfo>
            <Shared.UI.Element.Icon.Chat fontSize='1.5rem' />
            <Shared.UI.Element.Typography>123</Shared.UI.Element.Typography>
          </PostInfo>
          <PostInfo>
            <Shared.UI.Element.Icon.HeartOutline fontSize='1.5rem' />
            <Shared.UI.Element.Typography>123</Shared.UI.Element.Typography>
          </PostInfo>
          <PostInfo>
            <Shared.UI.Element.Icon.Chart fontSize='1.5rem' />
            <Shared.UI.Element.Typography>123</Shared.UI.Element.Typography>
          </PostInfo>
          <PostInfo>
            <Shared.UI.Element.Icon.BookmarkOutline fontSize='1.5rem' />
            <Shared.UI.Element.Icon.Share fontSize='1.5rem' />
          </PostInfo>
        </Shared.UI.Element.Stack>
      </Center>
    </Container>
  )
}

export default Card
