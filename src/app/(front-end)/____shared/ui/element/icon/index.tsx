/**
 * https://react-icons-v2.vercel.app/icons/md
 */

import { IconBaseProps } from 'react-icons'
import {
  MdBarChart,
  MdBookmark,
  MdBookmarkBorder,
  MdChatBubbleOutline,
  MdFavorite,
  MdFavoriteBorder,
  MdHome,
  MdLock,
  MdMoreHoriz,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdOutlineFileUpload,
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

export const IconHome = (props: IconBaseProps) => {
  return <MdHome {...props} />
}

export const IconChart = (props: IconBaseProps) => {
  return <MdBarChart {...props} />
}

export const IconHeartOutline = (props: IconBaseProps) => {
  return <MdFavoriteBorder {...props} />
}

export const IconHeart = (props: IconBaseProps) => {
  return <MdFavorite {...props} />
}

export const IconBookmark = (props: IconBaseProps) => {
  return <MdBookmark {...props} />
}

export const IconBookmarkOutline = (props: IconBaseProps) => {
  return <MdBookmarkBorder {...props} />
}

export const IconShare = (props: IconBaseProps) => {
  return <MdOutlineFileUpload {...props} />
}

export const IconMore = (props: IconBaseProps) => {
  return <MdMoreHoriz {...props} />
}
