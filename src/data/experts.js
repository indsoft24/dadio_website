// Image filenames as in project root / public folder. Use encodeURIComponent when building URL.
export const expertImages = [
  { name: 'Dr. Mike, 29', tagline: 'Loves saving lives & hiking', file: 'doctor.png' },
  { name: 'Sarah, 27', tagline: 'Legal buff, dog mom', file: 'lawyer.png' },
  { name: 'Emma, 25', tagline: 'Great listener, loves coffee', file: 'therapist.png' },
  { name: 'James, 31', tagline: 'Tech guy, weekend adventurer', file: 'mentor.png' },
  { name: 'David, 34', tagline: 'Entrepreneur & foodie', file: 'business_coach.png' },
  { name: 'Chloe, 24', tagline: 'Vegan, fitness enthusiast', file: 'nutritionist.png' },
  { name: 'Priya, 28', tagline: 'Star gazer, spiritual soul', file: 'astrologer.png' },
  { name: 'Chris, 26', tagline: 'Gym rat, always active', file: 'trainer.png' },
  { name: 'Anna, 29', tagline: 'Ambitious, loves traveling', file: 'career_counselor.png' },
  { name: 'Mark, 33', tagline: 'Finance geek, wine lover', file: 'financial_advisor.png' },
  { name: 'Lily, 23', tagline: 'Yoga teacher, zen mind', file: 'yoga_instructor.png' },
  { name: 'Alex, 28', tagline: 'Software dev, gamer', file: 'tech_mentor.png' },
  { name: 'Sophia, 26', tagline: 'Creative, social butterfly', file: 'marketing_expert.png' },
  { name: 'Daniel, 30', tagline: 'Family-oriented, romantic', file: 'relationship_coach.png' },
  { name: 'Mia, 27', tagline: 'Wanderlust, photographer', file: 'travel_expert.png' },
  { name: 'Olivia, 29', tagline: 'Design lover, cozy nights', file: 'interior_designer.png' },
]

export function expertImageUrl(fileName) {
  if (!fileName) return ''
  return '/images/' + encodeURIComponent(fileName)
}

export const heroWallpaper = 'dadio_hero.png'
