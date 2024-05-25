'use client'

import { IDetailPageParams } from 'src/@types/page'
import { IUser } from 'src/@types/user'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'
import Widget from 'src/app/(front-end)/_widget'

const Page = (props: IDetailPageParams) => {
  const { data: user } = Feature.Hooks.useQuery<IUser>(() => {
    return Feature.User.Api.getUser(props.params.id)
  })
  const my = Feature.Hooks.useAppSelector((state) => {
    return state.user.user
  })

  return (
    <Shared.UI.Element.Stack $fullWidth $direction='column' $paddingX={1}>
      <Widget.User.Info user={user!} />
      <Shared.UI.Element.Divider />
      <Shared.UI.Element.Stack $fullWidth $direction='row' $justifyContent='space-evenly'>
        <Shared.UI.Element.Typography $fontWeight={700} $fontSize='1.5rem'>
          게시물
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography $fontWeight={700} $fontSize='1.5rem'>
          좋아요
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography $fontWeight={700} $fontSize='1.5rem'>
          북마크
        </Shared.UI.Element.Typography>
      </Shared.UI.Element.Stack>
      <Shared.UI.Element.Divider />
    </Shared.UI.Element.Stack>
  )
}

export default Page
