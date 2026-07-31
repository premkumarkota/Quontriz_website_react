import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { clsx } from 'clsx'
import { navLinks } from '../../data/content'
import { useTheme } from '../../context/ThemeContext'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

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

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-brand-950/80'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="QUONTRIZ Technologies home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 text-sm font-extrabold text-white shadow-md shadow-brand-700/30">
            Q
          </span>
          <span
            className={clsx(
              'font-display text-lg font-extrabold tracking-tight transition-colors',
              scrolled ? 'text-slate-900 dark:text-white' : 'text-white',
            )}
          >
            QUONTRIZ
            <span
              className={clsx(
                'ml-1 hidden font-semibold sm:inline',
                scrolled ? 'text-brand-600 dark:text-brand-300' : 'text-brand-200',
              )}
            >
              Technologies
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                scrolled
                  ? 'text-slate-600 hover:bg-slate-100 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                  : 'text-white/85 hover:bg-white/10 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className={clsx(
              'rounded-xl p-2.5 transition-colors',
              scrolled
                ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10'
                : 'text-white hover:bg-white/10',
            )}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <Button href="#contact" className="hidden sm:inline-flex" variant="primary">
            Get Started
          </Button>

          <button
            type="button"
            className={clsx(
              'rounded-xl p-2.5 xl:hidden',
              scrolled
                ? 'text-slate-700 dark:text-white'
                : 'text-white',
            )}
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-slate-200/70 bg-white/95 backdrop-blur-xl xl:hidden dark:border-white/10 dark:bg-brand-950/95"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="mt-2" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
