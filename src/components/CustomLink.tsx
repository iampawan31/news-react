import { FC, ReactElement } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomLinkPropsTypes } from '../types'

const CustomLink: FC<CustomLinkPropsTypes & LinkProps> = ({
  link,
  children,
  to,
  ...props
}): ReactElement => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link
      to={to}
      className={`px-2 flex content-center items-center py-2 mx-2 group hover:bg-alternate ${
        match ? 'bg-primary text-white hover:text-primary' : 'bg-white'
      }`}
    >
      <span
        className={`px-2 py-1 rounded ${
          match ? 'bg-primary group-hover:text-white' : 'bg-alternate'
        }`}
      >
        <FontAwesomeIcon icon={link.icon as IconName} />
      </span>
      <span className="ml-2">{link.name}</span>
    </Link>
  )
}

export default CustomLink
