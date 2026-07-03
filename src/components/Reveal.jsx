import { motion, useReducedMotion } from 'framer-motion'

/**
 * Gentle fade + rise as the element scrolls into view.
 * Respects prefers-reduced-motion (renders immediately, no transform).
 *
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {number} [props.delay]   Delay in seconds before the reveal begins.
 * @param {number} [props.y]       Vertical offset to rise from, in px.
 * @param {string} [props.className]
 * @param {'div'|'section'|'li'|'span'} [props.as]
 */
export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
