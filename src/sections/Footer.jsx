import { Reveal } from '../components/Reveal'
import { couple, event, footer } from '../content'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-charcoal)] px-6 py-24 text-center">
      <Reveal>
        <p className="script text-2xl italic text-[var(--color-warmwhite)]/90 sm:text-3xl">
          {footer.message}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="display mt-8 text-4xl text-[var(--color-warmwhite)] sm:text-5xl">
          {couple.groom}
          <span className="script mx-3 italic text-[var(--color-gold)]">
            &amp;
          </span>
          {couple.bride}
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="gold-rule mt-7 w-full max-w-xs mx-auto" aria-hidden />
      </Reveal>

      <Reveal delay={0.2}>
        <p className="eyebrow mt-7">{couple.hashtag}</p>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--color-taupe)]">
          {event.dateLabel}
        </p>
      </Reveal>
    </footer>
  )
}
