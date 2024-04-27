'use client'

import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/___shared'
import Widget from 'src/app/(front-end)/_widget'

const Page = () => {
  const router = useRouter()

  return (
    <Shared.UI.Element.Stack fullWidth direction='column' paddingX={3}>
      <Widget.Feed.List />
      {/* floating button */}
      <Shared.UI.Element.Floating
        width={60}
        height={60}
        bgColor={Shared.STYLE.COLOR.blue}
        opacity={0.5}
        borderRadius={30}
        bottom='8rem'
        left='calc(50vw + 25%)'
        onClick={() => {
          router.push('/write')
        }}
        style={{ cursor: 'pointer' }}
      >
        <Shared.UI.Element.Icon.Add color={Shared.STYLE.COLOR.white} size={20} />
      </Shared.UI.Element.Floating>
    </Shared.UI.Element.Stack>
  )
}

export default Page
