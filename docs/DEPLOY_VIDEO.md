# ヒーロー動画の運用メモ

現在のヒーローは以下の順で動画を読み込みます。

1. 環境変数 `NEXT_PUBLIC_HERO_VIDEO_URL`（設定されている場合）
2. `public/hero-bg.webm`
3. `public/hero-bg.mp4`

ポスター画像は `public/hero-bg-poster.jpg` を使用します。

---

## 推奨ファイル構成（軽量）

- `public/hero-bg.webm`（軽量・第一候補）
- `public/hero-bg.mp4`（互換性用フォールバック）
- `public/hero-bg-poster.jpg`（初期表示）

目安サイズ:
- webm: 5〜8MB
- mp4: 8〜12MB

---

## 外部ホスト動画を使う場合

1. Cloudinary / Vercel Blob などに動画をアップロード
2. 環境変数 `NEXT_PUBLIC_HERO_VIDEO_URL` に直リンク URL を設定
3. 再デプロイ

これで `public` 内の動画がなくてもヒーロー動画を表示できます。

---

## 変換コマンド例（ffmpeg）

元動画 `input.mp4` から軽量版を作る例です。

```bash
# MP4 (H.264)
ffmpeg -y -i input.mp4 \
  -vf "scale=1280:-2:flags=lanczos,fps=24" \
  -c:v libx264 -preset veryfast -profile:v high -pix_fmt yuv420p \
  -b:v 1200k -maxrate 1500k -bufsize 3000k \
  -movflags +faststart -an public/hero-bg.mp4

# WebM (VP9)
ffmpeg -y -i input.mp4 \
  -vf "scale=1280:-2:flags=lanczos,fps=24" \
  -c:v libvpx-vp9 -row-mt 1 -crf 38 -b:v 0 -an public/hero-bg.webm

# ポスター
ffmpeg -y -ss 00:00:01 -i public/hero-bg.mp4 -frames:v 1 -q:v 2 public/hero-bg-poster.jpg
```
