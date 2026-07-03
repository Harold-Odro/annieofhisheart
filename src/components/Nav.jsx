import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#story', label: 'Our Story' },
  { href: '#details', label: 'Details' },
  { href: '#programme', label: 'Programme' },
  { href: '#dresscode', label: 'Dress Code' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#menu', label: 'Menu' },
  { href: '#registry', label: 'Registry' },
  { href: '#rsvp', label: 'RSVP' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      {/* Mobile menu — full-screen overlay, rendered OUTSIDE the header so it
          is never trapped in the header's stacking context. Sits below the
          header (z-40) so the hamburger/X in the header (z-50) stays on top. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: 'rgba(248,245,240,0.98)' }}
            onClick={() => setOpen(false)}
          >
            <ul className="flex flex-1 flex-col items-center justify-center gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-center text-base font-medium uppercase tracking-[0.22em] text-charcoal"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
        style={{
          backgroundColor: solid ? 'rgba(248,245,240,0.92)' : 'transparent',
          backdropFilter: solid ? 'blur(8px)' : 'none',
          borderBottom: solid
            ? '1px solid rgba(201,164,93,0.25)'
            : '1px solid transparent',
        }}
      >
        <nav className="container flex items-center justify-between py-4">
        <a
          href="#top"
          className="display text-lg tracking-wide"
          style={{ color: solid ? 'var(--color-charcoal)' : '#fffdfc' }}
          onClick={() => setOpen(false)}
        >
          J <span style={{ color: 'var(--color-gold)' }}>&amp;</span> A
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[var(--color-gold)]"
                style={{ color: solid ? 'var(--color-charcoal)' : '#fffdfc' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className="absolute left-0 block h-px w-6 transition-all duration-300"
              style={{
                top: open ? '50%' : '0',
                transform: open ? 'rotate(45deg)' : 'none',
                background: solid ? 'var(--color-charcoal)' : '#fffdfc',
              }}
            />
            <span
              className="absolute left-0 top-1/2 block h-px w-6 transition-opacity duration-200"
              style={{
                opacity: open ? 0 : 1,
                background: solid ? 'var(--color-charcoal)' : '#fffdfc',
              }}
            />
            <span
              className="absolute left-0 block h-px w-6 transition-all duration-300"
              style={{
                bottom: open ? '50%' : '0',
                transform: open ? 'rotate(-45deg)' : 'none',
                background: solid ? 'var(--color-charcoal)' : '#fffdfc',
              }}
            />
          </span>
        </button>
        </nav>
      </header>
    </>
  )
}
