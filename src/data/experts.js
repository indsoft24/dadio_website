// Image filenames as in project root / public folder. Use encodeURIComponent when building URL.
export const expertImages = [
  { name: 'Rahul, 29', tagline: 'Tech guy, weekend hiker', file: 'doctor.png' },
  { name: 'Priya, 26', tagline: 'Loves coffee & books', file: 'lawyer.png' },
  { name: 'Amit, 28', tagline: 'Gym rat, dog dad', file: 'therapist.png' },
  { name: 'Sneha, 25', tagline: 'Foodie, spontaneous', file: 'mentor.png' },
  { name: 'Vikram, 31', tagline: 'Entrepreneur, traveler', file: 'business_coach.png' },
  { name: 'Anjali, 24', tagline: 'Artist, plant mom', file: 'nutritionist.png' },
  { name: 'Rohan, 27', tagline: 'Music producer, chill', file: 'astrologer.png' },
  { name: 'Kavita, 29', tagline: 'Photographer, sunset lover', file: 'trainer.png' }
]

export function expertImageUrl(fileName) {
  if (!fileName) return ''
  return '/images/' + encodeURIComponent(fileName)
}

export const heroWallpaper = 'dadio_app_hero.png'
