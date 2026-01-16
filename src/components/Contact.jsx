import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'hamidou.mbodj808@gmail.com',
      link: 'mailto:hamidou.mbodj808@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      value: '+221 77 490 88 69',
      link: 'tel:+221774908869'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localisation',
      value: 'Dakar',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
                Restons en Contact
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-300 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-emerald-500/15 hover:border-emerald-500/30 transition-all duration-500 shadow-xl">
            <p className="text-lg text-gray-200 text-center mb-14 leading-relaxed">
              Je suis actuellement à la recherche d'opportunités en tant que développeur Full Stack junior. N'hésitez pas à me contacter pour discuter de vos projets, d'opportunités de collaboration ou simplement pour échanger sur le développement web.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const isLink = info.link !== null;
                const Component = isLink ? 'a' : 'div';

                return (
                  <Component
                    key={index}
                    href={info.link}
                    className={`group relative text-center transition-all duration-500 ${
                      isLink
                        ? 'cursor-pointer hover:transform hover:scale-105'
                        : ''
                    }`}
                  >
                    <div className="p-8 bg-gradient-to-br from-gray-700/40 to-gray-700/20 backdrop-blur-md rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 group-hover:from-emerald-500/10 group-hover:to-emerald-600/5">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <div className="text-white">{info.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-100 group-hover:text-emerald-300 transition-colors">{info.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-medium">{info.value}</p>
                    </div>
                  </Component>
                );
              })}
            </div>

            <div className="text-center pt-6 border-t border-emerald-500/10">
              <a
                href="mailto:hamidou.mbodj808@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:from-emerald-600 hover:via-emerald-700 hover:to-emerald-800 rounded-xl font-bold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 text-white shadow-lg shadow-emerald-500/30"
              >
                <Mail size={20} />
                <span>Envoyez-moi un message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
