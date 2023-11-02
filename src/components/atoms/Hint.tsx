import { Card, CardContent, Typography, useTheme } from '@mui/material'
import { ReactNode } from 'react'

function Hint({ children }: { children: ReactNode }) {
  const theme2ndColor = useTheme().palette.secondary.main
  const cardContentStyle = {
    padding: '5px 15px 0px 15px',
    // MUIのCardにデフォルトでついている余計なpaddingを減らす
    '&:last-child': {
      paddingBottom: '8px',
    },
  }

  return (
    <Card variant="outlined">
      <CardContent sx={cardContentStyle}>
        <Typography
          sx={{ fontSize: 16, fontWeight: 'bold' }}
          color={theme2ndColor}
        >
          Hint
        </Typography>
        <Typography variant="body2">{children}</Typography>
      </CardContent>
    </Card>
  )
}

export default Hint
