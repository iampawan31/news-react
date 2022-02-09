import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faBuilding,
  faDumbbell,
  faFootballBall,
  faMicrochip,
  faMicroscope,
  faNewspaper,
  faPlay,
  faSearch,
  faShieldVirus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import { useMatch, useLocation, useResolvedPath } from 'react-router-dom'
import { LINKS } from '../data/links'
import CustomLink from './CustomLink'

library.add(
  faBuilding,
  faDumbbell,
  faPlay,
  faNewspaper,
  faMicrochip,
  faMicroscope,
  faFootballBall,
  faShieldVirus
)

type HeaderProps = {
  currentTime: string
}

const Header: FC<HeaderProps> = ({ currentTime }): ReactElement => {
  let location = useLocation()
  let resolved = useResolvedPath(location.pathname)
  let match = useMatch({ path: resolved.pathname, end: true })

  console.log(match ? true : false, 37)

  return (
    <div className="bg-white fixed shadow-sm  pt-6 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-3xl bg-primary text-white px-2 rounded shadow">
            News App
          </div>
          <div className="text-xl">
            <span className="font-bold text-3xl">Good morning</span>,{' '}
            {`its
          ${currentTime}`}
          </div>
          <div>
            <input
              type="text"
              className="bg-alternate text-primary rounded-l-xl focus:outline-none p-2"
            />
            <button className="bg-primary text-white rounded-r-xl py-2 px-4">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-row pt-6">
          {LINKS.map((link, index) => (
            <CustomLink
              to={link.url}
              key={index}
              link={link}
              className="px-2 flex content-center items-center py-2 mx-2 hover:bg-alternate"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
