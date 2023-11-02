import { Language } from '@/types/CodeSnippet'
import { Box } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  language: Language
}

function CodeBlock({ children, language }: Props) {
  // TODO: コピーボタンを追加
  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text)
  // }

  return (
    <Box>
      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </Box>
  )
}

export default CodeBlock
