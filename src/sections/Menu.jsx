import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { menu } from '../content'

export function Menu() {
  return (
    <section id="menu" className="section bg-[var(--color-charcoal)]">
      <div className="container">
        <SectionHeading
          eyebrow="Reception Dining"
          title="The Menu"
          subtitle="A celebration of flavour, served with love."
          light
        />

        <div className="mx-auto grid max-w-4xl gap-x-16 gap-y-12 sm:grid-cols-2">
          {menu.map((group, i) => (
            <Reveal key={group.section} delay={(i % 2) * 0.08}>
              <div>
                <h3 className="display text-center text-2xl text-[var(--color-gold)]">
                  {group.section}
                </h3>
                <div className="gold-rule mt-3" aria-hidden />
                <ul className="mt-5 space-y-2.5 text-center">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="script text-lg text-[var(--color-warmwhite)]/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {group.note && (
                  <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-[var(--color-taupe)]">
                    {group.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
