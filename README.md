# NestJSドキュメント日本語翻訳プロジェクト

## 構成

このプロジェクトは以下のライブラリで構成されています。

- Next.js: App Router
- MUI
- Prism.js
- SASS
- Testing Library
- Redux Toolkit



## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## 個人メモについて

`MEMO.md`と`TODO.md`が`.gitignore`に含まれているため、このプロジェクト用に個人的なメモをつけたい場合はそれらのファイルを作成して使ってください。


## ややこしい単語の扱い

### route, path, route path, routingなど

基本的には、意味が同じなら「パス」に共通化して翻訳しています。

### handler

「ハンドラ」と訳していますが、意味は処理、具体的にはメソッドのことです。

#### handler signature

要はメソッドの引数のことです

### expose ...

"expose the interface" などの表現は、「インターフェースに直接アクセスできる状態」というような表現で訳しています。
exposeは「公開する」と約されることが多いですが、文の中でかなり日本語として違和感があったり、そもそも意味不明な場合があるためです。

