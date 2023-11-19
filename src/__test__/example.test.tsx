import '@testing-library/jest-dom'

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
    // TODO:
    // renderWithStore(<Home />, {})
    // const initialTest = screen.getByText(/project start!/i)
    // expect(initialTest).toBeInTheDocument()
  })
})
