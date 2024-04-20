'use client'

import Shared from 'src/app/(front-end)/____shared'
import {
  IconBookmarkOutline,
  IconChart,
  IconChat,
  IconHeartOutline,
  IconMore,
  IconShare,
} from 'src/app/(front-end)/____shared/ui/element/icon'
import Typography from 'src/app/(front-end)/____shared/ui/element/typography'
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
            <Typography fontWeight={700}>Nickname</Typography>
            <Typography color={Shared.STYLE.COLOR.grey.e4e4e4}>
              3월 24일
            </Typography>
          </div>
          <IconMore fontSize='1.5rem' />
        </div>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          quaerat delectus reiciendis dolore officia similique hic sit omnis,
          aliquam, nostrum numquam ipsam iure incidunt ullam in ducimus optio
          adipisci harum?
        </Typography>
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
            <IconChat fontSize='1.5rem' />
            <Typography>123</Typography>
          </PostInfo>
          <PostInfo>
            <IconHeartOutline fontSize='1.5rem' />
            <Typography>123</Typography>
          </PostInfo>
          <PostInfo>
            <IconChart fontSize='1.5rem' />
            <Typography>123</Typography>
          </PostInfo>
          <PostInfo>
            <IconBookmarkOutline fontSize='1.5rem' />
            <IconShare fontSize='1.5rem' />
          </PostInfo>
        </div>
      </Center>
    </Container>
  )
}

export default Feed