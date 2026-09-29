import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { contactEmail, industries, offices, practices } from '../../data/content'

const columns = [
  {
    title: 'Services',
    links: practices.map((p) => ({ label: p.name, href: `#service-${p.id}` })),
  },
  {
    title: 'Industries',
    links: industries.slice(0, 6).map((i) => ({ label: i.name, href: '#industries' })),
  },
  {
    title: 'Company',
    links: [
      { label: 'Why QUONTRIZ', href: '#company' },
      { label: 'Approach', href: '#approach' },
      { label: 'Insights', href: '#insights' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export function Footer() {
  const office = offices[0]

  return (
    <footer className="border-t border-white/10 bg-[#070f1c] text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr]">
          <div>
            <a href="#home" className="inline-flex" aria-label="QUONTRIZ home">
              <Logo inverted />
            </a>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
              Industrial automation and Oracle ERP consulting. From the sensor to the ledger.
            </p>
            <div className="mt-8 text-[0.9rem] leading-relaxed text-white/65">
              <p className="font-semibold text-white">{office.city}</p>
              <p className="text-white/50">{office.label}</p>
              <p className="mt-2 max-w-xs">{office.address}</p>
              <a href={`mailto:${contactEmail}`} className="mt-3 inline-block text-white hover:text-brand-200">
                {contactEmail}
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="tag text-white/45">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[0.92rem] text-white/80 transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.85rem] text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} QUONTRIZ Technologies. All rights reserved.</p>
          <p>{office.hours}</p>
        </div>
      </Container>
    </footer>
  )
}
