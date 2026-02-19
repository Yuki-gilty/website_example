import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { access } from "@/lib/content";

export function AccessSection() {
  return (
    <Section id="access" label="Access" title="LUXE / AOYAMA">
      <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <Reveal className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-subtle/80">
              Address
            </p>
            <p className="text-sm text-subtle">{access.address}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-subtle/80">
              Station
            </p>
            <p className="text-sm text-subtle">{access.station}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-subtle">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-subtle/80">
                Hours
              </p>
              <p className="mt-1">{access.hours}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-subtle/80">
                Closed
              </p>
              <p className="mt-1">{access.closed}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-4 rounded-[8px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)] p-4 text-xs text-subtle">
          <p className="text-[11px] uppercase tracking-[0.16em] text-subtle/80">
            Note
          </p>
          <p>
            ご予約時間より10分以上遅れてのご来店の場合、メニューの内容を一部変更させていただくことがあります。
          </p>
          <p>
            キャンセルやメニュー変更は、前日までにご連絡いただけるとうれしいです。
          </p>
          <p className="border-t border-[color:var(--border-soft)] pt-3">
            ご予約はお電話、もしくは公式LINE・WEBより受け付けています。
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

