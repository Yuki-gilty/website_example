import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { menuItems } from "@/lib/content";

export function MenuSection() {
  return (
    <Section id="menu" label="Menu" title="シンプルで、続けやすいメニュー">
      <div className="grid gap-6 md:grid-cols-2">
        {menuItems.map((item, index) => (
          <Reveal
            key={item.name}
            delay={index * 0.08}
            className="group rounded-[8px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)] px-4 py-4 transition-all duration-300 hover:border-[color:var(--border-subtle)] hover:bg-[color:var(--bg-surface-soft)] hover:shadow-[0_4px_12px_rgba(198,165,106,0.08)] md:px-5 md:py-5"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-subtle/80">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-subtle">{item.description}</p>
              </div>
              <p className="text-xs text-main">{item.price}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-subtle">
        * 表示価格は税込。髪の状態や履歴によって所要時間・料金が前後する場合があります。
      </p>
    </Section>
  );
}

