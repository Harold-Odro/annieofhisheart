import { motion } from 'framer-motion'
import { couple, event } from '../content'
import { useCountdown } from '../lib/useCountdown'

function CountUnit({ value, label }) {
  return (
    <div className="flex min-w-13 flex-col items-center sm:min-w-16">
      <span className="display text-[2rem] leading-none text-warmwhite sm:text-4xl md:text-5xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1.5 text-[0.55rem] uppercase tracking-[0.2em] text-warmwhite/70 sm:text-[0.6rem] sm:tracking-[0.25em]">
        {label}
      </span>
    </div>
  )
}

export function Hero() {
  const t = useCountdown(event.countdownTargetISO)

  const fade = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* Floral backdrop — white orchids over champagne */}
      <img
        src="/images/hero-orchids.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      {/* Tint for legibility — warm darkening behind the centred text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(85% 65% at 50% 48%, rgba(46,46,46,0.62) 0%, rgba(46,46,46,0.42) 45%, rgba(46,46,46,0.18) 78%, rgba(46,46,46,0.10) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(46,46,46,0.30) 0%, rgba(46,46,46,0.05) 30%, rgba(46,46,46,0.05) 60%, rgba(46,46,46,0.45) 100%)',
        }}
      />

      <div className="container relative z-10 flex flex-col items-center px-6 text-center text-warmwhite">
        <motion.p
          {...fade}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="script text-lg italic tracking-wide text-warmwhite/90"
        >
          Together with their families
        </motion.p>

        <motion.h1
          {...fade}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-4 text-5xl leading-none sm:text-6xl md:text-8xl"
          style={{ color: '#fffdfc' }}
        >
          {couple.groom}
          <span className="script mx-3 align-middle text-3xl italic text-[var(--color-gold)] sm:text-4xl md:text-6xl">
            &amp;
          </span>
          {couple.bride}
        </motion.h1>

        <motion.div
          {...fade}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          <span className="eyebrow text-warmwhite/90">{couple.hashtag}</span>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="gold-rule mt-6 w-full max-w-xs"
        >
          <span className="script text-xl tracking-[0.2em] text-warmwhite">
            {event.dateLabel}
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          {...fade}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-end justify-center gap-1.5 sm:gap-5"
        >
          <CountUnit value={t.days} label="Days" />
          <span className="display pb-5 text-lg text-gold sm:pb-6 sm:text-2xl">
            :
          </span>
          <CountUnit value={t.hours} label="Hours" />
          <span className="display pb-5 text-lg text-gold sm:pb-6 sm:text-2xl">
            :
          </span>
          <CountUnit value={t.minutes} label="Minutes" />
          <span className="display pb-5 text-lg text-gold sm:pb-6 sm:text-2xl">
            :
          </span>
          <CountUnit value={t.seconds} label="Seconds" />
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:gap-4"
        >
          <a
            href="#details"
            className="btn-gold btn-gold--light w-full sm:w-auto"
          >
            View Details
          </a>
          <a href="#rsvp" className="btn-gold btn-gold--solid w-full sm:w-auto">
            RSVP
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="block h-9 w-px bg-warmwhite/60" />
      </motion.div>
    </section>
  )
}
