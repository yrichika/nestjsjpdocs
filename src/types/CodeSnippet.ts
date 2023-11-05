export type Language = 'shell' | 'javascript' | 'typescript' | 'typoscript'

export type CodeSnippet = {
  lang: Language
  code: string
  filename?: string
}

export type TsCodeSnippet = CodeSnippet & {
  lang: 'typescript'
}

export type JsCodeSnippet = CodeSnippet & {
  lang: 'javascript'
}
