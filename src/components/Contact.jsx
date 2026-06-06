import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const links = [
  {
    href: 'https://www.linkedin.com/in/ankushdutta523',
    variant: 'linkedin',
    icon: FaLinkedin,
    title: 'LinkedIn',
    label: 'ankushdutta523',
    external: true,
  },
  {
    href: 'https://github.com/Ankush523',
    variant: 'github',
    icon: FaGithub,
    title: 'GitHub',
    label: 'Ankush523',
    external: true,
  },
  {
    href: 'mailto:ankush.ad050203@gmail.com',
    variant: 'email',
    icon: FiMail,
    title: 'Email',
    label: 'ankush.ad050203@gmail.com',
    external: false,
  },
  {
    href: 'tel:+916289944028',
    variant: 'phone',
    icon: FiPhone,
    title: 'Phone',
    label: '+91 628 994 4028',
    external: false,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <SectionTitle index="06">Contact</SectionTitle>

        <div className="contact__intro">
          <p className="contact__headline">
            Let&apos;s build something that works
            <span className="contact__headline-accent"> without the internet.</span>
          </p>
        </div>

        <div className="contact-grid">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className={`contact-card contact-card--${item.variant}`}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={`${item.title}: ${item.label}`}
              >
                <span className="contact-icon" aria-hidden>
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.label}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
