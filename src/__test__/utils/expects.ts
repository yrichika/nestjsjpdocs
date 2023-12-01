import { ListOfContents } from '@/types/ListOfContents'
import { screen } from '@testing-library/react'

export function expectTitlesExistInTheDocument(listOfContents: ListOfContents) {
  listOfContents.forEach(content => {
    const title = new RegExp(content.title, 'i')
    const anyElementWithTitle = screen.getAllByText(title)[0]
    expect(anyElementWithTitle).toBeInTheDocument()
  })
}
