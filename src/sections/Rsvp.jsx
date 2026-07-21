import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { rsvp } from '../content'

export function Rsvp() {
  const telHref = `tel:${rsvp.contactPhone.replace(/\s+/g, '')}`

  return (
    <section id="rsvp" className="section bg-ivory">
      <div className="container">
        <SectionHeading
          eyebrow="Kindly Respond"
          title="RSVP"
          subtitle="We would be honoured to have you with us. Please confirm your attendance."
        />

        <Reveal>
          <div className="marble mx-auto max-w-lg border border-gold/30 px-8 py-12 text-center">
            <p className="eyebrow">Kindly RSVP by</p>
            <p className="display mt-3 text-2xl text-charcoal">
              {rsvp.deadline}
            </p>

            <div className="gold-rule mt-7" aria-hidden />

            <p className="mt-7 text-xs uppercase tracking-[0.22em] text-taupe">
              Please contact
            </p>
            <h3 className="display mt-2 text-3xl">{rsvp.contactName}</h3>
            <a
              href={telHref}
              className="script mt-2 inline-block text-2xl text-gold"
            >
              {rsvp.contactPhone}
            </a>

            <div className="mt-7">
              <a href={telHref} className="btn-gold btn-gold--solid">
                Call to Confirm
              </a>
            </div>

            <p className="mx-auto mt-9 max-w-sm text-sm uppercase leading-relaxed tracking-[0.12em] text-taupe">
              {rsvp.adultsOnly}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
