import { useRouter } from 'next/navigation'
import React from 'react'
import { IFeed } from 'src/@types/feed'
import Shared from 'src/app/(front-end)/___shared'

interface IProps {
  feed: IFeed
  route?: boolean
}

const useLogic = ({ feed, route }: IProps) => {
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()
  const router = useRouter()
  const refs = React.useRef<HTMLDivElement[]>([])

  const copyLink = () => {
    window.navigator.clipboard.writeText(`/feed/${feed._id}`)
    open({ message: 'Copied!', color: Shared.STYLE.COLOR.blue })
  }

  const goDetail: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!route) return

    for (let i = 0; i < refs.current.length; i += 1) {
      const ref = refs.current[i]
      if (ref?.contains(e.target as HTMLDivElement)) {
        return
      }
    }

    router.push(`/feed/${feed._id}`)
  }

  const settingRef = (el: HTMLDivElement) => {
    refs.current.push(el)
  }

  const handler = {
    copyLink,
    goDetail,
    settingRef,
  }

  return { handler, SnackBar }
}

export default useLogic
