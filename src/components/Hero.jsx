import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -left-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/3 -right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-600/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 inline-block group">
            <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-4xl font-bold shadow-2xl shadow-emerald-500/40 group-hover:shadow-emerald-500/60 transition-all duration-500 group-hover:scale-105">
              HM
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-200 bg-clip-text text-transparent">
              Hamidou Mbodj
            </span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-300 mx-auto mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
            Développeur Full Stack Junior
          </p>

          <p className="text-base text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed">
            Créateur d'applications web modernes et performantes. Toujours en quête de nouveaux défis.
          </p>

          <div className="flex justify-center gap-5 mb-16">
            {[
              { icon: Github, href: 'https://github.com/Tekkiiisn', label: 'GitHub' },
              { icon: Mail, href: '#contact', label: 'Email' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group p-4 bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/60 rounded-full transition-all duration-300 hover:scale-120 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/30"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-emerald-300 group-hover:text-emerald-200 transition-colors" />
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="inline-block group cursor-pointer"
          >
            <div className="flex flex-col items-center gap-2 group-hover:gap-3 transition-all">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Découvrir</span>
              <ChevronDown size={28} className="text-emerald-400 animate-bounce group-hover:text-emerald-300 transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
