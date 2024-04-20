'use client'

import { useRouter } from 'next/navigation'
import { HtmlHTMLAttributes } from 'react'
import {
  Container,
  LeadingIcon,
} from 'src/app/(front-end)/____shared/ui/common/top-bar/styled'
import Icon from 'src/app/(front-end)/____shared/ui/element/icon'
import Typography from 'src/app/(front-end)/____shared/ui/element/typography'

interface ITopBar extends HtmlHTMLAttributes<Headers> {
  title: string
  textAlign?: string
  canBack?: boolean
}

// HOC
const TopBar = (props: ITopBar) => {
  const router = useRouter()

  return (
    <Container>
      {props.canBack && (
        <LeadingIcon>
          <Icon.ArrowLeft
            onClick={() => {
              router.back()
            }}
            fontSize={20}
          />
        </LeadingIcon>
      )}
      <Typography fontSize='2rem' fontWeight={700} textAlign={props.textAlign}>
        {props.title}
      </Typography>
    </Container>
  )
}

export default TopBar
