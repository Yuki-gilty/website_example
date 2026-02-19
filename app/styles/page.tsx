import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileReserveBar } from "@/components/layout/mobile-reserve-bar";
import { Container } from "@/components/ui/container";

export default function StylesPage() {
  return (
    <div className="bg-base text-main">
      <SiteHeader />
      <main className="border-t border-[color:var(--border-soft)]">
        <Container className="py-16 md:py-20">
          <div className="mb-10 space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-subtle">
              Styles
            </p>
            <h1 className="font-serif text-2xl tracking-[0.04em] md:text-3xl">
              スタイル例
            </h1>
            <p className="max-w-lg text-sm text-subtle md:text-base">
              実際のスタイル写真や、季節ごとのおすすめデザインをこちらにまとめていきます。
              まずは店内で、好みやライフスタイルをゆっくりお聞かせください。
            </p>
          </div>
          <div className="rounded-[8px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)] p-6 text-sm text-subtle">
            <p>
              こちらのページでは、カットやカラーごとのスタイル写真、顔立ち・骨格別の提案などを掲載予定です。
              具体的なイメージが固まっていなくても、ラフなスクリーンショットや雰囲気だけ共有していただければ十分です。
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
      <MobileReserveBar />
    </div>
  );
}

