import TicketCard from './TicketCard';
import SectionHeading from './SectionHeading';

export default function About() {
  const qualities = [
    {
      mark: '§01',
      title: 'Code Propre',
      description: "J'écris du code maintenable, lisible et bien documenté pour la durabilité.",
    },
    {
      mark: '§02',
      title: 'Apprentissage Rapide',
      description: 'Adaptable et toujours enthousiaste pour apprendre de nouvelles technologies.',
    },
    {
      mark: '§03',
      title: 'Orienté Résultats',
      description: 'Focus sur la livraison de solutions fonctionnelles et performantes.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Fiche d'identité" title="À Propos de Moi" />

        <TicketCard className="p-8 md:p-12" tilt="-rotate-1">
          <p className="text-[15px] leading-relaxed mb-5 text-[var(--ink)]">
            Je suis un développeur Full Stack junior passionné par la création d'applications web
            innovantes et performantes. Mon parcours m'a permis de développer des compétences solides
            dans plusieurs technologies modernes, du front-end réactif au back-end robuste.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--ink-soft)] mb-8">
            Mon objectif est de continuer à grandir en tant que développeur tout en créant des
            solutions qui ont un vrai impact. Je suis particulièrement intéressé par les opportunités
            collaboratives où je pourrai apprendre auprès d'équipes expérimentées.
          </p>

          <div className="dash-divider pt-6 space-y-5">
            {qualities.map((q) => (
              <div key={q.mark} className="flex gap-4 items-start">
                <span className="font-ticket text-xs text-[var(--stamp-red)] font-bold pt-0.5">
                  {q.mark}
                </span>
                <div>
                  <div className="font-ticket text-sm font-bold uppercase tracking-wide">
                    {q.title}
                  </div>
                  <div className="text-[13px] text-[var(--ink-soft)] mt-0.5">{q.description}</div>
                </div>
              </div>
            ))}
          </div>
        </TicketCard>
      </div>
    </section>
  );
}
