import { JsCodeSnippet, TsCodeSnippet } from '@/types/CodeSnippet'
import { Box, Button, Grid } from '@mui/material'
import { useState } from 'react'
import CodeBlock from './CodeBlock'
import CodeSpan from './CodeSpan'

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
            {isTs ? 'TS' : 'JS'}
          </Button>
        </Grid>
      </Grid>
      <CodeBlock lang={tsSnippet.lang} sx={toggleCodeBlockDisplay(isTs)}>
        {tsSnippet.code}
      </CodeBlock>

      <CodeBlock lang={jsSnippet.lang} sx={toggleCodeBlockDisplay(!isTs)}>
        {jsSnippet.code}
      </CodeBlock>
    </Box>
  )
}

export default ToggleCodeBlock
