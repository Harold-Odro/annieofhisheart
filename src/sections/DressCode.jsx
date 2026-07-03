import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { dressCode, paletteSwatches } from '../content'

export function DressCode() {
  return (
    <section id="dresscode" className="section bg-[var(--color-ivory)]">
      <div className="container">
        <SectionHeading
          eyebrow="What to Wear"
          title="Dress Code"
          subtitle={dressCode.theme}
        />

        {/* Inspiration placeholders */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <figure>
              <div className="photo-placeholder aspect-[3/4]">
                <span>Women’s Inspiration</span>
              </div>
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                For Her
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure>
              <div className="photo-placeholder aspect-[3/4]">
                <span>Men’s Inspiration</span>
              </div>
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                For Him
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Guidelines */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
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
    </section>
  )
}
