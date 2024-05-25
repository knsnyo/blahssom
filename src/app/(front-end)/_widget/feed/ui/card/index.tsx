'use client'

import { useRouter } from 'next/navigation'
import { IFeed } from 'src/@types/feed'
import Shared from 'src/app/(front-end)/___shared'
import { Center, Container, PostInfo } from './styled'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  feed: IFeed
  route?: boolean
}

const Card = ({ feed, route }: IProps) => {
  const router = useRouter()

  return (
    <Container
      onClick={() => {
        if (route) router.push(`/feed/${feed._id}`)
      }}
    >
      <Center>
        <Shared.UI.Element.Stack $justifyContent='space-between'>
          <Shared.UI.Element.Stack $gap={1} $justifyContent='start'>
            <Shared.UI.Element.Typography $fontWeight={700}>
              {feed.author.nickname}
            </Shared.UI.Element.Typography>
            <Shared.UI.Element.Typography color={Shared.STYLE.COLOR.grey.e4e4e4}>
              {new Date(feed.updatedAt).toLocaleDateString()}
            </Shared.UI.Element.Typography>
          </Shared.UI.Element.Stack>
          <Shared.UI.Element.Icon.More fontSize='1.5rem' />
        </Shared.UI.Element.Stack>
        <Shared.UI.Element.Typography>{feed.content}</Shared.UI.Element.Typography>
        <br />
        <Shared.UI.Element.Stack $alignItems='center' $justifyContent='space-between'>
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
