import { expectTitlesExistInTheDocument } from '@/__test__/utils/expects'
import { listOfContents } from '@/app/v10/listOfContents'
import IntroductionPage from '@/app/v10/page'
import '@testing-library/jest-dom'
import { renderWithStore } from '../../utils/renderWithStore'

describe('Introduction', () => {
  it('ページが表示されるか', () => {
    renderWithStore(<IntroductionPage />, {})
    expectTitlesExistInTheDocument(listOfContents)
  })
})
