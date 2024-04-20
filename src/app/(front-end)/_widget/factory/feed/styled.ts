import Shared from 'src/app/(front-end)/____shared'
import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  max-width: ${Shared.STYLE.SIZE.maxWidth};
  box-sizing: border-box;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
`
export const Side = styled.div`
  display: flex;
  width: 4rem;
  flex-direction: column;
  justify-content: space-between;
`
export const Center = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

/* common components later... */
export const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
`

export const PostImage = styled.img`
  width: inherit;
  object-fit: contain;
  border-radius: 0.8rem;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`
