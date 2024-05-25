'use client'

import { IFeed } from 'src/@types/feed'
import { IDetailPageParams } from 'src/@types/page'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'
import Widget from 'src/app/(front-end)/_widget'

const Page = (props: IDetailPageParams) => {
  const { data: feed } = Feature.Hooks.useQuery<IFeed>(() => {
    return Feature.Feed.Api.detailFeed(props.params.id)
  })

  return (
    <Shared.UI.Element.Stack $direction='column' $fullWidth $paddingX={3}>
      <Widget.Feed.Detail feed={feed} />
      <Shared.UI.Element.Divider />
      <Widget.Write.DependentForm id={props.params.id} />
      <Shared.UI.Element.Divider />
      <Widget.Feed.List feed={props.params.id} />
    </Shared.UI.Element.Stack>
  )
}

export default Page
