import { Link } from '@mui/material'
import { ReactNode } from 'react'
type Props = {
  children: ReactNode
  href: string
}

function ExternalLink({ children, href }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      sx={{ margin: '0px 4px 0px 4px' }}
    >
      {children}
    </Link>
  )
}

export default ExternalLink
