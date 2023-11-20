import { expectTitlesExistInTheDocument } from '@/__test__/utils/expects'
import { listOfContents } from '@/app/v10/providers/listOfContents'
import ProvidersPage from '@/app/v10/providers/page'
import '@testing-library/jest-dom'
import { renderWithStore } from '../../../utils/renderWithStore'

describe('ProvidersPage', () => {
  it('ページが表示されるか', () => {
    renderWithStore(<ProvidersPage />, {})
    expectTitlesExistInTheDocument(listOfContents)
  })
})
