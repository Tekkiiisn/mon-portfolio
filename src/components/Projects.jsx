import { Github, ExternalLink, Server } from 'lucide-react';
import TicketCard from './TicketCard';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const projects = [
    {
      title: 'Plateforme de Formation en Ligne',
      description:
        "Plateforme de formation permettant aux utilisateurs de s'inscrire, suivre des cours sur la vente en ligne, payer pour certaines formations. Inclut un système de gestion complet avec tableaux de bord analytiques.",
      technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Cloudinary'],
      featured: true,
      demo: 'https://formationecom.com',
      status: 'En ligne',
    },
    {
      title: 'API REST E-Learning',
      description:
        'API RESTful complète pour la plateforme de formation avec authentification JWT, gestion des utilisateurs, cours, modules, paiements et inscriptions. Sécurisée avec Helmet, CORS, Rate Limiting et Bcrypt.',
      technologies: ['Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'JWT', 'Bcrypt', 'PayDunya'],
      isBackendOnly: true,
      api: 'https://api.formationecom.com',
      status: 'API',
    },
    {
      title: 'JobPlatform — Plateforme de Recrutement',
      description:
        'Application fullstack complète de mise en relation entre candidats et entreprises. Système de rôles (candidat, entreprise, admin), gestion des offres avec modération, candidatures avec upload CV, notifications en temps réel.',
      technologies: ['React', 'Vite', 'TailwindCSS', 'Node.js', 'Express.js', 'Supabase', 'JWT'],
      featured: true,
      demo: 'https://job-tech-woad.vercel.app',
      status: 'En ligne',
    },
    {
      title: 'Mourchid Boutique — Boutique E-commerce Personnelle',
      description:
        "Plateforme e-commerce complète sur laquelle je fais mes ventes, intégration Facebook Ads Pixel pour tracking, paiement mobile money (Wave/Orange Money) via PayDunya, notifications de commande et gestion de stock en temps réel.",
      technologies: ['React', 'Node.js', 'Supabase', 'Cloudinary', 'PayDunya API', 'Facebook Pixel'],
      demo: 'https://sunulunettes.shop',
      status: 'En ligne',
    },
    {
      title: 'Portfolio Dynamique',
      description:
        'Site portfolio moderne avec animations fluides, interface responsive et design unique. Démonstration de compétences en front-end avancé.',
      technologies: ['React', 'Tailwind CSS', 'Vercel'],
      status: 'En ligne',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Registre des transactions" title="Projets Réalisés" />

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <TicketCard
              key={project.title}
              className={`p-7 ${project.featured ? 'md:col-span-2' : ''}`}
              tilt={index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
            >
              <div className="flex items-center justify-between mb-4 font-ticket text-[11px] text-[var(--ink-soft)] uppercase tracking-widest">
                <span>Facture N° {String(index + 1).padStart(3, '0')}</span>
                <span className={project.isBackendOnly ? 'text-[var(--stamp-red)]' : 'text-[var(--confirm)]'}>
                  {project.status}
                </span>
              </div>

              <h3 className="font-ticket text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-[14px] text-[var(--ink-soft)] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="dash-divider pt-4 space-y-1.5 mb-6 font-ticket text-[12px]">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex justify-between">
                    <span className="text-[var(--ink-soft)]">{tech}</span>
                    <span>×1</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stub-flip inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--ink)] text-[var(--paper)] text-xs font-ticket uppercase tracking-widest rounded-sm"
                  >
                    <ExternalLink size={14} /> Démo
                  </a>
                )}
                {project.api && (
                  <a
                    href={project.api}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stub-flip inline-flex items-center gap-2 px-4 py-2.5 border-2 border-[var(--ink)] text-xs font-ticket uppercase tracking-widest rounded-sm"
                  >
                    <Server size={14} /> API
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stub-flip inline-flex items-center gap-2 px-4 py-2.5 border-2 border-[var(--ink)] text-xs font-ticket uppercase tracking-widest rounded-sm"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
              </div>
            </TicketCard>
          ))}
        </div>
      </div>
    </section>
  );
}
