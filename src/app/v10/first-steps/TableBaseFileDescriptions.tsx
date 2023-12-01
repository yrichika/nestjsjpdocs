import CodeSpan from '@/components/atoms/CodeSpan'
import SimpleTable from '@/components/atoms/SimpleTable'
import { TableCell, TableRow } from '@mui/material'

function TableBaseFileDescriptions() {
  return (
    <SimpleTable>
      <TableRow>
        <TableCell>
          <CodeSpan>app.controller.ts</CodeSpan>
        </TableCell>
        <TableCell>サンプル用の1ルートだけのベースコントローラー</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>app.controller.spec.ts</CodeSpan>
        </TableCell>
        <TableCell>コントローラーのテストファイル</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>app.module.ts</CodeSpan>
        </TableCell>
        <TableCell>アプリケーションのルートモジュール</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>app.service.ts</CodeSpan>
        </TableCell>
        <TableCell>サンプル用の1メソッドだけのサービス</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>main.ts</CodeSpan>
        </TableCell>
        <TableCell>
          アプリケーションのエントリーファイル。
          <CodeSpan>NestFactory</CodeSpan>
          の関数を使用してNestアプリケーションを作成します。
        </TableCell>
      </TableRow>
    </SimpleTable>
  )
}

export default TableBaseFileDescriptions
