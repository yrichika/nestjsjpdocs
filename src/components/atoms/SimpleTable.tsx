import { Paper, Table, TableBody, TableContainer } from '@mui/material'
import { ReactNode } from 'react'

function SimpleTable({ children }: { children: ReactNode }) {
  return (
    <TableContainer component={Paper}>
      {/* TODO: table内の要素のline-heightを1.9にする */}
      <Table>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default SimpleTable
