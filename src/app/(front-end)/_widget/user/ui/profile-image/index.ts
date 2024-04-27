import { styled } from 'styled-components'

interface IProps {
  size?: number
}

export const ProfileImage = styled.img<IProps>`
  width: ${(props) => {
    return `${props?.size ?? 3}rem`
  }};
  height: ${(props) => {
    return `${props?.size ?? 3}rem`
  }};
  border-radius: 4rem;
`
