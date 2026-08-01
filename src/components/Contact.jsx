import { Mail, Phone, MapPin } from 'lucide-react';
import TicketCard from './TicketCard';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hamidou.mbodj808@gmail.com', href: 'mailto:hamidou.mbodj808@gmail.com' },
    { icon: Phone, label: 'Téléphone', value: '+221 77 490 88 69', href: 'tel:+221774908869' },
    { icon: MapPin, label: 'Localisation', value: 'Dakar, Sénégal', href: null },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <SectionHeading eyebrow="Bon de commande" title="Restons en Contact" align="center" />

        <TicketCard className="p-8 md:p-12" tilt="rotate-1">
          <p className="text-center text-[15px] text-[var(--ink-soft)] leading-relaxed mb-8">
            Ouvert aux projets freelance, partenariats techniques et toute opportunité de construire
            quelque chose d'impactant ensemble.
          </p>

          <div className="dash-divider pt-6 space-y-4 font-ticket text-sm mb-8">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const Comp = info.href ? 'a' : 'div';
              return (
                <Comp
                  key={info.label}
                  href={info.href || undefined}
                  className="flex items-center justify-between group"
                >
                  <span className="flex items-center gap-3 text-[var(--ink-soft)] uppercase text-xs tracking-widest">
                    <Icon size={15} /> {info.label}
                  </span>
                  <span className="group-hover:text-[var(--stamp-red)] transition-colors">
                    {info.value}
                  </span>
                </Comp>
              );
            })}
          </div>

          <div className="dash-divider pt-6 text-center">
            <a
              href="mailto:hamidou.mbodj808@gmail.com"
              className="stub-flip inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--stamp-red)] text-[var(--paper-soft)] font-ticket text-xs uppercase tracking-widest rounded-sm"
            >
              <Mail size={16} /> Envoyer la commande
            </a>
          </div>
        </TicketCard>
      </div>
    </section>
  );
}
