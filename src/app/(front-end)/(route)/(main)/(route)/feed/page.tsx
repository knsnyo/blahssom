'use client'

import Link from 'next/link'
import useLogic from 'src/app/(front-end)/(route)/(main)/(route)/feed/logic'
import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'

const Page = () => {
  const { feeds } = useLogic()

  return (
    <>
      {feeds?.map((feed) => {
        return <Widget.Feed.Card key={feed._id} feed={feed} />
      })}

      {/* floating button */}
      <Shared.UI.Element.Floating
        width={60}
        height={60}
        bgColor={Shared.STYLE.COLOR.blue}
        opacity={0.5}
        borderRadius={30}
        bottom='8rem'
        left='calc(50% + 20rem)'
      >
        <Link href='/write'>
          <Shared.UI.Element.Icon.Add
            color={Shared.STYLE.COLOR.white}
            size={20}
          />
        </Link>
      </Shared.UI.Element.Floating>
    </>
  )
}

export default Page
