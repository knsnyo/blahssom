'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from 'src/app/_components/common/bottom-bar/styled'
import {
  IconChat,
  IconConfig,
  IconHome,
  IconPerson,
} from 'src/app/_components/element/icon'
import { COLOR_BLACK, COLOR_GREY_E4E4E4 } from 'src/app/_constants/color'
import { BOTTOM_ICON_SIZE } from 'src/app/_constants/size'

const getColorByPathname = (pathname: string, compare: string) => {
  return pathname === compare ? COLOR_BLACK : COLOR_GREY_E4E4E4
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
