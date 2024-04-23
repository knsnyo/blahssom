/**
 * https://react-icons-v2.vercel.app/icons/md
 * https://react-icons.github.io/react-icons/icons/md/
 */

import { IconBaseProps } from 'react-icons'
import {
  MdBarChart,
  MdBookmark,
  MdBookmarkBorder,
  MdChatBubbleOutline,
  MdEdit,
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

const Person = (props: IconBaseProps) => {
  return <MdPerson {...props} />
}

const Lock = (props: IconBaseProps) => {
  return <MdLock {...props} />
}

const ArrowRight = (props: IconBaseProps) => {
  return <MdOutlineArrowForwardIos {...props} />
}

const ArrowLeft = (props: IconBaseProps) => {
  return <MdOutlineArrowBackIos {...props} />
}

const Config = (props: IconBaseProps) => {
  return <MdSettings {...props} />
}

const Chat = (props: IconBaseProps) => {
  return <MdChatBubbleOutline {...props} />
}

const Home = (props: IconBaseProps) => {
  return <MdHome {...props} />
}

const Chart = (props: IconBaseProps) => {
  return <MdBarChart {...props} />
}

const HeartOutline = (props: IconBaseProps) => {
  return <MdFavoriteBorder {...props} />
}

const Heart = (props: IconBaseProps) => {
  return <MdFavorite {...props} />
}

const Bookmark = (props: IconBaseProps) => {
  return <MdBookmark {...props} />
}

const BookmarkOutline = (props: IconBaseProps) => {
  return <MdBookmarkBorder {...props} />
}

const Share = (props: IconBaseProps) => {
  return <MdOutlineFileUpload {...props} />
}

const More = (props: IconBaseProps) => {
  return <MdMoreHoriz {...props} />
}

const Add = (props: IconBaseProps) => {
  return <MdEdit {...props} />
}

const Icon = {
  Person,
  Lock,
  ArrowRight,
  ArrowLeft,
  Config,
  Chat,
  Home,
  Chart,
  Heart,
  HeartOutline,
  Bookmark,
  BookmarkOutline,
  Share,
  More,
  Add,
}

export default Icon
