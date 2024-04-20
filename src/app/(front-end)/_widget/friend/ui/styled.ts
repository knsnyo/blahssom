import Shared from 'src/app/(front-end)/____shared'
import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  max-width: ${Shared.STYLE.SIZE.maxWidth};
  box-sizing: border-box;
  padding: ${Shared.STYLE.PADDING.default};
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
