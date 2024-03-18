/**
 * https://fontawesome.com/v5/search
 */

import {
  faArrowRight,
  faCog,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconPerson = () => {
  return <FontAwesomeIcon icon={faUser} />
}

export const IconLock = () => {
  return <FontAwesomeIcon icon={faLock} />
}

export const IconArrowRight = () => {
  return <FontAwesomeIcon icon={faArrowRight} />
}

export const IconConfig = () => {
  return <FontAwesomeIcon icon={faCog} />
}
