import { ExternalLink, Github, Server, Users, Briefcase, Database, Globe } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Plateforme de Formation en Ligne',
      description: 'Plateforme de formation permettant aux utilisateurs de s\'inscrire, suivre des cours sur la vente en ligne, payer pour certaines formations. Inclut un système de gestion complet pour moi avec tableaux de bord analytiques.',
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Cloudinary', 'Vercel', 'Railway'],
      featured: true,
      github: '#',
      demo: 'https://formation-ecommerce.vercel.app',
      hasApi: true,
      gradient: 'from-emerald-500/20 to-emerald-600/10'
    },
    {
      title: 'API REST E-Learning',
      description: 'API RESTful complète pour la plateforme de formation avec authentification JWT, gestion des utilisateurs, cours, modules, paiements et inscriptions. Sécurisée avec Helmet, CORS et Bcrypt.',
      technologies: ['Node.js', 'Express.js', 'Supabase', 'JWT', 'Bcrypt', 'Cloudinary', 'Vercel'],
      api: 'https://elearning-backend-nine.vercel.app/',
      hasApi: true,
      isBackendOnly: true,
      gradient: 'from-amber-500/20 to-orange-600/10'
    },
    {
      title: 'JobPlatform — Plateforme de Recrutement',
      description: 'Application fullstack complète de mise en relation entre candidats et entreprises. Système de rôles (candidat, entreprise, admin), gestion des offres avec modération, candidatures avec upload CV, notifications en temps réel et tableaux de bord analytiques.',
      technologies: ['React 18', 'Vite', 'TailwindCSS', 'Zustand', 'Tanstack Query', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'JWT', 'Vercel'],
      featured: true,
      isFullstack: true,
      demo: 'https://job-tech-woad.vercel.app',
      api: 'https://job-tech-backend.vercel.app/api',
      hasApi: true,
      stats: [
        { icon: Users,    label: '3 rôles',        sub: 'Candidat · Entreprise · Admin' },
        { icon: Briefcase,label: '10+ endpoints',   sub: 'API REST complète'             },
        { icon: Database, label: 'PostgreSQL',      sub: 'Supabase + RLS'               },
        { icon: Globe,    label: 'Live',            sub: 'Frontend + Backend'           },
      ],
      gradient: 'from-blue-500/20 to-indigo-600/10'
    },
    {
      title: 'Plateforme de paiement en ligne de frais de scolarité',
      description: 'Application web robuste avec tableau de bord interactif, gestion des utilisateurs, connexion des parents pour payer les mensualités de leurs enfants.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'JWT', 'Api Orange money/wave'],
      github: 'https://github.com/Tekkiiisn/SenPaiement',
      demo: 'https://sen-paiement.vercel.app/',
      gradient: 'from-teal-500/20 to-emerald-600/10'
    },
    {
      title: 'Application mobile de Gestion des Tâches',
      description: 'Application mobile cross-platform pour gérer les tâches quotidiennes avec fonctionnalités de création, modification, suppression et organisation des tâches.',
      technologies: ['Flutter', 'Dart'],
      github: 'https://github.com/Tekkiiisn/Taches_app',
      gradient: 'from-teal-500/20 to-emerald-600/10'
    },
    {
      title: 'Portfolio Dynamique',
      description: 'Site portfolio moderne avec animations fluides, interface responsive et design unique. Démonstration de compétences en front-end avancé.',
      technologies: ['React', 'Tailwind CSS', 'Vercel'],
      github: '#',
      demo: '#',
      gradient: 'from-amber-500/20 to-amber-600/10'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-emerald-500/5 to-gray-900/0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
                Projets Réalisés
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-500/15 hover:border-emerald-500/40 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.featured && project.isFullstack && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-xs font-bold text-white">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Projet Fullstack
                      </div>
                    )}
                    {project.featured && !project.isFullstack && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full text-xs font-bold text-gray-900">
                        <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                        Projet Principal
                      </div>
                    )}
                    {project.isBackendOnly && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold text-white">
                        <Server size={14} />
                        Backend API
                      </div>
                    )}
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-100 group-hover:text-emerald-200 transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>

                  {/* Stats JobPlatform */}
                  {project.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {project.stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                          <div key={i} className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-3 text-center group-hover:border-blue-400/40 transition-colors">
                            <Icon size={18} className="text-blue-400 mx-auto mb-1.5" />
                            <div className="text-xs font-bold text-gray-100">{stat.label}</div>
                            <div className="text-xs text-gray-400 mt-0.5 leading-tight">{stat.sub}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-emerald-500/30 to-emerald-600/20 rounded-lg text-sm text-emerald-200 font-medium border border-emerald-400/20 group-hover:border-emerald-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Boutons */}
                  <div className="flex flex-wrap gap-4">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-gray-700/50 hover:bg-gray-600 rounded-lg transition-all duration-300 font-medium text-gray-200 hover:text-white border border-gray-600/50 hover:border-gray-500"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    )}

                    {project.hasApi && project.api && (
                      <a
                        href={project.api}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-lg transition-all duration-300 font-medium text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
                      >
                        <Server size={18} />
                        <span>API</span>
                      </a>
                    )}

                    {project.demo && project.demo !== '#' && !project.isBackendOnly && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-lg transition-all duration-300 font-medium text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
                      >
                        <ExternalLink size={18} />
                        <span>Démo</span>
                      </a>
                    )}

                    {(!project.github || project.github === '#') && !project.isBackendOnly && !project.isFullstack && (
                      <div className="flex items-center gap-2 px-5 py-3 bg-gray-700/30 rounded-lg border border-gray-600/30 text-gray-400 text-sm">
                        <Github size={16} />
                        <span>Repo privé</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
