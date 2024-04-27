import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
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

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`
