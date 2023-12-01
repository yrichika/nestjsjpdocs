import { Typography } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  id?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function Heading({ children, id, variant }: Props) {
  return (
    <Typography id={id} variant={variant} sx={{ fontWeight: 'medium' }}>
      {children}
    </Typography>
  )
}

export default Heading
