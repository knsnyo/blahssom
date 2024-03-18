import { useCallback, useEffect, useState } from 'react'
import SnackBar from 'src/app/_components/common/snack-bar'

interface ISnackBarInfo {
  message: string
  color: string
}

const useSnackBar = () => {
  const [info, setInfo] = useState({
    on: false,
    message: '',
    color: '#ffffff',
  })

  const open = useCallback(({ message, color }: ISnackBarInfo) => {
    setInfo(() => {
      return {
        on: true,
        message: message ?? '',
        color,
      }
    })
  }, [])

  const close = useCallback(() => {
    setInfo(() => {
      return {
        on: false,
        message: '',
        color: '#ffffff',
      }
    })
  }, [])

  useEffect(() => {
    if (info.on) {
      setTimeout(() => {
        close()
      }, 3000)
    }
  }, [info.on, close])

  return {
    open,
    SnackBar: info.on
      ? () => {
          return <SnackBar color={info.color} message={info.message} />
        }
      : () => {
          return <></>
        },
  }
}

export default useSnackBar
