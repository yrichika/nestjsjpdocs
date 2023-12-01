import Top from '@/app/page'
import '@testing-library/jest-dom'
import { renderWithStore } from '../utils/renderWithStore'

jest.mock('next/navigation', () => {
  const redirectMock = jest.fn()
  return {
    redirect: redirectMock,
  }
})

describe('top page', () => {
  it('/v10 へリダイレクト', () => {
    renderWithStore(<Top />, {})
    expect(jest.requireMock('next/navigation').redirect).toBeCalledWith('/v10')
  })
})
