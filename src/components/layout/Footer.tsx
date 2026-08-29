import { Globe, Share2, MessageCircle, ExternalLink } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

const socials = [
  { icon: Globe, label: 'Website' },
  { icon: Share2, label: 'LinkedIn' },
  { icon: MessageCircle, label: 'X / Twitter' },
  { icon: ExternalLink, label: 'YouTube' },
]

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Mobile App Solutions', href: '#services' },
      { label: 'Custom App Engineering', href: '#services' },
      { label: 'Oracle Advisory', href: '#services' },
      { label: 'UI/UX for Mobile', href: '#services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Industries', href: '#industries' },
      { label: 'Technology Stack', href: '#technologies' },
      { label: 'Process', href: '#process' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-slate-300 dark:border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(47,106,247,0.18),_transparent_55%)]" />
      <Container className="relative section-pad pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <a href="#home" className="inline-flex items-center" aria-label="QUONTRIZ Technologies home">
              <Logo inverted />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Hyderabad-based technology company. We provide mobile app solutions, plus
              founder-led Oracle and high-tech consulting.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="rounded-xl border border-white/10 p-2.5 text-slate-300 transition hover:border-brand-400/40 hover:bg-white/5 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md">
              <h3 className="font-display text-xl font-bold text-white">
                Subscribe to insights
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Oracle, semiconductor, and digital transformation updates — no spam.
              </p>
            </div>
            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              />
              <Button type="submit" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} QUONTRIZ Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
