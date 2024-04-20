'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Shared from 'src/app/(front-end)/____shared'
import { Container } from 'src/app/(front-end)/____shared/ui/common/bottom-bar/styled'
import {
  IconChat,
  IconConfig,
  IconHome,
  IconPerson,
} from 'src/app/(front-end)/____shared/ui/element/icon'

const getColorByPathname = (pathname: string, compare: string) => {
  return pathname === compare
    ? Shared.STYLE.COLOR.black
    : Shared.STYLE.COLOR.grey.e4e4e4
}

const BottomBar = () => {
  const pathname = usePathname()

  return (
    <Container>
      <Link href='/'>
        <IconHome
          size={Shared.STYLE.SIZE.icon.bottom}
          color={getColorByPathname(pathname, '/')}
        />
      </Link>
      <Link href='/friend'>
        <IconPerson
          size={Shared.STYLE.SIZE.icon.bottom}
          color={getColorByPathname(pathname, '/friend')}
        />
      </Link>
      <Link href='/chat'>
        <IconChat
          size={Shared.STYLE.SIZE.icon.bottom}
          color={getColorByPathname(pathname, '/chat')}
        />
      </Link>

      <Link href='/config'>
        <IconConfig
          size={Shared.STYLE.SIZE.icon.bottom}
          color={getColorByPathname(pathname, '/config')}
        />
      </Link>
    </Container>
  )
}

export default BottomBar
