import { Providers } from '@/lib/providers'
import '@/styles/prism.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NestJS ドキュメント|日本語翻訳',
  description:
    'Nest (NestJS) は効率的でスケーラブルな Node.jsサーバーサイドアプリケーションを構築するためのフレームワークです。継続的に進化する JavaScript を使用し、TypeScriptを完全にサポートしています（ただし、JavaScriptだけでコードを書くこともできます）。Nest は OOP（オブジェクト指向プログラミング）、FP（関数型プログラミング）、および FRP（関数型リアクティブプログラミング）を組み合わせて使うことができます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* IMPORTANT! topレベルで追加する要素は全て body より下の要素に追加すること */}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
