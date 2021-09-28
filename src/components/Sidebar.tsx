import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faBuilding,
  faDumbbell,
  faPlay,
  faNewspaper,
  faMicrochip,
  faMicroscope,
  faFootballBall,
  faShieldVirus,
} from '@fortawesome/free-solid-svg-icons'

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

const LINKS: {
  name: string
  url: string
  icon: string
}[] = [
  {
    name: 'Business',
    url: '/category/business',
    icon: 'building',
  },
  {
    name: 'Entertainment',
    url: '/category/entertainment',
    icon: 'play',
  },
  {
    name: 'General',
    url: '/category/general',
    icon: 'newspaper',
  },
  {
    name: 'Health',
    url: '/category/health',
    icon: 'dumbbell',
  },
  {
    name: 'Science',
    url: '/category/science',
    icon: 'microscope',
  },
  {
    name: 'Sports',
    url: '/category/sports',
    icon: 'football-ball',
  },
  {
    name: 'Technology',
    url: '/category/technology',
    icon: 'microchip',
  },
]

const Sidebar = () => {
  return (
    <nav className="flex flex-col bg-white rounded-xl shadow-sm py-2 w-full">
      <Link
        to="/"
        className="flex text-xl mx-auto font-semibold uppercase px-4 py-2"
      >
        News App
      </Link>
      <hr />
      <Link
        to="/"
        className="m-2 flex content-center items-center hover:bg-alternate hover:rounded-xl rounded p-2"
      >
        <span className="px-2 py-1 rounded bg-alternate">
          <FontAwesomeIcon icon="shield-virus" />
        </span>
        <span className="ml-2">Top Headlines</span>
      </Link>
      <hr />
      <div className="flex flex-col py-2">
        {LINKS.map((link, index) => (
          <Link
            to={link.url}
            key={index}
            className="px-2 flex content-center items-center py-2 mx-2 hover:bg-alternate hover:rounded-xl rounded"
          >
            <span className="px-2 py-1 rounded bg-alternate">
              <FontAwesomeIcon icon={link.icon as IconName} />
            </span>
            <span className="ml-2">{link.name}</span>
          </Link>
        ))}
      </div>
      <hr />
      <Link to="/" className="flex content-center items-center px-4 py-2">
        <span className="px-2 py-1 rounded bg-alternate">
          <FontAwesomeIcon icon="shield-virus" />
        </span>
        <span className="ml-2">COVID 19</span>
      </Link>
      <hr />
    </nav>
  )
}

export default Sidebar
