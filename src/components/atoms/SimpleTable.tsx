import { Paper, Table, TableBody, TableContainer } from '@mui/material'
import { ReactNode } from 'react'

function SimpleTable({ children }: { children: ReactNode }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default SimpleTable
