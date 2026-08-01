export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <div className="font-ticket text-xs tracking-[0.3em] uppercase text-[var(--stamp-red)] mb-2">
        {eyebrow}
      </div>
      <h2 className="font-ticket text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)]">
        {title}
      </h2>
      <div className={`w-16 h-[3px] bg-[var(--ink)] mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
