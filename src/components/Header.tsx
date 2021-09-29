import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date().getTime())

  return (
    <div className="bg-white rounded-xl shadow-sm px-2 py-4 w-full">
      <div className="flex justify-between">
        <div className="text-3xl">
          <span className="font-bold">Good morning</span> Its 07:30 AM
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
    </div>
  )
}

export default Header
