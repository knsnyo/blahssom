'use client'

import styled from 'styled-components'

const Form = ({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => {
  return <Container {...props}>{children}</Container>
}

export default Form

const Container = styled.form`
  width: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`
