import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SALON_NAME, access } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--bg-base)]">
      <Container className="flex flex-col gap-8 py-10 text-xs text-subtle md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p
            className="text-sm tracking-[0.16em] text-main"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {SALON_NAME}
          </p>
          <p className="max-w-xs leading-relaxed">
            ノイズを抑えた空間で、髪と気分を整えるための静かな時間を提供します。
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle/80">Reserve</p>
            <div className="space-y-1">
              <Link href="/reserve" className="block transition-colors hover:text-white">
                Web予約ページ
              </Link>
              <Link href={`tel:${access.phone.replace(/-/g, "")}`} className="block text-main transition-colors hover:text-white">
                {access.phone}
              </Link>
              <Link href={`mailto:${access.email}`} className="block transition-colors hover:text-white">
                {access.email}
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle/80">Social</p>
            <div className="space-y-1">
              <Link href="https://instagram.com" className="block transition-colors hover:text-white">
                Instagram
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle/80">Info</p>
            <div className="space-y-1">
              <Link href="/styles" className="block transition-colors hover:text-white">
                スタイル一覧
              </Link>
              <Link href="/privacy" className="block transition-colors hover:text-white">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[color:var(--border-soft)]">
        <Container className="flex items-center justify-between py-4 text-[10px] text-subtle/70">
          <span>© {new Date().getFullYear()} {SALON_NAME}</span>
          <span className="hidden md:inline">Design &amp; Development — LUXE Studio</span>
        </Container>
      </div>
    </footer>
  );
}
