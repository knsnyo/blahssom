'use client'

import { IDetailPageParams } from 'src/@types/page'
import Shared from 'src/app/(front-end)/___shared'
import Widget from 'src/app/(front-end)/_widget'

const Page = (props: IDetailPageParams) => {
  return (
    <Shared.UI.Element.Stack $direction='column' $fullWidth $paddingX={3}>
      <Widget.Feed.Detail id={props.params.id} />
      <Shared.UI.Element.Divider />
      <Widget.Write.DependentForm id={props.params.id} />
      <Shared.UI.Element.Divider />
      <Widget.Feed.List feed={props.params.id} />
    </Shared.UI.Element.Stack>
  )
}

export default Page
