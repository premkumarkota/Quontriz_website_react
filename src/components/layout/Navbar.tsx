import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import { navLinks } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
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

  const onDark = !scrolled && !open

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-[60] transition-colors duration-300',
        onDark ? 'bg-ink/35 backdrop-blur-md' : 'border-b border-hairline bg-paper',
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-[5rem]">
        <a href="#home" className="flex shrink-0 items-center" aria-label="QUONTRIZ home">
          <Logo inverted={onDark} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                'text-lg font-medium uppercase tracking-[0.08em] transition-colors',
                onDark
                  ? 'text-white hover:text-brand-200'
                  : 'text-ink hover:text-signal',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="#contact"
            className="hidden sm:inline-flex"
            variant={onDark ? 'ghost' : 'primary'}
          >
            Start a project
          </Button>
          <button
            type="button"
            className={clsx('p-2 lg:hidden', onDark ? 'text-white' : 'text-ink')}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border-t border-hairline bg-paper lg:hidden"
          >
            <Container className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-medium uppercase tracking-[0.1em] text-ink"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="mt-3" onClick={() => setOpen(false)}>
                Start a project
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
