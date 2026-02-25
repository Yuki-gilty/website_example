import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ReservationForm } from "@/components/sections/reservation-form";
import { Container } from "@/components/ui/container";
import { SALON_NAME } from "@/lib/content";

export const metadata: Metadata = {
  title: `Web予約 | ${SALON_NAME}`,
  description: "LUXE / AOYAMA のWeb予約ページ。希望日時・メニュー・担当者の指定ができます。",
};

export default function ReservePage() {
  return (
    <div className="bg-base text-main">
      <SiteHeader />
      <main className="border-t border-[color:var(--border-soft)]">
        <Container className="py-16 md:py-20">
          <div className="mb-10 space-y-4">
            <Link
              href="/"
              className="inline-flex text-[11px] uppercase tracking-[0.12em] text-subtle transition-colors hover:text-main"
            >
              ← Topへ戻る
            </Link>
            <p className="text-[11px] uppercase tracking-[0.18em] text-subtle/80">Reservation</p>
            <h1 className="text-3xl tracking-[0.03em] text-main md:text-[2.4rem]" style={{ fontFamily: "var(--font-serif)" }}>
              Web予約
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-subtle md:text-base">
              空き状況を確認して、できるだけ近い日時でご案内します。送信後は仮予約となり、サロンからの確定連絡で予約完了です。
            </p>
          </div>

          <ReservationForm />
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
