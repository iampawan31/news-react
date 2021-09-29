import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faBuilding,
  faDumbbell,
  faFootballBall,
  faMicrochip,
  faMicroscope,
  faNewspaper,
  faPlay,
  faShieldVirus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { LINKS } from '../data/links'

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

const Sidebar = () => {
  return (
    <nav className="flex fixed flex-col bg-white rounded-xl shadow-sm py-2 w-60">
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
      <Link
        to="/"
        className="flex content-center items-center hover:bg-alternate hover:rounded-xl rounded m-2 p-2"
      >
        <span className="px-2 py-1 rounded bg-alternate">
          <FontAwesomeIcon icon="shield-virus" />
        </span>
        <span className="ml-2">COVID 19</span>
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
    </nav>
  )
}

export default Sidebar
