import { useTheme } from '@mui/material'
import { ReactNode } from 'react'
import TipBox from '../atoms/TipBox'

function Hint({ children }: { children: ReactNode }) {
  const theme2ndColor = useTheme().palette.secondary.main

  return (
    <TipBox color={theme2ndColor} heading="HINT">
      {children}
    </TipBox>
  )
}

export default Hint
