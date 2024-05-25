import Link from 'next/link'
import React from 'react'
import { IUser } from 'src/@types/user'

interface WithUserNavProps {
  user: IUser
}

const withUserNav = (Component: React.ComponentType<WithUserNavProps>) => {
  // eslint-disable-next-line react/function-component-definition
  return (props: WithUserNavProps) => {
    return (
      <Link href={`/user/${props.user.id}`}>
        <Component {...props} />
      </Link>
    )
  }
}

export default withUserNav
