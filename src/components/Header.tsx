import { library } from '@fortawesome/fontawesome-svg-core'
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
import { Link } from 'react-router-dom'
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

const Header: FC = (): ReactElement => {
  let location = useLocation()
  let resolved = useResolvedPath(location.pathname)
  let match = useMatch({ path: resolved.pathname, end: true })

  console.log(match ? true : false, 37)

  return (
    <div className="bg-white fixed shadow-sm py-2 px-2 sm:px-0 sm:pt-6 sm:pb-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link
            to="/"
            className="text-lg sm:text-3xl bg-primary text-white px-2 rounded shadow"
          >
            News App
          </Link>

          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-alternate text-primary rounded-l focus:outline-none p-2"
            />
            <button className="bg-primary text-white rounded-r py-2 px-4">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="justify-between flex-row pt-6 hidden sm:flex">
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
