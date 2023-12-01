import CodeSpan from '@/components/atoms/CodeSpan'
import ExternalLink from '@/components/atoms/ExternalLink'
import SimpleTable from '@/components/atoms/SimpleTable'
import { Link, TableCell, TableRow } from '@mui/material'

function TablePlatforms() {
  return (
    <SimpleTable>
      <TableRow>
        <TableCell>
          <CodeSpan>platform-express</CodeSpan>
        </TableCell>
        <TableCell>
          <ExternalLink href="https://expressjs.com/">Express</ExternalLink>
          は、Node向けのよく知られたミニマリストなWebフレームワークです。
          これは実戦で検証され、本番環境で使用可能なライブラリであり、コミュニティによって実装された多くのリソースが利用できます。
          デフォルトで<CodeSpan>@nestjs/platform-express</CodeSpan>
          パッケージが使用されます。
          多くのユーザーにとってはExpressの機能で十分であり、Expressを利用する場合は追加の設定を行う必要はありません。
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CodeSpan>platform-fastify</CodeSpan>
        </TableCell>
        <TableCell>
          <ExternalLink href="https://fastify.dev/">Fastify</ExternalLink>は、
          高性能でオーバーヘッドの少ないフレームワークであり、
          最大の効率と速度を提供することに焦点を当てています。詳しい使用方法については
          <Link href="techniques/performance">こちら</Link>
          をご覧ください。
        </TableCell>
      </TableRow>
    </SimpleTable>
  )
}

export default TablePlatforms
