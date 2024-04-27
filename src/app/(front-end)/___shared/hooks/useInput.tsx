import React from 'react'

const useInput = () => {
  const [value, setValue] = React.useState('')

  const handleVaule: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return { value, setValue: handleVaule }
}

export default useInput
