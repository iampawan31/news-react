import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

type PageHeaderProps = {
  title: string | undefined
  currentTime: string
  icon: string
}

const PageHeader: FC<PageHeaderProps> = ({ title, currentTime, icon }) => {
  return (
    <div className="bg-white inline-block rounded-xl shadow-sm px-2 sm:px-0 p-2 my-4">
      <div className="sm:text-2xl font-bold">
        <FontAwesomeIcon icon={icon as IconName} className="mr-2" />
        {title}
      </div>
      <div className="sm:text-xl">
        <span className="font-bold text-xl sm:text-3xl">Good morning</span>
        {`, its ${currentTime}`}
      </div>
    </div>
  )
}

export default PageHeader
