import { expectTitlesExistInTheDocument } from '@/__test__/utils/expects'
import { listOfContents } from '@/app/v10/first-steps/listOfContents'
import FirstStepsPage from '@/app/v10/first-steps/page'
import '@testing-library/jest-dom'
import { renderWithStore } from '../../../utils/renderWithStore'

describe('FirstStepsPage', () => {
  it('ページが表示されるか', () => {
    renderWithStore(<FirstStepsPage />, {})
    expectTitlesExistInTheDocument(listOfContents)
  })
})
