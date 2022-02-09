import { FC, ReactElement } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CustomLinkProps = {
  link: {
    icon: string
    name: string
  }
}

const CustomLink: FC<CustomLinkProps & LinkProps> = ({
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
      className={`px-2 flex content-center items-center py-2 mx-2 hover:bg-alternate ${
        match ? 'bg-primary text-white' : 'bg-white'
      }`}
    >
      <span
        className={`px-2 py-1 rounded ${match ? 'bg-primary' : 'bg-alternate'}`}
      >
        <FontAwesomeIcon icon={link.icon as IconName} />
      </span>
      <span className="ml-2">{link.name}</span>
    </Link>
  )
}

export default CustomLink
