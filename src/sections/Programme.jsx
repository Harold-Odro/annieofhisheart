import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { programme } from '../content'

export function Programme() {
  return (
    <section id="programme" className="section bg-[var(--color-champagne)]/40">
      <div className="container">
        <SectionHeading
          eyebrow="Order of Events"
          title="Garden Wedding Programme"
          subtitle="The unfolding of our ceremony, moment by moment."
        />

        <ol className="relative mx-auto max-w-2xl">
          {/* Vertical gold line */}
          <span
            className="absolute bottom-0 top-2 hidden w-px sm:left-1/2 sm:block sm:-translate-x-1/2"
            style={{
              background:
                'linear-gradient(to bottom, transparent, var(--color-gold), transparent)',
            }}
            aria-hidden
          />

          {programme.map((item, i) => {
            const left = i % 2 === 0
            return (
              <li
                key={item}
                className="relative mb-7 sm:mb-2 sm:grid sm:grid-cols-2 sm:gap-x-10"
              >
                {/* Node dot (desktop) */}
                <span
                  className="absolute left-1/2 top-3 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-[var(--color-gold)] bg-[var(--color-ivory)] sm:block"
                  aria-hidden
                />

                <Reveal
                  delay={(i % 6) * 0.04}
                  className={
                    left
                      ? 'sm:col-start-1 sm:pr-12 sm:text-right'
                      : 'sm:col-start-2 sm:pl-12 sm:text-left'
                  }
                >
                  <div className="flex items-center gap-4 border-l-2 border-[var(--color-gold)]/40 py-3 pl-4 sm:block sm:border-0 sm:py-2 sm:pl-0">
                    <span className="display text-sm text-[var(--color-gold)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="script text-xl text-[var(--color-charcoal)] sm:mt-0.5 sm:text-2xl">
                      {item}
                    </h3>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
