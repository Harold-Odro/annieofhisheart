import { Reveal } from '../components/Reveal'
import { story, couple } from '../content'

export function Story() {
  return (
    <section id="story" className="section bg-[var(--color-warmwhite)]">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Portrait image — swap placeholder with a real couple photo */}
          <Reveal>
            <figure className="relative">
              <div className="photo-placeholder aspect-[4/5] w-full">
                <span>James &amp; Dr. Annie</span>
              </div>
              {/* Thin gold frame accent */}
              <span
                className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full border border-[var(--color-gold)]/50 sm:block"
                aria-hidden
              />
            </figure>
          </Reveal>

          {/* Prose */}
          <div className="text-center md:text-left">
            <Reveal>
              <p className="eyebrow">{story.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-3 text-4xl sm:text-5xl">
                {story.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div
                className="gold-rule mt-5 md:justify-start [&::before]:hidden md:[&::before]:block"
                aria-hidden
              />
            </Reveal>

            <div className="mt-7 space-y-5">
              {story.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.12 + i * 0.06}>
                  <p className="text-[0.95rem] leading-relaxed text-[var(--color-charcoal)]/85">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="script mt-9 text-2xl italic text-[var(--color-gold)]">
                “{story.quote}”
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[var(--color-taupe)]">
                {couple.hashtag}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
