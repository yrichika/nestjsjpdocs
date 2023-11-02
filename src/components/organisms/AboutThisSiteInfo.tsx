import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Card, CardContent, Grid } from '@mui/material'
import { useState } from 'react'
import YrichikaXLink from '../atoms/YrichikaXLink'

type DisplayState = 'block' | 'none'

function AboutThisSiteInfo() {
  // TODO: reduxで、sessionStorageにすること。リロードするたびに出てくるため。
  const [display, setDisplay] = useState<DisplayState>('block')
  const close = () => {
    setDisplay('none')
  }

  return (
    <Box marginBottom={2} sx={{ display }}>
      <Card variant="outlined">
        <Grid container justifyContent="flex-end">
          <Button onClick={close} sx={{ m: 0, p: 0, minWidth: 0 }}>
            <CloseIcon />
          </Button>
        </Grid>
        <CardContent style={{ paddingTop: 0 }}>
          NestJS非公式の翻訳サイトです。
          <YrichikaXLink />
          が個人で勝手に翻訳して公開しています。
        </CardContent>
      </Card>
    </Box>
  )
}

export default AboutThisSiteInfo
