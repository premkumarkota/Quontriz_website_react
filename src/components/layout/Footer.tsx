import { MapPin } from 'lucide-react'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { contactEmail, offices } from '../../data/content'

const columns = [
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#services' },
      { label: 'Industries', href: '#industries' },
      { label: 'Notes', href: '#blog' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: contactEmail, href: `mailto:${contactEmail}` },
      { label: 'Start a project', href: '#contact' },
    ],
  },
]

export function Footer() {
  const office = offices[0]

  return (
    <footer className="border-t border-white/15 bg-ink text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex" aria-label="QUONTRIZ home">
              <Logo inverted />
            </a>
            <p className="mt-6 max-w-md text-base font-normal leading-relaxed text-white">
              Hyderabad. Mobile apps and Oracle consulting, founder-led.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-sm font-normal uppercase tracking-[0.14em] text-white">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base font-normal text-white transition hover:text-brand-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 flex max-w-3xl items-start gap-3 text-base font-normal leading-relaxed text-white">
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] bg-white text-signal">
            <MapPin size={16} strokeWidth={2} aria-hidden />
          </span>
          <span>{office.address}</span>
        </p>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm font-normal text-white sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} QUONTRIZ Technologies</p>
          <p>{office.hours}</p>
        </div>
      </Container>
    </footer>
  )
}
