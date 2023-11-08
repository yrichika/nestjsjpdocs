import { Box } from '@mui/material'
import { ReactNode } from 'react'

function Section({ children }: { children: ReactNode }) {
  return <Box sx={{ mt: 5, lineHeight: 1.8 }}>{children}</Box>
}

export default Section
