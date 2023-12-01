import { useTheme } from '@mui/material'
import { ReactNode } from 'react'
import TipBox from '../atoms/TipBox'

function Warning({ children }: { children: ReactNode }) {
  const theme2ndColor = useTheme().palette.warning.main

  return (
    <TipBox color={theme2ndColor} heading="WARNING">
      {children}
    </TipBox>
  )
}

export default Warning
