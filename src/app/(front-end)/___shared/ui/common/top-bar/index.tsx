'use client'

import { useRouter } from 'next/navigation'
import { HtmlHTMLAttributes } from 'react'
import { Container } from 'src/app/(front-end)/___shared/ui/common/top-bar/styled'
import Icon from 'src/app/(front-end)/___shared/ui/element/icon'
import Typography from 'src/app/(front-end)/___shared/ui/element/typography'

interface ITopBar extends HtmlHTMLAttributes<Headers> {
  title?: string
  textAlign?: string
  canBack?: boolean
  action?: React.ReactNode
}

// HOC
const TopBar = (props: ITopBar) => {
  const router = useRouter()

  return (
    <Container>
      {props.canBack && (
        <Icon.ArrowLeft
          onClick={() => {
            router.back()
          }}
          fontSize={20}
        />
      )}
      {props?.title && (
        <Typography
          fontSize='2rem'
          fontWeight={700}
          textAlign={props.textAlign}
          fullWidth={props.canBack}
        >
          {props.title}
        </Typography>
      )}
      {props?.action && props.action}
    </Container>
  )
}

export default TopBar
