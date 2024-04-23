'use client'

import React from 'react'
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
`

const TextArea = (props: IProps) => {
  const [height, setHeight] = React.useState(0)
  const ref = React.useRef<HTMLTextAreaElement>(null)

  const handleResizeHeight = () => {
    if (ref === null) return
    setHeight(ref.current?.scrollHeight ?? 0)
  }

  return (
    <Container
      {...props}
      height={height}
      rows={1}
      ref={ref}
      onChange={() => {
        handleResizeHeight()
      }}
    />
  )
}

export default TextArea
