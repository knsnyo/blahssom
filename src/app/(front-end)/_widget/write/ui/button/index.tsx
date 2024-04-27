import Shared from 'src/app/(front-end)/____shared'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: IProps) => {
  return (
    <Shared.UI.Element.Button {...props} theme={Shared.UI.Element.Button.TYPE.WRITE}>
      게시하기
    </Shared.UI.Element.Button>
  )
}

export default Button
