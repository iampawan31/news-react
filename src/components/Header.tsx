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
import { FC, ReactElement, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
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
  faShieldVirus,
  faSearch
)

const Header: FC = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  let navigate = useNavigate()
  let location = useLocation()
  let params = new URLSearchParams(location.search)
  const queryTerm = params.get('q')

  useEffect(() => {
    if (queryTerm) {
      setSearchTerm(queryTerm)
    }
  }, [queryTerm])

  const submitSearch = () => {
    navigate(`/search?q=${searchTerm}`)
  }

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
              value={searchTerm}
              onKeyDown={(e) => {
                if (e.code === 'Enter') submitSearch()
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="bg-alternate text-primary rounded-l focus:outline-none p-2"
            />
            <button
              onClick={submitSearch}
              className="bg-primary text-white rounded-r py-2 px-4"
            >
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
