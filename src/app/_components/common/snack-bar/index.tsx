'use client'

import { useEffect } from 'react'
import Typography from 'src/app/_components/element/typography'
import { COLOR_WHITE } from 'src/app/_constants/color'
import { SNACKBAR_Y } from 'src/app/_constants/size'
import { useAppDispatch, useAppSelector } from 'src/app/_features'
import { offSnackbar } from 'src/app/_features/utils/snackbar'
import styled from 'styled-components'

const SnackBar = () => {
  const info = useAppSelector((state) => {
    return state.snackbar
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (info.on) {
      setTimeout(() => {
        dispatch(offSnackbar())
      }, 3000)
    }
  }, [info.on, dispatch])

  if (!info.on) {
    return <></>
  }

  return (
    <Container color={info.color}>
      <Typography color={COLOR_WHITE} fontWeight={700}>
        {info.message}
      </Typography>
    </Container>
  )
}

export default SnackBar

const Container = styled.div<{ color: string }>`
  position: fixed;
  background-color: ${(props) => {
    return props.color
  }};
  width: 30rem;
  height: 3rem;
  border-radius: 0.8rem;
  top: ${SNACKBAR_Y};
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
