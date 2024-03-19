/**
 * https://react-icons-v2.vercel.app/icons/md
 */

import { IconBaseProps } from 'react-icons'
import {
  MdChatBubbleOutline,
  MdLock,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdPerson,
  MdSettings,
} from 'react-icons/md'

export const IconPerson = (props: IconBaseProps) => {
  return <MdPerson {...props} />
}

export const IconLock = (props: IconBaseProps) => {
  return <MdLock {...props} />
}

export const IconArrowRight = (props: IconBaseProps) => {
  return <MdOutlineArrowForwardIos {...props} />
}

export const IconArrowLeft = (props: IconBaseProps) => {
  return <MdOutlineArrowBackIos {...props} />
}

export const IconConfig = (props: IconBaseProps) => {
  return <MdSettings {...props} />
}

export const IconChat = (props: IconBaseProps) => {
  return <MdChatBubbleOutline {...props} />
}
