import { ReactNode } from 'react'

function Hl({ children }: { children: ReactNode }) {
  const color = '#e91e63'
  return <span style={{ color }}>{children}</span>
}

export default Hl
