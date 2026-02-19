import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { reviews } from "@/lib/content";

export function ReviewsSection() {
  return (
    <Section id="reviews" label="Voices" title="通い続けてくださる方のことば">
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review, index) => (
          <Reveal
            key={review.id}
            delay={index * 0.08}
            className="flex h-full flex-col justify-between rounded-[8px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)] p-4 transition-all duration-300 hover:border-[color:var(--border-subtle)] hover:bg-[color:var(--bg-surface-soft)] hover:shadow-[0_4px_12px_rgba(198,165,106,0.08)]"
          >
            <p className="text-sm leading-relaxed text-subtle">“{review.text}”</p>
            <p className="mt-4 text-xs text-subtle/80">{review.name}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

