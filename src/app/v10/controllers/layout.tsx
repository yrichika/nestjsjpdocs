import { Metadata } from 'next'
import { listOfContents } from './listOfContents'

export const metadata: Metadata = {
  title: listOfContents[0].title + process.env.NEXT_PUBLIC_PAGE_TITLE,
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
