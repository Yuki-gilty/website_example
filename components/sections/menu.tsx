import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { menuItems } from "@/lib/content";

export function MenuSection() {
  return (
    <Section id="menu" label="Menu" title="削ぎ落とした、6つのメニュー">
      <div className="grid gap-6 md:grid-cols-2">
        {menuItems.map((item, index) => (
          <Reveal
            key={item.name}
            delay={index * 0.08}
            className="group rounded-[12px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]/88 px-5 py-5 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--border-subtle)] hover:bg-[color:var(--bg-surface-soft)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-subtle/80">{item.name}</p>
                <p className="mt-2 text-sm text-subtle">{item.description}</p>
              </div>
              <p className="shrink-0 text-xs text-main">{item.price}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-[11px] text-subtle">
        * 表示価格は税込。髪の状態・施術履歴により料金と所要時間が前後する場合があります。
      </p>
    </Section>
  );
}
