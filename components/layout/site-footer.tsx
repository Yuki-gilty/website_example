import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SALON_NAME } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--bg-base)]">
      <Container className="flex flex-col gap-8 py-10 text-xs text-subtle md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="font-serif text-sm tracking-[0.16em] text-main">
            {SALON_NAME}
          </p>
          <p className="max-w-xs leading-relaxed">
            ざわつきから少し離れて、髪と気持ちを整えるための、静かな余白を用意しました。
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle/80">
              Reserve
            </p>
            <div className="space-y-1">
              <Link
                href="tel:0364591234"
                className="block text-main transition-colors hover:text-[color:var(--accent)]"
              >
                03-6459-1234
              </Link>
              <Link
                href="mailto:info@luxe-aoyama.jp"
                className="block transition-colors hover:text-[color:var(--accent)]"
              >
                info@luxe-aoyama.jp
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle/80">
              Social
            </p>
            <div className="space-y-1">
              <Link
                href="https://instagram.com"
                className="block transition-colors hover:text-[color:var(--accent)]"
              >
                Instagram
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle/80">
              Info
            </p>
            <div className="space-y-1">
              <Link
                href="/styles"
                className="block transition-colors hover:text-[color:var(--accent)]"
              >
                スタイル一覧
              </Link>
              <Link
                href="/privacy"
                className="block transition-colors hover:text-[color:var(--accent)]"
              >
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[color:var(--border-soft)]">
        <Container className="flex items-center justify-between py-4 text-[10px] text-subtle/70">
          <span>© {new Date().getFullYear()} {SALON_NAME}</span>
          <span className="hidden md:inline">
            Design &amp; Development — LUXE Studio
          </span>
        </Container>
      </div>
    </footer>
  );
}

