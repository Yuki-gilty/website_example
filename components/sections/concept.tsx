import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { conceptText } from "@/lib/content";

export function ConceptSection() {
  return (
    <Section id="concept" label="Concept" title="Quiet, but present.">
      <Reveal className="space-y-3">
        {conceptText.map((line) => (
          <p key={line} className="max-w-2xl text-sm leading-relaxed md:text-base">
            {line}
          </p>
        ))}
      </Reveal>
    </Section>
  );
}

