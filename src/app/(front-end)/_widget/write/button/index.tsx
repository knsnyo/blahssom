import Shared from 'src/app/(front-end)/____shared'

const Button = () => {
  return (
    <Shared.UI.Element.Button
      theme={Shared.UI.Element.Button.TYPE.WRITE}
      disabled
    >
      게시하기
    </Shared.UI.Element.Button>
  )
}

export default Button
