export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t-2 border-dashed border-[var(--line)]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="barcode max-w-xs mx-auto mb-4 opacity-70"></div>
        <p className="font-ticket text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)]">
          Merci de votre visite — © {year} Hamidou Mbodj
        </p>
      </div>
    </footer>
  );
}
