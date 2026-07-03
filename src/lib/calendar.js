import { event, ceremony, couple } from '../content'

/** Google Maps directions/search link for the venue. */
export function mapsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.mapsQuery,
  )}`
}

/** Format a Date as an iCalendar UTC stamp: YYYYMMDDTHHMMSSZ */
function toICSStamp(d) {
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')
}

/**
 * Build an .ics file body for the ceremony and trigger a download.
 * Start = countdown target (ceremony), end = +5h (covers reception).
 */
export function downloadICS() {
  const start = new Date(event.countdownTargetISO)
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000)

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AnnieOfHisHeart//Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@annieofhisheart`,
    `DTSTAMP:${toICSStamp(new Date())}`,
    `DTSTART:${toICSStamp(start)}`,
    `DTEND:${toICSStamp(end)}`,
    `SUMMARY:${couple.groom} & ${couple.bride} — Wedding`,
    `LOCATION:${event.venueName}`,
    `DESCRIPTION:Celebrate the wedding of ${couple.groom} & ${couple.bride}. ${couple.hashtag}`,
    `URL:${ceremony.venue}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  const blob = new Blob([lines.join('\r\n')], {
    type: 'text/calendar;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'james-and-annie-wedding.ics'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
