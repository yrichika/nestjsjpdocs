import Home from '@/app/page'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithStore } from './utils/renderWithStore'

// TODO: テストは、tocItemsを使って、すべてのページでタイトルが表示されているか確認だけでいい

// mocking useRouter
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '',
    }
  },
}))

describe('Home', () => {
  it('renders top page', () => {
    renderWithStore(<Home />, {})
    const initialTest = screen.getByText(/project start!/i)

    expect(initialTest).toBeInTheDocument()
  })
})
