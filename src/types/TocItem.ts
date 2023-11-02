export type TocItem = {
  section: string
  sectionUrl?: string
  documents: Document[]
}

export type Document = {
  title: string
  url: string
}
