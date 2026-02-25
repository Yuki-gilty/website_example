import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { reviews } from "@/lib/content";

export function ReviewsSection() {
  return (
    <Section id="reviews" label="Voices" title="通ってくださる方のリアルな声">
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review, index) => (
          <Reveal
            key={review.id}
            delay={index * 0.08}
            className="flex h-full flex-col justify-between rounded-[12px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]/88 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--border-subtle)] hover:bg-[color:var(--bg-surface-soft)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.35)]"
          >
            <p className="text-sm leading-relaxed text-subtle">“{review.text}”</p>
            <p className="mt-5 text-xs text-subtle/85">{review.name}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
