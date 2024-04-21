'use client'

import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'

const Page = () => {
  return (
    <Shared.UI.Element.Stack direction='column' fullWidth paddingX={1}>
      <Shared.UI.Element.Stack justifyContent='space-between' fullWidth>
        <Shared.UI.Element.Stack gap={1}>
          <Widget.User.ProfileImage
            src='https://picsum.photos/200'
            alt='profile-img'
          />
          <Shared.UI.Element.Typography fontSize='1.5rem' fontWeight={700}>
            nickname
          </Shared.UI.Element.Typography>
        </Shared.UI.Element.Stack>
        <Shared.UI.Element.Icon.More />
      </Shared.UI.Element.Stack>
      <br />
      <Shared.UI.Element.Typography>content</Shared.UI.Element.Typography>
      <br />
      <Widget.Feed.Image src='https://picsum.photos/300/200' alt='feed-img' />
      <br />
      <Shared.UI.Element.Stack gap={0.5}>
        <Shared.UI.Element.Typography color={Shared.STYLE.COLOR.grey[707070]}>
          PM 06:24
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography>·</Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography color={Shared.STYLE.COLOR.grey[707070]}>
          2024.04.20
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography>·</Shared.UI.Element.Typography>

        <Shared.UI.Element.Typography fontWeight={700}>
          1,000
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography color={Shared.STYLE.COLOR.grey[707070]}>
          View
        </Shared.UI.Element.Typography>
      </Shared.UI.Element.Stack>
      <br />
      <hr />
      <br />
      <Shared.UI.Element.Stack justifyContent='space-between' fullWidth>
        <Shared.UI.Element.Stack gap={0.5} alignItems='center'>
          <Shared.UI.Element.Icon.Chat />
          <Shared.UI.Element.Typography>26</Shared.UI.Element.Typography>
        </Shared.UI.Element.Stack>
        <Shared.UI.Element.Stack gap={0.5} alignItems='center'>
          <Shared.UI.Element.Icon.HeartOutline />
          <Shared.UI.Element.Typography>26</Shared.UI.Element.Typography>
        </Shared.UI.Element.Stack>
        <Shared.UI.Element.Stack gap={0.5} alignItems='center'>
          <Shared.UI.Element.Icon.BookmarkOutline />
          <Shared.UI.Element.Typography>26</Shared.UI.Element.Typography>
        </Shared.UI.Element.Stack>
        <Shared.UI.Element.Stack gap={0.5} alignItems='center'>
          <Shared.UI.Element.Icon.Share />
          <Shared.UI.Element.Typography>26</Shared.UI.Element.Typography>
        </Shared.UI.Element.Stack>
      </Shared.UI.Element.Stack>
      <br />
      <hr />
      <br />
      <Widget.User.Write />
      <br />
      <hr />
      <br />
    </Shared.UI.Element.Stack>
  )
}

export default Page
