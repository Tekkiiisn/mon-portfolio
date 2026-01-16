import { ExternalLink, Github, Server, Link } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Plateforme de Formation en Ligne',
      description: 'Plateforme de formation  permettant aux utilisateurs de s\'inscrire, suivre des cours sur la vente en ligne, payer pour certaines formations. Inclut un système de gestion complet pour moi avec tableaux de bord analytiques.',
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Cloudinary', 'Vercel', 'Railway'],
      featured: true,
      // Remplace ces liens par tes vrais liens
      github: '#', // Si tu veux garder le bouton GitHub
      demo: 'https://elearning-frontend-eosin.vercel.app/', // TON LIEN FRONTEND
      hasApi: true, // Active le bouton API
      gradient: 'from-emerald-500/20 to-emerald-600/10'
    },
    {
      title: 'API REST E-Learning',
      description: 'API RESTful complète pour la plateforme de formation avec authentification JWT, gestion des utilisateurs, cours, modules, paiements et inscriptions. Sécurisée avec Helmet, CORS et Bcrypt. .',
      technologies: ['Node.js', 'Express.js', 'MySQL',  'JWT', 'Bcrypt', 'Cloudinary', 'Railway'],
      api: 'https://elearning-backend-production-a297.up.railway.app/', // TON ENDPOINT
      hasApi: true,
      isBackendOnly: true, // Indique que c'est uniquement un backend
      gradient: 'from-amber-500/20 to-orange-600/10'
    },
    {
      title: 'Plateforme de paiement en ligne de frais de scolarité ',
      description: 'Application web robuste avec tableau de bord interactif, gestion des utilisateurs, connexion des parents pour payer les mensualités de leurs enfants.',
      technologies: ['React', 'Node.js', 'MySQL','Express.js', 'JWT','Api Orange money/wave'],
      github: 'https://github.com/Tekkiiisn/SenPaiement',
      demo: 'https://sen-paiement.vercel.app/',
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
                  {/* Badge projet principal */}
                  {project.featured && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full text-xs font-bold text-gray-900 mb-5">
                      <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                      Projet Principal
                    </div>
                  )}

                  {/* Badge backend only */}
                  {project.isBackendOnly && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold text-white mb-5">
                      <Server size={14} />
                      Backend API
                    </div>
                  )}

                  {/* Titre du projet */}
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-100 group-hover:text-emerald-200 transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>

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

                  {/* Boutons d'action */}
                  <div className="flex flex-wrap gap-4">
                    {/* Bouton GitHub (optionnel) */}
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

                    {/* Bouton API Backend */}
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

                    {/* Bouton Démo Frontend */}
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

                    {/* Message si repo privé */}
                    {(!project.github || project.github === '#') && !project.isBackendOnly && (
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