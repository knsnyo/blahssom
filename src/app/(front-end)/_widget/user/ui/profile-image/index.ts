import { styled } from 'styled-components'

interface IProps {
  size?: number
}

export const ProfileImage = styled.img<IProps>`
  width: ${(props) => `${props?.size ?? 3}rem`};
  height: ${(props) => `${props?.size ?? 3}rem`};
  border-radius: 4rem;
`
