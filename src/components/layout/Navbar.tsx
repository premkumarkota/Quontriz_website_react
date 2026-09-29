import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import { navLinks, practices } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { LevelTags } from '../ui/LevelTags'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const reduce = useReducedMotion()
  const closeTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMega(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const showMega = () => {
    window.clearTimeout(closeTimer.current)
    setMega(true)
  }
  const hideMega = () => {
    closeTimer.current = window.setTimeout(() => setMega(false), 120)
  }

  const raised = scrolled || open || mega

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-[60] transition-colors duration-300',
        raised ? 'border-b border-line bg-white/95 backdrop-blur-md' : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <a href="#home" className="flex shrink-0 items-center" aria-label="QUONTRIZ home">
          <Logo />
        </a>

        <nav className="hidden h-full items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <div key={link.href} className="flex h-full items-center" onMouseEnter={showMega} onMouseLeave={hideMega}>
                <button
                  type="button"
                  aria-expanded={mega}
                  aria-controls="mega-services"
                  // Keyboard activation (detail 0) toggles; a mouse click keeps the hover-opened menu open.
                  onClick={(e) => (e.detail === 0 ? setMega((v) => !v) : showMega())}
                  className={clsx(
                    'flex items-center gap-1.5 rounded-[3px] px-3.5 py-2 text-[0.95rem] font-medium transition-colors',
                    'text-ink hover:bg-ink/5',
                  )}
                >
                  {link.label}
                  <ChevronDown size={15} className={clsx('transition-transform', mega && 'rotate-180')} />
                </button>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'rounded-[3px] px-3.5 py-2 text-[0.95rem] font-medium transition-colors',
                  'text-ink hover:bg-ink/5',
                )}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#contact" className="hidden !py-2.5 sm:inline-flex">
            Talk to an expert
          </Button>
          <button
            type="button"
            className="p-2 text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {mega && (
          <motion.div
            id="mega-services"
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={showMega}
            onMouseLeave={hideMega}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_24px_48px_-24px_rgb(10_22_40/0.25)] lg:block"
          >
            <Container className="grid grid-cols-[1fr_2.4fr] gap-12 py-10">
              <div className="border-r border-line pr-10">
                <p className="tag text-cobalt">Services</p>
                <p className="display mt-4 text-2xl leading-tight text-ink">
                  Five practices. One team, from idea to enterprise product.
                </p>
                <a
                  href="#services"
                  onClick={() => setMega(false)}
                  className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-cobalt hover:gap-3 transition-all"
                >
                  All services <ArrowRight size={16} />
                </a>
              </div>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
                {practices.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`#service-${p.id}`}
                      onClick={() => setMega(false)}
                      className="group block rounded-[3px] p-4 transition-colors hover:bg-porcelain"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-semibold text-ink group-hover:text-cobalt">{p.name}</span>
                        <LevelTags active={p.levels} />
                      </div>
                      <p className="mt-1.5 text-[0.9rem] leading-snug text-steel">{p.short}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <Container className="flex flex-col py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display border-b border-line py-4 text-xl text-ink"
                >
                  {link.label}
                </a>
              ))}
              <p className="tag mt-8 text-steel">Practices</p>
              <ul className="mt-3">
                {practices.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`#service-${p.id}`}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-[0.95rem] text-ink"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Button href="#contact" className="mt-8" onClick={() => setOpen(false)}>
                Talk to an expert
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
