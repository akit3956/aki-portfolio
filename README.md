# Aki Portfolio

> 教える人から、AIで教える仕組みを作る人へ。

[Aki Labs](https://verba-learning-app.vercel.app/) 創業者 Aki の個人ポートフォリオサイト。
日本語教師 → iPhone修理 → アプリ開発 → AIネイティブ企業 Aki Labs の創業 という軌跡を一枚に。

## 掲載内容

- **About** — プロフィールと自己紹介
- **Off-hours** — 神社仏閣巡り・写経の巡礼録ギャラリー
- **Aki Labs** — CEO + AI 5部署で運営する AIネイティブ組織図
- **Verba ($VRB)** — 旗艦プロダクト（Learn Japanese × Web3 × AI）
- **Products** — Gumroad で販売中の AkiLads JLPT N3 / N4 / N5
- **Other Projects** — FX・株 チャート分析アプリ / ナンバーズ予測アプリ / 日本語教師経験
- **Vision** — Aki Labs の未来像と個人としての FIRE 目標

## Stack

- Pure HTML + CSS（ビルドツール不要 / no build step）
- No JavaScript dependencies
- **Fonts:** Noto Serif JP / Noto Sans JP / JetBrains Mono / Inter (Google Fonts)
- **Theme:** Dark / Web3-cyberpunk × 和

## ローカルで確認する

```bash
# このフォルダで:
open index.html

# またはローカルサーバーを立てる場合:
python3 -m http.server 8080
# → http://localhost:8080 を開く
```

## ファイル構成

```
.
├── index.html                  本体（HTML + 内蔵CSS）
├── favicon.svg                 サイトアイコン
├── README.md                   このファイル
├── aki-illustration.jpg        Hero イラスト（善光寺 @ 長野）
├── n3-cover.jpg                AkiLads JLPT N3 表紙
├── n4-cover.jpg                AkiLads JLPT N4 表紙
├── n5-cover.jpg                AkiLads JLPT N5 表紙
├── shakyo-hannya.jpg           写経（般若心経）
└── temple-*.jpg                神社仏閣の写真（5枚）
```

## デプロイ

Vercel に GitHub からインポートしてデプロイ。Framework Preset は `Other`（静的サイト）でOK。

```bash
# 既に GitHub repo を持っている場合
git push

# Vercel CLI 経由でもデプロイ可能
npx vercel
```

## Aki Labs の他のリンク

- **Verba（旗艦アプリ）:** https://verba-learning-app.vercel.app/
- **AkiLads JLPT 教材:** https://akist3956.gumroad.com/
- **実験場（Streamlit）:** https://verba-official.streamlit.app/
- **Bluesky:** [@aki-t901.bsky.social](https://bsky.app/profile/aki-t901.bsky.social)

---

© 2026 **Aki Labs** · Built by Aki + AI · Made with care.
