export type TocItem = {
  chapter: string
  chapterUrl?: string
  documents: Document[]
}

export type Document = {
  title: string
  url: string
}
