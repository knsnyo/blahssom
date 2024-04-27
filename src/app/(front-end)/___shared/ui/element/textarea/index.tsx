'use client'

import React from 'react'
import Shared from 'src/app/(front-end)/___shared'
import styled from 'styled-components'

interface IProps extends React.HTMLProps<HTMLTextAreaElement> {}

const Container = styled.textarea<IProps>`
  width: 100%;
  height: ${(props) => {
    return `${props.height}px`
  }};
  border: none;
  box-sizing: border-box;
  padding: 1rem;
  resize: none;
  outline: none;
  overflow-y: hidden;
`

const TextArea = (props: IProps) => {
  const [height, setHeight] = React.useState(51)
  const ref = React.useRef<HTMLTextAreaElement>(null)

  const handleResizeHeight = () => {
    if (ref.current === null) return
    const { scrollHeight } = ref.current

    setHeight(scrollHeight)
  }

  return (
    <Shared.UI.Element.Stack
      fullWidth
      direction='column'
      style={{ position: 'relative' }}
      alignItems='end'
    >
      <Container
        {...props}
        ref={ref}
        height={height}
        rows={5}
        onChange={(e) => {
          props.onChange?.(e)
          handleResizeHeight()
        }}
      />
    </Shared.UI.Element.Stack>
  )
}

export default TextArea
