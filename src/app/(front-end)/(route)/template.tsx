'use client'

import React from 'react'
import Feature from 'src/app/(front-end)/__features'

const Template: React.FC<{ children: React.ReactNode }> = (props) => {
  return props.children
}

export default Feature.withAuth(Template)
