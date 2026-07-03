import { Reveal } from './Reveal'

/**
 * @param {object} props
 * @param {string} [props.eyebrow]
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {boolean} [props.light]  Render title in light colour for dark backgrounds.
 */
export function SectionHeading({ eyebrow, title, subtitle, light }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className="display mt-3 text-4xl sm:text-5xl"
          style={light ? { color: 'var(--color-warmwhite)' } : undefined}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="gold-rule mt-5" aria-hidden />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p
            className="script mx-auto mt-5 max-w-xl text-lg italic leading-relaxed"
            style={{
              color: light ? 'rgba(255,253,252,0.85)' : 'var(--color-taupe)',
            }}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
