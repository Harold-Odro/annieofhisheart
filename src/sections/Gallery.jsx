import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

/**
 * Editorial gallery. Replace the placeholder tiles with <img> elements.
 * `span` values create an asymmetric magazine-style layout.
 */
const tiles = [
  { id: 1, span: 'sm:col-span-2 sm:row-span-2', ratio: 'aspect-square' },
  { id: 2, span: '', ratio: 'aspect-[3/4]' },
  { id: 3, span: '', ratio: 'aspect-[3/4]' },
  { id: 4, span: 'sm:col-span-2', ratio: 'aspect-[16/10]' },
  { id: 5, span: '', ratio: 'aspect-[3/4]' },
  { id: 6, span: '', ratio: 'aspect-[3/4]' },
]

export function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="section bg-warmwhite">
      <div className="container">
        <SectionHeading
          eyebrow="Pre-Wedding & Engagement"
          title="Our Gallery"
          subtitle="A few moments from our journey to this day."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.id}
              delay={(i % 4) * 0.06}
              className={tile.span}
            >
              <button
                type="button"
                onClick={() => setActive(tile.id)}
                className={`photo-placeholder group w-full ${tile.ratio} overflow-hidden`}
                aria-label={`Open photo ${tile.id}`}
              >
                <span className="transition-transform duration-700 group-hover:scale-105">
                  Photo {tile.id}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="script mt-10 text-center text-lg italic text-taupe">
            #AnnieOfHisHeart
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(46,46,46,0.88)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="photo-placeholder aspect-3/4 w-full max-w-md"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <span>Photo {active}</span>
            </motion.div>
            <button
              type="button"
              className="absolute right-6 top-6 text-warmwhite/80 hover:text-warmwhite"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <span className="text-2xl">×</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
