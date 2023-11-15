import { JsCodeSnippet, TsCodeSnippet } from '@/types/CodeSnippet'
import { Box, Button, Grid } from '@mui/material'
import { useState } from 'react'
import CodeBlock from '../atoms/CodeBlock'
import CodeSpan from '../atoms/CodeSpan'

type Props = {
  tsSnippet: TsCodeSnippet
  jsSnippet: JsCodeSnippet
}

function ToggleCodeBlock({ tsSnippet, jsSnippet }: Props) {
  const [isTs, setTs] = useState(true)
  function toggle() {
    setTs(!isTs)
  }

  function toggleCodeBlockDisplay(show: boolean) {
    return show ? { display: 'block' } : { display: 'none' }
  }

  return (
    <Box>
      <Grid container alignItems="center">
        <Grid item>
          {isTs ? (
            <CodeSpan>{tsSnippet.filename}</CodeSpan>
          ) : (
            <CodeSpan>{jsSnippet.filename}</CodeSpan>
          )}
        </Grid>
        <Grid item sx={{ marginLeft: 'auto' }}>
          <Button
            variant="outlined"
            onClick={toggle}
            sx={{ m: 0, minWidth: 0 }}
          >
            {isTs ? 'JS' : 'TS'}
          </Button>
        </Grid>
      </Grid>
      <CodeBlock snippet={tsSnippet} sx={toggleCodeBlockDisplay(isTs)} />
      <CodeBlock snippet={jsSnippet} sx={toggleCodeBlockDisplay(!isTs)} />
    </Box>
  )
}

export default ToggleCodeBlock
