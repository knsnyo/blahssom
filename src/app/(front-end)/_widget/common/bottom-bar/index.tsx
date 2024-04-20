'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Shared from 'src/app/(front-end)/____shared'
import { BOTTOM_ICON_SIZE } from 'src/app/(front-end)/____shared/style/size'
import { Container } from 'src/app/(front-end)/_widget/common/bottom-bar/styled'
import {
  IconChat,
  IconConfig,
  IconHome,
  IconPerson,
} from 'src/app/(front-end)/_widget/element/icon'

const getColorByPathname = (pathname: string, compare: string) => {
  return pathname === compare
    ? Shared.STYLE.COLOR.blue
    : Shared.STYLE.COLOR.grey.e4e4e4
}

const BottomBar = () => {
  const pathname = usePathname()

  return (
    <Container>
      <Link href='/'>
        <IconHome
          size={BOTTOM_ICON_SIZE}
          color={getColorByPathname(pathname, '/')}
        />
      </Link>
      <Link href='/friend'>
        <IconPerson
          size={BOTTOM_ICON_SIZE}
          color={getColorByPathname(pathname, '/friend')}
        />
      </Link>
      <Link href='/chat'>
        <IconChat
          size={BOTTOM_ICON_SIZE}
          color={getColorByPathname(pathname, '/chat')}
        />
      </Link>

      <Link href='/config'>
        <IconConfig
          size={BOTTOM_ICON_SIZE}
          color={getColorByPathname(pathname, '/config')}
        />
      </Link>
    </Container>
  )
}

export default BottomBar
