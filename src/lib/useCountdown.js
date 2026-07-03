import { useEffect, useState } from 'react'

/**
 * @typedef {object} TimeLeft
 * @property {number} days
 * @property {number} hours
 * @property {number} minutes
 * @property {number} seconds
 * @property {boolean} done
 */

/** @param {number} targetMs @returns {TimeLeft} */
function diff(targetMs) {
  const total = Math.max(0, targetMs - Date.now())
  const seconds = Math.floor(total / 1000) % 60
  const minutes = Math.floor(total / (1000 * 60)) % 60
  const hours = Math.floor(total / (1000 * 60 * 60)) % 24
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  return { days, hours, minutes, seconds, done: total === 0 }
}

/**
 * Live countdown to an ISO target, ticking every second.
 * @param {string} targetISO
 * @returns {TimeLeft}
 */
export function useCountdown(targetISO) {
  const targetMs = new Date(targetISO).getTime()
  const [left, setLeft] = useState(() => diff(targetMs))

  useEffect(() => {
    const id = setInterval(() => setLeft(diff(targetMs)), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  return left
}
