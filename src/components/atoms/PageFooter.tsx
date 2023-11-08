import { Box } from '@mui/material'
import { ReactNode } from 'react'

function PageFooter({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: 'flex', mt: 7, justifyContent: 'center' }}>
      {children}
    </Box>
  )
}

export default PageFooter
