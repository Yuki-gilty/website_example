# ヒーロー動画をデプロイで表示する方法

GitHub は 1 ファイル 100MB までなので、大きな動画は次のどちらかで対応してください。

---

## 方法 A: 動画を GitHub に上げる（Git LFS）

1. **Git LFS をインストール**
   - https://git-lfs.com/ からインストール  
   - または macOS で: `brew install git-lfs` のあと `git lfs install`

2. **このリポジトリで LFS を有効化**
   ```bash
   git lfs install
   ```

3. **動画を配置**
   - 動画ファイルを `public/dashboard-bg.mov` に置く

4. **コミット＆プッシュ**
   ```bash
   git add public/dashboard-bg.mov
   git commit -m "Add hero video via LFS"
   git push origin main
   ```

5. **Vercel で LFS を有効化**
   - プロジェクト → Settings → Git → **Include Git LFS files** を ON → 保存
   - 必要なら「Redeploy」で再デプロイ

これでデプロイ先でも `/dashboard-bg.mov` が配信され、ヒーローで動画が表示されます。

---

## 方法 B: 動画を外部でホストする（すぐ使える）

動画を GitHub に含めず、外部 URL で配信する方法です。

1. **動画をアップロード**
   - [Cloudinary](https://cloudinary.com/)（無料枠あり）や [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) などにアップロードし、**動画の直リンク URL** を取得する

2. **Vercel で環境変数を設定**
   - プロジェクト → Settings → Environment Variables
   - 名前: `NEXT_PUBLIC_HERO_VIDEO_URL`
   - 値: 取得した動画の URL（例: `https://res.cloudinary.com/xxx/video/upload/xxx.mp4`）
   - 保存後、再デプロイ

3. **表示確認**
   - ヒーローは `NEXT_PUBLIC_HERO_VIDEO_URL` があればその URL を、なければ `/dashboard-bg.mov` を使います。  
     外部 URL を設定すれば、リポジトリに動画がなくてもデプロイしたサイトで動画が表示されます。

---

現在 `public/` に `dashboard-bg.mov` は含まれていません。  
手元の動画を使う場合は、**方法 A** なら `public/dashboard-bg.mov` に置いてから LFS でプッシュ、**方法 B** ならどこかへアップロードして `NEXT_PUBLIC_HERO_VIDEO_URL` を設定してください。
