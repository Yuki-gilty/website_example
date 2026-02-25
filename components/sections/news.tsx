import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { newsItems } from "@/lib/content";

export function NewsSection() {
  return (
    <Section id="news" label="News" title="News & Topics">
      <div className="overflow-hidden rounded-[14px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]/82">
        {newsItems.map((item, index) => (
          <Reveal
            key={item.id}
            delay={index * 0.06}
            className={`group px-5 py-5 transition-colors duration-300 hover:bg-white/[0.02] md:px-6 ${
              index !== newsItems.length - 1 ? "border-b border-[color:var(--border-soft)]" : ""
            }`}
          >
            <article className="grid gap-3 md:grid-cols-[150px_minmax(0,1fr)] md:items-start md:gap-6">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/66">{item.date}</p>
                <span className="inline-flex rounded-[6px] border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white/70">
                  {item.category}
                </span>
              </div>
              <div>
                <h3 className="text-[1.02rem] leading-[1.5] text-main transition-colors duration-300 group-hover:text-white md:text-[1.1rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.78] text-subtle/95">{item.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
