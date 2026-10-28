import { BookOpen, Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { Section } from '../common/Section';
import type { PersonalInfo } from '../../types';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

export function ContactSection({ personalInfo }: ContactSectionProps) {
  const links = [
    { label: 'LinkedIn', url: personalInfo.linkedin, Icon: Linkedin },
    { label: 'GitHub', url: personalInfo.github, Icon: Github },
    { label: 'Lattes', url: personalInfo.lattes, Icon: BookOpen },
    { label: 'Instagram', url: personalInfo.instagram, Icon: Instagram },
  ].filter((link) => link.url);

  return (
    <Section id="contact" kicker="Contato" title="Vamos conversar? 👋" className="text-center [&_h2]:mb-4">
      <p className="text-ink-muted text-lg">Aberto a vagas, colaborações de pesquisa e convites.</p>

      <a
        href={`mailto:${personalInfo.email}`}
        className="inline-flex items-center gap-2 mt-8 bg-brand-strong text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-strong/90 transition-colors break-all"
      >
        <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
        {personalInfo.email}
      </a>

      <ul className="flex flex-wrap justify-center gap-3 mt-8">
        {links.map(({ label, url, Icon }) => (
          <li key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line text-ink px-4 py-2 rounded-lg hover:border-brand-soft transition-colors"
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>

      <p className="inline-flex items-center gap-1.5 mt-8 text-ink-muted text-sm">
        <MapPin className="w-4 h-4" aria-hidden="true" />
        {personalInfo.location}
      </p>
    </Section>
  );
}
