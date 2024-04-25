import React from 'react'
import { I_ID } from 'src/@types/__init'
import Stack from 'src/app/(front-end)/____shared/ui/element/stack'

interface IProps {
  children: React.ReactNode
  hasNext: boolean
  refetch: () => void
  data: I_ID[]
  loading: boolean
  error: boolean
}

const InfinityScroll = ({
  loading,
  error,
  data,
  children,
  hasNext,
  refetch,
}: IProps) => {
  const end = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]

        if (firstEntry.isIntersecting && hasNext) {
          refetch()
        }
      },
      { threshold: 1 },
    )
    if (end.current) {
      observer.observe(end.current)
    }

    return () => {
      if (end.current) {
        observer.unobserve(end.current)
      }
    }
  }, [data, hasNext])

  return (
    <Stack direction='column'>
      {children}
      <div ref={end} />
      {/* TODO */}
      {loading && <div />}
      {error && <div />}
    </Stack>
  )
}

export default InfinityScroll
