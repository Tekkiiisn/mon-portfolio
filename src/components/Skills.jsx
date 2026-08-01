import SectionHeading from './SectionHeading';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: [
        ['HTML5 / CSS3', 5],
        ['JavaScript', 5],
        ['React JS', 5],
        ['TypeScript', 3],
        ['Tailwind CSS', 5],
      ],
    },
    {
      title: 'Back-End',
      skills: [
        ['Node.js', 4],
        ['Express.js', 4],
        ['PHP', 3],
        ['REST API', 5],
        ['JWT', 4],
      ],
    },
    {
      title: 'Bases de Données',
      skills: [
        ['MySQL', 4],
        ['PostgreSQL', 4],
        ['MongoDB', 3],
        ['Supabase', 5],
      ],
    },
    {
      title: 'DevOps & Déploiement',
      skills: [
        ['Git / GitHub', 5],
        ['Docker', 3],
        ['Vercel', 5],
        ['Railway', 4],
        ['Render', 4],
      ],
    },
    {
      title: 'Cloud & Stockage',
      skills: [
        ['Cloudinary', 4],
        ['ImageKit', 4],
      ],
    },
    {
      title: 'Architecture',
      skills: [
        ['API REST', 5],
        ['Auth JWT', 5],
        ['MVC', 4],
      ],
    },
    {
      title: 'Langues',
      skills: [
        ['Français', 5],
        ['Anglais', 4],
        ['Wolof', 5],
      ],
    },
  ];

  const dots = (n) => '●'.repeat(n) + '○'.repeat(5 - n);

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--paper-dark)]/40 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Grille tarifaire" title="Compétences Techniques" />

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="ticket border-2 border-[var(--ink)] p-6">
              <div className="font-ticket text-xs uppercase tracking-[0.2em] text-[var(--stamp-red)] mb-4">
                {cat.title}
              </div>
              <div className="space-y-2.5">
                {cat.skills.map(([name, level]) => (
                  <div key={name} className="flex items-baseline text-[13px]">
                    <span>{name}</span>
                    <span className="leader"></span>
                    <span className="font-ticket text-[var(--confirm)] tracking-tighter text-[11px]">
                      {dots(level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[var(--ink-soft)] text-sm font-ticket uppercase tracking-widest mt-10">
          Toujours en apprentissage
        </p>
      </div>
    </section>
  );
}
