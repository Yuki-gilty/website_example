type SectionProps = {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[color:var(--border-soft)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="mb-11 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/62">
              {label}
            </p>
            <h2 className="mt-3 font-serif text-[1.84rem] leading-[1.22] tracking-[0.02em] text-main md:text-[2.24rem]">
              {title}
            </h2>
          </div>
          <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-white/30 to-transparent md:max-w-sm" />
        </div>
        <div className="text-sm leading-relaxed text-subtle md:text-base">{children}</div>
      </div>
    </section>
  );
}
