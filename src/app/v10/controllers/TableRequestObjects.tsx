import CodeSpan from '@/components/atoms/CodeSpan'
import SimpleTable from '@/components/atoms/SimpleTable'
import { TableCell, TableRow } from '@mui/material'

function TableRequestObjects() {
  return (
    <SimpleTable>
      <TableRow>
        <TableCell>
          <CodeSpan>@Request(), @Req()</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>req</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@Response(), @Res()*</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>res</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@Next()</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>next</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@Session()</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>req.session</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@Param(key?: string)</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>req.params</CodeSpan> / <CodeSpan>req.params[key]</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@Body(key?: string)</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>req.body</CodeSpan> / <CodeSpan>req.body[key]</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@Query(key?: string)</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>req.query</CodeSpan> / <CodeSpan>req.query[key]</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@Headers(name?: string)</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>req.headers</CodeSpan> /{' '}
          <CodeSpan>req.headers[name]</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@Ip()</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>req.ip</CodeSpan>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>@HostParam()</CodeSpan>
        </TableCell>
        <TableCell>
          <CodeSpan>req.hosts</CodeSpan>
        </TableCell>
      </TableRow>
    </SimpleTable>
  )
}

export default TableRequestObjects
