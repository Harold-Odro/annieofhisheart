/**
 * ============================================================
 * James & Annie — Wedding content
 * ------------------------------------------------------------
 * Single source of truth for editable copy & details.
 * Swap placeholders (marked TODO) with real values before launch.
 * ============================================================
 */

export const couple = {
  groom: 'James',
  bride: 'Dr. Annie',
  hashtag: '#AnnieOfHisHeart',
  website: 'https://annieofhisheart.com',
}

/**
 * Wedding date & times.
 * NOTE: times below are PLACEHOLDERS — replace with the real
 * ceremony / reception times. Format is local 24h ISO.
 * Timezone: Africa/Accra (GMT, no DST).
 */
export const event = {
  dateLabel: '24 October 2026',
  dateISO: '2026-10-24',
  // Confirmed from the printed invitation
  ceremonyTime: '14:00', // 2:00 PM
  receptionTime: '17:30', // 5:30 PM
  // Countdown target = ceremony start, Accra time (GMT+0)
  countdownTargetISO: '2026-10-24T14:00:00+00:00',
  venueName: 'Anita Hotel',
  venueCity: 'Ejisu, Kumasi, Ghana',
  // Google Maps search link (works without coordinates)
  mapsQuery: 'Anita Hotel, Ejisu, Kumasi, Ghana',
}

export const story = {
  eyebrow: 'How It Began',
  title: 'Our Story',
  // TODO: replace with the couple's real story
  paragraphs: [
    'What began as a chance meeting soon became the beginning of a lifetime. Between shared laughter and quiet conversations, two hearts found in one another a sense of home.',
    'Through every season — the ordinary days and the extraordinary ones — their love grew steady and sure, built on faith, friendship, and an unwavering devotion to each other.',
    'And so, surrounded by the people they love most, James and Dr. Annie will begin their happily ever after. She is, and will always be, the Annie of his heart.',
  ],
  quote: 'She is the Annie of his heart.',
}

export const ceremony = {
  title: 'Wedding Ceremony',
  time: '2:00 PM',
  venue: 'Anita Hotel — Garden, Ejisu, Kumasi',
  note: 'A garden wedding ceremony.',
}

export const reception = {
  title: 'Reception Party',
  time: '5:30 PM',
  venue: 'Anita Hotel, Ejisu, Kumasi',
  note: 'Dinner, toasts & dancing to follow.',
}

export const programme = [
  'Arrival of Guests',
  'Opening Prayer',
  'Arrival of Groom & Groomsmen',
  'Scripture Reading',
  'Bridal Procession',
  'Solo / Song Ministration',
  'Blessing & Exchange of Vows',
  'Song Ministration',
  'Word of Exhortation',
  'Signing of Marriage Certificate',
  'Introduction of Married Couple',
  'Closing Prayer',
  'Benediction',
]

export const dressCode = {
  theme: 'Elegant • Black Tie • Rich Aunty',
  allowed: ['Elegant formal wear', 'Black tie', 'Luxury evening attire'],
  notAllowed: ['Traditional outfits', 'Neon colours'],
}

export const paletteSwatches = [
  { name: 'Black', hex: '#1a1a1a' },
  { name: 'Champagne', hex: '#e9ddcc' },
  { name: 'Gold', hex: '#c8a45d' },
  { name: 'Emerald', hex: '#3d5945' },
  { name: 'Burgundy', hex: '#6f263d' },
  { name: 'Nude', hex: '#dcc9b6' },
  { name: 'Taupe', hex: '#b7a79a' },
]

export const menu = [
  {
    section: 'Starters',
    items: [
      'Small Chops',
      'Octopus',
      'Prawns',
      'Fish Fillet',
      'Chicken Wings',
      'Samosa',
      'Spring Rolls',
      'Yam Balls',
    ],
  },
  {
    section: 'Main Course',
    items: [
      'Assorted Fried Rice',
      'Jollof Rice',
      'Assorted Noodles',
      'Chicken Sauce',
      'Beef Sauce',
      'Grilled Chicken',
      'Fish',
    ],
  },
  {
    section: 'Salads',
    items: ['Ghanaian Salad', 'Potato Salad'],
  },
  {
    section: 'Grill Station',
    items: ['Chicken Kebab', 'Sausage Kebab', 'Goat Kebab'],
    note: 'Served with Green Chilli Sauce & Shito',
  },
  {
    section: 'Desserts',
    items: [
      'Biscoff Cheesecake Shooter',
      'Strawberry Cheesecake Shooter',
      'Lemon Cheesecake Shooter',
      'Oreo Cheesecake Shooter',
      'Greek Yoghurt with Exotic Fruits',
      'Cupcakes',
    ],
  },
]

export const registry = {
  message:
    'Your presence is the greatest gift of all. However, should you wish to bless us further, gift details are provided below.',
  // TODO: replace placeholders with real details before launch
  mobileMoney: {
    label: 'Mobile Money',
    value: 'XXX XXX XXXX', // TODO
    name: 'Account Name', // TODO
  },
  bank: {
    label: 'Bank Transfer',
    bankName: 'Bank Name', // TODO
    accountName: 'Account Name', // TODO
    accountNumber: 'XXXX XXXX XXXX', // TODO
  },
  registryLink: '', // TODO: optional external registry URL
}

export const rsvp = {
  contactName: 'Bernice',
  contactPhone: '054 319 0650',
  deadline: '10 October 2026',
  adultsOnly:
    'We respectfully request that this be an adults-only celebration.',
}

export const footer = {
  message: 'We can’t wait to celebrate with you.',
}
