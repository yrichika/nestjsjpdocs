import { useTheme } from '@mui/material'
import { ReactNode } from 'react'

function CodeSpan({ children }: { children: ReactNode }) {
  const theme = useTheme()
  const color = theme.palette.secondary.main
  const backgroundColor = theme.palette.grey['200']
  return (
    <code
      style={{
        color,
        backgroundColor,
        borderRadius: '3px',
        padding: '0px 3px 0px 3px',
      }}
    >
      {children}
    </code>
  )
}

export default CodeSpan
