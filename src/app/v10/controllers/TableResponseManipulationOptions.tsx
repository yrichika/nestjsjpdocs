import CodeSpan from '@/components/atoms/CodeSpan'
import SimpleTable from '@/components/atoms/SimpleTable'
import { Link, TableCell, TableRow } from '@mui/material'

function TableResponseManipulationOptions() {
  return (
    <SimpleTable>
      <TableRow>
        <TableCell>Standard (推奨)</TableCell>
        <TableCell>
          <p>
            この仕組みでは、リクエストハンドラがJavaScriptオブジェクトまたは配列を返すと、
            <b>自動的に</b>JSONにシリアル化されます。
            ただし、JavaScriptのプリミティブ型（たとえば、
            <CodeSpan>string</CodeSpan>、<CodeSpan>number</CodeSpan>、
            <CodeSpan>boolean</CodeSpan>
            ）を返す場合、Nestはそれをシリアル化しようとせずにそのままの値を送信します。
            これにより、レスポンスの処理が簡単になります。
            値を返すだけで、Nestが残りを処理します。
          </p>
          <p>
            そして、デフォルトではレスポンスの<b>ステータスコード</b>
            は常に200です。ただし、POSTリクエストでは201が使用されます。
            <CodeSpan>@HttpCode(...) </CodeSpan>
            デコレータをハンドラに追加することで、この動作は変更が可能です（
            <Link href="#status-code">ステータスコード</Link>を参照）。
          </p>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>ライブラリ固有</TableCell>
        <TableCell>
          <p>
            ライブラリ固有（
            Expressなど）のレスポンスオブジェクトを使用できます。レスポンスオブジェクトは、メソッドの引数に
            <CodeSpan>@Res() </CodeSpan>
            デコレータを使用して注入することができます（例:{' '}
            <CodeSpan>findAll(@Res() response)</CodeSpan>
            ）。この方法では、そのオブジェクトが元々持っているメソッドをそのまま使用できます。たとえば、Expressでは、
            <CodeSpan>response.status(200).send()</CodeSpan>
            のようなコードを使用してレスポンスを構築できます。
          </p>
        </TableCell>
      </TableRow>
    </SimpleTable>
  )
}

export default TableResponseManipulationOptions
