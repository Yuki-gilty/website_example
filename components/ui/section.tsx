type SectionProps = {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-[color:var(--border-soft)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle/80">
              {label}
            </p>
            <h2 className="mt-2 font-serif text-[1.7rem] leading-snug tracking-[0.08em] text-main md:text-[1.9rem]">
              {title}
            </h2>
          </div>
          <div className="hidden flex-1 border-b border-[color:var(--border-soft)] opacity-70 md:block" />
        </div>
        <div className="text-sm leading-relaxed text-subtle md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

