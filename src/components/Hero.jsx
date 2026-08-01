export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative">
      <div className="max-w-md w-full">
        <div className="relative">
          <div
            className="absolute inset-0 translate-x-2 translate-y-2 bg-[var(--paper-dark)] border-2 border-[var(--ink)] rotate-1"
            aria-hidden="true"
          ></div>

          <div className="ticket tear-bottom relative border-2 border-[var(--ink)] px-8 pt-8 pb-10">
            <div className="text-center font-ticket text-[10px] tracking-[0.3em] uppercase text-[var(--ink-soft)] mb-1">
              République du Code — Dakar
            </div>
            <div className="text-center font-ticket text-xl font-bold tracking-tight">
              REÇU DE PRÉSENTATION
            </div>

            <div className="notch-divider"></div>

            <div className="font-ticket text-3xl font-bold text-center leading-tight mb-1">
              HAMIDOU MBODJ
            </div>
            <div className="text-center text-sm text-[var(--ink-soft)] mb-6">
              Développeur Full-Stack Junior
            </div>

            <div className="space-y-2 font-ticket text-xs">
              <div className="flex justify-between">
                <span className="text-[var(--ink-soft)]">DATE</span>
                <span>01/08/2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--ink-soft)]">LIEU</span>
                <span>Dakar, Sénégal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--ink-soft)]">STACK</span>
                <span>React · Node · Flutter</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--ink-soft)]">STATUT</span>
                <span className="text-[var(--confirm)] font-bold">DISPONIBLE</span>
              </div>
            </div>

            <div className="notch-divider"></div>

            <div className="barcode w-full mb-2"></div>
            <div className="text-center font-ticket text-[10px] tracking-[0.3em] text-[var(--ink-soft)]">
              SCAN POUR CONTACTER
            </div>

            <div className="flex justify-center mt-5">
              <div className="stamp text-[var(--confirm)] text-sm">✓ Confirmé</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8 font-ticket text-xs uppercase tracking-widest">
          <a
            href="#projects"
            className="stub-flip px-5 py-3 bg-[var(--ink)] text-[var(--paper)] rounded-sm"
          >
            Voir les projets →
          </a>
          <a
            href="#contact"
            className="stub-flip px-5 py-3 border-2 border-[var(--ink)] rounded-sm"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
