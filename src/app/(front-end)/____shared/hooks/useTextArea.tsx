import React from 'react'

const useTextArea = () => {
  const [value, setValue] = React.useState('')

  const handleValue = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setValue((e.target as HTMLTextAreaElement).value)
  }

  return { content: value, setContent: handleValue }
}

export default useTextArea
