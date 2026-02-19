import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileReserveBar } from "@/components/layout/mobile-reserve-bar";
import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
  return (
    <div className="bg-base text-main">
      <SiteHeader />
      <main className="border-t border-[color:var(--border-soft)]">
        <Container className="py-16 md:py-20">
          <div className="mb-10 space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-subtle">
              Privacy
            </p>
            <h1 className="font-serif text-2xl tracking-[0.04em] md:text-3xl">
              プライバシーポリシー
            </h1>
            <p className="max-w-lg text-sm text-subtle md:text-base">
              LUXE / AOYAMA（以下「当サロン」）は、お客さまの個人情報を適切に取り扱い、安心してご利用いただけるよう努めます。
              本ページでは、その基本的な考え方を記載しています。
            </p>
          </div>

          <div className="space-y-8 text-sm text-subtle md:text-base">
            <section>
              <h2 className="text-xs uppercase tracking-[0.16em] text-subtle/80">
                1. 取得する情報
              </h2>
              <p className="mt-3 leading-relaxed">
                ご予約時のお名前・連絡先・ご紹介履歴・施術履歴など、サロン運営に必要な最低限の情報のみをお預かりします。
              </p>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.16em] text-subtle/80">
                2. 利用目的
              </h2>
              <p className="mt-3 leading-relaxed">
                予約管理、施術内容の記録、サービス改善のための分析、安全なサロン運営のために利用します。
                それ以外の目的での利用は行いません。
              </p>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.16em] text-subtle/80">
                3. 第三者提供
              </h2>
              <p className="mt-3 leading-relaxed">
                法令に基づく場合を除き、お客さまの同意なく第三者に個人情報を提供することはありません。
              </p>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.16em] text-subtle/80">
                4. お問い合わせ
              </h2>
              <p className="mt-3 leading-relaxed">
                個人情報の取扱いに関するお問い合わせは、店頭もしくはメールにてお受けいたします。
              </p>
            </section>
          </div>
        </Container>
      </main>
      <SiteFooter />
      <MobileReserveBar />
    </div>
  );
}

