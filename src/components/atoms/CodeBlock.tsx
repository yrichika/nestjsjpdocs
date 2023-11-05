import { Language } from '@/types/CodeSnippet'
import { Box } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  lang: Language
  sx?: any
}

function CodeBlock({ children, lang, sx }: Props) {
  // TODO: コピーボタンを追加
  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text)
  // }

  return (
    <Box sx={sx}>
      <pre style={{ marginTop: '1px' }}>
        <code className={`language-${lang}`}>{children}</code>
      </pre>
    </Box>
  )
}

export default CodeBlock
