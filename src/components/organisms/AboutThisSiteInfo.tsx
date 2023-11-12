import {
  selectDisplay,
  toggleDisplay,
  useDispatch,
  useSelector,
} from '@/lib/redux'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Card, CardContent, Grid, useTheme } from '@mui/material'
import YrichikaXLink from '../atoms/YrichikaXLink'

function AboutThisSiteInfo() {
  const dispatch = useDispatch()
  const display = useSelector(selectDisplay)
  const close = () => {
    dispatch(toggleDisplay())
  }

  const theme = useTheme()
  const closeIconColor = theme.palette.grey[700]
  const additionalComment = process.env.NEXT_PUBLIC_ADDITIONAL_COMMENT

  return (
    <Box marginBottom={2} sx={{ display }}>
      <Card variant="outlined">
        <Grid container justifyContent="flex-end">
          <Button onClick={close} sx={{ m: 0, p: 0, minWidth: 0 }}>
            <CloseIcon sx={{ color: closeIconColor }} />
          </Button>
        </Grid>
        <CardContent sx={{ paddingTop: 0, textAlign: 'center' }}>
          NestJS非公式の翻訳サイトです。
          <YrichikaXLink />
          が個人で勝手に翻訳して公開しています。
          <br />
          {additionalComment}
        </CardContent>
      </Card>
    </Box>
  )
}

export default AboutThisSiteInfo
