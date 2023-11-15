import { CodeSnippet, Language } from '@/types/CodeSnippet'
import { Box } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  snippet?: CodeSnippet
  lang?: Language
  sx?: any
}

function CodeBlock({ children, snippet, lang, sx }: Props) {
  // TODO: コピーボタンを追加
  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text)
  // }

  return (
    <Box sx={sx}>
      <pre style={{ marginTop: '1px' }}>
        {snippet !== undefined ? (
          <code className={`language-${snippet.lang}`}>{snippet.code}</code>
        ) : (
          <code className={`language-${lang}`}>{children}</code>
        )}
      </pre>
    </Box>
  )
}

export default CodeBlock
