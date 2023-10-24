import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'
import { renderWithStore } from './utils/renderWithStore'

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
