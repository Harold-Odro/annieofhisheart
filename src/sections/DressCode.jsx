import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { dressCode, dressInspiration, paletteSwatches } from '../content'

export function DressCode() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="dresscode" className="section bg-[var(--color-ivory)]">
      <div className="container">
        <SectionHeading
          eyebrow="What to Wear"
          title="Dress Code"
          subtitle={dressCode.theme}
        />

        {/* Inspiration boards */}
        <div className="space-y-16">
          {dressInspiration.map((group) => (
            <div key={group.id}>
              <Reveal>
                <div className="text-center">
                  <h3 className="display text-2xl sm:text-3xl">{group.label}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                    {group.caption}
                  </p>
                </div>
              </Reveal>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {group.images.map((src, i) => (
                  <Reveal key={src} delay={(i % 4) * 0.06}>
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({ src, label: group.label })
                      }
                      className="photo-placeholder group aspect-[3/4] w-full overflow-hidden rounded-sm ring-1 ring-[var(--color-gold)]/20"
                      aria-label={`Open ${group.label} inspiration ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${group.label} outfit inspiration ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guidelines */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="marble h-full border border-[var(--color-gold)]/30 p-8">
              <h3 className="display text-2xl">Encouraged</h3>
              <ul className="mt-5 space-y-3">
                {dressCode.allowed.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 text-sm text-[var(--color-charcoal)]/85"
                  >
                    <span className="text-[var(--color-gold)]">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="marble h-full border border-[var(--color-gold)]/30 p-8">
              <h3 className="display text-2xl">Kindly Avoid</h3>
              <ul className="mt-5 space-y-3">
                {dressCode.notAllowed.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 text-sm text-[var(--color-charcoal)]/85"
                  >
                    <span className="text-[var(--color-burgundy)]">✕</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Colour palette swatches */}
        <div className="mt-16">
          <Reveal>
            <p className="eyebrow text-center">Suggested Colour Palette</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-7 flex flex-wrap items-start justify-center gap-6 sm:gap-9">
              {paletteSwatches.map((s) => (
                <div key={s.name} className="flex flex-col items-center">
                  <span
                    className="h-16 w-16 rounded-full ring-1 ring-[var(--color-gold)]/40 sm:h-20 sm:w-20"
                    style={{ backgroundColor: s.hex }}
                  />
                  <span className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-[var(--color-taupe)]">
              No neon colours, please
            </p>
          </Reveal>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(46,46,46,0.88)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={`${lightbox.label} inspiration`}
              className="max-h-[85vh] w-auto max-w-full rounded-sm object-contain shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              className="absolute right-6 top-6 text-warmwhite/80 hover:text-warmwhite"
              aria-label="Close"
              onClick={() => setLightbox(null)}
            >
              <span className="text-2xl">×</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
