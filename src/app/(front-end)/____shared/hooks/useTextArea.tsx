import React from 'react'

const useTextArea = () => {
  const [content, setContent] = React.useState('')

  const handleContent = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setContent((e.target as HTMLTextAreaElement).value)
  }

  return { content, setContent: handleContent }
}

export default useTextArea
