import { Code2, Rocket, Target } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Code Propre',
      description: 'J\'écris du code maintenable, lisible et bien documenté pour la durabilité.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Apprentissage Rapide',
      description: 'Adaptable et toujours enthousiaste pour apprendre de nouvelles technologies.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Orienté Résultats',
      description: 'Focus sur la livraison de solutions fonctionnelles et performantes.',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
                À Propos de Moi
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-300 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-emerald-500/15 mb-14 hover:border-emerald-500/30 transition-all duration-500 shadow-xl">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Je suis un développeur Full Stack junior passionné par la création d'applications web innovantes et performantes. Mon parcours m'a permis de développer des compétences solides dans plusieurs technologies modernes, du front-end réactif au back-end robuste.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mon objectif est de continuer à grandir en tant que développeur tout en créant des solutions qui ont un vrai impact. Je suis particulièrement intéressé par les opportunités collaboratives où je pourrai apprendre auprès d'équipes expérimentées.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-md rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-500 overflow-hidden hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${quality.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">{quality.icon}</div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-emerald-300 transition-colors">{quality.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
