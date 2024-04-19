import { DEFAULT_PADDING } from 'src/app/(front-end)/____shared/style/padding'
import { MAX_WIDTH } from 'src/app/(front-end)/____shared/style/size'
import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  max-width: ${MAX_WIDTH};
  box-sizing: border-box;
  padding: ${DEFAULT_PADDING};
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
