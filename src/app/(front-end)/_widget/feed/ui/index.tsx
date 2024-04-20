'use client'

import Shared from 'src/app/(front-end)/____shared'

import {
  Center,
  Container,
  PostImage,
  PostInfo,
  ProfileImage,
  Side,
} from './styled'

const Feed = () => {
  return (
    <Container>
      <Side>
        <ProfileImage src='https://picsum.photos/200' alt='profile-img' />
      </Side>
      <Center>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Shared.UI.Element.Typography fontWeight={700}>
              Nickname
            </Shared.UI.Element.Typography>
            <Shared.UI.Element.Typography
              color={Shared.STYLE.COLOR.grey.e4e4e4}
            >
              3월 24일
            </Shared.UI.Element.Typography>
          </div>
          <Shared.UI.Element.Icon.More fontSize='1.5rem' />
        </div>
        <Shared.UI.Element.Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          quaerat delectus reiciendis dolore officia similique hic sit omnis,
          aliquam, nostrum numquam ipsam iure incidunt ullam in ducimus optio
          adipisci harum?
        </Shared.UI.Element.Typography>
        <br />
        <PostImage src='https://picsum.photos/200' alt='post1-image' />
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
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
        </div>
      </Center>
    </Container>
  )
}

export default Feed
