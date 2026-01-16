import { Code, Database, Server, Globe,LanguagesIcon ,Cloud} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Front-End',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Tailwind CSS','TypeScript'],
      gradient: 'from-emerald-500 to-emerald-600',
      border: 'border-emerald-500/30'
    },
    
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Back-End',
      skills: ['PHP', 'Python', 'Node.js', 'Express.js','Rest API', 'JWT'],
      gradient: 'from-amber-500 to-orange-600',
      border: 'border-amber-500/30'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Bases de Données',
      skills: ['MySQL', 'PostgreSQL', 'SQL','firebase'],
      gradient: 'from-emerald-600 to-teal-600',
      border: 'border-teal-500/30'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Déploiement & DevOps',
      skills: ['Vercel', 'Railway', 'GitHub'],
      gradient: 'from-amber-600 to-orange-500',
      border: 'border-amber-500/20'
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: 'Cloud & Storage',
        skills: ['Cloudinary'],
        gradient: 'from-teal-500 to-emerald-600',
        border: 'border-teal-500/30'
    },
    {
        icon: <LanguagesIcon className="w-8 h-8" />,
        title: 'Langues',
        skills: ['Français', 'Anglais', 'Wolof'],
        gradient: 'from-blue-500 to-indigo-600',
        border: 'border-blue-500/30'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-900/20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
                Compétences Techniques
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-md rounded-2xl p-7 border ${category.border} hover:border-opacity-80 transition-all duration-500 overflow-hidden hover:transform hover:scale-105`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-br ${category.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">{category.icon}</div>
                </div>

                <h3 className="text-xl font-bold mb-5 text-gray-100 group-hover:text-emerald-300 transition-colors">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 group/skill"
                    >
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-emerald-400 to-amber-300 rounded-full group-hover/skill:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover/skill:text-gray-200 transition-colors font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg font-light">
              Toujours en apprentissage et curieux d'explorer de nouvelles technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
