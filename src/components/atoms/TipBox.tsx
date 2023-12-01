import { Card, CardContent, Typography } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  color: string
  heading: string
}

function TipBox({ children, color, heading }: Props) {
  const cardContentStyle = {
    padding: '5px 15px 0px 15px',
    // MUIのCardにデフォルトでついている余計なpaddingを減らす
    '&:last-child': {
      paddingBottom: '8px',
    },
  }

  return (
    <Card variant="outlined" sx={{ margin: '30px 0' }}>
      <CardContent sx={cardContentStyle}>
        <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color={color}>
          {heading}
        </Typography>
        <Typography variant="body2" lineHeight={1.9}>
          {children}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TipBox
