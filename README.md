# myskng-no-oshimen

推しメン紹介サイト - ランダムに推しメンを表示するNext.jsアプリケーションです。

## 技術スタック

- **フレームワーク**: Next.js 15.3.5 (App Router)
- **UI**: React 19 + Fluent UI React Components
- **スタイリング**: Emotion (CSS-in-JS)
- **テスト**: Vitest + Testing Library
- **デプロイ**: Cloudflare Pages (OpenNext)
- **言語**: TypeScript

## 機能

- 推しメンをランダムに表示
- 推しメン一覧の閲覧
- 個別の推しメンページ
- 誕生日特殊処理
- レスポンシブデザイン
- Twitter埋め込み対応

## 開発環境のセットアップ

### 必要な環境

- Node.js (推奨バージョン: 18以上)
- Yarn (パッケージマネージャー)

### インストールと起動

```bash
# 依存関係のインストール
yarn install

# 開発サーバーの起動
yarn dev
```

開発サーバーが起動したら [http://localhost:3000](http://localhost:3000) でアクセスできます。

### 利用可能なコマンド

```bash
# 開発サーバー起動（Turbopack使用）
yarn dev

# 本番ビルド
yarn build

# 本番サーバー起動
yarn start

# リンター実行
yarn lint

# コードフォーマット
yarn prettier

# フォーマットチェック
yarn prettier:check

# 型チェック
yarn typecheck

# テスト実行
yarn test

# Cloudflareにデプロイ
yarn deploy

# Cloudflareにプレビューデプロイ
yarn preview

# Cloudflare型定義生成
yarn cf-typegen
```

## プロジェクト構成

```
├── app/                    # Next.js App Router
│   ├── oshimens/          # 推しメン関連ページ
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
│   ├── Card/             # カードコンポーネント
│   ├── Header/           # ヘッダーコンポーネント
│   ├── Page/             # ページコンポーネント
│   └── TadoBoy/          # キャラクターコンポーネント
├── hooks/                # カスタムフック
├── lib/                  # ユーティリティ関数
├── oshimen/              # 推しメンデータ定義
├── tests/                # テストファイル
└── vitest.config.mts     # テスト設定
```

## 推しメンデータの追加

新しい推しメンを追加するには `oshimen/oshimens.ts` を編集してください。各推しメンは以下の型に従って定義します：

```typescript
interface Oshimen {
  id: string                    // 一意なID
  name: string                  // 名前
  emoji: string                 // 絵文字
  birthday: { month: number, day: number }  // 誕生日
  shortDescription: string      // 短い説明
  description: string          // 詳細説明
  tweetId: string             // 表示するツイートID
  type: 'idol' | 'vtuber' | 'bassist' | 'voice_actor'  // 種別
  omoideCount: number         // 思い出の数
}
```

## デプロイ

このプロジェクトはCloudflare Pagesでホストされています：

```bash
# プロダクションデプロイ
yarn deploy

# プレビューデプロイ
yarn preview
```

## ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。
