'use client'

import React, { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import { useServerInsertedHTML } from 'next/navigation'

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [styledComponentsStyleSheet] = useState(() => {
    return new ServerStyleSheet()
  })

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

export default StyledComponentsRegistry
