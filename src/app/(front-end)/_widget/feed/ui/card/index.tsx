'use client'

import React from 'react'
import { IFeed } from 'src/@types/feed'
import Shared from 'src/app/(front-end)/___shared'
import useLogic from 'src/app/(front-end)/_widget/feed/ui/card/logic'
import { Center, Container } from './styled'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  feed: IFeed
  route?: boolean
}

const Card = ({ feed, route }: IProps) => {
  const { SnackBar, handler } = useLogic({ feed, route })

  return (
    <>
      <SnackBar />
      <Container onClick={handler.goDetail}>
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
            <Shared.UI.Common.IconButton
              icon={<Shared.UI.Element.Icon.Chat fontSize='1.5rem' />}
              text='123'
              ref={handler.settingRef}
            />
            <Shared.UI.Common.IconButton
              icon={<Shared.UI.Element.Icon.HeartOutline fontSize='1.5rem' />}
              text='123'
              ref={handler.settingRef}
            />
            <Shared.UI.Common.IconButton
              icon={<Shared.UI.Element.Icon.Chart fontSize='1.5rem' />}
              text='123'
              ref={handler.settingRef}
            />
            <Shared.UI.Element.Stack $gap={0.5} $alignItems='center'>
              <Shared.UI.Common.IconButton
                icon={<Shared.UI.Element.Icon.BookmarkOutline fontSize='1.5rem' />}
                ref={handler.settingRef}
              />
              <Shared.UI.Common.IconButton
                icon={<Shared.UI.Element.Icon.Share fontSize='1.5rem' />}
                ref={handler.settingRef}
                onClick={handler.copyLink}
              />
            </Shared.UI.Element.Stack>
          </Shared.UI.Element.Stack>
        </Center>
      </Container>
    </>
  )
}

export default Card
