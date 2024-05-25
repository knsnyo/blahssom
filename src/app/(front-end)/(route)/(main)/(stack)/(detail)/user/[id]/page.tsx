'use client'

import React from 'react'
import { IDetailPageParams } from 'src/@types/page'
import { IUser } from 'src/@types/user'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'
import Widget from 'src/app/(front-end)/_widget'

const MY = 'MY'
const LIKE = 'LIKE'
const BOOKMARK = 'BOOKMARK'

const TYPE = {
  MY,
  LIKE,
  BOOKMARK,
}

const Page = (props: IDetailPageParams) => {
  const my = Feature.Hooks.useAppSelector((state) => {
    return state.user.user
  })

  const [tab, setTab] = React.useState(TYPE.MY)
  const getTabColor = (type: string) => {
    return type === tab ? Shared.STYLE.COLOR.black : Shared.STYLE.COLOR.grey.e4e4e4
  }
  const changeTab = (type: string) => {
    if (type === tab) return
    return () => {
      setTab(type)
    }
  }

  const { data: user } = Feature.Hooks.useQuery<IUser>(() => {
    return Feature.User.Api.getUser(props.params.id)
  })

  return (
    <Shared.UI.Element.Stack $fullWidth $direction='column' $paddingX={1}>
      <Widget.User.Info user={user!} />
      <Shared.UI.Element.Divider />
      <Shared.UI.Element.Stack $fullWidth $direction='row' $justifyContent='space-evenly'>
        <Shared.UI.Element.Typography
          $fontWeight={700}
          $fontSize='1.5rem'
          $color={getTabColor(TYPE.MY)}
          onClick={changeTab(TYPE.MY)}
          style={{ cursor: 'pointer' }}
        >
          내거
        </Shared.UI.Element.Typography>
        <Shared.UI.Element.Typography
          $fontWeight={700}
          $fontSize='1.5rem'
          $color={getTabColor(TYPE.LIKE)}
          onClick={changeTab(TYPE.LIKE)}
          style={{ cursor: 'pointer' }}
        >
          좋아
        </Shared.UI.Element.Typography>
        {user._id === my?._id && (
          <Shared.UI.Element.Typography
            $fontWeight={700}
            $fontSize='1.5rem'
            $color={getTabColor(TYPE.BOOKMARK)}
            onClick={changeTab(TYPE.BOOKMARK)}
            style={{ cursor: 'pointer' }}
          >
            저장
          </Shared.UI.Element.Typography>
        )}
      </Shared.UI.Element.Stack>
      <Shared.UI.Element.Divider />
      <Widget.Feed.List author={props.params.id} />
    </Shared.UI.Element.Stack>
  )
}

export default Page
