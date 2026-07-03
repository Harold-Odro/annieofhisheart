import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { registry } from '../content'

export function Registry() {
  return (
    <section id="registry" className="section bg-[var(--color-champagne)]/40">
      <div className="container">
        <SectionHeading eyebrow="With Gratitude" title="Gift Registry" />

        <Reveal>
          <p className="script mx-auto max-w-2xl text-center text-xl italic leading-relaxed text-[var(--color-charcoal)]/90">
            {registry.message}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="marble h-full border border-[var(--color-gold)]/30 p-8 text-center">
              <p className="eyebrow">{registry.mobileMoney.label}</p>
              <p className="display mt-4 text-xl">
                {registry.mobileMoney.value}
              </p>
              <p className="mt-2 text-sm text-[var(--color-taupe)]">
                {registry.mobileMoney.name}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="marble h-full border border-[var(--color-gold)]/30 p-8 text-center">
              <p className="eyebrow">{registry.bank.label}</p>
              <p className="display mt-4 text-xl">{registry.bank.bankName}</p>
              <p className="mt-2 text-sm text-[var(--color-charcoal)]/80">
                {registry.bank.accountName}
              </p>
              <p className="mt-1 text-sm text-[var(--color-taupe)]">
                {registry.bank.accountNumber}
              </p>
            </div>
          </Reveal>
        </div>

        {registry.registryLink && (
          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <a
                href={registry.registryLink}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                View Registry
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
