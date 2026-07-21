import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { ceremony, reception, event } from '../content'
import { mapsHref, downloadICS } from '../lib/calendar'

function DetailCard({ title, time, venue, note, delay }) {
  return (
    <Reveal delay={delay}>
      <article className="marble relative h-full border border-gold/30 px-8 py-12 text-center">
        <p className="eyebrow">{event.dateLabel}</p>
        <h3 className="display mt-4 text-3xl">{title}</h3>
        <div className="gold-rule mt-5" aria-hidden />
        <p className="script mt-5 text-2xl text-charcoal">
          {time}
        </p>
        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-taupe">
          {venue}
        </p>
        <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-charcoal/80">
          {note}
        </p>
      </article>
    </Reveal>
  )
}

export function Details() {
  return (
    <section id="details" className="section bg-ivory">
      <div className="container">
        <SectionHeading
          eyebrow="The Celebration"
          title="Wedding Details"
          subtitle={`Join us at ${event.venueName} as we say "I do".`}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <DetailCard
            title={ceremony.title}
            time={ceremony.time}
            venue={ceremony.venue}
            note={ceremony.note}
            delay={0}
          />
          <DetailCard
            title={reception.title}
            time={reception.time}
            venue={reception.venue}
            note={reception.note}
            delay={0.12}
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={mapsHref()}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              Get Directions
            </a>
            <button type="button" onClick={downloadICS} className="btn-gold">
              Add to Calendar
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
