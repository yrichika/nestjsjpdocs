import { expectTitlesExistInTheDocument } from '@/__test__/utils/expects'
import { listOfContents } from '@/app/v10/controllers/listOfContents'
import ControllersPage from '@/app/v10/controllers/page'
import '@testing-library/jest-dom'
import { renderWithStore } from '../../../utils/renderWithStore'

describe('ControllersPage', () => {
  it('ページが表示されるか', () => {
    renderWithStore(<ControllersPage />, {})
    expectTitlesExistInTheDocument(listOfContents)
  })
})
