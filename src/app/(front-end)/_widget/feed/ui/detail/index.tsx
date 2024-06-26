import { IFeed } from 'src/@types/feed'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'
import Widget from 'src/app/(front-end)/_widget'

const Detail = (props: { feed: IFeed }) => {
  const { feed } = props

  return (
    <Shared.UI.Element.Stack $direction='column' $fullWidth>
      <Shared.UI.Element.Stack $justifyContent='space-between' $fullWidth>
        <Widget.User.ShortInfo user={feed?.author} nav />
        <Shared.UI.Element.Stack $fullWidth $justifyContent='end' $gap={2}>
          <Feature.Action.UI.FollowButton user={feed?.author} />
          <Shared.UI.Element.Icon.More />
        </Shared.UI.Element.Stack>
      </Shared.UI.Element.Stack>
      <br />
      <Shared.UI.Element.Typography>{feed.content}</Shared.UI.Element.Typography>
      <br />
      <Shared.UI.Element.Stack $gap={0.5}>
        <Shared.UI.Element.Typography color={Shared.STYLE.COLOR.grey[707070]}>
          {new Date(feed.updatedAt).toLocaleTimeString()}
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography>·</Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography color={Shared.STYLE.COLOR.grey[707070]}>
          {new Date(feed.updatedAt).toLocaleDateString()}
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography>·</Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography $fontWeight={700}>1,000</Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography color={Shared.STYLE.COLOR.grey[707070]}>
          View
        </Shared.UI.Element.Typography>
      </Shared.UI.Element.Stack>
      <Shared.UI.Element.Divider />
      <Shared.UI.Element.Stack $alignItems='center' $justifyContent='space-between' $fullWidth>
        <Shared.UI.Common.IconButton
          icon={<Shared.UI.Element.Icon.Chat fontSize='1.5rem' />}
          text='123'
          // ref={handler.settingRef}
        />
        <Shared.UI.Common.IconButton
          icon={<Shared.UI.Element.Icon.HeartOutline fontSize='1.5rem' />}
          text='123'
          // ref={handler.settingRef}
          $hoverColor={Shared.STYLE.COLOR.red}
        />
        <Shared.UI.Common.IconButton
          icon={<Shared.UI.Element.Icon.Chart fontSize='1.5rem' />}
          text='123'
          // ref={handler.settingRef}
        />
        <Shared.UI.Element.Stack $gap={0.5} $alignItems='center'>
          <Shared.UI.Common.IconButton
            icon={<Shared.UI.Element.Icon.BookmarkOutline fontSize='1.5rem' />}
            // ref={handler.settingRef}
            $hoverColor={Shared.STYLE.COLOR.green}
          />
          <Shared.UI.Common.IconButton
            icon={<Shared.UI.Element.Icon.Share fontSize='1.5rem' />}
            // ref={handler.settingRef}
            // onClick={handler.copyLink}
            $hoverColor={Shared.STYLE.COLOR.blue}
          />
        </Shared.UI.Element.Stack>
      </Shared.UI.Element.Stack>
    </Shared.UI.Element.Stack>
  )
}

export default Detail
