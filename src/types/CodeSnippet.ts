export type Language =
  | 'shell'
  | 'javascript'
  | 'js'
  | 'typescript'
  | 'ts'
  | 'typoscript'

export type CodeSnippet = {
  lang: Language
  code: string
  filename?: string
}

export type TsCodeSnippet = CodeSnippet & {
  lang: 'typescript' | 'ts'
}

export type JsCodeSnippet = CodeSnippet & {
  lang: 'javascript' | 'js'
}
